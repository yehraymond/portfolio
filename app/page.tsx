import About from "./components/About/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Section from "./components/common/Section";
import Education from "./components/Education";
import Nav from "./components/Navbar/Nav";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Nav />
        <About />
        <Section title="experience">
          <Experience />
        </Section>
        <Section title="project">
          <Project />
        </Section>
        <Section title="education">
          <Education />
        </Section>
      </main>
    </NextUIProvider>
  );
}
