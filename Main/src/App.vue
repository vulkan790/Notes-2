<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
