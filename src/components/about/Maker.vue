<template>
  <section class="about">
    <div class="brand">
      <div class="brand__photo">
        <img
            v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/about/maker/maker1.webp', loading: 'data:image/gif;base64,R0lGODlhzwKIA4AAAP///wAAACH5BAEAAAEALAAAAADPAogDAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKIyFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd7+iuAgAAOw=='}"
            alt="some photo"
            class="brand__photo__img"
        />
      </div>
      <div class="brand__text">
        <p>
          Бренд RUSHEV – авторский проект дизайнера украшений Георгия Рушева, основанный в 2010 году.
        </p>
        <p>
          Георгий родом из Екатеринбурга. Он начал свой путь с массивных, броских statement-украшений, колье и головных
          уборов. В 2008 году Георгий создал свою первую коллекцию шляпок для локального концепт-стора Liberty.
        </p>
      </div>
    </div>
    <div class="rushev-product">
      <div class="rushev-product__text">
        <p>
          Изделия RUSHEV не просто аксессуары. Это высказывание и доминирующий элемент стиля, вокруг которого
          собирается образ. Основные идеи бренда – творчество, изобилие, смелость и бесконечные эксперименты. Георгий
          объединяет благородный металл и пластик, барочный жемчуг и кристаллы, современные сплавы и
        </p>
        <p>
          Украшения RUSHEV созданы для ярких и сильных личностей, которые не боятся показать свою индивидуальность и
          сиять 24/7, будь то шумная вечеринка, деловая встреча или ужин с семьёй.
        </p>
        <div class="rushev-product__some-img">
          <img src="@/assets/img/svg/earrings.svg" alt="some img" class="earrings">
        </div>
      </div>
      <div class="rushev-product__photo">
        <img
            v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/about/maker/maker2.webp', loading: 'data:image/gif;base64,R0lGODlhHwH9AYAAAP///wAAACH5BAEAAAEALAAAAAAfAf0BAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fww+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiBAUAADs='}"
            alt="some photo"
            class="rushev-product__photo__img"
        />
        <img
            src="@/assets/img/svg/bracelet.svg"
            alt="make goods"
            class="picture_before"
        />
      </div>
    </div>
    <div class="rushev">
      <div class="rushev__photo">
        <video class="rushev_photo__img" controls>
          <source
              src="https://u1600792.isp.regruhosting.ru/img_server/about/maker/maker3.mp4"
              type="video/mp4"
          />
        </video>
      </div>
      <div class="rushev__text">
        <div>
          <p>
            Георгий сотрудничал с брендами Alena Akhmadullina и Bessarion, представил серию чехлов для зажигалок в
            коллаборации с Bic, создал эксклюзивные браслеты для членов клуба Фаустуса – проекта Константина Богомолова.
            Бренд RUSHEV был представлен на Mercedes-Benz Fashion Week Russia, в Париже и в Милане.
          </p>
          <p>
            Сейчас Георгия увлекают простые формы и минимализм. Неизменным остаётся одно: все изделия собираются
            полностью вручную, а коллекции выпускаются ограниченным тиражом.
          </p>
        </div>
        <div class="neck-rushev">
          <img
              src="@/assets/img/svg/necklace.svg"
              alt="rushew"
              class="rushev__photo_before"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'maker'
}
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
}

.about {
  margin-left: rem(167);
  margin-right: rem(50);
  img {
    max-width: 100%;
  }
}

.brand {
  display: flex;
  column-gap: rem(44.25);
}

.brand__text {
  width: 569px;
}

.neck-rushev {
  width: unset !important;
  position: relative;
  img {
    height: 100%;
  }
}

p {
  line-height: $lh-footer-section-text;
  text-align: justify;
  margin-bottom: rem(26);

  &:last-child {
    margin-bottom: 0;
  }
}

.brand__text {
  align-self: center;
}

.rushev-product {
  display: flex;
  justify-content: space-between;
  column-gap: rem(125);
  margin-top: rem(120);
  margin-bottom: rem(140);

  p:nth-child(2) {
    margin-bottom: rem(110);
  }
}

.rushev-product__text {
  max-width: 569.66px;
}

.rushev-product__photo, .rushev__photo {
  position: relative;
}

.rushev-product__some-img {
  display: flex;
  justify-content: center;
}

.picture_before {
  width: rem(137.47);
  position: absolute;
  top: -14%;
  left: -22%;
}

.rushev__text {
  margin-top: rem(105);
  display: flex;
  justify-content: space-between;
}

