import avatar from '../../public/avatar.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export const Profile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let res = window.matchMedia("only screen and (max-width: 760px)").matches;
        setIsMobile(res)
    }, [isMobile])

    return (
        <div className="flex flex-col md:flex-row">
            <div className="m-10 avatar lg:basis-1/2 self-center">
                <Image width={isMobile ? "200px" : "300px"} height={isMobile ? "200px" : "350px"} layout="fixed" className="rounded-lg object-cover h-48 w-96" src={avatar} alt="" />
            </div>
            <p className="lg:basis-1/2 text-center text-4xl md:text-5xl m-3 md:m-0 md:mx-20 self-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                {/* I am a software engineer with a passion for building software that improves the world. */}
                Camionista, Braciola Lover, Cocaine Addicted
            </p>
        </div>
    )
}

export default Profile