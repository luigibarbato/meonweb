import Link from "next/link"

interface Props {
    isMobile: boolean,
    textColor: string,
    image: string,
    title: string,
    description: string,
    date: string,
    link: string,
    children?: React.ReactNode,
}

export const Card = ({ ...props }: Props) => {
    return (
        <>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-center backdrop-blur-md bg-black/30 rounded-xl">
                <div className="m-10 avatar self-center w-48 h-48 md:w-72 md:h-72">
                    {/* TODO: replace with Next/image */}
                    <img className="rounded-lg overflow-hidden object-cover aspect-square" src={props.image} alt="" />
                </div>
                <div className="lg:container lg:basis-1/2 lg:self-center m-3 lg:m-16 flex flex-col gap-2">
                    <h1 className="text-center md:text-center lg:text-start text-4xl md:text-5xl font-extrabold" style={{ color: props.textColor }}>
                        {props.title}
                    </h1>
                    <h3 className="text-center md:text-center lg:text-start text-2xl md:text-base font-thin" style={{ color: props.textColor }}>
                        {props.date}
                    </h3>
                    <h2 className="text-center md:text-center lg:text-start text-2xl md:text-xl" style={{ color: props.textColor }}>
                        {props.description}
                    </h2>
                    <Link href={props.link}>
                        <button className="bg-cyan-400/60 backdrop-blur-md mt-2 p-2 w-40 rounded-full">Read more</button>
                    </Link>
                    <br />
                    {props.children}
                </div>
            </div>
        </>
    )
}
