import { GradientBackground, GradientText } from "../../lib/Gradient";

interface Props {
    colors: string | Array<string>,
    text: string,
    withBackground?: boolean
    isCurrent?: boolean,
    onClick?: () => void,
}

const Button = ({ ...props }: Props) => {
    return props.withBackground ? <WithBackground {...props} /> : <Normal {...props} />
}

const Normal = ({ ...props }: Props) => {
    return (props.isCurrent ?
        <GradientText primaryColor={props.colors[0]} secondaryColor={props.colors[1]} direction="right">
            <button
                onClick={props.onClick}
                className="rounded-lg  mx-2 p-0.5 lg:text-5xl text-black font-extrabold"
            >
                {props.text}
            </button>
        </GradientText >
        : <button
            onClick={props.onClick}
            className="rounded-lg  mx-2 p-0.5 lg:text-5xl text-black font-extrabold"
        >
            {props.text}
        </button>)
}

const WithBackground = ({ ...props }: Props) => {
    return (props.isCurrent ?
        < GradientBackground primaryColor={props.colors[0]} secondaryColor={props.colors[1]} direction="right">
            <button
                onClick={props.onClick}
                className="rounded-lg mx-2 p-0.5 lg:text-5xl text-black font-extrabold"
            >
                {props.text}
            </button>
        </GradientBackground >
        : <GradientText primaryColor={props.colors[0]} secondaryColor={props.colors[1]} direction="right">
            <button
                onClick={props.onClick}
                className="mx-2 p-0.5 lg:text-5xl text-black font-extrabold"
            >
                {props.text}
            </button>
        </GradientText >
    )
}

export default Button;