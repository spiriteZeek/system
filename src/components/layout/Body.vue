<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'BodyComp'
  }
</script>

<style scoped>
.container {
  width: calc(100% - 20em);
  height: 100%;
  overflow-y: auto;

}
</style>