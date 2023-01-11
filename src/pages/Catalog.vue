<template>
  <div class="content">
    <my-header/>
    <div
        v-if="$route.params.catalogItem === 'constructor'"
        class="constructor-banner"
        :style="{marginTop : $store.state.slider.header_height + 'px'}"
    >
      <video autoplay loop playsinline preload muted>
        <source src="https://u1600792.isp.regruhosting.ru/img_server/constructor_banner.mp4" type="video/mp4"/>
        <source src="https://u1600792.isp.regruhosting.ru/img_server/constructor_banner.webm" type="video/webm"/>
      </video>
    </div>
    <div
        v-if="$route.params.catalogItem === 'constructor'"
        class="constructor-text"
    >
      Предлагаем вам услугу конструктора, которая позволит вам собрать свое уникальное украшение от бренда RUSHEV.
      Просто добавьте в корзину элементы которые вам понравились, а мы соберем ваше персональное украшение.
    </div>
    <main
        class="catalog-content"
        :style="[$route.params.catalogItem !== 'constructor' ? {marginTop : this.$store.state.slider.header_height + 'px'} : {marginTop : 0}]"
    >
      <div class="top-menu">
        <MenuItems
            v-for="item in $store.state.menu.menuItemUp"
            :key="item.id"
            :menuItem="item"
            :menuSetup="'top'"
        />
        <MenuItems
            v-for="item in $store.state.menu.menuItemDown"
            :key="item.id"
            :menuItem="item"
            :menuSetup="'top'"
        />
      </div>
      <CatalogBody/>
      <CatalogConstructor/>
    </main>
    <my-footer/>
  </div>
</template>

<script>
import MenuItems from "@/components/UI/MenuItems";
import CatalogBody from "@/components/CatalogBody";
import CatalogConstructor from "@/components/CatalogConstructor";

export default {
  name: 'Catalog',
  components: {
    MenuItems,
    CatalogBody,
    CatalogConstructor
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  }
}
</script>

<style lang="scss" scoped>

img, video {
  max-width: 100%;
}

.catalog-content {
  padding: 0 $pside-catalog-gallery;
}

.top-menu {
  display: flex;
  justify-content: space-between;
  margin-top: rem(100);
}

.constructor-text {
  max-width: rem(953);
  margin: 0 auto;
  padding-top: rem(113);
  font-size: rem(18);
  line-height: rem(21);
  text-align: center;
}

.constructor-heart {
  background: url("https://u1600792.isp.regruhosting.ru/img_server/const_heart.png") center no-repeat;
  background-size: contain;
  width: rem(716);
  height: rem(700);
  margin: rem(85) auto;
}

.constructor-heart__text {
  max-width: rem(250);
  padding: rem(96) rem(69);
  font-weight: 300;
  font-size: rem(18);
  box-sizing: content-box;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-content {
    padding: 0 calc(2rem + (230 - 32) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .top-menu {
    margin-top: calc(4.375rem + (100 - 70) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .constructor-heart {
    width: calc(36.1875rem + (716 - 579) * ((100vw - 64rem) / (1440 - 1024)));
    height: calc(35.375rem + (700 - 566) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .constructor-heart__text {
    max-width: calc(12.5rem + (250 - 200) * ((100vw - 64rem) / (1440 - 1024)));
    padding: calc(5.25rem + (96 - 84) * ((100vw - 64rem) / (1440 - 1024))) calc(3.4375rem + (69 - 55) * ((100vw - 64rem) / (1440 - 1024)));
    font-size: calc(0.875rem + (18 - 14) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-content {
    padding: 0 calc(0.625rem + (32 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .top-menu {
    margin-top: calc(1.875rem + (70 - 30) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .constructor-heart {
    width: calc(26.125rem + (579 - 418) * ((100vw - 26.75rem) / (1023 - 428)));
    height: calc(25.5rem + (566 - 408) * ((100vw - 26.75rem) / (1023 - 428)));
    margin: calc(4.6875rem + (85 - 75) * ((100vw - 26.75rem) / (1023 - 428))) auto;
  }
  .constructor-heart__text {
    max-width: calc(9.0625rem + (200 - 145) * ((100vw - 26.75rem) / (1023 - 428)));
    padding: calc(3.3125rem + (84 - 53) * ((100vw - 26.75rem) / (1023 - 428))) calc(2.5rem + (55 - 40) * ((100vw - 26.75rem) / (1023 - 428)));
    font-size: calc(0.625rem + (14 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }
}

@media (max-width: em(768, 16)) {
  .constructor-text {
    padding-top: rem(60);
    padding-left: rem(27);
    padding-right: rem(27);
    font-size: rem(11);
    line-height: rem(12);
  }
}

@media (max-width: em(427, 16)) {
  .catalog-content {
    padding: 0 rem(10);
  }
  .top-menu {
    margin-top: calc(0.625rem + (30 - 10) * ((100vw - 12.5rem) / (427 - 200)));
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .constructor-heart {
    width: calc(11.25rem + (418 - 180) * ((100vw - 12.5rem) / (427 - 200)));
    height: calc(10.625rem + (408 - 170) * ((100vw - 12.5rem) / (427 - 200)));
    margin: rem(75) auto;
  }
  .constructor-heart__text {
    max-width: rem(145);
    padding: calc(1.25rem + (53 - 20) * ((100vw - 12.5rem) / (427 - 200))) calc(0.625rem + (40 - 10) * ((100vw - 12.5rem) / (427 - 200)));
    font-size: rem(10);
  }
}
</style>
