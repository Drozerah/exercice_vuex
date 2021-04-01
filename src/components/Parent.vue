<template>
  <div class="parent">
    <h1>{{ name }}</h1>
    <p>Store: {{ $store.state.X }}</p>
    <button
      @click="$store.commit('SET_X', $store.state.X + 1)"
    >+ 1 (mutation)</button>
    <br>
    <br>
    <Child name='Child component'/>
    <br>
    <UndoRedo/>
  </div>
</template>

<script>
import Child from '@/components/Child'
import UndoRedo from '@/components/UndoRedo'
export default {
  name: 'Parent',
  props: {
    name: String
  },
  mounted() {
    console.log('Parent is monted') // !DEBUG
  },
  components:{
    Child,
    UndoRedo,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1{
  font-size: 25px;
}
.parent{
  background-color: #E7E7E7;
  padding: 10px;
  border: 1px dotted gray;
}
</style>
