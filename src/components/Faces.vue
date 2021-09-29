<template>
  <ul class="faces" :class="{'faces_center': facesInCenter}">
    <li class="faces__item" v-for="expert in experts" :key="expert.id">
      <img :src="expert.url" :alt="expert.alt" class="faces__img">
    </li>
  </ul>
</template>

<script>
export default {
  props: ['facesInCenter'],
  computed: {
    experts() {
      return this.$store.state.experts;
    },
  },
};
</script>

<style lang="less">
  .faces {
    position: relative;

    display: flex;
    align-items: center;
    height: 48px;

    &_center {
      padding-left: 20px;
    }

    &__item {
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;

      &:nth-child(2) {
        left: -10px;
      }

      &:nth-child(3) {
        left: -20px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
    }
  }
</style>
