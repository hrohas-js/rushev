<template>
  <div class="news">
    <news-title
        v-for="item in $store.state.news.newsHeaders"
        :key="item.id"
        :news="item"
    />
  </div>
</template>

<script>
import NewsTitle from "@/components/NewsTitle";
export default {
  name: 'news',
  components:{
    NewsTitle
  }
}
</script>

<style lang="scss" scoped>
  .news{
    margin-left: rem(206);
    width: rem(919);
  }
  @media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
    .news{
      margin-left: calc(8.625rem + (206 - 138) *((100vw - 64rem) /(1440 - 1024)));
      width: calc(40.9375rem + (919 - 655) *((100vw - 64rem) /(1440 - 1024)));
    }
  }

  @media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
    .news{
      margin-left: calc(5.770125rem + (138 - 92.322) *((100vw - 48rem) /(1024 - 768)));
      width: calc(40.9375rem + (919 - 655) *((100vw - 48rem) /(1024 - 768)));
    }
  }
 @media (max-width: em(767, 16)){
   .news{
     margin-left: 0;
     margin-bottom: rem(94);
     width: auto;
     font-size: rem(14);
   }
 }
</style>
