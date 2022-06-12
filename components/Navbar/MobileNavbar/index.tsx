import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Links } from "../Types/Link";
import Link from "../NoScrollLink";
import { isActiveLink } from "../../../lib";
import { useRouter } from "next/router";
import MagicRainbowButton from "../../Rainbow";

const showVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
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

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);


export const MobileNavbar = (links: Links) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const router = useRouter()
    console.log(isOpen)
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
            className="mobile-navbar flex w-screen z-50"
        >
            {/* <motion.div className="background min-h-screen w-screen flex" variants={showVariants} /> */}
            <MagicRainbowButton></MagicRainbowButton>
            <button className="hamburger-button" onClick={() => toggleOpen()}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
            <motion.ul variants={navigationOpenVariants} className={isOpen ? `self-center mx-auto text-center z-50` : `mobile-navbar-list absolute z-0`} >
                {
                    links.links.map((link) => (
                        <motion.li
                            variants={menuItemVariants}
                            className={isOpen ? `mobile-navbar-item-list` : `mobile-navbar-item-list z-0`}
                        >
                            <Link key={link.name} href={link.url}>
                                <a
                                    href={link.url}
                                    className={isActiveLink(link.url, router.pathname) ? `text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[${link.colors[0]}] to-[${link.colors[1]}]` : "text-5xl font-bold"}
                                    onClick={() => toggleOpen()}
                                >
                                    {link.name}
                                    {isActiveLink(link.url, router.pathname) && (
                                        <motion.div
                                            animate
                                        />
                                    )}
                                </a>
                            </Link>
                        </motion.li>))
                }
            </motion.ul>
        </motion.nav >

    );
};
