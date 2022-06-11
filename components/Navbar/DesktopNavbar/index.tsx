import styles from "./Nav.module.css"
import { Sections } from "../../Config";
import React, { useState } from "react";
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../../lib'
import Link from '../NoScrollLink'
import { Links } from "../Types/Link";
import styled from 'styled-components'

export function DesktopNavbar(links: Links) {
    const router = useRouter()
    return (
        <AnimateSharedLayout>
            <nav className="mt-10">
                <ul className="float-right p-2 mx-24 inline-flex">
                    {links.links.map((item) => (
                        <li className="mx-5">
                            <Link key={item.name} href={item.url}>
                                <a
                                    href={item.url}
                                    className={isActiveLink(item.url, router.pathname) ? `mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[${item.colors[0]}] to-[${item.colors[1]}]` : "mr-6 sm:mr-8 flex flex-col relative text-2xl font-bold"}
                                >
                                    {item.name}
                                    {isActiveLink(item.url, router.pathname) && (
                                        <motion.div
                                            layoutId="navigation-underline"
                                            className="navigation-underline"
                                            animate
                                        />
                                    )}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav >
        </AnimateSharedLayout >
    )
}