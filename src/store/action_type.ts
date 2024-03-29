const API_REQUEST = 'API_REQUEST_'
const API_SUCCESS = 'API_SUCCESS_'
const API_ERROR = 'API_ERROR_'

const USERS_IDENTIFER = 'USERS'
const CREATE_USER_IDENTIFER = 'CREATE_USER'
const LOGIN_IDENTIFER = 'LOGIN'

export const USERS = {
    request: API_REQUEST + USERS_IDENTIFER,
    success: API_SUCCESS + USERS_IDENTIFER,
    error: API_ERROR + USERS_IDENTIFER,
}

export const CREATE_USER = {
    request: API_REQUEST + CREATE_USER_IDENTIFER,
    success: API_SUCCESS + CREATE_USER_IDENTIFER,
    error: API_ERROR + CREATE_USER_IDENTIFER,
}

export const LOGIN = {
    request: API_REQUEST + LOGIN_IDENTIFER,
    success: API_SUCCESS + LOGIN_IDENTIFER,
    error: API_ERROR + LOGIN_IDENTIFER,
}
