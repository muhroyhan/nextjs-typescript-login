import { actionInterface } from '../../interfaces/actionInterface'
import { middleware } from '../../middleware/middleware'
import { USERS } from '../action_type'

export const getUsers = async () => {
    let resp: actionInterface = {
        type: '',
        data: {},
    }

    try {
        const request = await middleware('/users')
        resp = { type: USERS.success, data: request.data }
        return resp
    } catch (err) {
        resp = { type: USERS.error, data: {} }
        return resp
    }
}
