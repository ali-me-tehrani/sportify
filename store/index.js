export const state = () => ({
    token: "",
    isLoggedIn: false
})

export const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn
    }
}