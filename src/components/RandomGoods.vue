<template>
  <div class="random-goods">
    <goods-item
        v-for="good in randGoods"
        :key="good.product_id"
        :good="good"
    />
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";

export default {
  name: 'randomGoods',
  components: {GoodsItem},
  props: ['randGoods']
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.random-goods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-row-gap: $row-gap-main-mini-goods;
  grid-column-gap: $column-gap-main-mini-goods;
}
.random-goods__image {
  padding-bottom: rem(36);
  display: flex;
}
@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .random-goods {
    grid-row-gap: calc(2.375rem + (54 - 38) * ((100vw - 64rem) / (1440 - 1024)));
    grid-column-gap: calc(3.125rem + (60 - 50) * ((100vw - 64rem) / (1440 - 1024)));
  }
}
@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .random-goods {
    grid-row-gap: calc(1.5rem + (38 - 24) * ((100vw - 26.75rem) / (1023 - 428)));
    grid-column-gap: calc(0.625rem + (50 - 10) * ((100vw - 26.75rem) / (1023 - 428)));
  }
}
@media (max-width: em(768, 16)) {
  .random-goods {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: em(427, 16)) {
  .random-goods {
    grid-row-gap: rem(24);
    grid-column-gap: rem(10);
  }
}
</style>
