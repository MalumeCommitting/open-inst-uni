<template>
<div>
  <side-menu />
  <main class="col-md-12 ms-sm-auto col-lg-112 px-md-4">
      <router-view></router-view>
  </main>
</div>
</template>

<script>
import SideMenu from './components/menu/header_footer.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
  }
}
</script>

<style>
@import '../src/assets/custom.css';
</style>
