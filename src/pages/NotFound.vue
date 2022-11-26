<template>
  <MyHeader />
  <div class="not-found" :style="{marginTop : this.$store.state.slider.header_height + 'px'}">
    <img src="https://u1600792.isp.regruhosting.ru/img_server/404.png" alt="404">
    <div>
      ошибка 404
    </div>
    <div>
      страница не найдена
    </div>
    <div>
      Вы находитесь здесь потому, что
      запрашиваемая страница не существует
    </div>
  </div>
  <MyFooter />
</template>

<script>
import MyHeader from "@/components/UI/Header";
import MyFooter from "@/components/UI/Footer";
export default {
  name: 'NotFound',
  components: {
    MyFooter,
    MyHeader
  },
  mounted() {
    this.$store.commit('slider/SET_MAIN_SCROLL', true);
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  flex: 1 0 auto;
  max-width: rem(400);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: rem(30);
  img {
    max-width: 100%;
  }
  div {
    text-align: center;
  }
  div:nth-child(2) {
    text-transform: uppercase;
    font-size: rem(16);
  }
  div:nth-child(3) {
    text-transform: uppercase;
    font-size: rem(16);
    font-weight: 300;
  }
  div:last-child {
    font-size: rem(16);
    font-weight: 300;
  }
}
</style>
