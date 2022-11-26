<template>
  <div class="content-items" :class="{noGrid:searchFilter.length === 0}">
    <goods-item v-for="good in searchFilter" :key="good.product_id" :good="good" :search="true" />
    <div v-if="searchFilter.length === 0" class="no-result">
        Coвпадения не найдены !
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";
export default {
  name:'searchContent',
  props:['searchLine'],
  components: {GoodsItem},
  computed:{
    searchFilter(){
     return [...this.$store.state.goods].filter(elem => {
        return elem.product.toLowerCase().indexOf(this.searchLine.toLowerCase()) !== -1 && elem.product_code.indexOf('_NAME_') === -1 && elem.product_code.indexOf('SERT') === -1;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content-items{
  padding-left: rem(21);
  padding-right: rem(168);
  padding-bottom: rem(81);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: rem(11);
}
.noGrid{
  display: flex;
  justify-content: center;
  padding-bottom: rem(10);
}
.no-result{
  text-align: center;
}
@media (max-width: em(1024, 16)){
  .content-items{
    padding-left: rem(10);
    padding-right: rem(168);
    padding-bottom: rem(81);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: rem(11);
  }
}
@media (max-width: em(767, 16)){
  .content-items{
  padding-left: rem(10);
  padding-right: rem(10);
  padding-bottom: rem(81);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: rem(11);
  }
}
</style>
