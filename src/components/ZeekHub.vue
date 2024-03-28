<template>
  <header-comp></header-comp>
  <div class="down">
    <nav-comp></nav-comp>
    <body-comp></body-comp>
  </div>
</template>
<script>
import HeaderComp from '@/components/layout/Header.vue'
import NavComp from '@/components/layout/Nav.vue'
import BodyComp from '@/components/layout/Body.vue'

export default {
  name: 'ZeekHubComp',
  components: {
    HeaderComp,
    NavComp,
    BodyComp
  },
  setup() {}
}
</script>

<style scoped>
.down {
  width: 100%;
  height: calc(100% - 5.5em);
  display: flex;
}
</style>
