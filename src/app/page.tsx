import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { LeadershipAchievements } from "@/components/leadership-achievements";
import { OpenSourceContributions } from "@/components/opensource-contributions";
import { Skills } from "@/components/skills";
import { Articles } from "@/components/articles";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <LeadershipAchievements />
            <OpenSourceContributions />
            <Skills />
            <Articles />
            <Contact />
            <Footer />
        </>
    );
}
