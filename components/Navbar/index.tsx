import styles from "./Nav.module.css"
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { isActiveLink } from '../../lib'
import Link from './NoScrollLink'
import { Links } from "./Types/Link";
import styled from 'styled-components'
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { useEffect, useState } from 'react';

function Nav(links: Links) {

    return (
        setNavbar(links)
    );
}


function setNavbar(links: Links) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let res = window.matchMedia("only screen and (max-width: 760px)").matches;
        setIsMobile(res)
    }, [isMobile])

    if (isMobile) {
        return <MobileNavbar links={links.links} />
    }

    return <DesktopNavbar links={links.links} />
}

export default Nav


