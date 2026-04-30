"use client";

import { useId } from "react";
import { BiInline, BiText, getZh, useLanguage } from "@/components/BilingualText";
import type { DimensionScore } from "@/types/assessment";

function polarPoint(center: number, radius: number, index: number, total: number) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;

  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius
  };
}

function pointsFor(scores: DimensionScore[], center: number, radius: number) {
  return scores
    .map((score, index) => {
      const point = polarPoint(center, (score.score / 100) * radius, index, scores.length);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

function splitLabel(label: string, maxLength: number) {
  const words = label.split(" ");
  const lines: string[] = [];

  words.forEach((word) => {
    const lastLine = lines[lines.length - 1];
    if (!lastLine || `${lastLine} ${word}`.length > maxLength) {
      lines.push(word);
    } else {
      lines[lines.length - 1] = `${lastLine} ${word}`;
    }
  });

  return lines.slice(0, 3);
}

export default function ProfileRadarChart({
  badge = "0-100 profile",
  badgeZh,
  compact = false,
  description = "A dimension view of this profile.",
  descriptionZh,
  framed = true,
  scores,
  showLabels = true,
  title = "Profile Radar",
  titleZh
}: {
  badge?: string;
  badgeZh?: string;
  compact?: boolean;
  description?: string;
  descriptionZh?: string;
  framed?: boolean;
  scores: DimensionScore[];
  showLabels?: boolean;
  title?: string;
  titleZh?: string;
}) {
  const { mode } = useLanguage();
  const gradientId = useId().replace(/:/g, "");
  const center = 210;
  const radius = compact ? 92 : 104;
  const labelRadius = compact ? 140 : 158;
  const rings = [20, 40, 60, 80, 100];
  const polygonPoints = pointsFor(scores, center, radius);
  const wrapperClassName = framed
    ? "rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm"
    : "min-w-0";

  return (
    <section className={wrapperClassName}>
      {(title || description || badge) && (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {title && (
              <h3 className={compact ? "text-lg font-black" : "text-xl font-black"}>
                <BiText text={title} zh={titleZh} />
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm leading-6 text-ink/58">
                <BiText text={description} zh={descriptionZh} />
              </p>
            )}
          </div>
          {badge && (
            <span className="w-fit rounded-full bg-mist px-3 py-1 text-xs font-bold text-ink/58">
              <BiInline text={badge} zh={badgeZh} />
            </span>
          )}
        </div>
      )}

      <div className="mt-4 overflow-hidden rounded-[1.25rem] bg-mist/70">
        <svg aria-label="Profile radar chart" className="h-auto w-full" role="img" viewBox="0 0 420 390">
          <defs>
            <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#ff7a70" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#6fd8b5" stopOpacity="0.46" />
            </linearGradient>
          </defs>

          {rings.map((ring) => {
            const ringRadius = (ring / 100) * radius;
            const ringPoints = scores
              .map((_, index) => {
                const point = polarPoint(center, ringRadius, index, scores.length);
                return `${point.x},${point.y}`;
              })
              .join(" ");

            return (
              <polygon
                fill="none"
                key={ring}
                points={ringPoints}
                stroke="rgba(23,32,42,0.12)"
                strokeWidth="1"
              />
            );
          })}

          {scores.map((score, index) => {
            const outer = polarPoint(center, radius, index, scores.length);
            return (
              <line
                key={score.id}
                stroke="rgba(23,32,42,0.14)"
                strokeWidth="1"
                x1={center}
                x2={outer.x}
                y1={center}
                y2={outer.y}
              />
            );
          })}

          <polygon fill={`url(#${gradientId})`} points={polygonPoints} stroke="#ff7a70" strokeWidth="3" />

          {scores.map((score, index) => {
            const point = polarPoint(center, (score.score / 100) * radius, index, scores.length);
            return (
              <g key={score.id}>
                <circle cx={point.x} cy={point.y} fill="#17202a" r={compact ? "3.5" : "4"} />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={compact ? "7" : "8"}
                  stroke="rgba(255,122,112,0.35)"
                  strokeWidth="3"
                />
              </g>
            );
          })}

          {showLabels &&
            scores.map((score, index) => {
              const labelPoint = polarPoint(center, labelRadius, index, scores.length);
              const anchor =
                Math.abs(labelPoint.x - center) < 12 ? "middle" : labelPoint.x > center ? "start" : "end";
              const lines = splitLabel(score.label, compact ? 12 : 15);
              const zhLabel = getZh(score.label);

              return (
                <text
                  fill="#17202a"
                  fontSize={compact ? "10" : "11"}
                  fontWeight="800"
                  key={score.id}
                  textAnchor={anchor}
                  x={labelPoint.x}
                  y={labelPoint.y}
                >
                  {lines.map((line, lineIndex) => (
                    <tspan dy={lineIndex === 0 ? 0 : 13} key={line} x={labelPoint.x}>
                      {line}
                    </tspan>
                  ))}
                  {mode === "bilingual" && zhLabel && (
                    <tspan dy="13" fill="rgba(23,32,42,0.72)" fontSize="10" fontWeight="700" x={labelPoint.x}>
                      {zhLabel}
                    </tspan>
                  )}
                  <tspan dy="15" fill="rgba(23,32,42,0.58)" fontSize="10" fontWeight="700" x={labelPoint.x}>
                    {score.score}
                  </tspan>
                </text>
              );
            })}
        </svg>
      </div>
    </section>
  );
}
