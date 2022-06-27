import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";

interface Props {
    url: string
}


export const Github = (props: Props) => {
    return <a href={props.url}><span className="flex flex-row items-center gap-1"><GrGithub title='Github' />Github</span></a>
}

export const Twitter = (props: Props) => {
    return <a href={props.url}><span className="flex flex-row items-center gap-1"><GrTwitter title='Twitter' />Twitter</span></a>
}

export const Linkedin = (props: Props) => {
    return <a href={props.url}><span className="flex flex-row items-center gap-1"><GrLinkedin title='Linkedin' />Linkedin</span></a>
}
