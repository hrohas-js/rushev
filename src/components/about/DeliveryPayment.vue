<template>
  <div class="delivery-payment">
    <div class="delivery-payment__photo">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/deliveryPayment/jpg/deliveryPayment__photo1.webp', loading: 'data:image/gif;base64,R0lGODlh0AKOA4AAAP///wAAACH5BAEAAAEALAAAAADQAo4DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKI5Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3xESAEAADs='}"
          alt="delivery-payment__photo1"
      />
    </div>
    <h1>
      Наш интернет-магазин осуществляет доставку по Россиии и всему миру :
    </h1>
    <div class="delivery-payment__text">
      Сбор заказа составляет от 1 до 3 дней
    </div>
    <div class="delivery-payment__text">
      <h2>
        Для жителей Москвы
      </h2>
      <p>
        В пределах МКАДа доступна доставка нашим курьером<br>
        Стоимость фиксированная — 400₽<br>
        Срок достаки — 1 день
      </p>
    </div>
    <div class="delivery-payment__text">
      <h2>
        Примерка украшений
      </h2>
      <p>
        Если вы находитесь в Москве, то можете выбрать до трёх позиций, и вам доставят их для примерки.
      </p>
      <br>
      <p>
        Стоимость доставки составит — 500₽ независимо от того, приобретёте вы украшения или нет.
      </p>
      <br>
      <p>
        Срок достаки — 1 день
      </p>
    </div>
    <div class="delivery-payment__text">
      <h2>
        Доставка по России
      </h2>
      <p>
        Осуществляется с помощью транспортной службы СДЭК. Срок и стоимость доставки рассчитываются автоматически при
        оформлении заказа, когда вы вводите свои данные.
      </p>
      <div class="delivery-payment__text">
        <h2>
          Доставка по миру
        </h2>
        <p>
          Осуществляется Почтой России. Стоимость доставки фиксированная – 800 рублей. После оформления заказа наш
          менеджер свяжется с вами для уточнения деталей.
        </p>
      </div>
    </div>
    <div class="delivery-payment__photo">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/deliveryPayment/jpg/deliveryPayment__photo2.webp', loading: 'data:image/gif;base64,R0lGODlh0AKOA4AAAP///wAAACH5BAEAAAEALAAAAADQAo4DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKI5Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3xESAEAADs='}"
          alt="deliveryPayment__photo2"
      />
    </div>
    <h2>
      оплатить заказ:
    </h2>
    <div class="delivery-payment__text">
      <p>
        Вы можете оплатить заказ любым из предложенных способов:
      </p>
      <p>
        1. Оплата с помощью Apple Pay на сайте.<br>
        2. Оплата с помощью банковской карты на сайте.<br>
        3. Оплата любым доступным способом при получении в пункте выдачи СДЭК.
      </p>
      <p>
        После оформления и оплаты заказа вы получите электронное письмо с подтверждением заказа и информацией о
        нём.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'delivery-payment'
}
</script>

<style lang="scss" scoped>
img{
  max-width: 100%;
}
h1, h2 {
  text-transform: uppercase;
  text-align: center;
}
h2 {
  color: $button-color-blue;
}
.delivery-payment{
  font-size: rem(16);
  line-height: rem(19);
  margin: 0 auto;
  max-width: rem(287);
}
.delivery-payment__text{
  text-align: center;
  margin: 0 auto;
  max-width: rem(500);
  padding-top: rem(39);
}
.delivery-payment__photo{
  display: flex;
  justify-content: center;
}
.delivery-payment__photo{
  &:first-child{
    margin-bottom:rem(66);
  }
  &:nth-child(7){
    margin-top:rem(66);
  }
}
h2:nth-child(8){
  padding-top: rem(39);
}
@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .delivery-payment{
    max-width: rem(287);
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .delivery-payment{
    margin-top: calc(2.3125rem + (0 - 37) * ((100vw - 26.75rem) / (1024 - 428)));
    max-width: rem(287);
  }
}

@media (max-width: em(768, 16)) {
  .delivery-payment {
    margin-bottom: rem(94);
    font-size: rem(12);
  }
}

@media (max-width: em(427, 16)) and (min-width: em(220, 16)) {
  .delivery-payment{
    margin-top: rem(37);
    max-width: rem(287);
  }
}
</style>
