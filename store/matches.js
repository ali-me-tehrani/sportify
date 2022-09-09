export const state = () => ({
    upcomingMatches: [],
})

export const getters = {
    upcomingMatches(state) {
        return state.upcomingMatches
    }
}

export const mutations = {
    updateMatches(state, data) {
        state.upcomingMatches = data
    }
}