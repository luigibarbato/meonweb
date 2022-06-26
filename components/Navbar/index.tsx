import { Links } from "./NavbarLink/Types/Link";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

interface Props {
    links: Links
    isMobile: boolean
}

function Nav(props: Props) {
    return (
        setNavbarType(props)
    );
}


const setNavbarType = (props: Props) => {
    if (props.isMobile) {
        return <MobileNavbar links={props.links} />
    }

    return <DesktopNavbar links={props.links} />
}

export default Nav


