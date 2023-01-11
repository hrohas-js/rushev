<template>
  <div class="app">
    <div v-if="$store.state.preload" class="preload">
      <img src="@/assets/img/preload.gif" alt="preload">
    </div>
    <transition name="pop">
      <div v-if="$store.state.sertSuccess" class="popup success">СЕРТИФИКАТ ПРИМЕНЕН</div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    version: '1.6.0'
  }),
  created() {
    if(localStorage.getItem('rushev_version') == null || localStorage.getItem('rushev_version') !== this.version) {
      localStorage.clear();
      localStorage.setItem('rushev_version', this.version);
      location.reload();
    }
  },
  mounted() {
    this.$store.commit('slider/SET_IMG_HEADER', 3);
    this.$store.dispatch('GetRequest', 'https://rushev.online/server/products.php');
    let isMobile = /iPad|iPhone|iPod/.test(navigator.platform)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.platform === 'Linux aarch64';
    this.$store.commit('SET_IS_MOBILE', isMobile);
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  border: 1px solid black;
  border-radius: 0;
  outline: none;
}

html {
  font-family: 'Roboto Condensed', sans-serif;
  height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
}

h1, h2, h3, h4, h5 {
  font-size: unset;
  font-weight: normal;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.preload {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(239, 239, 239, 0.66);
  backdrop-filter: blur(14px);
  z-index: 9999999;

  img {
    max-width: 10%;
  }
}

.popup {
  position: fixed;
  right: 0;
  bottom: 0;
  width: rem(200);
  padding: rem(10);
  z-index: 999999;
  margin-right: rem(20);
  margin-bottom: rem(20);
}

.error {
  background-color: rgba(255, 0, 0, 0.99);
}

.success {
  background-color: #3DBE59EF;
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.5s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}
</style>
