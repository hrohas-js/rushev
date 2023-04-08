<template>
  <MyHeader />
  <div
      v-if="$store.state.curentGood != null"
      class="product"
      :class="{productSert: $store.state.curentGood.product_code === 'RSHV_SERT'}"
      :style="{marginTop: $store.state.slider.header_height + 'px'}"
  >
    <div class="product-content">
      <div
          v-if="$store.state.curentGood.product_code === 'RSHV_SERT'"
          class="product-content__gallary sert"
      >
        <div class="sert-description" v-html="$store.state.curentGood.full_description" />
        <div class="sert-image">
          <img
              :src="$store.state.curentGood.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp')"
              alt="sert"
          />
        </div>
      </div>
      <div v-else class="product-content__gallary">
        <slider :sliderConfig="images" :imageCount="slidesStep" :slType="true" />
      </div>
      <div
          v-if="!subShowed"
          class="product-content__info"
          :class="{sertInfo:$store.state.curentGood.product_code === 'RSHV_SERT'}"
      >
        <div class="__info__main">
          <div class="name-price">
            <div class="name">
              {{ $store.state.curentGood.product }}
            </div>
            <div class="price-flex">
              <div
                  v-if="$store.state.curentGood.product_code !== 'RSHV_SERT'"
                  class="price"
              >
                {{ parseInt($store.state.curentGood.price) }} ₽
              </div>
              <div
                  v-if="$store.state.curentGood.product_code !== 'RSHV_SERT' && $store.state.curentGood.discount"
                  class="price price_old"
              >
                {{ basePrice }} ₽
              </div>
            </div>
          </div>
          <div class="like-button" :class="{likeFill:productLike}" @click="takeLike">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M24.8719 8.67291L13.084 22.4974C13.031 22.5624 12.9426 22.5624 12.8896 22.4974L1.11929 8.67291C1.01326 8.55919 0.977909 8.39674 1.01325 8.25054L2.21503 2.77597C2.25037 2.59728 2.40943 2.43483 2.60383 2.38609L7.60532 1.02151C7.79973 0.972776 7.99413 1.02151 8.15319 1.13523L12.9603 5.29395C12.9779 5.31019 13.031 5.31019 13.0486 5.29395L17.8557 1.13523C17.9971 1.00527 18.2092 0.972776 18.4036 1.02151L23.4051 2.38609C23.5995 2.43483 23.7585 2.59728 23.7939 2.77597L24.9957 8.25054C25.0133 8.39674 24.978 8.55919 24.8719 8.67291Z"
                  stroke="#1E1E1C" stroke-miterlimit="10"/>
            </svg>
          </div>
        </div>
        <constructor-variants v-if="$store.state.curentGood.product.indexOf('custom') !== -1" />
        <sert-variants v-if="$store.state.curentGood.product_code === 'RSHV_SERT'" />
        <div
            v-if="$store.state.curentGood.product_code === 'RSHV_TR_NAME_1G' || $store.state.curentGood.product_code === 'RSHV_TR_NAME_1S'"
            class="__choose-name"
        >
          <div class="__choose-name__input">
            <input
                type="text"
                class="__metal__input__item"
                placeholder="Введите инициал, который хотите добавить в изделие"
                @input="checkCountInitials"
                @blur="fetchInitials"
                v-model="initials"
            />
          </div>
        </div>
        <AddToCartButton :curID="$route.params.id" :key="$route.params.id" />
        <div
            v-if="$store.state.curentGood.amount === 0"
            class="preorder-text"
        >
          *Изделие доступно для предзаказа. Вы можете оплатить его сейчас, и мы отправим заказ в течение месяца, как только украшение появится в наличии.
        </div>
        <div v-if="$store.state.curentGood.product_code !== 'RSHV_SERT'" class="__info__description">
          <div
              class="__description__item"
              :class="{subActive:sub_description_number === 1 && $store.state.display_width <= 767}"
              @click="subShow(1)"
          >
            Об изделии
          </div>
          <div
              class="__description__item"
              :class="{subActive:sub_description_number === 2 && $store.state.display_width <= 767}"
              @click="subShow(2)"
          >
            Как ухаживать
          </div>
          <div
              class="__description__item"
              :class="{subActive:sub_description_number === 3 && $store.state.display_width <= 767}"
              @click="subShow(3)"
          >
            Доставка товара
          </div>
        </div>
        <div v-if="$store.state.display_width <= 767" class="description__text">
          <div
              v-if="sub_description_number === 1"
              class="sub-header__content"
              v-html="$store.state.curentGood.full_description"
          />
          <div v-if="sub_description_number === 2" class="sub-header__content">
            Все наши изделия покрыты родием. Это благородный металл из платиновой группы, который защищает украшения от
            агрессивного воздействия окружающей среды и потемнений.
            <br>
            <br>
            Мы рекомендуем:
            - Беречь изделия от влаги и косметических средств;
            - Не опрыскивать спреями (лак для волос, парфюм и т.д.);
            - Беречь от падений и ударов, от них украшения могут деформироваться;
            - Хранить изделия в сухом месте при комнатной температуре.
            <br>
            <br>
            Лучше всего для этого подойдут закрытые футляры, коробочки, тканевые мешочки.
            <br>
            <br>
            Примечание:
            Возможна аллергическая реакция.
            <br>
            <br>
            Срок годности и службы товара не ограничен. На изделия распространяется бесплатная услуга покрытия родием.
          </div>
          <div v-if="sub_description_number === 3" class="sub-header__content">
            Наш интернет-магазин осуществляет доставку по Россиии и всему миру :
            <br>
            <br>
            Для жителей Москвы
            <br>
            <br>
            В пределах МКАДа доступна доставка нашим курьером.
            Стоимость фиксированная — 400₽
            <br>
            <br>
            Примерка украшений
            <br>
            <br>
            Если вы находитесь в Москве, то можете выбрать до трёх позиций, и вам доставят их для примерки.
            Стоимость доставки составит — 500₽ независимо от того, приобретёте вы украшения или нет.
            <br>
            <br>
            Доставка по России
            <br>
            <br>
            Осуществляется с помощью транспортной службы СДЭК. Срок и стоимость доставки рассчитываются автоматически
            при оформлении заказа, когда вы вводите свои данные.
            <br>
            <br>
            Доставка по миру
            Осуществляется Почтой России. Стоимость доставки фиксированная – 800 рублей. После оформления заказа наш
            менеджер свяжется с вами для уточнения деталей.
          </div>
        </div>
      </div>
      <div class="product-content__info" v-else-if="$store.state.display_width > 768" :class="{sub:subShowed}">
        <div class="sub-header">
          <div v-if="sub_description_number === 1" class="sub-header__text">
            Об изделии
          </div>
          <div v-if="sub_description_number === 2" class="sub-header__text">
            Как ухаживать
          </div>
          <div v-if="sub_description_number === 3" class="sub-header__text">
            Доставка и оплата
          </div>
          <div class="sub-header__close" @click="subShowed = false">
            <img src="@/assets/img/svg/deleteWishButton.svg" alt="close">
          </div>
        </div>
        <div
            v-if="sub_description_number === 1"
            class="sub-header__content"
            v-html="$store.state.curentGood.full_description"
        />
        <div v-if="sub_description_number === 2" class="sub-header__content">
          Все наши изделия покрыты родием. Это благородный металл из платиновой группы, который защищает украшения от
          агрессивного воздействия окружающей среды и потемнений.
          <br>
          <br>
          Мы рекомендуем:
          - Беречь изделия от влаги и косметических средств;
          - Не опрыскивать спреями (лак для волос, парфюм и т.д.);
          - Беречь от падений и ударов, от них украшения могут деформироваться;
          - Хранить изделия в сухом месте при комнатной температуре.
          <br>
          <br>
          Лучше всего для этого подойдут закрытые футляры, коробочки, тканевые мешочки.
          <br>
          <br>
          Примечание:
          Возможна аллергическая реакция.
          <br>
          <br>
          Уточнить состав изделия можно на нашем сайте: rushev.online или написав нам на почту: rushevshop@gmail.com
          <br>
          <br>
          Срок годности и службы товара не ограничен. На изделия распространяется бесплатная услуга покрытия родием.
        </div>
        <div v-if="sub_description_number === 3" class="sub-header__content">
          Наш интернет-магазин осуществляет доставку по Россиии и всему миру :
          <br>
          <br>
          Для жителей Москвы
          <br>
          <br>
          В пределах МКАДа доступна доставка нашим курьером.
          Стоимость фиксированная — 400₽
          <br>
          <br>
          Примерка украшений
          <br>
          <br>
          Если вы находитесь в Москве, то можете выбрать до трёх позиций, и вам доставят их для примерки.
          Стоимость доставки составит — 500₽ независимо от того, приобретёте вы украшения или нет.
          <br>
          <br>
          Доставка по России
          <br>
          <br>
          Осуществляется с помощью транспортной службы СДЭК. Срок и стоимость доставки рассчитываются автоматически при
          оформлении заказа, когда вы вводите свои данные.
          <br>
          <br>
          Доставка по миру
          Осуществляется Почтой России. Стоимость доставки фиксированная – 800 рублей. После оформления заказа наш
          менеджер свяжется с вами для уточнения деталей.
        </div>
      </div>
    </div>
    <div v-if="$store.state.curentGood.product_code !== 'RSHV_SERT'" class="other-products">
      <div class="other-products__item">
        <goods-item
            v-for="good in similarGoods"
            :key="good.product_id"
            :good="good"
        />
      </div>
      <div class="star-image">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 156.2 147.2" style="enable-background:new 0 0 156.2 147.2;" xml:space="preserve">
          <g>
            <path class="st0" d="M52.1,76.1c0,0.3-0.1,0.5-0.3,0.7C51.6,76.9,51.3,77,51,77h-2.4v-1.9H51c0.4,0,0.6,0.1,0.8,0.2
              C52,75.6,52.1,75.8,52.1,76.1z"/>
                      <path d="M113.4,88.5l42.2-32.1c1.1-0.8,0.5-2.6-0.9-2.6h-54c-1.7,0-3.3-1.1-3.8-2.7L79.5,1c-0.5-1.3-2.3-1.3-2.7,0
              L59.3,51.1c-0.6,1.6-2.1,2.7-3.8,2.7h-54c-1.4,0-2,1.8-0.9,2.6l42.2,32.1c1.4,1,1.9,2.8,1.4,4.4l-16.5,52.4c-0.4,1.3,1,2.4,2.2,1.6
              l48.2-31.5l48.2,31.5c1.1,0.8,2.6-0.4,2.2-1.6L112,93C111.5,91.3,112.1,89.6,113.4,88.5z M51.9,81.5l-1.7-2.9h-1.7v2.9H47v-7.9h4
              c0.5,0,1,0.1,1.4,0.3c0.4,0.2,0.7,0.5,1,0.9c0.2,0.4,0.3,0.8,0.3,1.3c0,0.6-0.2,1-0.5,1.5c-0.3,0.4-0.7,0.7-1.3,0.9l1.8,3.1H51.9z
               M65.2,78.4c0,0.6-0.2,1.2-0.4,1.6c-0.3,0.5-0.7,0.9-1.2,1.1c-0.5,0.3-1.1,0.4-1.8,0.4c-0.7,0-1.3-0.1-1.8-0.4
              c-0.5-0.3-0.9-0.7-1.2-1.1c-0.3-0.5-0.4-1-0.4-1.6v-4.8h1.5v4.8c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.8,0.5,1.4,0.5
              c0.6,0,1.1-0.2,1.4-0.5c0.3-0.3,0.5-0.7,0.5-1.2v-4.8h1.5V78.4z M75.3,80.6c-0.3,0.3-0.7,0.6-1.2,0.8c-0.5,0.2-1.1,0.2-1.7,0.2
              c-1.1,0-2.5-0.7-2.9-1.2l1.1-1c0.2,0.1,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,1.1,0.2c0.6,0,1,0,1.3-0.2c0.3-0.1,0.4-0.3,0.4-0.6
              c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.6-0.2-1.1-0.3c-1-0.2-1.7-0.5-2.1-0.9c-0.5-0.4-0.7-0.9-0.6-1.6
              c0-0.5,0.2-0.9,0.4-1.2c0.3-0.4,0.6-0.6,1.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0,0.9,0.1,1.3,0.3c0.2,0.1,0.3,0.2,0.5,0.3
              c0.4,0.2,0.5,0.4,0.7,0.6l-1.1,1.1c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.5-0.2-0.9-0.2h-0.2c-0.3,0-0.6,0.1-0.8,0.2
              c-0.3,0.1-0.4,0.3-0.4,0.5c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.5,0.3c0.2,0.1,0.6,0.2,1,0.3c0.7,0.2,1.2,0.4,1.6,0.6
              c0.4,0.2,0.7,0.5,0.9,0.8c0.2,0.3,0.3,0.7,0.3,1.2C75.8,79.9,75.6,80.3,75.3,80.6z M87.2,81.5h-1.5v-3.2h-3.9v3.2h-1.5v-7.9h1.5
              v3.2h3.9v-3.2h1.5V81.5z M98.1,75.1h-4.4v1.6h4.4v1.6h-4.4V80h4.4v1.6h-5.9v-7.9h5.9V75.1z M106.9,81.5h-1.7l-2.9-7.9h1.6l2.2,5.8
              l2.2-5.8h1.6L106.9,81.5z" fill="#020203" />
          </g>
        </svg>
      </div>
      <div class="other-products__item">
        <goods-item
            v-for="good in moreGoods"
            :key="good.product_id"
            :good="good"
        />
      </div>
    </div>
  </div>
  <MyFooter />