.rushev__text > div {
  width: rem(702);
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .about {
    margin-left: calc(7.625rem + (167 - 122) * ((100vw - 64rem) / (1440 - 1024)));
    margin-right: calc(1.9375rem + (50 - 31) * ((100vw - 64rem) / (1440 - 1024)));
  }
  p {
    font-size: calc(0.725rem + (16 - 11.6) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.875rem + (20 - 14) * ((100vw - 64rem) / (1440 - 1024)));
    margin-bottom: calc(1.0625rem + (26 - 17) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .brand {
    column-gap: calc(1.90875rem + (44.25 - 30.54) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .brand__text {
    width: calc(24.5675rem + (569 - 393.08) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .rushev-product {
    column-gap: calc(5.3125rem + (125 - 85) * ((100vw - 64rem) / (1440 - 1024)));
    margin-top: calc(5.125rem + (125 - 82) * ((100vw - 64rem) / (1440 - 1024)));
    margin-bottom: calc(4.375rem + (140 - 70) * ((100vw - 64rem) / (1440 - 1024)));

    p:nth-child(2) {
      margin-bottom: calc(4.5625rem + (110 - 73) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
  .rushev__text {
    margin-top: calc(3.875rem + (105 - 62) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .brand__photo__img {
    width: calc(15.47125rem + (360 - 247.54) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .picture_before {
    width: calc(5.930625rem + (137.47 - 94.86) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .rushev-product__photo__img {
    width: calc(12.345rem + (280 - 197.52) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .earrings {
    width: calc(10.151875rem + (236 - 162.43) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .rushev_photo__img {
    width: calc(42.02625rem + (976 - 672.46) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .brand__photo__img {
    width: calc(10.14914rem + (247.54 - 162.38624) * ((100vw - 48rem) / (1023 - 768)));
  }
  .picture_before {
    width: calc(4.0908375rem + (94.86 - 65.4534) * ((100vw - 48rem) / (1023 - 768)));
  }
  .rushev-product__photo__img {
    width: calc(9.937725rem + (197.52 - 159.0036) * ((100vw - 48rem) / (1023 - 768)));
  }
  .earrings {
    width: calc(6.903275rem + (162.43 - 110.4524) * ((100vw - 48rem) / (1023 - 768)));
  }
  .rushev_photo__img {
    width: calc(33.118655rem + (672.46 - 529.89848) * ((100vw - 48rem) / (1023 - 768)));
  }

  p {
    font-size: calc(0.525625rem + (11.6 - 8.41) * ((100vw - 48rem) / (1023 - 768)));
    line-height: calc(0.6125rem + (14 - 9.8) * ((100vw - 48rem) / (1023 - 768)));
    margin-bottom: calc(0.27625rem + (17 - 4.42) * ((100vw - 48rem) / (1023 - 768)));
  }
  .brand {
    column-gap: calc(1.3170375rem + (30.54 - 21.0726) * ((100vw - 48rem) / (1023 - 768)));
  }
  .brand__text {
    width: calc(21.865075rem + (393.08 - 349.8412) * ((100vw - 48rem) / (1023 - 768)));
  }
  .rushev-product {
    column-gap: calc(4.675rem + (85 - 74.8) * ((100vw - 48rem) / (1023 - 768)));
    margin-top: calc(4.1rem + (82 - 53.0546) * ((100vw - 48rem) / (1023 - 768)));
    margin-bottom: calc(2.1875rem + (70 - 35) * ((100vw - 48rem) / (1023 - 768)));

    p:nth-child(2) {
      margin-bottom: calc(3.056875rem + (73 - 48.91) * ((100vw - 48rem) / (1023 - 768)));
    }
  }
  .rushev__text {
    margin-top: calc(2.28625rem + (62 - 36.58) * ((100vw - 48rem) / (1023 - 768)));
    margin-bottom: calc(9.3625rem + (199 - 149.8) * ((100vw - 48rem) / (1023 - 768)));
  }
}

@media (max-width: em(767, 16)) {
  .neck-rushev {
    img {
      position: relative;
      height: auto;
    }
  }
  .about {
    margin: 0;
  }
  p {
    font-size: rem(11.695);
    line-height: rem(14);
  }
  .brand {
    display: block;
  }
  .brand__photo {
    img {
      width: 100%;
    }
  }
  .brand__text, .rushev__text, .rushev-product {
    width: auto;
    padding: rem(35) rem(18) rem(70);
  }
  .brand__text {
    //padding-bottom: rem(70);
    &:first-child {
      margin-bottom: rem(20);
    }
  }
  .rushev-product__photo__img, .rushev_photo__img {
    max-width: 100%;
  }
  .earrings {
    display: none;
  }
  .rushev-product__text, .rushev-product__photo {
    flex: 1 1 50%;
  }
  .rushev-product {
    margin: 0;
    column-gap: rem(16);
    align-items: flex-end;
  }
  .rushev-product__text {
    p:nth-child(2) {
      margin: 0;
    }
  }
  .picture_before {
    width: rem(94);
  }
  .rushev__photo_before {
    position: static;
  }
  .rushev__text {
    margin-top: 0;
    display: flex;
    column-gap: rem(29);

    p:first-child {
      margin-bottom: rem(20);
    }
  }
}

@media (max-width: em(400, 16)) {
  .picture_before {
    display: none;
  }
  .rushev-product {
    flex-direction: column-reverse;
    align-items: normal;
  }
  .rushev-product__photo__img {
    width: 100%;
  }
  .rushev-product__text {
    padding-top: rem(10);
  }
}
</style>
