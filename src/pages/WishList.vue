<template>
  <div class="winutils">
    <MyHeader />
    <main :style="{marginTop : this.$store.state.slider.header_height + 'px'}">
      <div class="winutils-content">
        <WishCartTable />
      </div>
    </main>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/UI/Header";
import MyFooter from "@/components/UI/Footer";
import WishCartTable from "@/components/WishTable";

export default {
  components: {
    WishCartTable,
    MyFooter,
    MyHeader
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  }
}
</script>

<style lang="scss" scoped>
  .winutils-content{
    max-width: rem(770);
    margin: $mtop-table-whishlist auto $mbottom-table-whishlist;
  }
  @media (max-width: em(767,16)){
    .winutils-content{
      padding: 0 rem(29);
    }
  }
</style>
