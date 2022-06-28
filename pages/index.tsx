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




const Home: NextPage = ({ profile, settings, isMobile }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
      <HeroWithImage isMobile={isMobile} image={avatar.src} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} content={profile.content} />
    </Layout>
  )
}

export default Home