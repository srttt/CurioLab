"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { BiInline, BiText } from "@/components/BilingualText";

type Phase = "idle" | "waiting" | "ready" | "early" | "finished";

const totalRounds = 5;

function randomDelay() {
  return 1400 + Math.random() * 2800;
}

function phaseColor(phase: Phase) {
  if (phase === "ready") return new THREE.Color("#48d597");
  if (phase === "early") return new THREE.Color("#ff7a70");
  if (phase === "finished") return new THREE.Color("#f5cf65");
  return new THREE.Color("#7f8cff");
}

function phaseMessage(phase: Phase) {
  if (phase === "idle") return "Tap the orb when it glows";
  if (phase === "waiting") return "Wait for the orb to change";
  if (phase === "ready") return "Tap the orb now";
  if (phase === "early") return "Too soon";
  return "Result";
}

export default function ReactionOrb3DGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const readyAt = useRef(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState<number[]>([]);

  const average = useMemo(() => {
    if (!times.length) return 0;
    return Math.round(times.reduce((sum, time) => sum + time, 0) / times.length);
  }, [times]);

  const best = useMemo(() => (times.length ? Math.min(...times) : 0), [times]);
  const latest = times[times.length - 1] ?? 0;

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function cueNextRound(nextRound: number) {
    clearTimer();
    setPhase("waiting");
    setRound(nextRound);
    timerRef.current = setTimeout(() => {
      readyAt.current = performance.now();
      setPhase("ready");
    }, randomDelay());
  }

  function start() {
    setTimes([]);
    cueNextRound(1);
  }

  function activate() {
    if (phase === "idle" || phase === "finished") {
      start();
      return;
    }

    if (phase === "waiting") {
      clearTimer();
      setPhase("early");
      return;
    }

    if (phase === "early") {
      cueNextRound(round || 1);
      return;
    }

    if (phase === "ready") {
      const nextTimes = [...times, Math.round(performance.now() - readyAt.current)];
      setTimes(nextTimes);

      if (nextTimes.length >= totalRounds) {
        clearTimer();
        setPhase("finished");
        setRound(totalRounds);
        return;
      }

      cueNextRound(nextTimes.length + 1);
    }
  }

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const activeCanvas = canvas;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: activeCanvas });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.35, 6);

    const geometry = new THREE.SphereGeometry(1.25, 48, 48);
    const initialColor = phaseColor(phaseRef.current);
    const material = new THREE.MeshStandardMaterial({
      color: initialColor,
      emissive: initialColor,
      emissiveIntensity: 0.55,
      metalness: 0.18,
      roughness: 0.28
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const haloGeometry = new THREE.SphereGeometry(1.42, 48, 48);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: "#ffffff",
      opacity: 0.16,
      transparent: true
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    scene.add(halo);

    const ringGeometry = new THREE.TorusGeometry(1.82, 0.018, 12, 96);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff", opacity: 0.28, transparent: true });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    scene.add(new THREE.AmbientLight("#ffffff", 1.8));
    const keyLight = new THREE.PointLight("#ffffff", 28, 9);
    keyLight.position.set(2.5, 3, 4);
    scene.add(keyLight);
    const colorLight = new THREE.PointLight("#7f8cff", 18, 8);
    colorLight.position.set(-3, -1.5, 3);
    scene.add(colorLight);

    let frame = 0;
    let animationId = 0;

    function resize() {
      const width = activeCanvas.clientWidth;
      const height = activeCanvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    function render() {
      frame += 0.012;
      const currentPhase = phaseRef.current;
      const targetColor = phaseColor(currentPhase);
      material.color.lerp(targetColor, 0.08);
      material.emissive.lerp(targetColor, 0.08);
      material.emissiveIntensity = currentPhase === "ready" ? 1.25 + Math.sin(frame * 10) * 0.18 : 0.48;
      haloMaterial.opacity = currentPhase === "ready" ? 0.28 + Math.sin(frame * 8) * 0.08 : 0.13;
      ringMaterial.opacity = currentPhase === "waiting" ? 0.18 : 0.32;
      orb.rotation.y += 0.01;
      orb.rotation.x = Math.sin(frame) * 0.08;
      halo.scale.setScalar(1 + Math.sin(frame * 2) * 0.035);
      ring.rotation.z += currentPhase === "ready" ? 0.025 : 0.008;
      colorLight.color.lerp(targetColor, 0.06);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(render);
    }

    resize();
    render();
    const observer = new ResizeObserver(resize);
    observer.observe(activeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-5 shadow-soft sm:p-6">
      <div
        className="focus-ring relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink text-white sm:min-h-[420px]"
        onClick={activate}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <canvas className="absolute inset-0 h-full w-full" ref={canvasRef} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_46%),linear-gradient(135deg,rgba(127,140,255,0.22),rgba(72,213,151,0.08))]" />
        <div className="pointer-events-none absolute inset-x-4 top-4 flex flex-wrap items-start justify-between gap-3 text-xs font-bold sm:text-sm">
          <span className="max-w-full rounded-full bg-white/12 px-4 py-2 backdrop-blur">
            <BiInline text="Round" /> {Math.max(round, 1)} / {totalRounds}
          </span>
          <span className="max-w-[15rem] rounded-full bg-white/12 px-4 py-2 leading-snug backdrop-blur sm:max-w-full">
            <BiInline text="3D focus challenge" />
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-4 bottom-6 text-center sm:inset-x-6">
          <p className="mx-auto max-w-[15rem] text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-white/60 sm:max-w-xl sm:text-sm sm:tracking-[0.18em]">
            <BiInline text={phase === "ready" ? "Tap now" : phase === "early" ? "Too soon" : phase === "finished" ? "Result" : "Start when ready"} />
          </p>
          <h2 className="mx-auto mt-2 max-w-[15rem] text-2xl font-black leading-tight sm:max-w-xl sm:text-5xl">
            <BiText text={phaseMessage(phase)} zhClassName="mt-2 block text-sm font-semibold leading-relaxed text-white/64 sm:text-lg" />
          </h2>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm font-bold sm:grid-cols-3">
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Latest" />
          <span className="mt-1 block text-2xl text-ink">{latest ? `${latest}ms` : "--"}</span>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Average" />
          <span className="mt-1 block text-2xl text-ink">{average ? `${average}ms` : "--"}</span>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <BiInline text="Best" />
          <span className="mt-1 block text-2xl text-ink">{best ? `${best}ms` : "--"}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="focus-ring rounded-full bg-ink px-5 py-3 text-sm font-bold text-white" onClick={start} type="button">
          <BiInline text={phase === "finished" || times.length ? "Restart Game" : "Start Game"} />
        </button>
        {phase === "early" && (
          <p className="font-semibold text-coral">
            <BiInline text="Wait until the orb changes color." />
          </p>
        )}
      </div>

      <p className="mt-5 leading-7 text-ink/68">
        <BiText text="Reaction time can shift with attention, fatigue, anticipation, device input, and practice." />
      </p>
    </section>
  );
}
