<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app, html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
