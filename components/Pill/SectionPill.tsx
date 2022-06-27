import { Pill } from "./Pill"

interface Pill {
    color: string,
    key: string | number,
    component: React.ReactNode,
}

interface Props {
    sections: Array<SectionPillProps>,
}

export type SectionPillProps = {
    name: string
    color: string
    entries: React.ReactNode[]
}

export const SectionPill = (props: Props) => {
    return (
        <div className={`grid grid-cols-${props.sections.length} text-center md:text-start font-semibold`}>
            {props.sections.map((section, i) => (
                <div key={i}>
                    <p className='my-2 text-base sm:text-lg md:text-xl text-center md:text-start'>{section.name}</p>
                    {section.entries.map((entry, j) => (
                        <Pill color={section.color} key={j} component={entry} />
                    ))}
                </div>
            ))}
        </div>
    )
}