<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      autocomplete="off"
      @submit.prevent="submit"
    >
      <v-card-title class="text-center justify-center"> Login </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          autocomplete="off"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="flex-wrap">
        <v-btn block type="submit" color="success" :disabled="!valid">
          login
        </v-btn>
        <v-btn
          block
          link
          to="/register"
          text
          color="info"
          class="mx-0 my-3"
          nuxt
        >
          creat account
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: '',
    password: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length >= 8) || 'Password must be atleast 8 characters',
    ],
  }),
  methods: {
    submit() {
      console.log('login')
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
