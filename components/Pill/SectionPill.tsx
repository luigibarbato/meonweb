import { Pill } from "./Pill"

interface Pill {
    color: string,
    key: string | number,
    text: string,
}

interface Props {
    sections: Array<SectionPillProps>,
}

export type SectionPillProps = {
    name: string
    color: string
    entries: string[]
}

export const SectionPill = (props: Props) => {
    return (
        <div className="grid grid-cols-2 text-center md:text-start font-light">
            {props.sections.map((section, i) => (
                <div key={i}>
                    <p className='my-2 '>{section.name}</p>
                    {section.entries.map((entry, j) => (
                        <Pill color={section.color} key={j} text={entry} />
                    ))}
                </div>
            ))}
        </div>
    )
}