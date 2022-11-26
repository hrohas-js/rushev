<template>
  <ul class="footer-menu__item">
    <li
        v-for="item in footerLinks"
        :key="item.id"
        :class="{liBottom:liBottom}"
        @click="this.$store.commit('SET_MENU_VISIBLE', false)"
    >
      <router-link :to="item.linkpath">
        {{item.text}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name:'footer-item',
  props:['footerLinks', 'liBottom']
}
</script>
<style lang="scss" scoped>
li {
  margin-bottom: $mbottom-footer-menu-item;
}
@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  li {
    font-size: calc(0.5rem + (12 - 8) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .liBottom {
    margin-bottom: calc(1.0625rem + (25 - 17) * ((100vw - 64rem) / (1440 - 1024)));
  }
}
@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  li {
    font-size: rem(8);
  }
  .liBottom {
    margin-bottom: rem(17)
  }
}
</style>
