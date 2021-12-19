<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>


<script>
  
  export default {
    name: 'App'
  }
</script>

<style lang="scss">

.custom-body {
  margin:0px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  @media screen and (max-width: 414px) {
      display: flex;
  }
}
#app {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
}
</style>
