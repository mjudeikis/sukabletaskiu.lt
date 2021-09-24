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
         „
    </div>
    <span> </span>
    sukablEtaskiu.lt
    <div v-bind:style="{ fontSize: fontSize + 'rem' }">
         “
    </div>
    <v-spacer></v-spacer>
      <button  v-on:click="gh">Kažkas neveikia? Papasakok daugiau...</button>
    
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
export const commas = ["\"","'","`","“","„",'"',"‘","’","”","‟"]
export const specialCaseChars = [":",";",",","."]

export default {
 data: () => ({
          fontSize: 2,
  }),
  methods: {
    gh(){
      window.open("https://github.com/mjudeikis/sukabletaskiu.lt/issues")
    },
  },
  name: 'App',
}
</script>
