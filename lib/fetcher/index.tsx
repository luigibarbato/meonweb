import { LovingRequest, LovingReponse } from "./types";


export async function getLovingItems(lr: LovingRequest): Promise<LovingReponse> {
    var response, respJSON: LovingReponse

    respJSON = { items: [], threshold: { start: 0, end: 0 }, length: 0, type: '' }

    switch (lr.name) {
        case "music": {
            response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "tracks");
            let tracksJSON = await response.json()
            respJSON = {
                items: tracksJSON.slice(lr.threshold.start, lr.threshold.end),
                threshold: lr.threshold,
                length: tracksJSON.length,
                type: 'music'
            }
            break;
        }
        case "movies": {
            response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "movies");
            let filmJSON = await response.json()

            console.log(filmJSON)

            respJSON = {
                items: filmJSON.items.slice(lr.threshold.start, lr.threshold.end),
                threshold: lr.threshold,
                length: filmJSON.size,
                type: 'movies'
            }
            break;

        }
        case "books": {
            response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "books");

            let bookJSON = await response.json()

            console.log(bookJSON)

            respJSON = {
                items: bookJSON.items.slice(lr.threshold.start, lr.threshold.end),
                threshold: lr.threshold,
                length: bookJSON.size,
                type: 'books'
            }
            break;
        }
    }

    return respJSON
}