</template>

<script>
import MyHeader from "@/components/UI/Header";
import MyFooter from "@/components/UI/Footer";
import AddToCartButton from "@/components/UI/AddToCartButton";
import Slider from "@/components/Slider";
import ConstructorVariants from "@/components/ConstructorVariants";
import SertVariants from "@/components/SertVariations";
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'Product',
  components: {GoodsItem, SertVariants, ConstructorVariants, Slider, AddToCartButton, MyFooter, MyHeader},
  data: () => ({
    sub_description_number: 1,
    subShowed: false,
    dropTest:false,
    initials: '',
    initialsPlaceholder: ''
  }),
  computed: {
    basePrice() {
      let count = this.$store.state.curentGood.base_price;
      let newCount = count.split('.');
      return parseInt(newCount[0]);
    },
    images() {
      let imgs = [];
      const temp = Object.values(this.$store.state.curentGood.image_pairs);
      imgs.push({
        src: this.$store.state.curentGood.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp'),
        subsrc: this.$store.state.curentGood.main_pair.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp')
      });
      temp.forEach(elem => {
        imgs.push({
          src: elem.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp'),
          subsrc: elem.detailed.image_path.replace(/\.jpg|\.png/gi, '.webp')
        });
      });
      return imgs;
    },
    slidesStep() {
      if (this.$store.state.display_width < 1440 && this.$store.state.display_width > 1290) {
        return this.$store.state.display_width * 0.0013888889;
      } else if (this.$store.state.display_width <= 1289) {
        return 1;
      } else {
        return 2;
      }
    },
    similarGoods() {
      if (this.$store.state.display_width > 768) {
        if (this.$store.state.curentGood.category_ids[0] === '1' || this.$store.state.curentGood.product_code.indexOf('_S1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
        if (this.$store.state.curentGood.category_ids[0] === '2' || this.$store.state.curentGood.product_code.indexOf('_E1') !== -1 || this.$store.state.curentGood.category_ids[0] === '6') {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 2 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
        if (this.$store.state.curentGood.category_ids[0] === '3' || this.$store.state.curentGood.product_code.indexOf('_B1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 3 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
      } else {
        if (this.$store.state.curentGood.category_ids[0] === '1' || this.$store.state.curentGood.product_code.indexOf('_S1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
        if (this.$store.state.curentGood.category_ids[0] === '2' || this.$store.state.curentGood.product_code.indexOf('_E1') !== -1 || this.$store.state.curentGood.category_ids[0] === '6') {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 2 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
        if (this.$store.state.curentGood.category_ids[0] === '3' || this.$store.state.curentGood.product_code.indexOf('_B1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 3 && parseInt(elem.product_id) !== this.$store.state.curentGood.product_id;
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
      }
    },
    moreGoods() {
      if (this.$store.state.display_width > 768) {
        if (this.$store.state.curentGood.category_ids[0] === '1' || this.$store.state.curentGood.product_code.indexOf('_S1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 2 || elem.category_ids[0] === 3
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
        if (this.$store.state.curentGood.category_ids[0] === '2' || this.$store.state.curentGood.product_code.indexOf('_E1') !== -1 || this.$store.state.curentGood.category_ids[0] === '6') {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 || elem.category_ids[0] === 3;
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
        if (this.$store.state.curentGood.category_ids[0] === '3' || this.$store.state.curentGood.product_code.indexOf('_B1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 || elem.category_ids[0] === 2;
          }).sort(() => Math.random() - 0.5).slice(0, 3);
        }
      } else {
        if (this.$store.state.curentGood.category_ids[0] === '1' || this.$store.state.curentGood.product_code.indexOf('_S1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 2 || elem.category_ids[0] === 3
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
        if (this.$store.state.curentGood.category_ids[0] === '2' || this.$store.state.curentGood.product_code.indexOf('_E1') !== -1 || this.$store.state.curentGood.category_ids[0] === '6') {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 || elem.category_ids[0] === 3;
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
        if (this.$store.state.curentGood.category_ids[0] === '3' || this.$store.state.curentGood.product_code.indexOf('_B1') !== -1) {
          return [...this.$store.state.goods].filter(elem => {
            return elem.category_ids[0] === 1 || elem.category_ids[0] === 2;
          }).sort(() => Math.random() - 0.5).slice(0, 4);
        }
      }
    },
    productLike() {
      let fl = false;
      this.$store.state.wishGoods.forEach(elem => {
        if(elem.product_id === parseInt(this.$route.params.id)) {
          fl = true;
        }
      });
      return fl;
    }
  },
  mounted() {
    this.getProductData();
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
    console.log(this.$store.state.goods);
  },
  updated() {
    if(parseInt(this.$route.params.id) !== this.$store.state.curentGood.product_id) {
      this.getProductData();
    }
  },
  methods: {
    fetchInitials() {
      if (this.initials !== '') {
        this.$store.commit('CHANGE_CURRENTGOOD', this.initials);
      }
    },
    checkCountInitials() {
      if (this.initials.length > 1) {
        this.initials = this.initials.slice(0, this.initials.length - 1);
      }
    },
    subShow(num) {
      this.sub_description_number = num;
      if (this.$store.state.display_width > 768) {
        this.subShowed = true;
      }
    },
    getProductData() {
      this.$store.dispatch('PostRequest', {
        url: 'https://rushev.online/server/product_id.php',
        body: this.$route.params.id
      });
    },
    takeLike() {
      let flag = false;
      this.$store.state.wishGoods.forEach(elem => {
        if(elem.product_id === parseInt(this.$route.params.id)) {
          flag = true;
        }
      });
      if (!flag) {
        this.$store.commit('ADD_TO_WISH_LIST', this.$store.state.curentGood);
      } else {
        this.$store.commit('REMOVE_FROM_WISH_LIST', this.$store.state.curentGood.product_id);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.productSert {
  margin-bottom: rem(100);
}

.product-content {
  display: flex;
}

.product-content__gallary {
  flex: 1 1 73%;
}

.sert {
  display: flex;
}

.sert-description {
  flex: 1 1 47%;
  background-color: #f8f8f8;
  padding: rem(160) rem(87) 0 rem(93);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: rem(13);
  font-size: rem(13);
  font-weight: 300;
}

.sert-image {
  flex: 1 1 53%;
  display: flex;

  img {
    height: 100%;
  }
}

.__choose-name {
  margin-top: rem(28);
}

.product-content__info {
  flex: 1 1 27%;
  padding: rem(80) rem(45) rem(80) rem(62);
  background-color: #f8f8f8;
}

.like-button {
  cursor: pointer;
}

.likeFill svg {
  fill: #000000;
  stroke: none;
}

.sertInfo {
  flex: 1 1 32%;
  padding: rem(160) rem(87) 0 rem(93);
  box-sizing: border-box;
}

.sub {
  padding: rem(30) rem(45) rem(30) rem(66);
}

.subActive {
  padding-bottom: rem(10);
  border-bottom: 1px solid;
}

.__info__main {
  display: flex;
  justify-content: space-between;

  .name {
    font-size: $fs-good-name;
  }
  .price-flex {
    display: flex;
    gap: rem(25);
    margin-top: rem(5);
  }
  .price {
    font-size: $fs-good-cost;
  }
  .price_old {
    text-decoration: line-through;
    color: #898989;
  }
}

.__info__description {
  display: flex;
  justify-content: space-between;
}

.__description__item {
  font-size: $fs-good-about-product;
  cursor: pointer;
}

.description__text {
  margin-top: rem(30);
}

.sub-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(30);
}

.sub-header__text {
  font-size: rem(24);
}

.sub-header__content {
  font-size: rem(14);
  font-weight: 300;
}

.sub-header__close {
  cursor: pointer;
}

.other-products {
  padding: rem(50) rem(126) rem(235) rem(126);
}

.other-products__item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: $column-gap-main-mini-goods;
}

.star-image {
  margin: rem(66) 0;
  display: flex;
  justify-content: center;
  svg {
    width: rem(72);
  }
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

.preorder-text {
  font-size: rem(10);
  margin-bottom: rem(30);
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .product-content__info {
    padding: rem(80) calc(2.3125rem + (45 - 37) * ((100vw - 64rem) / (1440 - 1024))) rem(80) calc(2.8125rem + (62 - 45) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .sert-description, .sertInfo {
    padding: calc(5rem + (160 - 80) * ((100vw - 64rem) / (1440 - 1024))) calc(2.5rem + (87 - 40) * ((100vw - 64rem) / (1440 - 1024))) 0 calc(2.5rem + (93 - 40) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .other-products {
    padding: rem(50) calc(2rem + (126 - 32) * ((100vw - 64rem) / (1440 - 1024))) calc(12.125rem + (235 - 194) * ((100vw - 64rem) / (1440 - 1024))) calc(2rem + (126 - 32) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .other-products__item {
    grid-column-gap: calc(3.125rem + (60 - 50) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .product-content__gallary {
    flex: 1 1 50%;
  }
  .product-content__info {
    padding: rem(80) rem(37) rem(80) rem(45);
  }
  .sub {
    padding: rem(20) rem(37) rem(20) rem(45);
  }
  .sert-description, .sertInfo {
    padding: rem(80) rem(40) 0 rem(40);
  }
  .other-products {
    padding: rem(50) calc(0.625rem + (32 - 10) * ((100vw - 48rem) / (1023 - 768))) rem(194) calc(0.625rem + (32 - 10) * ((100vw - 48rem) / (1023 - 768)));
  }
  .other-products__item {
    grid-column-gap: calc(0.625rem + (50 - 10) * ((100vw - 48rem) / (1023 - 768)));
  }
}

@media (max-width: em(767, 16)) {
  .product-content, .sert {
    display: block;
  }
  .product-content__info {
    background-color: white;
    padding: rem(64) rem(20);
  }
  .__description__item {
    font-size: rem(14);
  }
  .sert-description {
    display: none;
  }
  .sert-image {
    display: flex;
    justify-content: center;
  }
  .other-products {
    padding: rem(50) rem(10) rem(194) rem(10);
  }
  .other-products__item {
    grid-column-gap: rem(10);
    grid-row-gap: rem(20);
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
