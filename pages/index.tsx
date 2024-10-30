import { GetStaticProps, NextPage, } from 'next'
import { InferGetStaticPropsType } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import avatar from '../public/avatar.png'
import Layout from '../components/Layout';
import { HeroWithImage } from '../components/Hero/HeroWithImage';
import { SectionPill, SectionPillProps } from '../components/Pill/SectionPill';
import { SocialLink, SocialPlatform } from '../components/Social';

type ProfileData = {
  data: {
    name: string,
    socials: string[];
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
  const socialSections: Array<SectionPillProps> = [
    {
      name: "Reach me on",
      pill: {
        textColor: settings.colors[0],
        bgColor: settings.colors[2],
      },
      entries: Array.isArray(profile.data.socials) ? profile.data.socials
        .filter((social: string) => social.trim() !== '')
        .map((social: string) => {
          const [platform, username] = social.split(':');
          return <SocialLink key={platform} username={username} platform={platform as SocialPlatform} />;
        }) : [],
    }]

  return (
    <HeroWithImage isMobile={isMobile} image={avatar.src} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} content={profile.content}>
      <SectionPill sections={socialSections} />
    </HeroWithImage>
  )
}

export default Home
