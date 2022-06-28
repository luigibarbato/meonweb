import fs from 'fs';
import Layout from '../../components/Layout'
import matter from 'gray-matter';
import { GetStaticProps, NextPage, } from 'next'
import { InferGetStaticPropsType } from 'next';
import { HeroWithImage } from '../../components/Hero/HeroWithImage';
import { SectionPill, SectionPillProps } from '../../components/Pill/SectionPill';

export const getStaticProps: GetStaticProps = async () => {
    const readFile = fs.readFileSync(`content/work/sighup.md`, 'utf-8');

    const { data: frontmatter } = matter(readFile);

    return {

        props: { frontmatter }

    };
}

type WorkFrontmatter = {
    companyName: string,
    role: string,
    startDate: string,
    endDate?: string,
    mainTechnologies: string[],
}

const WorkExplain = (content: WorkFrontmatter): string => "I'm currently working in " + content.companyName + " as " + content.role;

const Work: NextPage = ({ frontmatter, settings, isMobile }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const sections: Array<SectionPillProps> = [
        {
            entries: [frontmatter.startDate],
            name: "Start Date",
            color: "#0f1117",
            pill: {
                textColor: settings.colors[0],
                bgColor: "#0f1117",
            },
        },
        {
            entries: frontmatter.mainTecnologies,
            name: "Main Technologies",
            color: "#0f1117",
            pill: {
                textColor: settings.colors[1],
                bgColor: "#0f1117",
            },
        },
    ]

    return (
        <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
            <HeroWithImage isMobile={isMobile} image={frontmatter.companyLogo} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} content={WorkExplain(frontmatter)}>
                <SectionPill sections={sections} />
            </HeroWithImage>
            <button
                type="button"
                onClick={() => {
                    throw new Error("Sentry Frontend Error");
                }}
            >
                Throw error
            </button>
        </Layout>
    )
}

export default Work