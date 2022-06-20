import GradientBackground from "../../lib/GradientBackground";

interface Props {
    colors: string | Array<string>,
    text: string,
    isCurrent?: boolean,
    onClick?: () => void,
}


const Button = (props: Props) => {
    return (
        // TODO: Gradient must be optional
        <GradientBackground primaryColor={props.colors[0]} secondaryColor={props.colors[1]} withDirection={"right"}>
            <button
                onClick={props.onClick}
                className={props.isCurrent ?
                    // TODO: Remove dynamic tailwindcss classname. Doesn´t work and not needed more. (We use the GradientBackground util component instead) 
                    `rounded-lg  mx-2 p-0.5 md:text-5xl text-black font-extrabold bg-gradient-to-br from-[${props.colors[0]}] to-[${props.colors[1]}]` :
                    `mx-2 p-0.5 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[${props.colors[0]}] to-[${props.colors[1]}]`}>
                {props.text}
            </button>
        </GradientBackground >
    )
}

export default Button;