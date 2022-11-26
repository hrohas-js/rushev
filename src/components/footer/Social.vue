<template>
  <ul class="social__item" :class="{noMargin:noMargin}">
    <li>
      <a href="https://instagram.com/rushev?utm_medium=copy_link" target="_blank">INSTAGRAM</a>
    </li>
    <li>
      <a href="https://t.me/rushevonline" target="_blank">TELEGRAM</a>
    </li>
    <li>
      <a href="https://api.whatsapp.com/send/?phone=79066345690" target="_blank">WHATSAPP</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'social',
  props: ['noMargin']
}
</script>

<style lang="scss" scoped>

.social__item {
  display: flex;
  margin-top: rem(17);
  margin-bottom: rem(82);
  column-gap: rem(97);
}
.noMargin {
  margin-bottom: 0;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  a {
    font-size: calc(0.5rem + (12 - 8) * ((100vw - 64rem) / (1440 - 1024)));
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(768, 16)) {
  a {
    font-size: rem(8);
  }
}

@media (max-width: em(767, 16)) {
  .social__item {
    flex-direction: column;

    li {
      margin-bottom: $mbottom-footer-menu-item;

      &:last-child {
        margin-bottom: 0;
      }
    }

  }
}
</style>
