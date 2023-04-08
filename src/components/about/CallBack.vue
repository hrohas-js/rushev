<template>
  <div class="callback">
    <div class="callback__pictures">
      <img
          src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
          alt="star"
      />
    </div>
    <div class="title">
      <h1>
        Все интересующие вас вопросы можно уточнить:
      </h1>
      <p>
        WhatsApp<br>
        <a href="https://api.whatsapp.com/send?phone=79066345690" target="_blank">+7 (906) 634-56-90</a>
      </p>
      <p>
        E-Mail<br>
        <a href="mailto:rushev.online@gmail.com" target="_blank">rushev.online@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coll-back'
}
</script>

<style lang="scss" scoped>
img{
  width: rem(54);
}
.callback {
  font-size: rem(16);
  line-height: rem(19);
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: rem(48);
}

p {
  padding-top: rem(30);
}

.title {
  text-align: center;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .callback {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.875rem + (19 - 14) * ((100vw - 64rem) / (1440 - 1024)));
    row-gap: calc(2.875rem + (48 - 46) * ((100vw - 64rem) / (1440 - 1024)));
  }
  p {
    padding-top: calc(1.0625rem + (30 - 17) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .callback {
    font-size: rem(12);
    line-height: rem(14);
    row-gap: calc(2.75rem + (46 - 44) * ((100vw - 48rem) / (1023 - 768)));
  }
  p {
    padding-top: calc(0.9375rem + (17 - 15) * ((100vw - 48rem) / (1023 - 768)));
  }
}

@media (max-width: em(767, 16)) and (min-width: em(429, 16)) {
  .callback {
    margin-top: rem(49);
    font-size: rem(12);
    row-gap: rem(44);
    margin-bottom: rem(116);
  }
  p{
    padding-top: rem(15);
  }
}

@media (max-width: em(428, 16)) {
  .callback {
    margin-top: calc(2.1875rem + (49 - 35) * ((100vw - 13.75rem) / (428 - 220)));
    margin-bottom: calc(5.1765rem + (116 - 82.824) * ((100vw - 13.75rem) / (428 - 220)));
    font-size: calc(0.5rem + (12 - 8) * ((100vw - 13.75rem) / (428 - 220)));
    row-gap: calc(2.46675rem + (44 - 39.468) * ((100vw - 13.75rem) / (428 - 220)));
  }
  p{
    padding-top: calc(0.75rem + (15 - 12) * ((100vw - 13.75rem) / (428 - 220)));
  }
}
</style>
