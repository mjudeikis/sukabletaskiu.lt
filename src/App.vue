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

      sukablEtaskiu.lt
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
