// import vuexLocal from "../plugins/vuex-persist"

// export const plugins = [vuexLocal]

export const state = () => ({
    token: "",
    isLoggedIn: false
})

export const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn
    }
}