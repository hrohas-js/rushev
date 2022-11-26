<template>
  <div v-if="$store.getters.wish_count > 0" class="wc-table__container">
    <div v-if="$store.state.display_width > 767" class="__content__rows">
      <div class="good-name">
        НАИМЕНОВАНИЕ
      </div>
      <div class="good-price">
        СУММА
      </div>
    </div>
    <wish-item
        v-for="good in $store.state.wishGoods"
        :key="good.product_id"
        :wishgood="good"
    />
  </div>
  <div v-else class="without-good">
    НЕТ ПОНРАВИВШИХСЯ ТОВАРОВ !
  </div>
</template>
<script>
import WishItem from "@/components/WishItem";
export default {
  name: 'wishcarttable',
  components: {WishItem},
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.wc-table__container {
  &:first-child {
    .good-name {
      grid-column: 2/3;
    }
  }
}

.good-name, .good-price {
  font-size: $fs-wish-list-title;
}

.__content__rows {
  display: grid;
  grid-template-columns: rem(121) repeat(2, 1fr) 1.038fr;
  grid-gap: rem(50);
  align-items: center;
  padding: $pup-row-table-whishlist 0;
  border-bottom: 1px solid;
}

.add-to-bascet {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-column {
  height: 100%;
}


.without-good {
  display: flex;
  text-align: center;
  justify-content: center;
}

@media (max-width: em(767, 16)) {
  .__content__rows {
    grid-gap: rem(16);
  }
}

@media (max-width: em(428, 16)) and (min-width: em(220, 16)) {
  .__content__rows {
    grid-gap: calc(0.625rem + (16 - 10) * ((100vw - 13.75rem) / (428 - 220)));
  }
}
</style>
