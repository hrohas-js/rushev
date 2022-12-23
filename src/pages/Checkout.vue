<template>
  <MyHeader/>
  <main class="checkout" :style="{marginTop : $store.state.slider.header_height + 'px'}">
    <div class="checkout-container">
      <div class="checkout-container__header">
        Доставка
      </div>
      <div v-if="$store.state.error" class="attention">
        Для оплаты товара необходимо заполнить все поля. Пожалуйста, проверьте указанную информацию.
      </div>
      <div class="checkout-container__flex">
        <div class="delivery">
          <div class="delivery__contact">
            <div class="__contact__header">
              Контактная информация
            </div>
            <div class="delivery-input">
              <my-input :myType="'email'" :myPlaceholder="'EMAIL'"/>
            </div>
          </div>
          <div class="delivery__address">
            <div class="__address__header">
              Информация по доставке
            </div>
            <div class="__address__input group half">
              <my-input :myType="'text'" :myPlaceholder="'ИМЯ'"/>
              <my-input :myType="'text'" :myPlaceholder="'ФАМИЛИЯ'"/>
            </div>
            <div class="__address__input">
              <my-input :myType="'text'" :myPlaceholder="'АДРЕС, ДОМ, КВАРТИРА'"/>
            </div>
            <div class="__address__input">
              <my-input :myType="'text'" :myPlaceholder="'ГОРОД'"/>
            </div>
            <div class="__address__input group">
              <my-input :myType="'text'" :myPlaceholder="'СТРАНА'"/>
              <my-input :myType="'text'" :myPlaceholder="'ОБЛАСТЬ'"/>
              <my-input :myType="'text'" :myPlaceholder="'ИНДЕКС'"/>
            </div>
            <div class="__address__input">
              <my-input :myType="'tel'" :myPlaceholder="'ТЕЛЕФОН'"/>
            </div>
          </div>
          <div class="suggest-address">
            <div>
              <input type="checkbox" required id="save" v-model="saveAddress"/>
              <label for="save">
                Сохранить информацию для следующей покупки
              </label>
            </div>
          </div>
          <div class="delivery-choose">
            <div class="delivery-choose__header">
              Способ доставки
            </div>
            <div class="delivery-choose__content">
              <div class="__content__item">
                <div class="__item_basis">
                  <input
                      type="radio"
                      required
                      id="self"
                      name="deliv"
                      v-model="deliveryChoose"
                      value="0/19"
                  />
                  <label for="self">
                    Самовывоз
                  </label>
                </div>
                <div class="delivery__price">
                  ₽ 0
                </div>
              </div>
              <div v-if="!electroSert" class="__content__item">
                <div class="__item_basis">
                  <input
                      type="radio"
                      required
                      id="moscow"
                      name="deliv"
                      v-model="deliveryChoose"
                      :value="cura + '/14'"
                  />
                  <label for="moscow">
                    Доставка курьером по Москве (в пределах МКАДа)
                  </label>
                </div>
                <div class="delivery__price">
                  ₽ {{ cura }}
                </div>
              </div>
              <div v-if="$store.getters.cart_count > 3 && !electroSert" class="__content__item">
                <div class="__item_basis">
                  <input
                      type="radio"
                      required
                      id="garderob"
                      name="deliv"
                      v-model="deliveryChoose"
                      :value="fitting + '/15'"
                  />
                  <label for="garderob">
                    <div>
                      Доставка по Москве с примеркой<br>
                      <span>
                        В независимо от того, приобретёте вы украшения или нет
                      </span>
                    </div>
                  </label>
                </div>
                <div class="delivery__price">
                  ₽ {{ fitting }}
                </div>
              </div>
              <div v-if="!electroSert" class="__content__item">
                <div class="__item_basis">
                  <input
                      type="radio"
                      required
                      id="sdek"
                      name="deliv"
                      v-model="deliveryChoose"
                      :value="sdek + '/16'"
                  />
                  <label for="sdek">
                    <div>
                      Доставка По России СДЭК<br>
                      <span>
                        Срок и стоимость доставки рассчитываются автоматически при оформлении заказа. При выборе ПВЗ цена доставки отразится в соответствующем поле.
                      </span>
                    </div>
                  </label>
                </div>
                <div class="delivery__price">
                  ₽ {{ sdek }}
                </div>
              </div>
              <div :class="{closepvz:deliveryChooseID !== '16'}" id="forpvz">
                <div class="__content__item">
                  <div class="__item_basis">
                    <input
                        type="radio"
                        required
                        id="courier"
                        name="sdek_choose"
                        value="courier"
                        v-model="chooseSDEK"
                        @click="sdekCount"
                    />
                    <label for="courier">
                      <div>
                        Курьером<br>
                        <span>Доставка будет осуществляться по указанному выше адресу.</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="__content__item">
                  <div class="__item_basis">
                    <input
                        type="radio"
                        required
                        id="pvz"
                        name="sdek_choose"
                        value="pvz"
                        v-model="chooseSDEK"
                    />
                    <label for="pvz">
                      <div>
                        В пункт выдачи заказов
                      </div>
                    </label>
                  </div>
                  <div v-if="chooseSDEK === 'pvz'" class="pvz-container">
                    <my-input
                        v-if="chooseSDEK === 'pvz'"
                        :myType="'text'"
                        :myPlaceholder="'ВВЕДИТЕ ОБЛАСТЬ'"
                    />
                    <my-input
                        v-if="$store.state.cityPVZshow"
                        :myType="'text'"
                        :myPlaceholder="'ВВЕДИТЕ ГОРОД'"
                    />
                    <my-input
                        v-if="$store.state.pvzListShow"
                        :myType="'text'"
                        :myPlaceholder="'ВЫБЕРИТЕ ПУНКТ ВЫДАЧИ'"
                    />
                  </div>
                </div>
              </div>
              <div v-if="!electroSert" class="__content__item">
                <div class="__item_basis">
                  <input
                      type="radio"
                      required
                      id="pochta"
                      name="deliv"
                      v-model="deliveryChoose"
                      :value="postRussia + '/17'"
                  />
                  <label for="pochta">
                    По миру Почта России
                  </label>
                </div>
                <div class="delivery__price">
                  ₽ {{ postRussia }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="checkout-total">
          <cart-table :cartModal="true"/>
          <div class="promocode">
            <div class="promocode__header">
              Сертификат / ПРОМОКОД
            </div>
            <div class="promocode__input">
              <my-input :myType="'text'" :myPlaceholder="'Введите номер вашего сертификата / промокода'"/>
              <div class="promocode__submit" @click="catchPromo">
                применить
              </div>
            </div>
            <div class="order-totals">
              <div class="order-totals__item">
                <div class="__item__title">
                  СУММА ЗАКАЗА
                </div>
                <div class="__item__price">
                  {{ orderSum }} ₽
                </div>
              </div>
              <div class="order-totals__item">
                <div class="__item__title">
                  ДОСТАВКА<br>
                  <span>Стоимость доставки рассчитывается отдельно в зависимости от вашего города/региона</span>
                </div>
                <div class="__item__price">
                  {{ deliveryChooseCost }} ₽
                </div>
              </div>
              <div class="order-totals__item">
                <div class="__item__title">
                  ОБЩАЯ СУММА ЗАКАЗА
                </div>
                <div class="__item__price">
                  {{ totalSum }} ₽
                </div>
              </div>
            </div>
            <div class="address-totals">
              <div class="address-totals__header">АДРЕС ДОСТАВКИ</div>
              <div class="address-tottals__content">
                {{ $store.state.delivery.name }} {{ $store.state.delivery.surname }}
                <br>
                <br>
                {{ $store.state.delivery.address }}
                <br>
                <br>
                {{ $store.state.delivery.direction }} {{ $store.state.delivery.index }} {{
                  $store.state.delivery.region
                }}
              </div>
            </div>
            <div class="checkout-submit" @click="catchOrderInfo">
              оплатить
            </div>
            <div class="checkout-subtitle">
              Для оплаты товара необходимо заполнить все поля. Пожалуйста, проверьте
              указанную информацию.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MyHeader from "@/components/UI/Header";
import MyInput from "@/components/UI/MyInput";
import CartTable from "@/components/CartTable";

export default {
  data: () => ({
    cura: 400,
    fitting: 500,
    postRussia: 800,
    deliveryChoose: '',
    saveAddress: false,
    chooseSDEK: ''
  }),
  name: 'Checkout',
  components: {MyInput, MyHeader, CartTable},
  computed: {
    electroSert() {
      if (this.$store.state.cart.length === 1 && this.$store.state.cart[0].product_code === 'RSHV_SERT' && this.$store.state.cart[0].variation_name) {
        if (this.$store.state.cart[0].variation_name.indexOf('Электронный') !== -1) {
          return true;
        }
      } else {
        return false;
      }
    },
    deliveryChooseCost() {
      if (this.deliveryChoose !== '') {
        return this.deliveryChoose.split('/')[0]
      } else {
        return 0;
      }
    },
    deliveryChooseID() {
      if (this.deliveryChoose !== '') {
        return this.deliveryChoose.split('/')[1]
      }
    },
    orderSum() {
      return [...this.$store.state.cart].reduce((acc, elem) => {
        return acc + parseInt(elem.price) * parseInt(elem.amount);
      }, 0);
    },
    sdek() {
      this.deliveryChoose = this.$store.state.takesdek + '/16';
      return this.$store.state.takesdek;
    },
    totalSum() {
      const temp_sum = (parseInt(this.orderSum) + parseInt(this.deliveryChooseCost)) - this.$store.state.couponValue;
      if (temp_sum > 0) {
        return temp_sum;
      } else {
        return 0;
      }
    }
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
    if (localStorage.getItem('saveAddress') != null) {
      this.$store.commit('SET_DELIVERY_FROM_LOCAL', JSON.parse(localStorage.getItem('saveAddress')));
    }
  },
  methods: {
    sdekCount() {
      if (this.$store.state.delivery.city !== '') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/sdek.php',
          body: this.$store.state.delivery.city
        });
      }
    },
    catchPromo() {
      if (this.$store.state.promo !== '') {
        if (this.$store.state.promo.toUpperCase() === 'LOVERUSHEV') {
          const new_sum = (this.orderSum / 100) * 10;
          this.$store.commit('SET_COUPON_VALUE', new_sum);
          this.$store.commit('SET_SERT');
        } else {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/check_sert.php',
            body: this.$store.state.promo
          });
        }
      }
    },
    catchOrderInfo() {
      const regions = {
        AD: 'Республика Адыгея',
        AL: 'Республика Алтай',
        BA: 'Республика Башкортостан',
        BU: 'Республика Бурятия',
        DA: 'Республика Дагестан',
        IN: 'Республика Ингушетия',
        KB: 'Кабардино-Балкарская Республика',
        KL: 'Республика Калмыкия',
        KC: 'Карачаево-Черкесская Республика',
        KR: 'Республика Карелия',
        KO: 'Республика Коми',
        ME: 'Республика Марий Эл',
        MO: 'Республика Мордовия',
        SA: 'Республика Саха (Якутия)',
        SE: 'Республика Северная Осетия — Алания',
        TA: 'Республика Татарстан',
        TY: 'Республика Тыва',
        UD: 'Удмуртская Республика',
        KK: 'Республика Хакасия',
        CE: 'Чеченская Республика',
        CU: 'Чувашская Республика',
        ALT: 'Алтайский край',
        ZAB: 'Забайкальский край',
        KAM: 'Камчатский край',
        KDA: 'Краснодарский край',
        KYA: 'Красноярский край',
        PER: 'Пермский край',
        PRI: 'Приморский край',
        STA: 'Ставропольский край',
        KHA: 'Хабаровский край',
        AMU: 'Амурская область',
        ARK: 'Архангельская область',
        AST: 'Астраханская область',
        BEL: 'Белгородская область',
        BRY: 'Брянская область',
        VLA: 'Владимирская область',
        VGG: 'Волгоградская область',
        VLG: 'Вологодская область',
        VOR: 'Воронежская область',
        IVA: 'Ивановская область',
        IRK: 'Иркутская область',
        KGD: 'Калининградская область',
        KLU: 'Калужская область',
        KEM: 'Кемеровская область',
        KIR: 'Кировская область',
        KOS: 'Костромская область',
        KGN: 'Курганская область',
        KRS: 'Курская область',
        LEN: 'Ленинградская область',
        LIP: 'Липецкая область',
        MAG: 'Магаданская область',
        MOS: 'Московская область',
        MUR: 'Мурманская область',
        NIZ: 'Нижегородская область',
        NGR: 'Новгородская область',
        NVS: 'Новосибирская область',
        OMS: 'Омская область',
        ORE: 'Оренбургская область',
        ORL: 'Орловская область',
        PNZ: 'Пензенская область',
        PSK: 'Псковская область',
        ROS: 'Ростовская область',
        RYA: 'Рязанская область',
        SAM: 'Самарская область',
        SAR: 'Саратовская область',
        SAK: 'Сахалинская область',
        SVE: 'Свердловская область',
        SMO: 'Смоленская область',
        TAM: 'Тамбовская область',
        TVE: 'Тверская область',
        TOM: 'Томская область',
        TUL: 'Тульская область',
        TYU: 'Тюменская область',
        ULY: 'Ульяновская область',
        CHE: 'Челябинская область',
        YAR: 'Ярославская область',
        MOW: 'Москва',
        SPE: 'Санкт-Петербург',
        YEV: 'Еврейская автономная область',
        NEN: 'Ненецкий автономный округ',
        KHM: 'Ханты-Мансийский автономный округ — Югра',
        CHU: 'Чукотский автономный округ',
        YAN: 'мало-Ненецкий автономный округ'
      };
      let region_index = 0;
      Object.values(regions).forEach((elem, index) => {
        if (elem.indexOf(this.$store.state.delivery.direction) !== -1) {
          region_index = index;
        }
      });
      const region_codes = Object.keys(regions);
      let obj = {
        user_id: '0',
        payment_id: '1',
        shipping_id: this.deliveryChooseID,
        user_data: {
          email: this.$store.state.delivery.email,
          b_firstname: this.$store.state.delivery.name,
          b_lastname: this.$store.state.delivery.surname,
          b_address: this.$store.state.delivery.address,
          b_city: this.$store.state.delivery.city,
          b_state: region_codes[region_index],
          b_country: 'RU',
          b_zipcode: this.$store.state.delivery.index,
          b_phone: this.$store.state.delivery.phone,
          s_firstname: this.$store.state.delivery.name,
          s_lastname: this.$store.state.delivery.surname,
          s_address: this.$store.state.delivery.address,
          s_city: this.$store.state.delivery.city,
          s_state: region_codes[region_index],
          s_country: 'RU',
          s_zipcode: this.$store.state.delivery.index,
          s_phone: this.$store.state.delivery.phone
        },
        products: {}
      }
      this.$store.state.cart.forEach(elem => {
        obj.products[elem.product_id] = elem
      });
      if (this.$store.state.couponValue !== 0 && this.$store.state.promo !== '') {
        obj.coupon_codes = {
          1: this.$store.state.promo.toUpperCase()
        }
      }
      let tempEmpty = false;
      Object.values(this.$store.state.delivery).forEach(elem => {
        if (elem === '') {
          tempEmpty = true;
        }
      });
      this.$store.commit('SET_CHECKOUT_EMPTY', tempEmpty);
      if (!this.$store.state.checkoutEmpty && this.deliveryChoose !== '') {
        if (this.saveAddress) {
          localStorage.setItem('saveAddress', JSON.stringify(this.$store.state.delivery));
        }
        localStorage.setItem('rushev_order', JSON.stringify(obj));
        if (this.totalSum > 0) {
          if (this.deliveryChooseID === '15') {
            this.$store.dispatch('PostRequest', {
              url: 'https://rushev.online/server/payment.php',
              //url: 'https://rushev.online/server/payment_test.php',
              body: {
                sum: 500,
                info: ';' + this.$store.state.delivery.name + ' ' + this.$store.state.delivery.surname + ' ' + this.$store.state.delivery.email + ' ' + this.$store.state.delivery.phone
              }
            });
          } else {
            this.$store.dispatch('PostRequest', {
              //url: 'https://rushev.online/server/payment.php',
              url: 'https://rushev.online/server/payment_test.php',
              body: {
                sum: this.totalSum,
                info: ';' + this.$store.state.delivery.name + ' ' + this.$store.state.delivery.surname + ' ' + this.$store.state.delivery.email + ' ' + this.$store.state.delivery.phone
              }
            });
          }
        } else {
          this.$store.dispatch('PostRequest', {
            url: 'https://rushev.online/server/order.php',
            body: obj
          });
          this.$router.push('/');
        }
      } else {
        this.$store.commit('SET_ERROR');
        window.scrollTo(0, 0);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.attention {
  color: #1f82de;
  margin-bottom: rem(53);
}

.closepvz {
  display: none;
}

.checkout {
  padding: rem(50) rem(28) rem(40) rem(48);
}

.checkout-container__header, .delivery-choose__header {
  font-size: rem(24);
  margin-bottom: rem(53);
}

.checkout-container__flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.delivery {
  max-width: rem(693);
  margin: 0 auto;
}

.checkout-total {
  max-width: rem(438);
  margin: 0 auto;
}

.checkout-subtitle {
  font-size: rem(12);
  margin-top: rem(20);
}

.suggest-address, .__content__item {
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin-right: rem(12);
  }

  label {
    font-size: rem(12);
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
    background-color: $button-color-black;
  }
}

.__item_basis {
  flex-basis: 80%;
}

.__content__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(23);

  label {
    font-size: rem(14);
  }

  span {
    font-size: rem(10);
    color: #adb5bd;
  }
}

