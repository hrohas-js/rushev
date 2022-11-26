<template>
  <div class="__item">
    <div
        class="__item__title"
        :class="{__item__title_visible:isVisible}"
        @click="replace_visability"
    >
      <p>
        {{ itemName }}
      </p>
      <img src="@/assets/img/svg/arrow_down.svg" alt="arrow" />
    </div>
    <transition name="lol">
      <div v-if="isVisible" class="__item__content">
        <footer-item v-if="itemName === 'ИНФОРМАЦИЯ'" :footerLinks="$store.state.footer.aboutUs" />
        <footer-item v-if="itemName === 'ОБРАТНАЯ СВЯЗЬ'" :footerLinks="$store.state.footer.care" />
        <footer-item v-if="itemName === 'УСЛОВИЯ'" :footerLinks="$store.state.footer.rules" />
        <social v-if="itemName === 'СОЦИАЛЬНЫЕ СЕТИ'" />
        <news-form v-if="itemName === 'НОВОСТНАЯ РАССЫЛКА'" />
      </div>
    </transition>
  </div>
</template>

<script>
import FooterItem from "@/components/footer/FooterMenu";
import NewsForm from "@/components/footer/NewsForm";
import Social from "@/components/footer/Social";

export default {
  name: 'footer-mobile-item',
  props: ['itemName'],
  components: {
    FooterItem,
    NewsForm,
    Social
  },
  data: function () {
    return {
      isVisible: false
    }
  },
  methods: {
    replace_visability() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.lol-enter-active,
.lol-leave-active {
  transition: all 0.5s ease;
}

.lol-enter-from,
.lol-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@media (max-width: em(767, 16)) {
  .__item__title {
    display: flex;
    padding: rem(15) rem(23);
    border-bottom: 0.5px solid;
    justify-content: space-between;
    font-size: rem(16);
    font-weight: 300;
  }
  .__item__content {
    padding: rem(15) rem(23);
  }
  .__item__title_visible {
    border-bottom: none;

    img {
      transform: rotate(180deg);
    }
  }
}

</style>
