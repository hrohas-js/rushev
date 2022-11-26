<template>
  <div class="good-amount font">
    <div class="plas" @click="clickPlus">+</div>
    <input type="text" readonly v-model="amountValue">
    <div class="minus" @click="clickMinus">-</div>
  </div>
</template>

<script>
export default {
  name: 'change-amount',
  data: () => ({
    amountValue: 1
  }),
  props: ['amountID'],
  mounted() {
    this.$store.state.cart.forEach(elem => {
      if(elem.product_id == this.amountID) {
        this.amountValue = elem.amount;
      }
    });
  },
  methods: {
    changeAmount() {
      this.$store.commit('CHANGE_AMOUNT_CART', {id: this.amountID, amount: this.amountValue});
    },
    clickPlus() {
      this.amountValue++;
      this.changeAmount();
    },
    clickMinus() {
      if (this.amountValue > 1) {
        this.amountValue--;
        this.changeAmount();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.good-amount {
  display: flex;
  align-items: center;

  input {
    text-align: center;
    outline: none;
    outline-offset: 0;
    user-select: none;
    border: 1px solid;
    width: rem(15);
    height: rem(15);

    &:active, &:hover, &focus {
      outline: none;
      outline-offset: 0;
    }
  }
}

.plas {
  border: 1px solid;
  border-right: none;
  text-align: center;
  width: rem(13);
  height: rem(15);
  padding: 0 rem(1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

.minus {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-left: none;
  text-align: center;
  width: rem(13);
  height: rem(15);
  padding: 0 rem(1);
  cursor: pointer;
  user-select: none;
}
</style>