<template>
  <div id="app">
    <Menu/>
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>

</style>
