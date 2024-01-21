<script setup lang="ts"></script>

<template>
      <footer class="footer">
    <div class="footer__social">
      <a class="footer__vk" href="https://vk.com/ballu.official" target="_blank"></a>
    </div>
    <div class="footer__copy">
      <p>Copyright &copy; 2023</p>
      <a href="https://www.ballu.ru/" class="footer__site">Ballu</a>
      <p>Все права защищены. Условия использования и политика конфиденциальности</p>
    </div>
  </footer>

</template>

<style>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 120px;
}
.footer__social {
  width: 100%;
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.footer__vk {
  display: block;
  width: 31px;
  height: 31px;
  background-image: url('../assets/images/ico-social.png');
}
.footer__copy {
  display: flex;
  margin-top: 30px;
}
.footer__site {
  color: var(--color-green);
  margin: 0 5px;
}
@media screen and (max-width: 950px) {
    .footer {
    margin-top: 50px;
    margin-bottom: 50px;
  }
    .footer__copy {
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
    text-align: center;
  }
}
@media screen and (max-width: 750px) {
    .footer__copy {
    font-size: 0.4em;
  }
}
</style>