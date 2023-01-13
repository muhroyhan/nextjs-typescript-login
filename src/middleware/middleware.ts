import superagent, { SuperAgentRequest } from 'superagent'

const baseUrl = process.env.NEXT_PUBLIC_API_URL + '/api'

const get = (path: String, query: object = {}) => {
    const url = baseUrl + path
    return superagent
        .get(url)
        .set('Access-Control-Allow-Origin', '*')
        .withCredentials()
        .accept('application/json')
        .type('application/json')
        .query(query)
}
const post = (path: String, data: object = {}) => {
    const url = baseUrl + path
    return superagent
        .post(url)
        .withCredentials()
        .accept('application/json')
        .type('application/json')
        .send(data)
}

export const middleware = async (
    path: String,
    type: String = 'get',
    payload: object = {}
) => {
    let request: SuperAgentRequest = get(path, payload)
    if (type === 'post') {
        request = post(path, payload)
    }
    const fetch = await request
    return fetch.body
}

export const config = {
    matcher: '/api/:path*',
}
