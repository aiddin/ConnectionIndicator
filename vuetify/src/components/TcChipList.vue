<template>
  <div>
 <v-row
    justify="center"
    align="center"
  >
    <v-chip draggable>
      Default
    </v-chip>
  </v-row>
  </div>
</template>

<script>


import "vuetify/dist/vuetify.min.css";


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
