<template>
  <div
      v-if="!inCart"
      class="add-to-bascet__button"
      :class="{wishMargin:$route.name === 'Wishlist',productMargin:$route.name === 'Product'}"
      @click="cartClick"
  >
    ДОБАВИТЬ В КОРЗИНУ
  </div>
  <div
      v-else
      class="add-to-bascet__button in"
      :class="{wishMargin:$route.name === 'Wishlist',productMargin:$route.name === 'Product'}"
  >
    В КОРЗИНЕ
  </div>
</template>

<script>
export default {
  name: 'AddToCartButton',
  props: ['curID'],
  computed: {
    inCart() {
      let flag = false;
      this.$store.state.cart.forEach(elem => {
        if(elem.product_id === this.curID) {
          flag = true;
        }
      });
      return flag;
    }
  },
  methods: {
    miniCartShowed(e) {
      if(!e.target.classList.contains('modal-container') && this.$store.state.miniCartShow) {
        this.$store.commit('CHANGE_MINI_CART_SHOW', false);
        document.removeEventListener('click', this.miniCartShowed);
      }
    },
    cartClick() {
      if(this.$store.state.checkOptions) {
        if(this.$route.name === 'Wishlist') {
          this.$store.state.goods.forEach(elem => {
            if(elem.product_id === this.curID) {
              if(elem.amount === '0'){
                elem.amount = '1';
              }
              this.$store.commit('ADD_TO_CART',elem);
            }
          });
        }
        else {
          if(this.$store.state.curentGood.amount === '0') {
            this.$store.commit('SETUP_PREORDER', '1');
          }
          this.$store.commit('ADD_TO_CART', this.$store.state.curentGood);
        }
        this.$store.commit('CHANGE_MINI_CART_SHOW', true);
        setTimeout(() =>  {
          document.addEventListener('click', this.miniCartShowed);
        }, 2000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-to-bascet__button {
  cursor: pointer;
  font-size: rem(9);
  background-color: $button-color-black;
  color: white;
  padding: rem(11) 0;
  text-align: center;
}
.in {
  color: white;
  background-color: #1F83DE;
}

.wishMargin {
  margin-top: 25%;
}

.productMargin {
  margin-top: rem(27);
  margin-bottom: rem(27);
  padding: rem(20) 0;
}

@media (max-width: em(767, 16)) {
  .add-to-bascet__button {
    max-width: rem(170);
    align-self: flex-end;
    margin: 0;
  }
  .productMargin {
    max-width: 100%;
    margin: rem(34) 0;
    padding: rem(17) 0 !important;
  }
}

@media (max-width: em(428, 16)) and (min-width: em(220, 16)) {
  .add-to-bascet__button {
    padding: calc(0.34375rem + (11 - 5.5) * ((100vw - 13.75rem) / (428 - 220))) calc(1.3125rem + (42 - 21) * ((100vw - 13.75rem) / (428 - 220)));
  }
}
</style>
