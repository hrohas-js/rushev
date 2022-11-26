<template>
  <article v-if="$store.state.display_width >= 768" class="new">
    <section class="new-description">
      <img
          v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/photo/BLUEPRINT__photo1.webp', loading: 'data:image/gif;base64,R0lGODlh4AH8AIAAAP///wAAACH5BAEAAAEALAAAAADgAfwAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8byjRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38vqwAAOw=='}"
          alt="BLUEPRINT"
      />
      <div class="new-description__text">
        <h1>
          Творческий беспорядок, или neck mess
        </h1>
        <p>
          Строгих правил в том, как сочетать украшения на шее, нет. У Rushev ищите примеры сочетаний несочетаемого —
          например, многослойное колье бренда собрано из жемчужной подвески на винтовом карабине, глянцевого шара и
          нескольких цепей.
        </p>
        <div class="linc-article">
          <p class="text">
            Ссылка на статью:
            <a href="https://theblueprint.ru/fashion/trends/trend-neck-mess" target="_blank">
              BLUEPRINT
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="new__item">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/photo/BLUEPRINT__photo2.webp', loading: 'data:image/gif;base64,R0lGODlhVwGxAYAAAP///wAAACH5BAEAAAEALAAAAABXAbEBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fw1+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSOJGBQAAOw=='}"
          alt="BLUEPRINT"
      />
    </section>
  </article>
  <article class="new" v-if="$store.state.display_width <= 767">
    <section class="new-description">
      <img
          v-lazy="{src:'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/photo/BLUEPRINT__photo1.webp', loading: 'data:image/gif;base64,R0lGODlh4AH8AIAAAP///wAAACH5BAEAAAEALAAAAADgAfwAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8byjRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38vqwAAOw=='}"
          alt="BLUEPRINT"
      />
      <div class="new-description__content">
        <div class="new-description__text">
          <h1>
            Творческий беспорядок, или neck mess
          </h1>
          <p>
            Строгих правил в том, как сочетать украшения на шее, нет. У Rushev ищите примеры сочетаний несочетаемого —
            например, многослойное колье бренда собрано из жемчужной подвески на винтовом карабине, глянцевого шара и
            нескольких цепей.
          </p>
          <div class="linc-article">
            <p class="text">
              Ссылка на статью:
              <a href="https://theblueprint.ru/fashion/trends/trend-neck-mess" target="_blank">
                BLUEPRINT
              </a>
            </p>
          </div>
        </div>
        <div class="new__item">
          <img
              v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/photo/BLUEPRINT__photo2.webp', loading: 'data:image/gif;base64,R0lGODlhVwGxAYAAAP///wAAACH5BAEAAAEALAAAAABXAbEBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fw1+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSOJGBQAAOw=='}"
              alt="BLUEPRINT"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'new-three'
}
</script>

<style lang="scss" scoped>
.new {
  display: flex;
  column-gap: rem(50);
  justify-content: space-between;

}

img {
  max-width: 100%;
}

.new-description__text {
  margin-top: rem(93);

  p {
    padding-top: rem(18);
  }
}

.new-description {
  flex: 1 1 55%
}

.new__item {
  margin-top: rem(212);
  flex: 1 1 45%;
}

.linc-article {
  margin-top: rem(73);
  align-items: center;
  display: flex;
  justify-content: flex-end;
  color: $button-color-blue;

  a {
    display: block;
    color: $button-color-blue;
    text-decoration: underline;
    text-align: right;
  }

  &::after {
    content: "";
    width: 43px;
    height: 91px;
    background: url("https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT_new2/href/BLUEPRINT__logo-fire.png") center no-repeat;
    margin-left: rem(24);
    background-size: contain;
    max-width: 100%;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .new {
    column-gap: calc(2.0625rem + (50 - 33) * ((100vw - 64rem) / (1440 - 1024)));
    font-size: calc(0.6875rem + (16 - 11) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .new-description__text {
    margin-top: calc(3.9375rem + (93 - 63) * ((100vw - 64rem) / (1440 - 1024)));

    p {
      padding-top: rem(18);
    }
  }
  .new__item {
    margin-top: calc(11.23375rem + (212 - 179.74) * ((100vw - 64rem) / (1440 - 1024)));
  }
  .linc-article {
    margin-top: calc(3.25rem + (73 - 52) * ((100vw - 64rem) / (1440 - 1024)));

    &:after {
      margin-left: calc(0.875rem + (24 - 14) * ((100vw - 64rem) / (1440 - 1024)));
      width: calc(1.841875rem + (43 - 29.47) * ((100vw - 64rem) / (1440 - 1024)));
      height: calc(3.898125rem + (91 - 62.37) * ((100vw - 64rem) / (1440 - 1024)));
    }
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .new {
    column-gap: calc(1.36125rem + (33 - 21.78) * ((100vw - 48rem) / (1023 - 768)));
    font-size: calc(0.54140625rem + (11 - 8.6625) * ((100vw - 48rem) / (1023 - 768)));
  }
  .new-description__text {
    margin-top: calc(2.6656875rem + (63 - 42.651) * ((100vw - 48rem) / (1023 - 768)));

    p {
      padding-top: rem(18);
    }
  }
  .new__item {
    margin-top: calc(8.34120625rem + (179.74 - 133.4593) * ((100vw - 48rem) / (1023 - 768)));
  }
  .linc-article {
    margin-top: calc(2.33125em + (52 - 37) * ((100vw - 48rem) / (1023 - 768)));

    &:after {
      margin-left: calc(0.510125rem + (14 - 8.162) * ((100vw - 48rem) / (1023 - 768)));
      width: calc(1.261684375rem + (29.47 - 20.18695) * ((100vw - 48rem) / (1023 - 768)));
      height: calc(2.670215625rem + (62.37 - 42.72345) * ((100vw - 48rem) / (1023 - 768)));
    }
  }
}

@media (max-width: em(767, 16)) {
  .new {
    font-size: rem(11);
    line-height: rem(13);
    padding-bottom: rem(62);
  }
  .new__item, .new-description__text {
    margin-top: 0;
  }
  .new-description__content {
    display: flex;
    column-gap: rem(10);
    margin-top: rem(32);
    margin-left: rem(15);
  }
  .new-description__text, .new__item {
    flex: 1 1 50%;
  }
  .linc-article {
    margin-top: rem(81);
  }
  .text {
    order: 1;

    a {
      text-align: left;
    }
  }
  .linc-article {
    justify-content: start;
    column-gap: rem(12);

    &::after {
      width: rem(29);
      height: rem(62);
      margin: 0;
    }
  }
}
</style>
