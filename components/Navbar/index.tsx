import styles from "./Nav.module.css"
import React, { useState } from "react";
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../lib'
import Link from './NoScrollLink'
import { Links } from "./Types/Link";
import styled from 'styled-components'
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

function Nav(links: Links) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    return (
        // <DesktopNavbar links={links.links} />
        <MobileNavbar links={links.links}></MobileNavbar>
    );
}


export default Nav


