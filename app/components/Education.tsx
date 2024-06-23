export default function Education() {
  const education = [
    {
      school: "Georgia Institute of Technology",
      duration: "Est. Graduation Date: Aug 2026",
      degree: "Master of Science in Computer Science",
    },
    {
      school: "University of British Columbia",
      duration: "Sep 2017 - May 2022",
      degree: "Bachelor of Science in Computer Science with Distinction",
    },
  ];

  return (
    <>
      {education.map((edu) => (
        <div className="my-2" key={edu.school}>
          <h4 className="font-medium text-base dark:text-light">{edu.school}</h4>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {edu.duration}
          </header>
          <ul className="list-disc mt-2 text-sm leading-normal text-gray-700 dark:text-dark">
            {edu.degree}
          </ul>
        </div>
      ))}
    </>
  );
}
