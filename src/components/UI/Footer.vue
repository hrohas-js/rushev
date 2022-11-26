<template>
  <footer :class="{newFooter:rechange}">
    <div v-if="$store.state.display_width >= 768" class="footer-content">
      <div class="footer__menu" :class="{newFooterMenu:rechange}">
        <div v-if="rechange" class="menu__items" :class="{rechange:rechange}">
          <div>
            <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.aboutUs" />
            <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.careHeader" />
            <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.deliveryHeader" />
          </div>
          <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.rulesHeader" />
        </div>
        <div class="menu__items" v-if="!rechange">
          <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.aboutUs" />
          <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.care" />
          <footer-item :liBottom="rechange" :footerLinks="$store.state.footer.rules" />
        </div>
        <div class="footer__social">
          <h2 class="call-with-us">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <social :noMargin="rechange" />
        </div>
        <div class="copyright" v-if="!rechange">
          <p>
            2022 RUSHEV.ONLINE
          </p>
        </div>
      </div>
      <news-form :newWidth="rechange" />
    </div>
    <div v-else class="footer-mobile-content">
      <footer-mobile-item
          v-for="item in $store.state.footer.footerItemsName"
          :key="item.id"
          :itemName="item.name"
      />
    </div>
  </footer>

</template>
<script>
import FooterItem from "@/components/footer/FooterMenu";
import NewsForm from "@/components/footer/NewsForm";
import Social from "@/components/footer/Social";
import FooterMobileItem from "@/components/footer/FooterMobileItem";
export default {
  name: 'my-footer',
  props:{
    rechange:{
      type:Boolean,
      default:false
    }
  },
  components: {
    FooterItem,
    NewsForm,
    Social,
    FooterMobileItem
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 0 $pside-footer $pbottom-footer;
  font-size: rem(12);
  flex: 0 0 auto;

  h2 {
    text-transform: uppercase;
  }
}
.footer__menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.newFooter {
  padding-bottom: 0;
}
.newFooterMenu {
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  row-gap: rem(60);
}

.footer-content{
  display: flex;
  justify-content: space-between;
}

.footer__menu {
  font-size: $fs-product-item-text;
}

.menu__items {
  display: flex;
  column-gap: rem(140);
}

.rechange {
  div {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);
  }
}

.footer__social {
  h2 {
    color: $button-color-blue;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  footer {
    padding: 0 calc(1.6875rem + (50 - 27) * ((100vw - 64rem) / (1440 - 1024))) $pbottom-footer;
  }
  .menu__items {
    column-gap: calc(4.6875rem + (140 - 75) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .social__item {
    column-gap: calc(3.3125rem + (97 - 53) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .newFooter, h2 {
    font-size: calc(0.5rem + (12 - 8) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .newFooterMenu {
    row-gap: calc(1.25rem + (60 - 20) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  footer {
    padding: 0 1.6875rem $pbottom-footer;
  }
  .menu__items {
    column-gap: calc(0rem + (75 - 0) * ((100vw - 48rem) / (1024 - 768)));
  }
  .social__item {
    column-gap: calc(1.0625rem + (53 - 17) * ((100vw - 48rem) / (1024 - 768)));
  }
  .newFooter, h2 {
    font-size: rem(8);
  }
  .newFooterMenu {
    row-gap: rem(20);
  }
  .rechange {
    div {

      row-gap: calc(0.625rem + (20 - 10) * ((100vw - 48rem) / (1024 - 768)));
    }
  }

}

@media (max-width: em(767, 16)) {
  footer{
    padding: 0;
    width: 100%;
  }
}
</style>
