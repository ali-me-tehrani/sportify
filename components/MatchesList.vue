<template>
  <v-container>
    <v-row v-for="(match, i) in matches" :key="i">
      <v-col cols="12">
        <MatchRow :match="match" />
      </v-col>
    </v-row>
    <v-row>
      {{ data }}
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    list: [1, 2, 3, 4],
    data: '',
  }),
  computed: {
    ...mapState({ matches: (state) => state.matches.upcomingMatches }),
  },
  mounted() {
    console.log('matches', this.matches)
  },
}
</script>
