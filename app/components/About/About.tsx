import SocialMedia from "./SocialMedia";
import Image from "next/image";
import { basePath } from "../../utils/basePath";

export default function About() {
  return (
    <section
      id="about"
      className="flex place-content-between mx-auto my-10 max-w-screen-lg px-10 mt-24"
    >
      <div className="aspect-square">
        <Image
          src={`${basePath}/portrait.webp`}
          width={30}
          height={30}
          alt="portrait"
          className="rounded-full select-none drag-none w-full max-w-64 min-w-12"
        />
      </div>
      <div className="flex flex-col justify-center w-full ml-6 md:ml-9">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl dark:text-light">
          Raymond Yeh
        </h2>
        <SocialMedia />
      </div>
    </section>
  );
}
