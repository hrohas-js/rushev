<template>
  <div
      v-if="$route.params.catalogItem === 'constructor' && $store.state.display_width >= 768"
      class="const-body"
  >
    <div class="const-header">
      КАСТОМ
    </div>
    <div class="catalog-constructor">
      <goods-item :good="custom[0]"/>
      <div class="const-banner">
        <img
            src="https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog1.jpg"
            alt="Конструктор"
        />
      </div>
      <goods-item :good="custom[1]"/>
    </div>
    <div class="const-header">
      ХУПЫ
    </div>
    <div class="catalog-constructor">
      <goods-item :good="hoops[2]"/>
      <goods-item :good="hoops[3]"/>
      <goods-item :good="hoops[4]"/>
      <goods-item :good="hoops[0]"/>
      <div class="const-banner">
        <img
            src="https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog2.jpg"
            alt="Конструктор"
        />
      </div>
      <goods-item :good="hoops[1]"/>
    </div>
    <div class="const-header">
      ТРИНКЕТЫ
    </div>
    <div class="catalog-constructor">
      <goods-item v-for="item in trinkets" :key="item.product_id" :good="item" />
    </div>
  </div>
  <div
      v-if="$route.params.catalogItem === 'constructor' && $store.state.display_width < 768"
      class="const-body"
  >
    <div class="const-header">
      КАСТОМ
    </div>
    <div class="catalog-constructor">
      <goods-item :good="custom[0]"/>
      <goods-item :good="custom[1]"/>
    </div>
    <div class="const-banner">
      <img
          src="https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog1.jpg"
          alt="Конструктор"
      />
    </div>
    <div class="const-header">
      ХУПЫ
    </div>
    <div class="catalog-constructor">
      <goods-item :good="hoops[2]"/>
      <goods-item :good="hoops[3]"/>
    </div>
    <goods-item :good="hoops[4]"/>
    <div class="const-banner">
      <img
          src="https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog2.jpg"
          alt="Конструктор"
      />
    </div>
    <div class="catalog-constructor">
      <goods-item :good="hoops[0]"/>
      <goods-item :good="hoops[1]"/>
    </div>
    <div class="const-header">
      ТРИНКЕТЫ
    </div>
    <div class="catalog-constructor">
      <goods-item v-for="item in trinkets" :key="item.product_id" :good="item" />
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'CatalogConstructor',
  components: {
    GoodsItem
  },
  computed: {
    custom() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 4 && elem.product.indexOf('custom') !== -1;
      });
    },
    hoops() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 4 && elem.product.indexOf('Хуп') !== -1;
      });
    },
    trinkets() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 4 && elem.product.indexOf('Тринкет') !== -1;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.catalog-constructor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: rem(72);
  column-gap: rem(50);
}

.const-banner {
  padding-bottom: rem(34);
  display: flex;
}

.const-header {
  margin: rem(125) 0;
  text-align: center;
  font-size: rem(20);
}

.const-body {
  margin-bottom: rem(77);
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-constructor {
    row-gap: calc(0.875rem + (72 - 14) * ((100vw - 64rem) / (1440 - 1024)));
    column-gap: calc(0.625rem + (50 - 10) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-constructor {
    row-gap: rem(14);
    column-gap: rem(10);
  }
}

@media (max-width: em(767, 16)) {
  .catalog-constructor {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: rem(10);
  }
  .const-body {
    margin-bottom: rem(16);
  }
  .const-header {
    margin: rem(82) 0;
  }
  .const-banner {
    margin-top: rem(10);
    img {
      width: 100%;
    }
  }
}

@media (max-width: em(427, 16)) {
  .catalog-constructor {
    row-gap: rem(14);
    column-gap: rem(10);
  }
}
</style>
