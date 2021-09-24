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

    <div v-show="this.error" style="color:red; word-wrap:break-word;">{{ this.error }}</div>

  <v-btn class="mr-4" @click="submit">keičiam!</v-btn>
    <v-row>
      <v-col cols="12" md="60">
        <v-textarea
          solo
          name="input-7-4"
          v-model="result"
          placeholder="„Keičiam“ „kabutes“, brūkšnelius (–) į Lietuviškus"
          label="Rezultatas"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export const commas = ["\"","'","`","“","„",'"',"‘","’","”","‟"]
export const specialCaseChars = [":",";",",","."]

export default {
 data: () => ({
          text: '',
          result: '',
          input: '',
          error: '',
          fontSize: 2,
  }),
  name: 'Kablys',
  methods: {
     submit () {

      // replace /n and split
      var words = this.input.split(" ");
      //var regex = /(?=\S*['-])([a-zA-Z'-]+)|(?=\S*["-])([a-zA-Z"-]+)|(?=\S*[`-])([a-zA-Z`-]+)|(\S*[“-])([a-zA-Z”-]+)|(\S*[„-])([a-zA-Z”-]+)/g;
      console.log(words)
      words = this.commas(words)
      this.result = words.join(" ")

      this.oddNumber(words)

     },
     bruksnys(word) {
         if (word.match(/[\\-]/)){
          word = word.replace("-","–");
        }
        return word
     },
     commas(words) {
        var i;

        for (i = 0; i < words.length; i++) {
            // deal with -
            words[i] = this.bruksnys(words[i])
            // first character is comma
            if (commas.includes(words[i].charAt(0))){
                 words[i] = words[i].replace(words[i].charAt(0),"„");
            }
            // last char is comma
            if (commas.includes(words[i].substr(-1))){
                words[i] = words[i].replace(words[i].substr(-1),"“");
            }
            // if last char is special case char, check one more
            if (specialCaseChars.includes(words[i].substr(-1))){
              if (words[i].length >= 2) {
                  var slc = words[i].length - 2;
                  if (commas.includes(words[i].charAt(slc))){
                     words[i] = words[i].replace(words[i].charAt(slc),"“");
                  }
              }
            }
        }
        return words
     },
     birdIsAWord(word) {
      var first = 0
      if (word.charAt(first) === "\n"){
        console.log(word.charAt(first))
        first +1
        return this.birdIsAWord(word.substring(first))
      } else {
        return word
      }
     },
     oddNumber(words) {
        var i;
        var count = 0;
  
        for (i = 0; i < words.length; i++) {
            // first character is comma
            for (var j = 0; j < commas.length; j++) {
              if (words[i].indexOf(commas[j]) != -1){
                count++
              }
            }
        }
        console.log(count)
        if (this.isOdd(count)){
           this.error = "nelyginis kabučių skaičius... Pasimečiau... Radau "+count+"-ias kabes! Kas yra nelyginis skaičius. Gali būti klaidelių."
        } else {
           this.error = ""
        }

     },
     isOdd(x) { return x & 1; },

   },
}


</script>
