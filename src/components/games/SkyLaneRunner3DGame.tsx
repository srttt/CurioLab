"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BiInline, BiText } from "@/components/BilingualText";

type Phase = "idle" | "running" | "crashed";
type ObstacleType = "block" | "hurdle";

type Obstacle = {
  lane: number;
  mesh: THREE.Mesh;
  passed: boolean;
  type: ObstacleType;
};

type HudState = {
  distance: number;
  lane: number;
  speed: number;
};

const lanePositions = [-1.65, 0, 1.65];
const playerZ = -7.5;
const groundY = 0.45;
const playerHalf = 0.45;

function clampLane(lane: number) {
  return Math.max(0, Math.min(lanePositions.length - 1, lane));
}

function randomLane() {
  return Math.floor(Math.random() * lanePositions.length);
}

function obstacleTop(type: ObstacleType) {
  return type === "hurdle" ? 0.55 : 1.25;
}

export default function SkyLaneRunner3DGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const playerRef = useRef<THREE.Mesh | null>(null);
  const obstaclesRef = useRef<Obstacle[]>([]);
  const phaseRef = useRef<Phase>("idle");
  const laneRef = useRef(1);
  const targetLaneRef = useRef(1);
  const playerYRef = useRef(groundY);
  const jumpVelocityRef = useRef(0);
  const distanceRef = useRef(0);
  const speedRef = useRef(7.2);
  const spawnInRef = useRef(1.1);
  const bestRef = useRef(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [hud, setHud] = useState<HudState>({ distance: 0, lane: 2, speed: 0 });
  const [best, setBest] = useState(0);

  const clearObstacles = useCallback(() => {
    const scene = sceneRef.current;
    if (scene) {
      obstaclesRef.current.forEach((obstacle) => scene.remove(obstacle.mesh));
    }
    obstaclesRef.current = [];
  }, []);

  const startRun = useCallback(() => {
    clearObstacles();
    laneRef.current = 1;
    targetLaneRef.current = 1;
    playerYRef.current = groundY;
    jumpVelocityRef.current = 0;
    distanceRef.current = 0;
    speedRef.current = 7.2;
    spawnInRef.current = 1.1;
    phaseRef.current = "running";
    setPhase("running");
    setHud({ distance: 0, lane: 2, speed: Math.round(speedRef.current) });
  }, [clearObstacles]);

  const moveLane = useCallback((direction: number) => {
    if (phaseRef.current === "idle" || phaseRef.current === "crashed") {
      startRun();
      return;
    }
    targetLaneRef.current = clampLane(targetLaneRef.current + direction);
  }, [startRun]);

  const jump = useCallback(() => {
    if (phaseRef.current === "idle" || phaseRef.current === "crashed") {
      startRun();
      return;
    }
    if (Math.abs(playerYRef.current - groundY) < 0.04) {
      jumpVelocityRef.current = 6.7;
    }
  }, [startRun]);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        moveLane(-1);
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        moveLane(1);
      }
      if (event.key === "ArrowUp" || event.key === " " || event.key.toLowerCase() === "w") {
        event.preventDefault();
        jump();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump, moveLane]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const activeCanvas = canvas;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: activeCanvas });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#172334", 18, 70);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 120);
    camera.position.set(0, 4.35, 8.5);
    camera.lookAt(0, 0.15, -8.5);

    const roadMaterial = new THREE.MeshStandardMaterial({ color: "#25344d", roughness: 0.72, metalness: 0.08 });
    const road = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.22, 100), roadMaterial);
    road.position.set(0, -0.12, -28);
    road.receiveShadow = true;
    scene.add(road);

    const edgeMaterial = new THREE.MeshBasicMaterial({ color: "#d8f5ff", opacity: 0.42, transparent: true });
    const edgeGeometry = new THREE.BoxGeometry(0.06, 0.05, 100);
    [-2.72, 2.72].forEach((x) => {
      const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      edge.position.set(x, 0.04, -28);
      scene.add(edge);
    });

    const laneMarkerMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff", opacity: 0.26, transparent: true });
    const laneMarkers: THREE.Mesh[] = [];
    for (let i = 0; i < 26; i += 1) {
      [-0.82, 0.82].forEach((x) => {
        const marker = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.025, 1.2), laneMarkerMaterial);
        marker.position.set(x, 0.03, playerZ + 12 - i * 3.3);
        scene.add(marker);
        laneMarkers.push(marker);
      });
    }

    const playerMaterial = new THREE.MeshStandardMaterial({
      color: "#72e0b0",
      emissive: "#1e8f6a",
      emissiveIntensity: 0.28,
      roughness: 0.32,
      metalness: 0.12
    });
    const player = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), playerMaterial);
    player.position.set(lanePositions[laneRef.current], groundY, playerZ);
    player.castShadow = true;
    scene.add(player);
    playerRef.current = player;

    const blockGeometry = new THREE.BoxGeometry(1.08, 1.25, 0.9);
    const hurdleGeometry = new THREE.BoxGeometry(1.1, 0.55, 0.9);
    const blockMaterial = new THREE.MeshStandardMaterial({
      color: "#ff7a70",
      emissive: "#8d241f",
      emissiveIntensity: 0.18,
      roughness: 0.42
    });
    const hurdleMaterial = new THREE.MeshStandardMaterial({
      color: "#f5cf65",
      emissive: "#8a6916",
      emissiveIntensity: 0.16,
      roughness: 0.4
    });

    scene.add(new THREE.HemisphereLight("#e9fbff", "#142033", 2.2));
    const keyLight = new THREE.DirectionalLight("#ffffff", 4.2);
    keyLight.position.set(4, 7, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight("#7f8cff", 28, 22);
    rimLight.position.set(-4, 3, 2);
    scene.add(rimLight);

    function spawnObstacle() {
      const type: ObstacleType = Math.random() > 0.62 ? "hurdle" : "block";
      const mesh = new THREE.Mesh(type === "hurdle" ? hurdleGeometry : blockGeometry, type === "hurdle" ? hurdleMaterial : blockMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(lanePositions[randomLane()], obstacleTop(type) / 2, playerZ - 48);
      scene.add(mesh);
      obstaclesRef.current.push({ lane: lanePositions.indexOf(mesh.position.x), mesh, passed: false, type });
    }

    let animationId = 0;
    let lastTime = performance.now();
    let lastHudAt = 0;

    function resize() {
      const width = activeCanvas.clientWidth;
      const height = activeCanvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    function crash() {
      phaseRef.current = "crashed";
      setPhase("crashed");
      const distance = Math.floor(distanceRef.current);
      if (distance > bestRef.current) {
        bestRef.current = distance;
        setBest(distance);
      }
      setHud({ distance, lane: targetLaneRef.current + 1, speed: Math.round(speedRef.current) });
    }

    function animate(now: number) {
      const delta = Math.min((now - lastTime) / 1000, 0.035);
      lastTime = now;

      if (phaseRef.current === "running") {
        speedRef.current = Math.min(17, speedRef.current + delta * 0.08);
        distanceRef.current += speedRef.current * delta;

        laneRef.current += (targetLaneRef.current - laneRef.current) * Math.min(delta * 10, 1);
        const targetX = lanePositions[targetLaneRef.current];
        player.position.x += (targetX - player.position.x) * Math.min(delta * 12, 1);

        jumpVelocityRef.current -= 16 * delta;
        playerYRef.current += jumpVelocityRef.current * delta;
        if (playerYRef.current <= groundY) {
          playerYRef.current = groundY;
          jumpVelocityRef.current = 0;
        }
        player.position.y = playerYRef.current;
        player.rotation.z = (player.position.x - targetX) * -0.24;
        player.rotation.x += delta * 2.6;

        laneMarkers.forEach((marker) => {
          marker.position.z += speedRef.current * delta;
          if (marker.position.z > playerZ + 12) marker.position.z -= 86;
        });

        spawnInRef.current -= delta;
        if (spawnInRef.current <= 0) {
          spawnObstacle();
          spawnInRef.current = Math.max(0.72, 1.28 - speedRef.current * 0.025 + Math.random() * 0.36);
        }

        const nextObstacles: Obstacle[] = [];
        for (const obstacle of obstaclesRef.current) {
          obstacle.mesh.position.z += speedRef.current * delta;
          obstacle.mesh.rotation.y += delta * (obstacle.type === "hurdle" ? 1.2 : 0.65);

          const sameLane = Math.abs(obstacle.mesh.position.x - player.position.x) < 0.68;
          const zOverlap = Math.abs(obstacle.mesh.position.z - playerZ) < 0.78;
          const verticalOverlap = playerYRef.current - playerHalf < obstacleTop(obstacle.type);

          if (sameLane && zOverlap && verticalOverlap) {
            crash();
            nextObstacles.push(obstacle);
            continue;
          }

          if (!obstacle.passed && obstacle.mesh.position.z > playerZ + 0.9) {
            obstacle.passed = true;
          }

          if (obstacle.mesh.position.z < playerZ + 15) {
            nextObstacles.push(obstacle);
          } else {
            scene.remove(obstacle.mesh);
          }
        }
        obstaclesRef.current = nextObstacles;

        if (now - lastHudAt > 120) {
          lastHudAt = now;
          setHud({
            distance: Math.floor(distanceRef.current),
            lane: targetLaneRef.current + 1,
            speed: Math.round(speedRef.current)
          });
        }
      } else {
        player.rotation.y += delta * 0.7;
        laneMarkers.forEach((marker) => {
          marker.position.z += delta * 1.4;
          if (marker.position.z > playerZ + 12) marker.position.z -= 86;
        });
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animationId = requestAnimationFrame(animate);
    const observer = new ResizeObserver(resize);
    observer.observe(activeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      clearObstacles();
      sceneRef.current = null;
      playerRef.current = null;
      road.geometry.dispose();
      roadMaterial.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      laneMarkers.forEach((marker) => marker.geometry.dispose());
      laneMarkerMaterial.dispose();
      player.geometry.dispose();
      playerMaterial.dispose();
      blockGeometry.dispose();
      hurdleGeometry.dispose();
      blockMaterial.dispose();
      hurdleMaterial.dispose();
      renderer.dispose();
    };
  }, [clearObstacles]);

  return (
    <section className="w-full max-w-full overflow-hidden rounded-[2rem] border border-ink/10 bg-white/78 p-5 shadow-soft sm:p-6">
      <div className="relative min-h-[420px] w-full max-w-full overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink text-white sm:min-h-[520px]">
        <canvas className="absolute inset-0 h-full w-full" ref={canvasRef} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.16),rgba(15,23,42,0.46)),radial-gradient(circle_at_center,rgba(114,224,176,0.12),transparent_48%)]" />
        <div className="pointer-events-none absolute inset-x-3 top-4 grid grid-cols-3 gap-2 text-[0.65rem] font-bold sm:inset-x-4 sm:text-sm">
          <div className="min-w-0 rounded-2xl bg-white/12 px-2 py-2 backdrop-blur sm:px-3">
            <span className="block truncate">
              <BiInline text="Distance" />
            </span>
            <span className="mt-1 block text-lg sm:text-2xl">{hud.distance}m</span>
          </div>
          <div className="min-w-0 rounded-2xl bg-white/12 px-2 py-2 text-center backdrop-blur sm:px-3">
            <span className="block truncate">
              <BiInline text="Lane" />
            </span>
            <span className="mt-1 block text-lg sm:text-2xl">{hud.lane}</span>
          </div>
          <div className="min-w-0 rounded-2xl bg-white/12 px-2 py-2 text-right backdrop-blur sm:px-3">
            <span className="block truncate">
              <BiInline text="Speed" />
            </span>
            <span className="mt-1 block text-lg sm:text-2xl">{hud.speed}</span>
          </div>
        </div>

        {phase !== "running" && (
          <div className="absolute bottom-4 left-4 w-[12rem] rounded-[1.25rem] border border-white/16 bg-ink/68 p-3 backdrop-blur sm:w-[14rem] sm:p-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/58 sm:text-xs">
              <BiInline text={phase === "crashed" ? "Crashed" : "Run ready"} />
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-white/78">
              <BiText text="Floating lane challenge" />
            </p>
            <button className="focus-ring mt-3 rounded-full bg-white px-5 py-3 text-sm font-black text-ink" onClick={startRun} type="button">
              <BiInline text={phase === "crashed" ? "Restart Run" : "Start Run"} />
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <button className="focus-ring rounded-2xl bg-ink px-4 py-4 text-2xl font-black text-white" onClick={() => moveLane(-1)} type="button" aria-label="Lane left">
          ←
        </button>
        <button className="focus-ring rounded-2xl bg-ink px-4 py-4 text-2xl font-black text-white" onClick={jump} type="button" aria-label="Jump">
          ↑
        </button>
        <button className="focus-ring rounded-2xl bg-ink px-4 py-4 text-2xl font-black text-white" onClick={() => moveLane(1)} type="button" aria-label="Lane right">
          →
        </button>
      </div>

      <div className="mt-5 grid gap-3 text-sm font-bold sm:grid-cols-3">
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Distance" />
          <span className="mt-1 block text-2xl text-ink">{hud.distance}m</span>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Best" />
          <span className="mt-1 block text-2xl text-ink">{best}m</span>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Status" />
          <span className="mt-1 block text-2xl text-ink">
            <BiInline text={phase === "running" ? "Running" : phase === "crashed" ? "Crashed" : "Ready"} />
          </span>
        </div>
      </div>

      <p className="mt-5 leading-7 text-ink/68">
        <BiText text="Reaction, timing, and spatial attention can vary with fatigue, focus, device input, and practice." />
      </p>
    </section>
  );
}
