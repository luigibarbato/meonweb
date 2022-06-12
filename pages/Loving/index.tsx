import useSWR from 'swr'
import { LovingItem } from '../../components/Loving';
import { LovingReponse, getLovingItems, Threshold, LovingRequest } from '../api/loving';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export const Loving = () => {
    var initialState = new Map<string, Threshold>();
    var initialLovingItemRequest: LovingRequest = {
        name: "music",
        threshold: { start: 0, end: 4 }
    }

    initialState.set('music', { start: 0, end: 4 });
    initialState.set('movies', { start: 0, end: 4 });
    initialState.set('books', { start: 0, end: 4 });

    const [state, setState] = useState(initialState);

    const [lovingItemRequest, setLovingItemRequest] = useState(initialLovingItemRequest);

    const { data, mutate } = useSWR<LovingReponse>("/api/loving", () => getLovingItems(lovingItemRequest));

    useEffect(() => {
        getNewItems(lovingItemRequest);
    }, [state, lovingItemRequest]);

    async function getNewItems(lR: LovingRequest) {
        try {
            // Update the local state immediately and fire the
            // request. Since the API will return the updated
            // data, there is no need to start a new revalidation
            // and we can directly populate the cache.
            await mutate(getLovingItems(lR), {
                optimisticData: data,
                rollbackOnError: true,
                populateCache: true,
                revalidate: false
            });
        } catch (e) {
            // If the API errors, the original data will be
            // rolled back by SWR automatically.
        }
    }

    function isCurrent(name: string) {
        return name === lovingItemRequest.name;
    }


    async function syncState(name: string) {
        var threshold: Threshold

        if (data?.type == name) {
            threshold = updateThreshold(state.get(name) as Threshold);
        } else {
            threshold = state.get(name) as Threshold
        }

        setState(
            state.set(name, threshold)
        )

        let newLovingItemRequest = {
            name: name,
            threshold: threshold
        }

        setLovingItemRequest(newLovingItemRequest);

    }

    function updateThreshold(threshold: Threshold): Threshold {
        if (threshold.end + 4 <= data?.length ?? 0) {
            var newThreshold: Threshold = {
                start: threshold.end,
                end: threshold.end + 4
            };
        } else {
            var newThreshold: Threshold = {
                start: 0,
                end: 4
            }
        }

        return newThreshold
    }

    return (
        <Layout title='Loving' description='Loving'>
            <div className="flex flex-col md:flex-row overflow-hidden">
                <div className="order-last md:order-first m-10 md:basis-1/2 md:self-center">
                    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data?.items?.map((item: LovingItem) => (
                            <a href={item.url} className="group my-4 md:my-10">
                                <div className="bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={item.thumb} alt={item.name} className="h-16 w-24 lg:w-[131px] lg:h-[131px] object-center object-fill group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 max-h-10 text-sm md:text-lg text-gray-700">{item.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:self-center">
                    <p className="text-center  text-4xl md:text-5xl m-5  md:mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <ul className='flex flex-row text-3xl m-5 self-center'>
                        <li key="music">
                            <button onClick={e => syncState("music")} className={isCurrent("music") ? 'rounded-lg  mx-2 p-0.5 md:text-5xl text-black font-extrabold bg-gradient-to-br from-[#A9E775] to-[#45ffd4]' : 'mx-2 p-0.5 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#45ffd4]'}>Music</button>
                        </li>
                        <li key="movies">
                            <button onClick={e => syncState("movies")} className={isCurrent("movies") ? 'rounded-lg  mx-2 p-0.5 md:text-5xl  text-black font-extrabold bg-gradient-to-br from-[#d3ed10] to-[#ff7a45]' : 'mx-2 p-0.5 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d3ed10] to-[#ff7a45]'}>Movies</button>
                        </li>
                        <li key="books">
                            <button onClick={e => syncState("books")} className={isCurrent("books") ? 'rounded-lg  mx-2 p-0.5 md:text-5xl  text-black font-extrabold bg-gradient-to-br from-[#e732bd] to-[#1b00e8]' : 'mx-2 p-0.5 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#e732bd] to-[#1b00e8]'}>Books</button>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Loving