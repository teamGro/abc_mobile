<template>
  <div class="container audio">
    <div class="audio__mic-wrapper">
      <img class="audio__mic" :src="mic" alt="Запись аудио">

      <svg class="spinner" width="128" height="128">
        <circle class="path" cx="64" cy="64" r="60" fill="none" stroke-width="8"></circle>
      </svg>
    </div>

    <div class="audio__text-wrapper">
      <p class="audio__progress-wrapper">
        <span class="audio__progress">{{ progress }}</span>
        <span>%</span>
      </p>
      <p class="audio__text">Запись аудиосообщения</p>
    </div>

  </div>
</template>

<script>
import mic from '@/assets/img/microphone.svg';

export default {
  data() {
    return {
      progress: 0,
      mic,
      timer: null,
    };
  },
  computed: {

  },
  created() {
    const self = this;
    this.timer = setInterval(() => {
      self.progress += 1;
      if (self.progress === 100 || self.$route.name !== 'audioMesage') {
        clearInterval(self.timer);
        self.$router.push({ name: 'last' });
      }
    }, 50);
  },
  unmounted() {
    this.timer = null;
  },
  watch: {
    $route() {
      this.timer = null;
    },
  },
};
</script>

<style lang="less">
.spinner {
  z-index: 2;
  position: absolute;
  top: -4px;
  left: -4px;
  transform: rotate(-90deg);

  & .path {
    stroke: #FFCE3F;
    stroke-linecap: round;
    animation: dash 5s linear;
  }

}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 384;
  }
  100% {
    stroke-dasharray: 384 1;
  }
}

  .audio {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__mic-wrapper {
      position: relative;

      border-radius: 50%;
      margin-bottom: 38px;
      width: 124px;
      height: 124px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #FCF9DF;
      box-sizing: border-box;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;

      font-weight: 300;
      letter-spacing: 0.1em;
      color: #202024;
    }

    &__progress-wrapper {
      margin-bottom: 20px;

      font-size: 30px;
      line-height: 35px;
      text-align: center;
    }

    &__text {
      font-size: 16px;
      line-height: 19px;
    }
  }
</style>
