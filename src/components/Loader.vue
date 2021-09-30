<template>
  <div class='sk-wave'>
    <div class='sk-rect sk-rect-1'></div>
    <div class='sk-rect sk-rect-2'></div>
    <div class='sk-rect sk-rect-3'></div>
    <div class='sk-rect sk-rect-4'></div>
    <div class='sk-rect sk-rect-5'></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
  .sk-wave {
    width: 6em;
    height: 4em;
    margin: auto;
    text-align: center;
    font-size: 1em;
  }

  .sk-wave .sk-rect {
    background-color: #337ab7;
    height: 100%;
    width: 0.5em;
    display: inline-block;
    animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  .sk-wave .sk-rect-1 {
    -webkit-animation-delay: -1.2s;
            animation-delay: -1.2s;
  }
  .sk-wave .sk-rect-2 {
    animation-delay: -1.1s;
  }

  .sk-wave .sk-rect-3 {
    animation-delay: -1s;
  }

  .sk-wave .sk-rect-4 {
    animation-delay: -0.9s;
  }

  .sk-wave .sk-rect-5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-wave-stretch-delay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
</style>
