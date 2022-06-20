interface Props {
    colors: string | Array<string>,
    text: string,
    isCurrent?: boolean,
    onClick?: () => void,
}


const Button = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className={props.isCurrent ?
                `rounded-lg  mx-2 p-0.5 md:text-5xl text-black font-extrabold bg-gradient-to-br from-[${props.colors[0]}] to-[${props.colors[1]}]` :
                `mx-2 p-0.5 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[${props.colors[0]}] to-[${props.colors[1]}]`}>
            {props.text}
        </button>
    )
}

export default Button;