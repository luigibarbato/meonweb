export interface Props {
    bgColor: string,
    textColor: string,
    component: React.ReactNode,
}

export const Pill = (props: Props) => {

    const style: React.CSSProperties = {
        backgroundColor: props.bgColor,
        color: props.textColor,
    }

    return (
        <div style={style} className={`inline-block rounded-full px-3 py-1 text-base sm:text-lg md:text-xl xl:text-base font-semibold text-center mr-2 mb-2`}>{props.component}</div>
    )
}