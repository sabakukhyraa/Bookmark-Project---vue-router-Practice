<template>

  <div>
      <base-navbar></base-navbar>
  </div>

  <PreviousPageButton></PreviousPageButton>

  <div class="main">
    <router-view></router-view>
  </div>

</template>

<script>
import BaseNavbar from "./components/BaseNavbar.vue"
import PreviousPageButton from "./components/PreviousPageButton.vue";

export default {
  name: 'App',
  components: {
    BaseNavbar,
    PreviousPageButton
  },
    
}

</script>

