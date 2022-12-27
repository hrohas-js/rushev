<template>
  <div class="content">
    <my-header/>
    <div
        v-if="$route.params.catalogItem === 'constructor'"
        class="constructor-banner"
        :style="{marginTop : this.$store.state.slider.header_height + 'px'}"
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
    console.log(this.$store.state.goods)
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
  max-width: rem(983);
  margin: 0 auto;
  padding-top: rem(130);
  font-size: rem(18);
  line-height: rem(21);
  text-align: center;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-content {
    padding: 0 calc(2rem + (230 - 32) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .top-menu {
    margin-top: calc(4.375rem + (100 - 70) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-content {
    padding: 0 calc(0.625rem + (32 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }
  .top-menu {
    margin-top: calc(1.875rem + (70 - 30) * ((100vw - 26.75rem) / (1023 - 428)));
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
  .constructor-text {
    padding-top: rem(30);
    font-size: rem(11);
    line-height: rem(13);
  }
}
</style>