#forpvz {
  padding-left: rem(25);

  .__content__item {
    display: block;
  }
}

.delivery__contact {
  margin-bottom: rem(53);
}

.__address__header, .__contact__header {
  margin-bottom: rem(23);
}

.__address__input {
  margin-bottom: rem(30);
}

.group {
  display: grid;
  grid-column-gap: rem(5);
  grid-template-columns: repeat(3, 1fr);
}

.half {
  grid-template-columns: repeat(2, 1fr);
}

.delivery-choose {
  margin-top: rem(52);
}

.delivery__price {
  flex-basis: 15%;
  font-size: rem(14);
}

.promocode__header {
  font-size: rem(16);
  margin-bottom: rem(17);
}

.promocode__submit {
  margin-top: rem(17);
  text-align: center;
  text-transform: uppercase;
  padding: rem(16) 0;
  font-size: rem(14);
  color: white;
  background-color: black;
  cursor: pointer;
}

.order-totals {
  padding-top: rem(50);
  padding-bottom: rem(34);
  border-bottom: 1px solid black;
}

.order-totals__item {
  font-size: rem(12);
  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    margin: rem(26) 0;
  }

  .__item__title {
    flex: 1 1 80%;

    span {
      display: block;
      margin-top: rem(10);
    }
  }

  .__item__price {
    flex: 1 1 20%;
    text-align: right;
  }
}

.address-totals {
  margin-top: rem(37);
  font-size: rem(12);
}

.address-totals__header {
  margin-bottom: rem(26);
}

.checkout-submit {
  margin-top: rem(50);
  text-align: center;
  text-transform: uppercase;
  padding: rem(16) 0;
  font-size: rem(14);
  color: white;
  background-color: black;
  cursor: pointer;
}

@media (max-width: em(768, 16)) {
  .attention {
    font-size: rem(12);
  }
  .checkout {
    padding: rem(50) calc(1.25rem + (28 - 20) * ((100vw - 26.75rem) / (768 - 428))) rem(40) calc(1.25rem + (48 - 20) * ((100vw - 26.75rem) / (768 - 428)));
  }
  .__item_basis {
    flex-basis: 80%;
  }
}
</style>
