import avatar from '../../public/avatar.png'
import Image from 'next/image'

export const Work = () => {
    return (
        <div className="flex flex-row">
            <div className="avatar basis-1/2 self-center">
                <img width="350px" height="300px" className="object-cover h-[300] w-[350]" src="https://avatars.githubusercontent.com/u/29403644?s=200&v=4" alt="" />
            </div>
            <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF] basis-1/2 self-center">
                Actually, I'm working in SIGHUP as Kubernetes Engineer and Software Engineer main technologies like: Go, Docker, Kubernetes, DroneCI.
            </p>

        </div>
    )
}