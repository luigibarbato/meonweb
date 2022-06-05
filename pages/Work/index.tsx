import fs from 'fs';
import Layout from '../../components/Layout'
import matter from 'gray-matter';
import { GetStaticProps, } from 'next'
import { InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    const readFile = fs.readFileSync(`content/work/sighup.md`, 'utf-8');

    const { data: frontmatter } = matter(readFile);

    return {

        props: { frontmatter }

    };
}

const technologies = (techs: string[]) => {
    return (
        techs.map((tech, i) => (
            <span key={i} className="inline-block bg-gradient-to-r from-black to-[#5A45FF] rounded-full px-3 py-1 text-sm font-semibold text-center text-black mr-2 mb-2">{tech}</span>
        )));
}

const date = (date: string) => {
    return (
        <span className="inline-block bg-gradient-to-r from-black to-[#A9E775] rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 text-center">{date}</span>
    )
}


export const Work = ({ frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title="Work" description="I am a software engineer with a passion for building software that improves the world.">
            <div className="flex flex-row">
                <div className="avatar basis-1/2 self-center">
                    <img width="350px" height="300px" className="object-cover h-[300] w-[350]" src="https://avatars.githubusercontent.com/u/29403644?s=200&v=4" alt="" />
                </div>
                <div className="container basis-1/2 self-center">
                    <p className="text-5xl leading-[55px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                        I'm currently working in <a className="bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]" href={frontmatter.companyWebsite}>{frontmatter.companyName}</a> as <br></br> {frontmatter.role}
                    </p>
                    <br />
                    <div className="grid grid-cols-2 font-light">
                        <div className="div">
                            <p className='m-2'>Start Date</p>
                            {date(frontmatter.startDate)}
                        </div>
                        <div className="div">
                            <p className='m-2'>Main Technologies</p>
                            {technologies(frontmatter.mainTecnologies)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Work