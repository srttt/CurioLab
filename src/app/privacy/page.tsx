import { BiText } from "@/components/BilingualText";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-8 shadow-soft">
        <h1 className="text-4xl font-black">
          <BiText text="Privacy" />
        </h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-ink/72">
          <p>
            <BiText text="CurioLab does not provide medical or psychological diagnosis." />
          </p>
          <p>
            <BiText text="CurioLab Assessments and games are designed for learning, self-reflection, and entertainment." />
          </p>
          <p>
            <BiText text="Assessment answers are processed locally in the MVP version and are not used for medical or psychological diagnosis." />
          </p>
          <p>
            <BiText text="In the MVP version, CurioLab does not require accounts and does not store assessment results." />
          </p>
          <p>
            <BiText text="If analytics or saved results are added later, this page should be updated clearly." />
          </p>
        </div>
      </div>
    </div>
  );
}
