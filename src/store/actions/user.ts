import { actionInterface } from '../../interfaces/actionInterface'
import { middleware } from '../../middleware/middleware'
import { CREATE_USER, LOGIN, USERS } from '../action_type'

let resp: actionInterface | null = null

export const createUser = async (data: object) => {
    try {
        const request = await middleware('/user/create', 'post', data)
        resp = { type: CREATE_USER.success, data: request.data }
        return resp
    } catch (err) {
        resp = { type: CREATE_USER.error, data: {} }
        return resp
    }
}

export const getUsers = async () => {
    try {
        const request = await middleware('/users')
        resp = { type: USERS.success, data: request.data }
        return resp
    } catch (err) {
        resp = { type: USERS.error, data: {} }
        return resp
    }
}

export const login = async (data: object) => {
    try {
        const request = await middleware('/login', 'post', data)
        resp = { type: LOGIN.success, data: request.data }
        return resp
    } catch (err) {
        resp = { type: LOGIN.error, data: {} }
        return resp
    }
}
