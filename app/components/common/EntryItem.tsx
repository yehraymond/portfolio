import Image from "next/image";
import { basePath } from "../../utils/basePath";
export interface EntryItemProps {
  title: string;
  duration: string;
  descriptions: string[];
  technologies: string[];
  imageSrc?: string;
}

export default function EntryItem({
  title,
  duration,
  descriptions,
  technologies,
  imageSrc,
}: EntryItemProps) {
  return (
    <div className="my-6 flex flex-col md:flex-row-reverse md:justify-evenly">
      <div>
        <h4 className="font-medium text-base dark:text-light">{title}</h4>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {duration}
        </header>
        <ul className="list-disc pl-4 mt-2 text-sm leading-normal text-gray-700 dark:text-dark">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
        <ul className="mt-2 flex flex-wrap">
          {technologies.map((tech, index) => {
            return (
              <li
                key={index}
                className="rounded-full mt-1.5 mx-0.5 px-3 py-1 text-xs font-medium leading-5 text-slate-100 bg-blue-800 dark:bg-darkBtn dark:text-light"
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
      {imageSrc && (
        <div className="mr-7 max-w-64 min-w-12 mt-6 md:my-auto">
          <Image
            width={30}
            height={30}
            alt="project"
            src={basePath + imageSrc}
            className="rounded-lg select-none drag-none w-full shadow-lg border-4 dark:border-darkBtn"
          />
        </div>
      )}
    </div>
  );
}
