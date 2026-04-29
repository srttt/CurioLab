import { BiText } from "@/components/BilingualText";

export default function DimensionScoreBar({
  description,
  label,
  score
}: {
  description?: string;
  label: string;
  score: number;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-black">
            <BiText text={label} />
          </h3>
          {description && (
            <p className="mt-1 text-sm leading-6 text-ink/58">
              <BiText text={description} />
            </p>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-sm font-black text-white">{score} / 100</span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-mist">
        <div className="h-full rounded-full bg-coral transition-all" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}
