import superagent, { Response } from 'superagent'

const baseUrl = process.env.NEXT_PUBLIC_API_URL + '/api'

const get = (path: String, query = {}) => {
    const url = baseUrl + path
    return superagent
        .get(url)
        .set('Access-Control-Allow-Origin', '*')
        .withCredentials()
        .accept('application/json')
        .type('application/json')
        .query(query)
}
const post = (path: String, data = {}) => {
    const url = baseUrl + path
    return superagent
        .post(url)
        .withCredentials()
        .accept('application/json')
        .type('application/json')
        .send(data)
}

export const middleware = async (path: String, type: String = 'get') => {
    let fetchData: Response = await get(path)

    if (type === 'post') {
        fetchData = await post(path)
    }
    const data = await fetchData.body
    return data
}

export const config = {
    matcher: '/api/:path*',
}
