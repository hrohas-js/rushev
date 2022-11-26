<template>
  <div class="refuind">
    <h2>
      Наш интернет-магазин работает в строгом соответствии с Законом «О защите прав потребителей».
    </h2>
    <div class="refuind__title">
      <p>
        Согласно ст. 25 Закона «О защите прав потребителей», вы можете вернуть или обменять товар надлежащего качества,
        приобретённый в розничном магазине, в течение 14 дней, не считая дня покупки.
      </p>
      <p>
        Согласно ст. 26.1 Закона «О защите прав потребителей», вы вправе вернуть любой товар, приобретённый в
        интернет-магазине, в течение семи дней после получения товара без указания причин возврата.
      </p>
      <p>
        Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские
        свойства, а также документ, подтверждающий факт и условия покупки указанного товара. Отсутствие у потребителя
        документа, подтверждающего факт и условия покупки товара, не лишает его возможности ссылаться на другие
        доказательства приобретения товара у данного продавца.
      </p>
      <p>
        Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства,
        если указанный товар может быть использован исключительно приобретающим его потребителем
        (прим.: если товар изготовлен на заказ).
      </p>
      <p>
        При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по
        договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через
        десять дней со дня предъявления потребителем соответствующего требования.
      </p>
    </div>
    <div class="refuind__title">
      <div class="refuind__title-sub">
        <h2>
          Контакты для связи с магазином по вопросам обмена или возврата товаров:
        </h2>
        <p>
          Email: <a href="mailto:rushevshop@gmail.com">rushevshop@gmail.com</a>
        </p>
        <p>
          Телефон: <a href="tel:+79066345690">+7 906 634 56 90</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'refuind'
}
</script>

<style lang="scss" scoped>
.refuind{
  font-size: rem(16);
  line-height: rem(19);
  margin-left: rem(223);
  max-width: rem(909);
}
h2{
  color: $button-color-blue;
}
.refuind__title{
  p{
    padding-top: rem(17);
  }
}
.refuind__title:last-child{
  display: flex;
  margin-top: rem(73);
  column-gap: rem(73);
  &:before{
    content: "";
    width: 43px;
    height: 91px;
    background: url("https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/href/BLUEPRINT__logo-fire.png") center no-repeat;
    background-size: contain;
    max-width: 100%;
  }
}
@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .refuind{
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.875rem + (19 - 14) * ((100vw - 64rem) / (1440 - 1024)));
    max-width: calc(45rem + (909 - 720) * ((100vw - 64rem) / (1440 - 1024)));
    margin-left: calc(6.875rem + (223 - 110) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .refuind__title:last-child {
    margin-top: calc(2.25rem + (73 - 36) * ((100vw - 64rem) / (1440 - 1024)));
    column-gap: calc(2.25rem + (73 - 36) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .refuind{
    font-size: rem(12);
    line-height: rem(14);
    max-width: calc(23.5625rem + (720 - 377) * ((100vw - 48rem) / (1024 - 768)));
    margin-top: calc(23.5625rem + (720 - 377) * ((100vw - 48rem) / (1024 - 768)));
    margin-left: calc(1.4375rem + (110 - 23) * ((100vw - 48rem) / (1024 - 768)));
  }
  .refuind__title:last-child {
    margin-top: calc(3rem + (36 - 48) * ((100vw - 48rem) / (1024 - 768)));
    column-gap: calc(1.5rem + (36 - 24) * ((100vw - 48rem) / (1024 - 768)));
  }
}

@media (max-width: em(768, 16)){
  .refuind{
    font-size: rem(12);
    line-height: rem(14);
    max-width: 100%;
    padding: rem(30) rem(23);
    margin-left: 0;
  }
  .refuind__title:last-child {
    margin-top: rem(48);
    column-gap: rem(24);
  }
}

</style>
