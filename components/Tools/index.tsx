// import useSWR from 'swr'
// import { System } from '../System';

export const Tools = () => {
    // const fetcher = (url: string) => fetch(url).then((res) => res.json())
    // const { data, error } = useSWR('/api/system', fetcher)
    // console.log(data)
    return (
        <div className="flex flex-row">
            <div className="avatar basis-1/2 self-center">
                Test
            </div>
            {/* {data?.map((system: System) => (
                <p className="text-5xl  mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF] basis-1/2 self-center">
                    {system.info.OS}
                </p>
            ))} */}
        </div>
    )
}