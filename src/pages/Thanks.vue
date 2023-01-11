<template>
  <div class="thanks">
    <div class="logo">
      <img src="@/assets/img/svg/rushev-logo.svg" alt="logo">
    </div>
    <div class="thanks__pictures">
      <img
          src="https://u1600792.isp.regruhosting.ru/img_server/news/pacificNew/BLUEPRINT/href/BLUEPRINT_logo.png"
          alt="star"
      />
    </div>
    <div class="title">
      <h1>
        Благодарим вас за приобретение нашего товара!
      </h1>
      <p>
        Мы рады, что вы выбрали нас. Информация о вашей покупке<br>
        и статусе заказа будет направлена вам на почту.
      </p>
      <p class="go-back">
        <router-link to="/">
          вернуться к покупкам
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thanks',
  mounted() {
    if (localStorage.getItem('rushev_paymentID') != null) {
      this.$store.dispatch('PostRequest', {
        url: 'https://rushev.online/server/payment_confirm.php',
        //url: 'https://rushev.online/server/payment_confirm_test.php',
        body: localStorage.getItem('rushev_paymentID')
      });
    } else if (localStorage.getItem('rushev_order') != null) {
      localStorage.removeItem('rushev_order');
      this.$store.commit('CLEAR_CART');
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

.thanks {
  font-size: rem(16);
  line-height: rem(19);
  margin-top: rem(49);
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

.go-back {
  text-transform: uppercase;

  a {
    color: #1F83DE;
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .thanks {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 64rem) / (1440 - 1024)));
    line-height: calc(0.875rem + (19 - 14) * ((100vw - 64rem) / (1440 - 1024)));
    row-gap: calc(2.875rem + (48 - 46) * ((100vw - 64rem) / (1440 - 1024)));
  }
  p {
    padding-top: calc(1.0625rem + (30 - 17) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .thanks {
    font-size: rem(12);
    line-height: rem(14);
    row-gap: calc(2.75rem + (46 - 44) * ((100vw - 48rem) / (1023 - 768)));
  }
  p {
    padding-top: calc(0.9375rem + (17 - 15) * ((100vw - 48rem) / (1023 - 768)));
  }
}

@media (max-width: em(767, 16)) and (min-width: em(429, 16)) {
  .thanks {
    font-size: rem(12);
    row-gap: rem(44);
    margin-bottom: rem(116);
  }
  p {
    padding-top: rem(15);
  }
}

@media (max-width: em(428, 16)) {
  .thanks {
    margin-top: calc(2.1875rem + (49 - 35) * ((100vw - 13.75rem) / (428 - 220)));
    margin-bottom: calc(5.1765rem + (116 - 82.824) * ((100vw - 13.75rem) / (428 - 220)));
    font-size: calc(0.5rem + (12 - 8) * ((100vw - 13.75rem) / (428 - 220)));
    row-gap: calc(2.46675rem + (44 - 39.468) * ((100vw - 13.75rem) / (428 - 220)));
  }
  p {
    padding-top: calc(0.75rem + (15 - 12) * ((100vw - 13.75rem) / (428 - 220)));
  }
}
</style>
