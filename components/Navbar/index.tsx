import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../lib'
import Link from './NoScrollLink'

const links: { name: string; href: string }[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Work',
        href: '/Work',
    },
    {
        name: 'Loving',
        href: '/Loving',
    },
]

export const Navbar = (): JSX.Element => {
    const router = useRouter()

    return (
        <nav className="text-white bg-black py-5 px-10 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
                <div>Logo</div>
                <div className="md:hidden align-middle">
                    <i className="material-icons align-middle cursor-pointer">menu</i>
                </div>
            </div>
            <div className="flex items-center justify-between text-left md:block md:text-right mt-3 md:mt-0">
                {links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <a className="mt-3 md:mx-3">
                            {name}
                            {isActiveLink(href, router.pathname) && (
                                <motion.div
                                    layoutId="navigation-underline"
                                    className="navigation-underline"
                                    animate
                                />
                            )}
                        </a>
                    </Link>
                ))}
            </div>

        </nav>
    )
}

<div className="text-white bg-gray-900 py-5 px-10 md:flex md:items-center md:justify-between ">
    <div className="flex items-center justify-between">
        <div>Logo</div>
        <div className="md:hidden align-middle">
            <i className="material-icons align-middle cursor-pointer">menu</i>
        </div>
    </div>
    <div className="flex flex-col text-left md:block md:text-right  md:mt-0">
        <a href="#" className=" md:mx-3">Link 1</a>
        <a href="#" className=" md:mx-3">Link 2</a>
        <a href="#" className=" md:mx-3">Link 3</a>
        <a href="#" className=" md:mx-3">Link 4</a>

    </div>
</div>