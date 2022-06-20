import { motion } from 'framer-motion'
import GradientText from '../../../lib/GradientText';
import NoScrollLink from './NoScrollLink'
import { NavLink } from './Types/Link'

interface Props {
    link: NavLink
    actualPathName: string
}

const variants = {
    initial: { opacity: 0.6, transition: { duration: 0.8 } },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0.8, x: 0, y: 0, transition: { duration: 0.8 } },
}

const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}

export const NavbarLink = (props: Props) => {
    const isActive = isActiveLink(props.actualPathName, props.link.url)

    if (isActive) {
        return (
            <NoScrollLink href={props.link.url} scroll={false}>
                <GradientText primaryColor={props.link.colors[0]} secondaryColor={props.link.colors[1]}>
                    <motion.a
                        href={props.link.url}
                        className="mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold"
                        variants={variants}
                        animate="enter"
                        initial="initial"
                    >
                        {props.link.name}
                        <motion.div
                            layoutId="navigation-underline"
                            className="navigation-underline"
                            animate
                        />
                    </motion.a>
                </GradientText>
            </NoScrollLink >
        )
    }

    return (
        <NoScrollLink href={props.link.url} scroll={false}>
            <motion.a
                href={props.link.url}
                className="mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold"
                variants={variants}
                animate="exit"
                initial="initial"
            >
                {props.link.name}
            </motion.a>
        </NoScrollLink >
    )
}