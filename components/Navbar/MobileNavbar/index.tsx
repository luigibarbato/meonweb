import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Links } from "../NavbarLink/Types/Link";
import { useRouter } from "next/router";
import { NavbarLink } from "../NavbarLink";

const menuVariants = {
    open: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


const navigationOpenVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1, }
    }
};

const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

interface Props {
    links: Links
}

export const MobileNavbar = (props: Props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const router = useRouter()
    console.log(isOpen)
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
            className="mobile-navbar flex w-screen"
        >
            <motion.div
                className="background  bg-white min-h-screen w-screen flex"
                variants={menuVariants}
            >
            </motion.div>
            <button className="hamburger-button" onClick={() => toggleOpen()}>
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
            <motion.ul variants={navigationOpenVariants} className={isOpen ? `self-center mx-auto text-center z-50` : `mobile-navbar-list absolute z-0`} >
                {
                    props.links.map((link) => (
                        <motion.li
                            variants={menuItemVariants}
                            className={isOpen ? `mobile-navbar-item-list` : `mobile-navbar-item-list z-0`}
                        >
                            <NavbarLink link={link} actualPathName={router.pathname} />
                        </motion.li>))
                }
            </motion.ul>
        </motion.nav >

    );
};
