import avatar from '../../public/avatar.png'
import Image from 'next/image'

export const Profile = () => {
    return (
        <div className="flex flex-row">
            <div className="avatar basis-1/2 self-center">
                <Image width="350px" height="300px" layout="fixed" className="object-cover h-48 w-96" src={avatar} alt="" />
            </div>
            <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF] basis-1/2 self-center">
                {/* I am a software engineer with a passion for building software that improves the world. */}
                Camionista, Braciola Lover, Cocaine Addicted
            </p>
        </div>
    )
}

export default Profile