import { GetStaticProps, NextPage, } from 'next'
import { InferGetStaticPropsType } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import avatar from '../public/avatar.png'
import Layout from '../components/Layout';
import { HeroWithImage } from '../components/Hero/HeroWithImage';
import { SectionPill, SectionPillProps } from '../components/Pill/SectionPill';
import { Github, Twitter, Linkedin } from '../components/Social';

type ProfileData = {
  data: {
    name: string,
    socials: Array<String>
  },
  content: string
}

export const getStaticProps: GetStaticProps = async () => {

  const readFile = fs.readFileSync(`content/profile/profile.md`, 'utf-8');
  const { data, content } = matter(readFile);

  const profile: ProfileData = {
    data: {
      name: data.name,
      socials: data.socials
    },
    content: content,
  }

  return {

    props: { profile }

  };
}


const sections: Array<SectionPillProps> = [
  {
    name: "Reach me on",
    pill: {
      textColor: "#83A7FC",
      bgColor: "#0f1117",
    },
    entries: [
      <Github key="github" url='https://github.com/luigibarbato' />,
      <Twitter key="twitter" url='https://twitter.com/luigibarbato_' />,
      <Linkedin key="linkedin" url='https://linkedin.com/in/luigibarbato' />
    ],
  },
]

const Home: NextPage = ({ profile, settings, isMobile }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
      <HeroWithImage isMobile={isMobile} image={avatar.src} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} content={profile.content}>
        <SectionPill sections={sections} />
      </HeroWithImage>
    </Layout>
  )
}

export default Home