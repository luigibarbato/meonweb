import styles from "./Nav.module.css"
import { Sections } from "../../Config";
import React, { useState } from "react";
import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../../lib'
import Link from '../NoScrollLink'
import { Links } from "../Types/Link";
import styled from 'styled-components'

const variants = {
    initial: { opacity: 0.7 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0.8, x: 0, y: 0, transition: { duration: 0.8 } },
}


export function DesktopNavbar(links: Links) {
    const router = useRouter()
    return (
        <nav className="mt-10 flex flex-row-reverse">
            <ul className="p-2 mx-20 inline-flex">
                {links.links.map((item) => (
                    <li className="mx-5">
                        <Link key={item.name} href={item.url}>
                            <motion.a
                                href={item.url}
                                className={isActiveLink(item.url, router.pathname) ? `mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[${item.colors[0]}] to-[${item.colors[1]}]` : "mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold"}
                                variants={variants}
                                animate={isActiveLink(item.url, router.pathname) ? "enter" : "initial"}
                                initial="initial"
                            >
                                {item.name}
                                {isActiveLink(item.url, router.pathname) && (
                                    <motion.div
                                        layoutId="navigation-underline"
                                        className="navigation-underline"
                                        animate
                                    />
                                )}
                            </motion.a>
                        </Link>
                    </li>
                ))}
            </ul>

        </nav >
    )
}