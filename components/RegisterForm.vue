<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      autocomplete="off"
      @submit.prevent="submit"
    >
      <v-card-title class="text-center justify-center"> Register </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          autocomplete="off"
          label="Username"
          required
        ></v-text-field>
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
          submit
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
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
      console.log('create account')
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
