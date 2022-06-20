import { Links } from "./NavbarLink/Types/Link";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { useEffect, useState } from 'react';

interface Props {
    links: Links
}

function Nav(props: Props) {
    return (
        setNavbarType(props)
    );
}


const setNavbarType = (props: Props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let res = window.matchMedia("only screen and (max-width: 760px)").matches;
        setIsMobile(res)
    }, [isMobile])

    if (isMobile) {
        return <MobileNavbar links={props.links} />
    }

    return <DesktopNavbar links={props.links} />
}

export default Nav


