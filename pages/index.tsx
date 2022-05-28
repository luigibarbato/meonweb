import { Carousel } from '../components/Carousel/carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { NextPage } from 'next'
import { Profile } from './Profile'
import { Work } from './Work'
import { Loving } from './Loving'
import { Tools } from '../components/Tools'
import { Navbar } from '../components/Navbar'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title='Home' description='Homepage'>
        <Profile></Profile>
      </Layout>
    </>
  )
}

export default Home