<template>
  <div class="where">
    <div class="where__img">
      <img
          src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
          alt="star"
      />
    </div>
    <div class="where__title">
      москва
    </div>
    <p>
      <span>ШОУРУМ</span> - пункт выдачи заказов
      Садовая-Триумфальная 4/10
    </p>
    <p>
      По предварительному звонку и договорённости<br>
      <a href="https://api.whatsapp.com/send?phone=79503285233" target="_blank">
        +7 (950) 328-52-33
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'WhereBuy'
}
</script>

<style lang="scss" scoped>
img {
  width: rem(54);
}
.where {
  text-align: center;
  margin: 0 auto;
  span {
    color: $button-color-blue;
  }
  a {
    text-decoration: underline;
  }
}
.where > div, .where > p {
  margin-bottom: 30px;
}
.where__title {
  font-size: rem(16);
  text-transform: uppercase;
  font-weight: 400;
}
@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .where__title, p {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) /(1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .where__title, p {
    font-size: rem(12);
  }
}

@media (max-width: em(767, 16)){
  .where{
    margin-top: rem(27);
    margin-bottom: rem(94);
  }
  .where__title, p{
    font-size: rem(11);
  }
   .where p {
    margin-bottom: rem(15);
  }
}
</style>
