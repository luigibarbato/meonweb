import useSWR from 'swr'
import { LovingItem } from '../../components/Loving';
import { LovingReponse, getLovingItems, Threshold, LovingRequest } from '../api/loving';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export const Loving = () => {
    var initialState = new Map<string, Threshold>();
    var initialLovingItemRequest: LovingRequest = {
        name: "music",
        threshold: { start: 0, end: 8 }
    }

    initialState.set('music', { start: 0, end: 8 });
    initialState.set('movies', { start: 0, end: 8 });
    initialState.set('book', { start: 0, end: 8 });

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
        if (threshold.end + 8 <= data?.length ?? 0) {
            var newThreshold: Threshold = {
                start: threshold.end,
                end: threshold.end + 8
            };
        } else {
            var newThreshold: Threshold = {
                start: 0,
                end: 8
            }
        }

        console.log(threshold)

        return newThreshold
    }

    return (
        <Layout title='Loving' description='Loving'>
            <div className="flex flex-row">
                <div className="basis-1/2 self-center">
                    <div className="grid grid-cols-4 gap-4">
                        {data?.items?.map((item: LovingItem) => (
                            <a href={item.url} className="group my-10">
                                <div className="bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={item.thumb} alt={item.name} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 max-h-10 text-sm text-gray-700">{item.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col self-center">
                    <p className="text-5xl mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                        I'm so addicted to music, I can't stop listening to it.
                    </p>
                    <ul>
                        <li key="music" onClick={e => syncState("music")} className="text-5xl mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#45ffd4]">Music</li>
                        <li key="movies" onClick={e => syncState("movies")} className="text-5xl mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d3ed10] to-[#ff7a45]">Movies</li>
                        <li key="book" onClick={e => syncState("book")} className="text-5xl mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#e732bd] to-[#1b00e8]">Books</li>
                    </ul>
                    <button
                        className='self-center mt-14 w-1/4 h-10 px-5 rounded-lg text-indigo-100 transition-colors duration-150 bg-gradient-to-br from-[#3627a5] to-[#5A45FF]'
                        type="submit"
                        onClick={getNewItems}
                    >
                        Show more
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Loving