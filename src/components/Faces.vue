<template>
  <ul class="faces">
    <li class="faces__item">
      <img src="img/face1.jpg" alt="" class="feces__img">
    </li>
    <li class="faces__item">
      <img src="img/face2.jpg" alt="" class="feces__img">
    </li>
    <li class="faces__item">
      <img src="img/face3.jpg" alt="" class="feces__img">
    </li>
  </ul>
</template>

<script>
export default {

};
</script>

<style lang="less">
  .faces {
    position: relative;

    display: flex;
    align-items: center;

    &__item {
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;

      &:nth-child(2) {
        left: 38px;
      }

      &:nth-child(3) {
        left: 76px;
      }
    }
  }
</style>
