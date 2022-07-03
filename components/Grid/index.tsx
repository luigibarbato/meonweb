import { Item } from "../../lib/fetcher/types"

interface Props {
    items: Array<Item> | undefined,
    isLoading?: boolean
    isMobile?: boolean
}

const Grid = (props: Props) => {
    if (props.isMobile)
        return <MobileGrid items={props.items} isLoading={props.isLoading} />

    return <DefaultGrid items={props.items} isLoading={props.isLoading} />
}

const MobileGrid = (props: Props) => {
    if (!props.items || props.isLoading) {
        return (
            <div className="grid p-3 w-[300px] h-[350px] md:w-[300px] md:h-[450px] mx-auto grid-cols-2 gap-10 bg-black rounded-lg bg-opacity-20 animate-pulse">
                {Array(4).fill(0).map((_, i) => (
                    <a key={i} href="" className="group my-4 md:my-10 mx-auto">
                        <div className="bg-gray-600 rounded-lg overflow-hidden h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75">
                        </div>
                    </a>
                ))}
            </div>
        )
    }
    return (
        <div className="grid p-3 w-[300px] h-[350px] md:w-[300px] md:h-[450px] mx-auto grid-cols-2 gap-2 bg-black rounded-lg bg-opacity-20">
            {props.items?.map((item: Item) => (
                <a key={item.name} href={item.url} className="group my-4">
                    <div className="bg-gray-200 w-20 h-20 m-auto rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                        <img src={item.thumb} alt={item.name} className="object-center object-fill w-20 h-20 group-hover:opacity-75" />
                    </div>
                    <h3 className="text-center mt-2 max-h-10 text-sm md:text-lg font-semibold">{item.name}</h3>
                </a>
            ))}
        </div>
    )
}

const DefaultGrid = (props: Props) => {
    if (!props.items || props.isLoading) {
        return (
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-4 animate-pulse">
                {Array(4).fill(0).map((_, i) => (
                    <a key={i} href="" className="group my-4 lg:my-10 mx-auto">
                        <div className="bg-gray-600 rounded-lg overflow-hidden h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75">
                        </div>
                    </a>
                ))}
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center">
            {props?.items?.map((item: Item) => (
                <a key={item.name} href={item.url} className="group my-4 md:my-10">
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                        <img src={item.thumb} alt={item.name} className="h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75" />
                    </div>
                    <h3 className="mt-4 max-h-10 text-sm lg:text-lg font-semibold lg:w-32 xl:w-auto">{item.name}</h3>
                </a>
            ))}
        </div>
    )
}



export default Grid