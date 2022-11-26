<template>
  <div class="__item">
    <div
        class="__item__title"
        :class="{__item__title_visible:isVisible && !$store.state.news.clicked}"
        @click="replace_visability"
    >
      <p>
        {{ linkName }}
      </p>
      <img
          v-if="$store.state.news.clicked || !isVisible"
          src="@/assets/img/svg/arrow_down.svg"
          alt="arrow"
      />
      <img
          v-if="isVisible && !$store.state.news.clicked"
          src="@/assets/img/svg/arrow_down_white.svg"
          alt="arrow"
      />
    </div>
    <div v-if="isVisible" class="__item__content">
      <transition name="lol">
        <maker v-if="linkName === 'О НАС'" />
      </transition>
      <transition name="lol">
        <news v-if="linkName === 'НОВОСТИ'" />
      </transition>
      <transition name="lol">
        <WhereBuy v-if="linkName === 'ГДЕ КУПИТЬ'" />
      </transition>
      <transition name="lol">
        <CareRepair v-if="linkName === 'УХОД ЗА УКРАШЕНИЯМИ'" />
      </transition>
      <transition name="lol">
        <CallBack v-if="linkName === 'ОБРАТНАЯ СВЯЗЬ'" />
      </transition>
      <transition name="lol">
        <PrivacyPolicy v-if="linkName === 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'" />
      </transition>
      <transition name="lol">
        <Refuind v-if="linkName === 'ВОЗВРАТ ТОВАРА'" />
      </transition>
      <transition name="lol">
        <DeliveryPayment v-if="linkName === 'ДОСТАВКА И ОПЛАТА'" />
      </transition>
      <transition name="lol">
        <ConditionsRules v-if="linkName === 'УСЛОВИЯ И ПРАВИЛА ПОЛЬЗОВАНИЯ САЙТОМ'" />
      </transition>
    </div>
  </div>
</template>

<script>
import Maker from "@/components/about/Maker";
import News from "@/components/about/News";
import WhereBuy from "@/components/about/WhereBuy";
import CareRepair from "@/components/about/CareRepair";
import CallBack from "@/components/about/CallBack";
import ConditionsRules from "@/components/about/ConditionsRules";
import PrivacyPolicy from "@/components/about/PrivacyPolicy";
import DeliveryPayment from "@/components/about/DeliveryPayment";
import Refuind from "@/components/about/Refuind";
export default {
  name: 'about-mobile',
  data: function () {
    return {
      isVisible: false
    }
  },
  props: ['linkName'],
  components: {
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
  methods: {
    replace_visability() {
      this.isVisible = !this.isVisible
      this.$store.commit('news/SET_CLICKED',false);
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
    padding: 0;
  }
  .__item__title_visible {
    border-bottom: none;
    background-color: #1F83DE;
    color: white;

    img {
      transform: rotate(180deg);
    }
  }
}
</style>
