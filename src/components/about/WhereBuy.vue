<template>
  <div class="where">
    <div class="whereBuy__photo">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/about/WhereBuy/webp/whereBuy.webp', loading: 'data:image/gif;base64,R0lGODlh0AKOA4AAAP///wAAACH5BAEAAAEALAAAAADQAo4DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKI5Fa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3xESAEAADs='}"
          alt="шоурум"
      />
    </div>
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
      12:00 - 20:00<br>
      Работаем только в будние дни<br>
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
.whereBuy__photo{
  img{
    width: 100%;
  }
}
.where__title {
  font-size: rem(16);
  text-transform: uppercase;
  font-weight: 400;
}
.where__img{
  img{
    max-width: em(54,16);
  }
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
