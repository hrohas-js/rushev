<template>
  <div
      class="form__input"
      :class="{mt:myPlaceholder === 'ВВЕДИТЕ ГОРОД' || myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ'}"
  >
    <input
        v-bind:type="myType"
        required
        v-bind:placeholder="myPlaceholder"
        v-model="getInfo"
        :class="{empty:empty, inpwidth:myPlaceholder === 'ВВЕДИТЕ ГОРОД' || myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ' || myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ'}"
        @blur="save"
        @input.passive="fetchKLADR"
    />
    <div
        v-if="(myPlaceholder === 'ГОРОД' || myPlaceholder === 'ОБЛАСТЬ' || myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ' || myPlaceholder === 'ВВЕДИТЕ ГОРОД') && kladrShow"
        class="kladr"
        :class="{inpwidth:myPlaceholder === 'ВВЕДИТЕ ГОРОД' || myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ', heightauto:$store.state.kladr.length < 3}"
    >
      <div
          class="kladr__item"
          v-for="item in $store.state.kladr"
          :key="item.id"
          @mousedown="setVal(item.name)"
      >
        {{ item.name }}
      </div>
    </div>
    <div
        v-if="myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ' && kladrShow"
        class="kladr"
        :class="{inpwidth:myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ', heightauto:kladrPVZ.length < 3}"
    >
      <div
          class="kladr__item"
          v-for="item in kladrPVZ"
          :key="item.code"
          @mousedown="setVal(item.name, item.code)"
      >
        {{ item.name }}<br>
        <span>
          {{ item.location.address }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: ['myType', 'myPlaceholder'],
  data: () => ({
    kladrShow: false
  }),
  mounted() {
    if (this.myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ' && this.$store.state.pvzName === '') {
      this.kladrShow = true;
    }
  },
  computed: {
    kladrPVZ() {
      if (this.myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ') {
        if (this.getInfo === '') {
          return this.$store.state.kladr;
        } else {
          return [...this.$store.state.kladr].filter(elem => {
            return elem.location.address.toLowerCase().indexOf(this.getInfo.toLowerCase()) !== -1
          });
        }
      }
    },
    getInfo: {
      get() {
        if (this.myPlaceholder === 'EMAIL') {
          return this.$store.state.delivery.email
        }
        if (this.myPlaceholder === 'ИМЯ') {
          return this.$store.state.delivery.name
        }
        if (this.myPlaceholder === 'ФАМИЛИЯ') {
          return this.$store.state.delivery.surname
        }
        if (this.myPlaceholder === 'АДРЕС, ДОМ, КВАРТИРА') {
          return this.$store.state.delivery.address
        }
        if (this.myPlaceholder === 'ГОРОД') {
          return this.$store.state.delivery.city
        }
        if (this.myPlaceholder === 'СТРАНА') {
          return this.$store.state.delivery.region
        }
        if (this.myPlaceholder === 'ОБЛАСТЬ') {
          return this.$store.state.delivery.direction
        }
        if (this.myPlaceholder === 'ИНДЕКС') {
          return this.$store.state.delivery.index
        }
        if (this.myPlaceholder === 'ТЕЛЕФОН') {
          return this.$store.state.delivery.phone
        }
        if (this.myPlaceholder === 'Введите номер вашего сертификата / промокода') {
          return this.$store.state.promo;
        }
        if (this.myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ') {
          return this.$store.state.regionPVZ;
        }
        if (this.myPlaceholder === 'ВВЕДИТЕ ГОРОД') {
          return this.$store.state.cityPVZ;
        }
        if (this.myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ') {
          return this.$store.state.pvzName;
        }
      },
      set(value) {
        if (this.myPlaceholder === 'Введите номер вашего сертификата / промокода') {
          this.$store.commit('SET_COUPON', value);
        } else if (this.myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ') {
          this.$store.commit('SET_REGIONPVZ', value);
        } else if (this.myPlaceholder === 'ВВЕДИТЕ ГОРОД') {
          this.$store.commit('SET_CITYPVZ', value);
        } else if (this.myPlaceholder === 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ') {
          this.$store.commit('SET_PVZ_NAME', value);
        } else {
          this.$store.commit('SET_DELIVERY', {
            name: this.myPlaceholder,
            value: value
          })
        }
      }
    },
    empty() {
      return !!((this.$store.state.checkoutEmpty && this.getInfo === '' && this.myPlaceholder !== 'Введите номер вашего сертификата / промокода' && this.myPlaceholder !== 'ВВЕДИТЕ ОБЛАСТЬ' && this.myPlaceholder !== 'ВВЕДИТЕ ГОРОД' && this.myPlaceholder !== 'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ') || (this.getInfo !== '' && this.myPlaceholder === 'EMAIL' && !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(this.getInfo)));
    }
  },
  methods: {
    setVal(name, code = '') {
      this.getInfo = name;
      if (this.myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ') {
        this.$store.commit('CHANGE_CITYPVZ_SHOW');
        this.$store.commit('SET_REGIONPVZ', name);
      }
      if (this.myPlaceholder === 'ВВЕДИТЕ ГОРОД') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/sdek_api.php',
          body: name
        });
      }
      if (this.myPlaceholder === 'ГОРОД' || this.myPlaceholder === 'ВВЕДИТЕ ГОРОД') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/sdek.php',
          body: name
        })
      }
      if (code !== '') {
        this.$store.commit('ADD_PVZ_INFO', code);
      }
      this.kladrShow = false;
    },
    save() {
      this.kladrShow = false;
      if (this.getInfo === '') {
        this.empty = true;
      }
    },
    fetchKLADR() {
      this.kladrShow = true;
      if (this.myPlaceholder === 'ГОРОД') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/kladr_city.php',
          body: this.getInfo
        });
      }
      if (this.myPlaceholder === 'ОБЛАСТЬ' || this.myPlaceholder === 'ВВЕДИТЕ ОБЛАСТЬ') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/kladr_region.php',
          body: this.getInfo
        });
      }
      if (this.myPlaceholder === 'ВВЕДИТЕ ГОРОД') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/kladr_city_pvz.php',
          body: this.getInfo
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.form__input {
  display: flex;
  position: relative;

  input {
    padding: rem(17) rem(14);
    width: 100%;

    &::placeholder {
      font-size: rem(12);
    }
  }
}

.inpwidth {
  width: 60% !important;
}

.empty {
  background-color: #1F83DE;
}

.kladr {
  position: absolute;
  top: rem(52);
  z-index: 2;
  background-color: white;
  width: 100%;
  border: 1px solid black;
  border-top: none;
  height: rem(150);
  overflow: hidden;
  overflow-y: auto;

  .kladr__item {
    padding: rem(17) rem(14);
    border-bottom: 1px solid black;
    cursor: pointer;
    font-size: rem(12);
  }
}

.heightauto {
  height: auto;
}

.mt {
  margin-top: rem(25);
}
</style>
