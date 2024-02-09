<template>
  <v-footer border :height="40" class="footer" style="flex: none;">
    <div class="footer__wrapper">
      <div class="footer__gh-wrapper">
        <span>Directed by</span>
        <a class="footer__link" target="_blank" href="https://github.com/okovtkov">Oleg Kovtkov</a>
      </div>
      <div class="footer__tg-wrapper">
        <p>telegram: <b class="footer__tg">okovtkov</b></p>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss">
.footer {
  margin-top: auto;
}

.footer__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer__link {
  margin-left: 6px;
  color: rgb(0, 188, 212);
  text-decoration: none;
}

.footer__tg-wrapper {
  @media screen and (max-width: 375px) {
    display: none;
  }
}

.footer__tg {
  color: rgb(0, 188, 212);
}
</style>
