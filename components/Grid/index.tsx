import { Item } from "../Loving/types"

interface Props {
    items: Array<Item> | undefined,
    isLoading?: boolean
    isMobile?: boolean
}

const Grid = (props: Props) => {
    if (!props.items || props.isLoading) {
        return (
            <>
                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10 animate-pulse">
                    {Array(4).fill(0).map((_, i) => (
                        <a href="" className="group my-4 md:my-10">
                            <div className="bg-gray-600 rounded-lg overflow-hidden h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75">
                            </div>
                        </a>
                    ))}
                </div>
            </>
        )
    }
    if (props.isMobile) {
        return (
            <div className="grid w-96 h-96 mx-auto grid-cols-2 gap-2 bg-black rounded-lg bg-opacity-20">
                {props.items?.map((item: Item) => (
                    <a href={item.url} className="group my-4">
                        <div className="bg-gray-200 h-24 w-24 m-auto rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/50">
                            <img src={item.thumb} alt={item.name} className="h-24 w-24 object-center object-fill group-hover:opacity-75" />
                        </div>
                        <h3 className="text-center mt-4 max-h-10 text-sm text-gray-700">{item.name}</h3>
                    </a>
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {props?.items?.map((item: Item) => (
                <a href={item.url} className="group my-4 md:my-10">
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                        <img src={item.thumb} alt={item.name} className="h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75" />
                    </div>
                    <h3 className="mt-4 max-h-10 text-sm md:text-lg text-gray-700">{item.name}</h3>
                </a>
            ))}
        </div>
    )
}

export default Grid