interface Props {
    color: string,
    text: string,
}

export const Pill = (props: Props) => {

    const bgColor: React.CSSProperties = {
        backgroundColor: props.color,
    }

    return (
        <span style={bgColor} className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-center text-black mr-2 mb-2`}>{props.text}</span>
    )
}