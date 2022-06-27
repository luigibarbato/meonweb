interface Props {
    color: string,
    component: React.ReactNode,
}

export const Pill = (props: Props) => {

    const bgColor: React.CSSProperties = {
        backgroundColor: props.color,
    }

    return (
        <div style={bgColor} className={`inline-block rounded-full px-3 py-1 text-base sm:text-lg md:text-xl xl:text-base font-semibold text-center text-black mr-2 mb-2`}>{props.component}</div>
    )
}