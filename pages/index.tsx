import { NextPage } from 'next'
import avatar from '../public/avatar.png'
import Layout from '../components/Layout';
import { HeroWithImage } from '../components/Hero/HeroWithImage';

const Home: NextPage = ({ settings, isMobile }: any) => {
  return (
    <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
      <HeroWithImage isMobile={isMobile} image={avatar.src} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} content={`I am a software engineer with a passion for building software that improves the world.`} />
    </Layout>
  )
}

export default Home