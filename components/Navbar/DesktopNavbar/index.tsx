import { useRouter } from 'next/dist/client/router'
import { NavbarLink } from '../NavbarLink';
import { Links } from "../NavbarLink/Types/Link";

interface Props {
    links: Links
}

export function DesktopNavbar(props: Props) {
    const router = useRouter()

    return (
        <nav className="mt-10 flex flex-row items-baseline">
            <div className="container">
                <span className='button--pulse'></span>
            </div>
            <ul className="p-2 mx-20 inline-flex">
                {props.links.map((link) => (
                    <li key={link.name} className="mx-5">
                        <NavbarLink link={link} actualPathName={router.pathname} />
                    </li>
                ))}
            </ul>

        </nav >
    )
}
