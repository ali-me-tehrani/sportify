export const state = () => ({
    accessToken: "",
    refreshToken: "",
    username: "",
    email: ""
})

export const getters = {
    getAccessToken(state) {
        return state.accessToken
    },
    getRefreshToken(state) {
        return state.refreshToken
    }
}

export const mutations = {
    updateToken(state, tokens) {
        state.accessToken = tokens.accessToken
        state.refreshToken = tokens.refreshToken
    },
    updateUser(state, user) {
        state.username = user.username
        state.email = user.email
    }
}

export const actions = {
    register() { },
    login() { },
    logout() { },
    refreshToken() { }
}