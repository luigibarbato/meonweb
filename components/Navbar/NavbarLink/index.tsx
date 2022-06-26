import { motion } from 'framer-motion'
import { GradientBackground, GradientText } from '../../../lib/Gradient';
import NoScrollLink from './NoScrollLink'
import { NavLink } from './Types/Link'

// TODO: This folder should to have a serious refactor (maybe not now)

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
                <GradientText primaryColor={props.link.colors[0]} secondaryColor={props.link.colors[1]} direction='right'>
                    <motion.a
                        href={props.link.url}
                        className="mr-6 sm:mr-8 mt-5 md:mt-0 flex flex-col relative text-4xl tablet:text-5xl md:text-2xl font-bold"
                        variants={variants}
                        animate="enter"
                        initial="initial"
                    >
                        {props.link.name}
                        <GradientBackground primaryColor={props.link.colors[0]} secondaryColor={props.link.colors[1]} withTransparency={0.1} direction="left">
                            <motion.div
                                layoutId="navigation-underline"
                                className="h-1 w-full"
                                animate
                            />
                        </GradientBackground>
                    </motion.a>
                </GradientText>
            </NoScrollLink >
        )
    }

    return (
        <NoScrollLink href={props.link.url} scroll={false}>
            <motion.a
                href={props.link.url}
                className="mr-6 mt-5 md:mt-0 sm:mr-8 flex flex-col relative text-4xl tablet:text-5xl md:text-2xl font-bold"
                variants={variants}
                animate="exit"
                initial="initial"
            >
                {props.link.name}
            </motion.a>
        </NoScrollLink >
    )
}