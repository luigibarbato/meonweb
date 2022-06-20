import { NextPage } from 'next'
import avatar from '../public/avatar.png'
import Image from 'next/image'
import Layout from '../components/Layout';
import { GradientText } from '../lib/GradientText';

const Home: NextPage = ({ settings, isMobile }) => {
  return (
    <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="m-10 avatar self-center">
          <Image width={isMobile ? "200px" : "300px"} height={isMobile ? "200px" : "300px"} layout="fixed" className="rounded-lg object-cover h-48 w-96" src={avatar} alt="" />
        </div>
        <div className="md:container md:basis-1/2 md:self-center m-3 md:m-16 ">
          {/* <p className="text-center md:text-start text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
            I am a software engineer with a passion for building software that improves the world.
          </p> */}
          <GradientText primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]}>
            <p className="text-center md:text-start text-4xl md:text-5xl font-extrabold  ">
              I am a software engineer with a passion for building software that improves the world.
            </p>
          </GradientText>
        </div>
      </div>
    </Layout>
  )
}

export default Home