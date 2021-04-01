<template>
  <div class="child">
    <h1>{{ name }}</h1>
    <p>Store: {{ X }}</p>
    <p>Log: {{ log }}</p>
    <p>Name: {{ Name }}</p>
    <button
      @click="$store.commit('SET_X', X - 1)"
    >- 1 (mutation)</button>
    <button @click='consoleLog'>consoleLog</button>
    <br>
    <br>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Child',
  props: {
    name: String
  },
  mounted() {
    console.log('Child is monted') // !DEBUG
    console.log(this.X) // !DEBUG
  },
  methods: {
    consoleLog(){
      return console.log(this.X)
    }
  },
  computed: {
    ...mapState(['X', 'Name']),
    log(){
      return this.X
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child{
  background-color: #E7E7E7;
  padding: 10px;
  border: 1px dotted gray;
}
</style>
