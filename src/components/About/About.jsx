import { Section, SectionTitle, SectionText } from "../../styles/globals/components.jsx";
import { Span } from './AboutStyles.jsx'

function About() {

    return (
        <Section id="About">
            <SectionTitle $main>
                <Span $accent>Hey!</Span>
            </SectionTitle>
            <SectionTitle> I'm Lounès Amichi.</SectionTitle>
            <SectionText>I am a computer science student specializing in web and software development.</SectionText>
        </Section>
    );
}

export default About