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
}
</style>
