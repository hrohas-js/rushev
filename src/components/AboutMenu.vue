<template>
  <div>
    <nav v-if="$store.state.display_width >= 768">
      <ul class="about-menu">
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'aboutUs'}"
              :to="{name:'About',params:{aboutRouter:'aboutUs'}}"
          >
            О НАС
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'news'}"
              :to="{name:'About',params:{aboutRouter:'news'}}"
          >
            НОВОСТИ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'where'}"
              :to="{name:'About',params:{aboutRouter:'where'}}"
          >
            ГДЕ КУПИТЬ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'care'}"
              :to="{name:'About',params:{aboutRouter:'care'}}"
          >
            УХОД И РЕМОНТ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'callback'}"
              :to="{name:'About',params:{aboutRouter:'callback'}}"
          >
            ОБРАТНАЯ СВЯЗЬ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'privacypolicy'}"
              :to="{name:'About',params:{aboutRouter:'privacypolicy'}}"
          >
            ПОЛИТИКА<br>
            КОНФИДЕНЦИАЛЬНОСТИ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'conditions'}"
              :to="{name:'About',params:{aboutRouter:'conditions'}}"
          >
            УСЛОВИЯ И ПРАВИЛА<br>
            ПОЛЬЗОВАНИЯ САЙТОМ
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'deliverypayment'}"
              :to="{name:'About',params:{aboutRouter:'deliverypayment'}}"
          >
            ДОСТАВКА И ОПЛАТА
          </router-link>
        </li>
        <li>
          <router-link
              :class="{active:$route.params.aboutRouter === 'refuind'}"
              :to="{name:'About',params:{aboutRouter:'refuind'}}"
          >
            ВОЗВРАТ ТОВАРА
          </router-link>
        </li>
      </ul>
    </nav>
    <nav v-else>
      <about-mobile v-for="item in $store.state.footer.aboutUs" :key="item.id" :linkName="item.text" />
      <about-mobile v-for="item in $store.state.footer.care" :key="item.id" :linkName="item.text" />
      <about-mobile v-for="item in $store.state.footer.rules" :key="item.id" :linkName="item.text" />
    </nav>
  </div>
</template>

<script>
import AboutMobile from "@/components/about/AboutMobile";

export default {
  name: 'about-menu',
  components: {AboutMobile}
}
</script>

<style lang="scss" scoped>
.active {
  color: $button-color-blue;
}

li {
  font-weight: 300;
  margin-bottom: $mbottom-about-menu-item;

  &:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  li {
    font-size: calc(0.75rem + (14 - 12) * ((100vw - 64rem) / (1440 - 1024)));
    margin-bottom: calc(1.4375rem + (30 - 23) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  li {
    font-size: calc(0.64275rem + (12 - 10.284) * ((100vw - 48rem) / (1023 - 768)));
    margin-bottom: calc(1.101125rem + (23 - 17.618) * ((100vw - 48em) / (1023 - 768)));
  }
}

</style>
