<template>
  <MyHeader/>
  <div
      v-if="$store.getters.cart_count > 0"
      class="cart"
      :style="{marginTop : this.$store.state.slider.header_height + 'px'}"
  >
    <div class="cart__container">
      <cart-table :cartModal="false"/>
    </div>
    <div class="cart-total">
      <div class="cart-total__header">
        Корзина
      </div>
      <div class="cart-total__sum">
        <div class="__sum__header">
          Сумма заказа : {{ total }} ₽
        </div>
        <div class="__sum__subheader">
          Доставка заказа расчитывается при оформлении покупки
        </div>
      </div>
      <span
          class="checkout-button"
          :class="{'active':this.agree}"
          @click="checkpush"
      >
        перейти на страницу оплаты
      </span>
      <div class="rules-check">
        <input type="checkbox" id="rulescheck" v-model="agree"/>
        <label for="rulescheck">
          <div>
            Я прочитал и ознакомлен с
            <router-link to="/about/deliverypayment">Доставкой и оплатой</router-link>
          </div>
        </label>
      </div>
      <div class="rules-info">
        Просим Вас подвердить, о&nbsp;том что вы&nbsp;ознакомились с&nbsp;информацией о&nbsp;доставке и&nbsp;оплате,
        перед тем как перейти на&nbsp;страницу оформления заказа.
      </div>
    </div>
  </div>
  <div v-else class="cart-empty">
    КОРЗИНА ПУСТА
  </div>
  <MyFooter/>
</template>

<script>
import MyHeader from "@/components/UI/Header";
import MyFooter from "@/components/UI/Footer";
import CartTable from "@/components/CartTable";

export default {
  name: 'cart',
  components: {
    CartTable,
    MyFooter,
    MyHeader
  },
  data: () => ({
    agree: false
  }),
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  },
  computed: {
    total() {
      let sum = 0;
      this.$store.state.cart.forEach(elem => {
        sum += parseInt(elem.price) * parseInt(elem.amount);
      });
      return sum;
    }
  },
  methods: {
    checkpush() {
      if (this.agree) {
        this.$router.push('/checkout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: #1F83DE !important;
}

.cart {
  display: flex;
  column-gap: rem(58);
  margin: rem(96) auto rem(258);
  padding: 0 $pside-header;
  flex: 1 0 auto;
}

.cart-total__header {
  font-size: rem(24);
}

.cart-total__sum {
  padding: rem(38) 0;
}

.__sum__header {
  font-size: rem(14);
}

.__sum__subheader {
  font-size: rem(11);
  font-weight: 300;
}

.checkout-button {
  display: block;
  font-size: rem(8);
  text-transform: uppercase;
  text-align: center;
  padding: rem(10) 0;
  color: white;
  background-color: black;
  margin-bottom: rem(17);
  cursor: pointer;
}

.rules-check {
  font-size: rem(9);
  display: flex;
  align-items: center;
  border: 1px solid;
  padding: rem(8) 0;


  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin-right: rem(12);
  }

  input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  input + label::before {
    content: '';
    display: inline-block;
    width: rem(14);
    height: rem(14);
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    margin-right: 0.5em;
  }

  input:checked + label::before {
    background-color: $button-color-blue;
  }

  label {
    margin: 0 auto;
  }
}

.cart-empty {
  flex: 1 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rules-info {
  font-size: rem(8);
  margin-top: rem(20);
  max-width: rem(268);
  line-height: rem(9);
  color: #898989;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .cart {
    column-gap: calc(1.875rem + (58 - 30) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .cart {
    display: block;
    column-gap: calc(0.625rem + (30 - 10) * ((100vw - 48rem) / (1023 - 768)));
  }
  .cart-total {
    text-align: center;
  }
  .cart-total__header {
    display: none;
  }
  .rules-check {
    justify-content: center;
  }
  .checkout-button {
    width: 60%;
    margin: 0 auto;
    margin-bottom: rem(35);
  }
}

@media (max-width: em(767, 16)) {
  .cart {
    display: block;
    margin-top: rem(30);
    margin-bottom: rem(112);
  }
  .cart-total {
    text-align: center;
  }
  .cart-total__header {
    display: none;
  }
  .rules-check {
    justify-content: center;
  }
  .__sum__header {
    font-size: rem(18);
    margin-bottom: rem(14);
  }
  .__sum__subheader {
    font-size: rem(14);
  }
  .checkout-button {
    font-size: rem(12);
    padding: rem(18) 0;
    margin-bottom: rem(35);
  }
  .rules-check {
    font-size: rem(12);
  }
}
</style>
