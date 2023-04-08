<template>
  <div class="constructor-variants">
    <div class="__metal">
      <div class="__metal__text">
        ВЫБЕРЕТЕ ЦВЕТ ИЗДЕЛИЯ
      </div>
      <div class="__metal__choose">
        <div
            class="__metal__choose__item"
            :class="{colorChooseActive:colorChoose === 'Серебро'}"
            @click="chooseColor('Серебро')"
        >
          СЕРЕБРО
        </div>
        <div
            class="__metal__choose__item"
            :class="{colorChooseActive:colorChoose === 'Золото'}"
            @click="chooseColor('Золото')"
        >
          ЗОЛОТО
        </div>
      </div>
    </div>
    <div class="__choose-name">
      <div class="__choose-name__input">
        <input
            type="text"
            class="__metal__input__item"
            :placeholder="initialsPlaceholder"
            @input="checkCountInitials"
            @blur="fetchInitials"
            v-model="initials"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'constructor-variants',
  data: () => ({
    colorChoose: '',
    initials: '',
    initialsPlaceholder: ''
  }),
  mounted() {
    this.$store.commit('SET_CHECK_OPTIONS', false);
    this.checkInitials();
  },
  updated() {
    this.checkInitials();
  },
  methods: {
    chooseColor(val) {
      this.colorChoose = val;
      let product_id = '';
      this.$store.state.goods.forEach(elem => {
        if (elem.product_code === this.$store.state.curentGood.product_code && elem.product_features[1].variant === this.colorChoose) {
          product_id = elem.product_id;
        }
      });
      if (product_id !== '') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/product_id.php',
          body: product_id
        });
        this.$router.push({name: 'Product', params: {id: product_id}})
        if (this.initials !== '') {
          this.$store.commit('SET_CHECK_OPTIONS', true);
          this.$store.commit('CHANGE_CURRENTGOOD', this.initials);
        }
      }
    },
    checkCountInitials() {
      if (this.$store.state.curentGood.product_code === 'RSHV_MONO_NAME_E1' && this.initials.length > 1) {
        this.initials = this.initials.slice(0, this.initials.length - 1);
      }
    },
    fetchInitials() {
      if (this.initials !== '') {
        this.$store.commit('CHANGE_CURRENTGOOD', this.initials);
        if (this.colorChoose !== '') {
          this.$store.commit('SET_CHECK_OPTIONS', true);
        }
      }
    },
    checkInitials() {
      if (this.$store.state.curentGood.product_code === 'RSHV_MONO_NAME_E1') {
        this.initialsPlaceholder = 'Введите инициал, который хотите добавить в изделие';
      } else {
        this.initialsPlaceholder = 'Введите инициалы, которые хотите добавить в изделие';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.constructor-variants {
  font-size: rem(20);
  font-weight: 300;
  margin-top: rem(46);
}

.__metal {
  margin-bottom: rem(15);
}

.__metal__text, .__symbol__text {
  margin-bottom: rem(15);
  font-size: rem(12);
}

.__metal__choose, .__symbol__choose {
  display: flex;
}

.__symbol__choose {
  align-items: center;
}

.__metal__choose__item {
  border: 1px solid black;
  font-size: rem(10);
  padding: rem(15);
  flex: 50%;
  text-align: center;
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
}

.__choose-name {
  margin-top: rem(28);
}

.__metal__input__item {
  width: 100%;
  height: rem(47);
  border-top: 1px solid black;
  outline: none;
  font-size: rem(10);
  padding: 0 rem(10);
  box-sizing: border-box;
  text-align: center;

  &::placeholder {
    font-size: rem(10);
    color: #585858;
    text-align: center;
  }
}

.colorChooseActive {
  color: white;
  background-color: #000000;
}
</style>
