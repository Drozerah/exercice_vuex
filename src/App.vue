<template>
  <div id="app">
    <Parent name="Parent component"/>
  </div>
</template>

<script>
import Parent from '@/components/Parent.vue'
console.log('Hello') // !DEBUG
export default {
  name: 'App',
  components: {
    Parent
  },
  mounted() {
    console.log('from App.vue', this.$store) // !DEBUG
  }
}
</script>

<style>
#app {
  font-family: monospace;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
