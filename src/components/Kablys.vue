<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="60">
        <v-textarea
          solo
          name="input-7-4"
          placeholder='"Keičiam" `kabutes`, brūkšnelius (-) į Lietuviškus'
          v-model="input"
        ></v-textarea>
      </v-col>
    </v-row>
  <v-btn class="mr-4" @click="submit">keičiam!</v-btn>
    <v-row>
      <v-col cols="12" md="60">
        <v-textarea
          solo
          name="input-7-4"
          readonly=true
          v-model="result"
          placeholder="„Keičiam“ „kabutes“, brūkšnelius (–) į Lietuviškus"
          label="Rezultatas"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
 data: () => ({
          text: '',
          result: ''
  }),
  name: 'Kablys',
  methods: {
     submit () {
      var temp = this.input.split(" ");
      var regex = /(?=\S*['-])([a-zA-Z'-]+)|(?=\S*["-])([a-zA-Z"-]+)|(?=\S*[`-])([a-zA-Z`-]+)|(\S*[“-])([a-zA-Z”-]+)/g;
      var commas = ["\"","'","`","“"];

       var i;
       for (i = 0; i < temp.length; i++) {
         // first char is kablys
         if (temp[i].match(regex)) {

            // first char is comma
            if (commas.includes(temp[i].charAt(0))){
                temp[i] = temp[i].replace(temp[i].charAt(0),"„");
            }

            // last char is :;,.
            if (commas.includes(temp[i].substr(-1))){
              temp[i] = temp[i].replace(temp[i].substr(-1),"“");
            }


            // last char is "'`“”
            if (commas.includes(temp[i].substr(-1))){
                temp[i] = temp[i].replace(temp[i].charAt(-1),"“");
            }
         }

        // deal with -
        if (temp[i].match(/[\\-]/)){
          temp[i] = temp[i].replace("-","–");
        }

       }
       this.result = temp.join(" ")
     },
   },
}
</script>
