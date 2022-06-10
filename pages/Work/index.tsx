import fs from 'fs';
import Layout from '../../components/Layout'
import matter from 'gray-matter';
import { GetStaticProps, } from 'next'
import { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let res = window.matchMedia("only screen and (max-width: 760px)").matches;
        setIsMobile(res)
    }, [isMobile])

    return (
        <Layout title="Work" description="I am a software engineer with a passion for building software that improves the world.">
            <div className="flex flex-col md:flex-row">
                <div className="md:avatar md:basis-1/2 m-10 order-first self-center ">
                    <img width={isMobile ? "200px" : "300px"} height={isMobile ? "200px" : "300px"} className="rounded-lg object-cover" className={isMobile ? "h-[200] w-[200]" : "h-[300] w-[350]"} src="https://avatars.githubusercontent.com/u/29403644?s=200&v=4" alt="" />
                </div>
                <div className="md:container md:basis-1/2 md:self-center">
                    <p className="text-center  text-4xl md:text-5xl md:leading-[55px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                        I'm currently working in <a className="bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]" href={frontmatter.companyWebsite}>{frontmatter.companyName}</a> as <br></br> {frontmatter.role}
                    </p>
                    <br />
                    <div className="grid grid-cols-2 text-center font-light">
                        <div className="div">
                            <p className='my-2'>Start Date</p>
                            {date(frontmatter.startDate)}
                        </div>
                        <div className="div">
                            <p className='my-2'>Main Technologies</p>
                            {technologies(frontmatter.mainTecnologies)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout >

    )
}

export default Work