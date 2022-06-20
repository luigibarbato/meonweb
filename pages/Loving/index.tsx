import useSWR from 'swr'
import { LovingReponse, getLovingItems, Threshold, LovingRequest } from '../api/loving';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { NextPage } from 'next';
import { ButtonSpec } from '../../components/Button/ButtonList';
import ButtonList from '../../components/Button/ButtonList';
import { HeroWithGrid } from '../../components/Hero/HeroWithGrid';

// TODO: It should have a nice refactor.
const Loving: NextPage = ({ settings, isMobile }) => {
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
    const [loading, setLoading] = useState(false);

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
            setLoading(false)

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

        setLoading(true)
    }

    function updateThreshold(threshold: Threshold): Threshold {
        if (threshold.end + 4 <= data?.length) {
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

    const buttons: Array<ButtonSpec> = [{
        colors: ['#A9E775', '#45ffd4'],
        text: 'Music',
        isCurrent: isCurrent('music'),
        onClick: () => syncState('music')
    }, {
        colors: ['#d3ed10', '#ff7a45'],
        text: 'Movies',
        isCurrent: isCurrent('movies'),
        onClick: () => syncState('movies')
    }, {
        colors: ['#e732bd', '#1b00e8'],
        text: 'Books',
        isCurrent: isCurrent('books'),
        onClick: () => syncState('books')
    }]

    return (
        <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
            <HeroWithGrid
                isMobile={isMobile} primaryColor={settings.colors[0]} secondaryColor={settings.colors[1]} isLoading={loading} items={data?.items} content="Lorem ipsum, dolor sit amet consectetur adipisicing elit.">
                {/* TODO: Actual ButtonList component doesn´t have same nice gradient effect we want, see commit cafff90 */}
                <ButtonList buttons={buttons} />
            </HeroWithGrid>
        </Layout >
    )
}

export default Loving