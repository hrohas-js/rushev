<template>
  <div class="footer__form" :class="{newWidth:newWidth}">
    <form>
      <h2 class="form__title">
        Новостная рассылка
      </h2>
      <div v-if="$store.state.subscribed">
        Спасибо что подписались на нашу рассылку!
        Письмо с уведомлением прийдет вам на почту.
      </div>
      <div v-else>
        <div class="form-sub-title">
          Будь первым в курсе о новых поступлениях,
          акциях и скидках нашего бренда.
        </div>
        <my-input :myType="'email'" :myPlaceholder="'EMAIL'" />
        <div class="form__rules">
          <div>
            <input type="checkbox" required id="policy" v-model="rules">
            <label for="policy">
              Я прочитал и ознакомлен с Политикой / Конфидециальностью
              и принимая Условия подписки нашего сайта
            </label>
          </div>
          <div>
            <input type="checkbox" required id="notice" v-model="pushes">
            <label for="notice">
              Я хочу получать уведомления
            </label>
          </div>
        </div>
        <div class="form__button" @click="pushSubscriber">
          <my-button />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";

export default {
  name: 'news-form',
  components: {
    MyButton,
    MyInput
  },
  data: () => ({
    rules: false,
    pushes: false
  }),
  props: ['newWidth'],
  methods: {
    pushSubscriber() {
      if(this.rules && this.pushes && this.$store.state.delivery.email != '') {
        this.$store.dispatch('PostRequest', {
          url: 'https://rushev.online/server/subscribe.php',
          body: this.$store.state.delivery.email
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer__form {
  max-width: rem(342);
}

.form-sub-title {
  margin-top: rem(25);
  margin-bottom: rem(40);
}

.form__rules {
  margin: rem(36) 0;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin-right: rem(12);
  }

  label {
    font-size: $fs-form-tems;
  }

  input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  input + label::before {
    content: '';
    display: inline-block;
    width: rem(14);
    height: rem(14);
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    margin-right: 0.5em;
  }

  input:checked + label::before {
    background-color: $button-color-blue;
  }

  div:last-child {
    margin-top: rem(24);
  }
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .newWidth {
    max-width: calc(15.125rem + (342 - 242) * ((100vw - 64rem) / (1440 - 1024)));
    .form-sub-title {
      margin-bottom: calc(1.375rem + (40 - 22) * ((100vw - 64rem) / (1440 - 1024)));
    }
    .form__rules {
      margin: calc(1.5625rem + (36 - 25) * ((100vw - 64rem) / (1440 - 1024))) 0;
    }
  }
}
@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  .newWidth {
    max-width: rem(242);
    .form-sub-title {
      margin-bottom: rem(22);
    }
    .form__rules {
      margin: rem(25) 0;
      div:last-child {
        margin-top: calc(0.75rem + (24 - 12) * ((100vw - 48rem) / (1024 - 768)));
      }
    }
  }
}

@media (max-width: em(767, 16)) {
  .footer__form{
    max-width: 100%;
  }
  .form__title{
    display: none;
  }
  .form-sub-title{
    font-size: rem(14);
    margin-top: rem(17);
    margin-bottom: rem(17);
  }
}
</style>
