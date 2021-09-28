<template>
  <router-view></router-view>
</template>

<script>
export default {
};
</script>

<style lang="less">
  html {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    //overflow-x: hidden;

    background-color: #fff;

    font-family: 'Roboto';
    font-weight: 400;
    color: #000;
    line-height: 18px;
    font-size: 14px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
    font: inherit;
    font-size: 1.125em;
    line-height: 1.5em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;

    font: inherit;
  }

  .btn {
    border: none;
    margin: 0;
    padding: 0;

    font: inherit;

    background-color: transparent;
    cursor: pointer;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    padding: 0 !important;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 535px;
    min-width: 320px;
    margin: 0 auto;
    padding: 15px 10px 0;
  }

  input:hover,
  input:focus,
  input:active {
    outline: none;
  }

  .experts {
    display: flex;
    margin-bottom: 17px;

    &__list {
      min-width: 115px;
      margin-right: 16px;
    }

    &__desc {
      color: #9D9D9D;

      & span {
        color: rgb(75, 75, 243);
      }
    }
  }

  .main {
    margin-bottom: 10px;

    &__para {
      margin-bottom: 14px;

      &_red {
        color: #DE5044;
      }
    }
  }
</style>
