import styles from "./Nav.module.css"
import { Sections } from "../Config";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mt-10">
            <ul className="float-right p-2 mx-24 inline-flex">
                {Sections.map((item) => (
                    <li className="mx-5">
                        <a
                            href={item.url}
                            className="text-2xl font-extrabold  text-gray-700"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav >
    );
}

export default Nav


