export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex justify-center rounded-lg bg-[#083f99] px-4 py-2 text-xs text-justify whitespace-nowrap font-medium text-white ring-1 ring-inset ring-blue-700/10">
      {skill}
    </span>
  );
}
