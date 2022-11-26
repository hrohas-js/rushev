<template>
  <MyHeader />
  <div
      v-if="$store.state.curentGood != null"
      class="product"
      :class="{productSert:$store.state.curentGood.product_code === 'RSHV_SERT'}"
      :style="{marginTop : this.$store.state.slider.header_height + 'px'}"
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
            <div class="name">{{ $store.state.curentGood.product }}</div>
            <div class="price-flex">
              <div
                  v-if="$store.state.curentGood.product_code !== 'RSHV_SERT'"
                  class="price"
              >
                {{ parseInt($store.state.curentGood.price) }} ₽
              </div>
              <div
                  v-if="$store.state.curentGood.product_code !== 'RSHV_SERT' && $store.state.curentGood.discount"
                  class="price price_old">
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
        <constructor-variants v-if="$store.state.curentGood.product_code.indexOf('_NAME_') !== -1" />
        <sert-variants v-if="$store.state.curentGood.product_code === 'RSHV_SERT'" />
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
        <img
            src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
            alt="star"
        />
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
    dropTest:false
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
    console.log(this.$store.state.goods)
  },
  updated() {
    if(parseInt(this.$route.params.id) !== this.$store.state.curentGood.product_id) {
      this.getProductData();
    }
  },
  methods: {
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

.product-content__info {
  flex: 1 1 27%;
  padding: rem(80) rem(45) rem(80) rem(62);
  background-color: #f8f8f8;
}

.like-button {
  cursor: pointer;
}

.likeFill svg {
  fill: #1F83DE;
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
