export default async function ({ $axios, store }) {
    try {
        const { results } = await $axios.$get(
            'http://localhost:3000/api/v1/games/?stage=GROUP_STAGE&limit=70&sortBy=utcDate'
        )
        store.commit('matches/updateMatches', results)
    } catch (err) {
        console.log("errrrrororr", err);
    }
}