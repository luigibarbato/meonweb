import { motion, useCycle, Variants } from "framer-motion";
import { Links } from "../NavbarLink/Types/Link";
import { useRouter } from "next/router";
import { NavbarLink } from "../NavbarLink";

const menuVariants: Variants = {
    open: {
        width: "100%",
        height: "100%",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        },
    },
    closed: {
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            when: "afterChildren",
        },
        transitionEnd: {
            width: 0,
            height: 0,
        }
    }
}

const dropMenuVariants: Variants = {
    open: {
        visibility: "visible",
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    closed: {
        opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        },
        transitionEnd: {
            visibility: "hidden"
        }
    }
};


const navigationOpenVariants: Variants = {
    open: {
        visibility: "visible",
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1, },
        transitionEnd: {
            visibility: "hidden"
        }
    }
};

const menuItemVariants: Variants = {
    open: {
        visibility: "visible",
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        },
        transitionEnd: {
            visibility: "hidden"
        }
    }
}

interface Props {
    links: Links
}

export const MobileNavbar = (props: Props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const router = useRouter()
    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className={isOpen ? "absolute top-0 left-0 bottom-0 flex w-screen" : "absolute top-0 left-0 bottom-0 flex w-screen z-50"}
        >
            <motion.div
                className="absolute top-0 left-0 bottom-0 bg-black backdrop-blur-xl bg-opacity-50 min-h-screen w-screen flex"
                variants={dropMenuVariants}
            >
            </motion.div>
            <button className="absolute translate-x-full translate-y-full" onClick={() => toggleOpen()}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
            <motion.ul variants={navigationOpenVariants} className={isOpen ? `mobile-navbar-list self-center m-auto text-center z-50` : `mobile-navbar-list self-center m-auto text-center z-0`} >
                {
                    props.links.map((link) => (
                        <motion.li
                            variants={menuItemVariants}
                            onClick={() => toggleOpen()}
                        >
                            <NavbarLink link={link} actualPathName={router.pathname} />
                        </motion.li>))
                }
            </motion.ul>
        </motion.nav >

    );
};
