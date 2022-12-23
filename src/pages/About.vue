<template>
  <div class="about-container">
    <MyHeader />
    <main :style="{marginTop : $store.state.slider.header_height + 'px'}">
      <div
          :class="{'_gap':$route.params.aboutRouter === 'where'}"
          class="main__container"
      >
        <about-menu />
        <div class="about__content" v-if="$store.state.display_width >= 768">
          <maker v-if="$route.params.aboutRouter === 'aboutUs'" />
          <news v-if="$route.params.aboutRouter === 'news'" />
          <WhereBuy v-if="$route.params.aboutRouter === 'where'" />
          <CareRepair v-if="$route.params.aboutRouter === 'care'" />
          <CallBack v-if="$route.params.aboutRouter === 'callback'" />
          <PrivacyPolicy v-if="$route.params.aboutRouter === 'privacypolicy'" />
          <ConditionsRules v-if="$route.params.aboutRouter === 'conditions'" />
          <DeliveryPayment v-if="$route.params.aboutRouter === 'deliverypayment'" />
          <Refuind v-if="$route.params.aboutRouter === 'refuind'" />
        </div>
      </div>
    </main>
    <MyFooter v-if="$store.state.display_width >= 768" />
  </div>
</template>

<script>
import AboutMenu from "@/components/AboutMenu";
import Maker from "@/components/about/Maker";
import News from "@/components/about/News";
import WhereBuy from "@/components/about/WhereBuy";
import CareRepair from "@/components/about/CareRepair";
import CallBack from "@/components/about/CallBack";
import ConditionsRules from "@/components/about/ConditionsRules";
import PrivacyPolicy from "@/components/about/PrivacyPolicy";
import DeliveryPayment from "@/components/about/DeliveryPayment";
import Refuind from "@/components/about/Refuind";
import MyHeader from "@/components/UI/Header";
import MyFooter from "@/components/UI/Footer";
export default {
  name: 'About',
  components: {
    MyFooter,
    MyHeader,
    AboutMenu,
    Maker,
    News,
    WhereBuy,
    CareRepair,
    CallBack,
    PrivacyPolicy,
    ConditionsRules,
    DeliveryPayment,
    Refuind
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  }
}
</script>

<style lang="scss" scoped>
._gap{
  gap: rem(30);
}
main {
  padding: 0 $pside-header;
  margin-bottom: rem(391);
}

.main__container {
  display: flex;
  font-weight: 300;
  padding-top: rem(70);
}

.about__content {
  width: 78%;
}

@media (min-width: em(1660, 16)) {
  .about__content {
    width: 79%;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  main {
    padding: 0 $pside-header 0;
    margin-bottom: calc(12.4375rem + (391 - 199) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  main {
    margin-bottom: calc(6.1068125rem + (199 - 97.709) * ((100vw - 48rem) / (1023 - 768)));
  }
  .about__content {
    width: 74%;
  }
}
@media (max-width: em(767, 16)) {
  main{
    padding: 0;
  }
  .main__container{
    display: block;
  }
}
</style>
