<template>
  <div class="undoredo">
    <h1>{{ name }}</h1>
    <button
      @click="undo"
    >Undo</button>
    <button
      @click="redo"
    >Redo</button>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Undo/Redo component'
      }
    },
    methods: {
      undo() {
        alert('undo call')
      },
      redo() {
        alert('redo call')
      }
    }
  }
</script>

<style  scoped>
  .undoredo{
     border: 1px dotted gray;
  }
</style>