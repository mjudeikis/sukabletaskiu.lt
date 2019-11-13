<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <button v-on:click="fontSize += 0.25">A+</button>
    <button v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</button>
    <v-spacer></v-spacer>
    <div v-bind:style="{ fontSize: fontSize + 'rem' }">
         „“
    </div>

      <v-spacer></v-spacer>

      sukabletaskiu.lt
    </v-app-bar>

    <v-content>
      <Kablys/>
    </v-content>
  </v-app>
</template>

<script>
import Kablys from './components/Kablys';

export default {
  name: 'App',

  components: {
    Kablys,
  },

  data: () => ({
    fontSize: 2,
  }),
};
</script>
