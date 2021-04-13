<template>
  <div id="app">
    <MainHeader></MainHeader>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: {
    'MainHeader': MainHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html, body{
  height: 100%;
}
</style>
