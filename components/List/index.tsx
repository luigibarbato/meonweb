import { GradientText } from "../../lib/Gradient"

interface Props {
    title?: string,
    description?: string,
    children: React.ReactNode[],
}

export const List = ({ title, description, children }: Props) => {
    return (
        <>
            <h1 className="text-4xl my-10">{title}</h1>
            <h2>{description}</h2>
            <div className="flex flex-col justify-center items-center gap-6">
                {children}
            </div>
        </>
    )
}
