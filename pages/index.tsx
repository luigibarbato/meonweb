import { Carousel } from '../components/Carousel/carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { NextPage } from 'next'
import { Profile } from '../components/Profile'
import { Work } from '../components/Work'
import { Loving } from '../components/Loving'
import { Tools } from '../components/Tools'

const CarouselData = [
  {
    name: "Profile",
    element: <Profile />,
    mainColors: ['#A9E775', '#5A45FF'],
  },
  {
    name: "Work",
    element: <Work />,
    mainColors: ['#A9E775', '#5A45FF'],
  },
  {
    name: "Loving",
    element: <Loving />,
    mainColors: ['#A9E775', '#5A45FF'],
  },
  {
    name: "Tools",
    element: <Tools />,
    mainColors: ['#A9E775', '#5A45FF'],
  },
]

const Home: NextPage = () => {
  return (
    <>
      <section className="text-gray-600 min-h-screen body-font grid bg-black stepper">
        <Carousel
          data={CarouselData}
          autoPlay={false}
          rightItem={<FaArrowRight />}
          leftItem={<FaArrowLeft />}
          animationDuration={3000}
          headerTextType="black"
          subTextType="white"
          size="large"
        />
      </section>
    </>
  )
}

export default Home