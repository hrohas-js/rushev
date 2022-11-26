<template>
  <div class="sert-variants">
    <div class="__nominal">
      <div class="__nominal__text">
        СУММА СЕРТИФИКАТА
      </div>
      <div class="__nominal__choose">
        <div
            class="__nominal__choose__item"
            :class="{nominalChooseActive:nominalChoose === '5000'}"
            @click="chooseNominal('5000')"
        >
          5.000 ₽
        </div>
        <div
            class="__nominal__choose__item"
            :class="{nominalChooseActive:nominalChoose === '10000'}"
            @click="chooseNominal('10000')"
        >
          10.000 ₽
        </div>
        <div
            class="__nominal__choose__item"
            :class="{nominalChooseActive:nominalChoose === '15000'}"
            @click="chooseNominal('15000')"
        >
          15.000 ₽
        </div>
        <div
            class="__nominal__choose__item"
            :class="{nominalChooseActive:nominalChoose === '20000'}"
            @click="chooseNominal('20000')"
        >
          20.000 ₽
        </div>
      </div>
    </div>
    <div class="__type">
      <div class="__type__text">
        ТИП СЕРТИФИКАТА
      </div>
      <div class="__type__choose">
        <div
            class="__type__choose__item"
            :class="{typeChooseActive:typeChoose === 'Электронный'}"
            @click="chooseType('Электронный')"
        >
          ЭЛЕКТРОННЫЙ
        </div>
        <div
            class="__type__choose__item"
            :class="{typeChooseActive:typeChoose === 'Физический'}"
            @click="chooseType('Физический')"
        >
          ФИЗИЧЕСКИЙ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sert-variants',
  data: () => ({
    nominalChoose: '',
    typeChoose: '',
  }),
  mounted() {
    this.$store.commit('SET_CHECK_OPTIONS', false);
  },
  methods: {
    chooseNominal(val) {
      this.nominalChoose = val;
      if (this.typeChoose !== '') {
        let product_id = '';
        this.$store.state.goods.forEach(elem => {
          if (elem.product_code === this.$store.state.curentGood.product_code && elem.product_features[3].variant === this.nominalChoose && elem.product_features[4].variant === this.typeChoose) {
            product_id = elem.product_id;
          }
        });
        if (product_id !== '') {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/product_id.php',
            body: product_id
          });
          this.$store.commit('SET_CHECK_OPTIONS', true);
          this.$router.push({name: 'Product', params: {id: product_id}})
        }
      }
    },
    chooseType(val) {
      this.typeChoose = val;
      if (this.nominalChoose !== '') {
        let product_id = '';
        this.$store.state.goods.forEach(elem => {
          if (elem.product_code === this.$store.state.curentGood.product_code && elem.product_features[3].variant === this.nominalChoose && elem.product_features[4].variant === this.typeChoose) {
            product_id = elem.product_id;
          }
        });
        if (product_id !== '') {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/product_id.php',
            body: product_id
          });
          this.$store.commit('SET_CHECK_OPTIONS', true);
          this.$router.push({name: 'Product', params: {id: product_id}})
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sert-variants {
  font-size: rem(20);
  font-weight: 300;
  margin-top: rem(46);
}

.__nominal {
  margin-bottom: rem(15);
}

.__nominal__text, .__type__text {
  margin-bottom: rem(15);
  font-size: rem(12);
}

.__nominal__choose, .__type__choose {
  display: flex;
}

.__type__choose {
  align-items: center;
}

.__nominal__choose__item {
  border: 1px solid black;
  font-size: rem(10);
  padding: rem(15) 0;
  flex: 1 1 25%;
  text-align: center;
  cursor: pointer;

  &:first-child, &:nth-child(2), &:nth-child(3) {
    border-right: none;
  }
}

.__type__choose__item {
  border: 1px solid black;
  flex: 1 1 50%;
  text-align: center;
  font-size: rem(10);
  padding: rem(15) 0;
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
}

.__choose-name {
  margin-top: rem(28);
}

.nominalChooseActive, .typeChooseActive {
  color: white;
  background-color: #1f82de;
}
</style>
