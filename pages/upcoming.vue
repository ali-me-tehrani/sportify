<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Upcoming matches</h2>
      </v-col>
    </v-row>
    <MatchesList />
  </v-container>
</template>

<script>
export default {
  name: 'UpcomingPages',
  middleware: ['upcomingGames'],
  async fetch() {},
}
</script>