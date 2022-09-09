<template>
  <v-card dark>
    <v-card-title>{{ match.group }}</v-card-title>
    <v-card-subtitle>start at: {{ matchStartDate }}</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col class="d-flex align-center justify-start">
          <v-img
            :src="match.homeTeam.crest"
            max-width="50"
            max-height="50"
            contain
          />
          <p class="mb-0 ml-3">
            {{ match.homeTeam.name }}
          </p>
          <input v-model="home" type="number" class="rounded ml-auto" />
        </v-col>

        <v-col cols="1" class="d-flex align-center justify-center">
          <span class="ma-0 pa-0 text-center">VS</span>
        </v-col>

        <v-col class="d-flex align-center justify-end">
          <input v-model="away" type="number" class="rounded mr-auto" />
          <p class="mb-0 mr-3 text-right">
            {{ match.awayTeam.name }}
          </p>
          <v-img
            :src="match.awayTeam.crest"
            max-width="50"
            max-height="50"
            contain
            rounded
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success"> submit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    away: '',
    home: '',
    result: '',
  }),
  computed: {
    matchStartDate() {
      return new Date(this.match.utcDate).toLocaleString('fa')
    },
  },
}
</script>

<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';

input {
  max-width: 30px;
  border: 1px solid map-get($grey, lighten-4);
  color: map-get($grey, lighten-5);
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
