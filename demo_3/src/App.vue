<template>
  <div>
  <TcConnectionList/>
</div>
</template>

<script>
import TcConnectionList from './components/TcConnectionList.vue'

export default {
  name: 'App',
  components: {
    TcConnectionList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
