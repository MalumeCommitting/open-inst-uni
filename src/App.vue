<template>
<div>
  <top-menu />
  <main class="col-md-12 ms-sm-auto col-lg-112 px-md-4">
      <router-view></router-view>
  </main>
  <footer-menu />
</div>
</template>

<script>
import TopMenu from './components/menu/header.vue'
import FooterMenu from './components/menu/footer.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    FooterMenu,
  }
}
</script>

<style>
@import '../src/assets/custom.css';
</style>
