export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex justify-center rounded-lg bg-sky-500 px-4 py-1 text-xs text-justify  font-medium text-white ring-1 ring-inset ring-blue-700/10">
      {skill}
    </span>
  );
}
