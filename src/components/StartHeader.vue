<template>
  <header class="hedaer">
    <div class="container">
      <h1 class="header__title">
        Хотите узнать, когда Вы покинете этот Мир и при каких обстоятельствах?
      </h1>

      <p class="header__desc">
        Позвольте нам раскрыть точную дату, а также предшествующую этому событию причину.
      </p>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="less">
  .header {
    &__title {
      margin-bottom: 16px;

      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
    }

    &__desc {
      padding-bottom: 18px;
      border-bottom: 1px solid #DEDEDE;
    }
  }
</style>
