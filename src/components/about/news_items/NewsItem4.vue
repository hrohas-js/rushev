<template>
  <article v-if="$store.state.display_width >= 768" class="new">
    <section class="new-description">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/VOGUE/photo/vogue__photo1.webp', loading: 'data:image/gif;base64,R0lGODlhhAHpAYAAAP///wAAACH5BAEAAAEALAAAAACEAekBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyN+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyVMBADs='}"
          alt="VOGUE"
      />
      <div class="linc-article">
        <p class="text">
          Ссылка на статью:
          <a href="https://www.vogue.ru/fashion/kseniya-soloveva-o-majskom-nomere-vogue-rossiya" target="_blank">
            VOGUE
          </a>
        </p>
      </div>
    </section>
    <section class="new__item">
      <h1>
        УСЛЫШЬТЕ НАС
      </h1>
      <p>
        В 2021 в майском номере журнала VOGUE RUSSIA наша серьга с подвеской-лезвием.
      </p>
      <p>
        Эту подвеску можно снять с серьги и носить ее вместе с чокером, цепочкой или браслетом.
      </p>
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/VOGUE/photo/vogue__photo2.webp', loading: 'data:image/gif;base64,R0lGODlhhAHpAYAAAP///wAAACH5BAEAAAEALAAAAACEAekBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyN+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyVMBADs='}"
          alt="VOGUE"
      />
    </section>
  </article>
  <article v-if="$store.state.display_width <= 767" class="new">
    <div class="new__container">
      <section class="new-description">
        <img
            v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/VOGUE/photo/vogue__photo1.webp', loading: 'data:image/gif;base64,R0lGODlhhAHpAYAAAP///wAAACH5BAEAAAEALAAAAACEAekBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyN+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyVMBADs='}"
            alt="VOGUE"
        />
      </section>
      <section class="new__item">
        <img
            v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/VOGUE/photo/vogue__photo2.webp', loading: 'data:image/gif;base64,R0lGODlhhAHpAYAAAP///wAAACH5BAEAAAEALAAAAACEAekBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fyN+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyVMBADs='}"
            alt="VOGUE"
        />
      </section>
    </div>
    <div class="new__tetle">
      <h1>
        УСЛЫШЬТЕ НАС
      </h1>
      <p>
        В 2021 в майском номере журнала VOGUE RUSSIA наша серьга с подвеской-лезвием.
      </p>
      <p>
        Эту подвеску можно снять с серьги и носить ее вместе с чокером, цепочкой или браслетом.
      </p>
    </div>
    <div class="linc-article">
      <p class="text">
        Ссылка на статью:
        <a href="https://www.vogue.ru/fashion/kseniya-soloveva-o-majskom-nomere-vogue-rossiya" target="_blank">
          VOGUE
        </a>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'news-four'
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.new {
  display: flex;
  column-gap: rem(31);
  justify-content: space-between;
}

.new-description {
  flex: 1 1 50%;
}

.new__item {
  flex: 1 1 50%;

  p:nth-child(2) {
    padding: rem(27) 0;
  }

  p:nth-child(3) {
    padding-bottom: rem(44);
  }
}

.linc-article {
  display: flex;
  margin-top: rem(97);
  align-items: center;
  color: $button-color-blue;

  a {
    display: block;
    text-decoration: underline;
    color: $button-color-blue;
  }

  &::before {
    content: "";
    width: 107px;
    height: 51px;
    background: url("https://u1600792.isp.regruhosting.ru/img_server/about/careRepair/png/blaze.png") center no-repeat;
    margin-right: rem(19);
    background-size: contain;
    max-width: 100%;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .new {
    column-gap: calc(1.3925rem + (31 - 22.28) * ((100vw - 64rem) / (1440 - 1024)));
    font-size: calc(0.6875rem + (16 - 11) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .new__item {
    p:nth-child(2) {
      padding: calc(1.125rem + (27 - 18) * ((100vw - 64rem) / (1440 - 1024))) 0;
    }

    p:nth-child(3) {
      padding-bottom: calc(2.25rem + (44 - 36) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
  .linc-article {
    margin-top: calc(5.4375rem + (97 - 87) * ((100vw - 64rem) / (1440 - 1024)));

    &::before {
      width: calc(4.80625rem + (107 - 76.9) * ((100vw - 64rem) / (1440 - 1024)));
      height: calc(2.290625rem + (51 - 36.65) * ((100vw - 64rem) / (1440 - 1024)));
      margin-right: calc(0.85375rem + (19 - 13.66) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .new {
    column-gap: calc(0.98589rem + (31 - 15.77424) * ((100vw - 48rem) / (1023 - 768)));
    font-size: calc(0.54140625rem + (11 - 8.6625) * ((100vw - 48rem) / (1023 - 768)));
  }
  .new__item {
    p:nth-child(2) {
      padding: calc(0.7605rem + (18 - 12.168) * ((100vw - 48rem) / (1023 - 768))) 0;
    }

    p:nth-child(3) {
      padding-bottom: calc(1.845rem + (36 - 29.52) * ((100vw - 48rem) / (1023 - 768)));
    }
  }
  .linc-article {
    margin-top: calc(4.89375rem + (87 - 78.3) * ((100vw - 48rem) / (1023 - 768)));

    &::before {
      width: calc(3.4605rem + (76.9 - 55.368) * ((100vw - 48rem) / (1023 - 768)));
      height: calc(1.64925rem + (36.65 - 26.388) * ((100vw - 48rem) / (1023 - 768)));
      margin-right: calc(0.6147rem + (13.66 - 9.8352) * ((100vw - 48rem) / (1023 - 768)));
    }
  }
}

@media (max-width: em(767, 16)) {
  .new {
    display: block;
  }
  .new__container {
    display: flex;
    margin-bottom: rem(18);
  }
  .new__tetle {
    font-size: rem(11);
    line-height: rem(13);
    padding-right: rem(28);
    padding-left: rem(28);

    p:nth-child(2) {
      padding-top: rem(20);
      padding-bottom: rem(20);
    }
  }
  .linc-article {
    margin: rem(58) 0 0;
    justify-content: center;
    flex-direction: column;
    row-gap: rem(23);
  }
  .text {
    display: flex;
  }
}

</style>
