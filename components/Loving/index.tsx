import useSWR from 'swr'
import { Track } from '../../components/Tracks';
import { TracksReponse, getTracks, Threshold } from '../../pages/api/tracks';
import { useState } from 'react';

export const Loving = () => {
    const [threshold, setThreshold] = useState({ start: 0, end: 8 });

    const { data, mutate } = useSWR<TracksReponse>("/api/tracks", () => getTracks(threshold));

    console.log(data)

    return (
        <div className="flex flex-row">
            <div className="avatar basis-1/2 self-center">
                <div className="grid grid-cols-4 gap-4">
                    {data?.tracks?.map((track: Track) => (
                        <a href="#" className="group my-10">
                            <div className="bg-gray-200 rounded-lg overflow-hidden">
                                <img src={track.thumb} alt={track.name} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                            </div>
                            <h3 className="mt-4 max-h-10 text-sm text-gray-700">{track.name}</h3>
                            {/* <p className="mt-1 text-lg font-medium text-gray-900">{track.url}</p> */}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col self-center">
                <p className="text-5xl mx-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#A9E775] to-[#5A45FF]">
                    I'm so addicted to music, I can't stop listening to it.
                </p>
                <button
                    className='self-center mt-14 w-1/4 h-10 px-5 rounded-lg text-indigo-100 transition-colors duration-150 bg-gradient-to-br from-[#3627a5] to-[#5A45FF]'
                    type="submit"
                    onClick={async () => {
                        if (threshold.end + 8 <= data?.length) {
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

                        setThreshold(newThreshold);

                        try {
                            // Update the local state immediately and fire the
                            // request. Since the API will return the updated
                            // data, there is no need to start a new revalidation
                            // and we can directly populate the cache.
                            await mutate(getTracks(newThreshold), {
                                optimisticData: data,
                                rollbackOnError: true,
                                populateCache: true,
                                revalidate: false
                            });
                        } catch (e) {
                            // If the API errors, the original data will be
                            // rolled back by SWR automatically.
                        }
                    }}
                >
                    Show more
                </button>
            </div>
        </div>

    )
}