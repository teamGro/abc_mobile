<template>
  <div class="select">
    <ul
      class="select__list"
      @click="isListOpen = !isListOpen"
      :class="{'select__list_open': isListOpen}"
      >
      <li class="select__title" :class="{ 'select__title_empty': isChecked }">
        {{ userSelectedValue }}
      </li >
      <li
        v-for="item, i in normalizedDateRange"
        :key="i"
        class="select__item"
        @click="updateDateValue(item)"
        >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['dateRange', 'selectedValue', 'initialValue', 'isFilled', 'isChecked'],
  data() {
    return {
      selectedItem: '',
      isListOpen: false,
    };
  },
  computed: {
    userSelectedValue() {
      return this.selectedValue || this.initialValue;
    },
    normalizedDateRange() {
      if (this.initialValue === 'Год') {
        const yearsArr = [];
        for (let i = this.dateRange[0]; i >= this.dateRange[1]; i -= 1) {
          yearsArr.push(i);
        }

        return yearsArr;
      }

      if (this.initialValue === 'День') {
        const daysArr = [];
        for (let i = 1; i <= this.dateRange; i += 1) {
          if (i < 10) {
            daysArr.push(`0${i}`);
          } else {
            daysArr.push(i);
          }
        }

        return daysArr;
      }

      return this.dateRange;
    },
  },
  methods: {
    updateDateValue(value) {
      this.$emit('update:selectedValue', value);
      this.$emit('update:isFilled', true);
      this.$emit('update:isChecked', false);
    },
  },
};
</script>

<style lang="less">
  .select {
    position: relative;
    height: 41px;

    &__list {
    position: relative;

    width: 113px;
    height: 41px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    overflow: hidden;

    background: #FFFFFF;
    }

    &__title {
      cursor: pointer;
      width: 100%;
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      border-radius: 3px;

      color: #202024;

      &_empty {
        border: 1px solid #DE5044;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      }
    }

    &__item {
      display: none;
      width: 100%;
      padding: 10px 0;
      cursor: pointer;

      &:hover {
        background-color: gray;
        opacity: .5;
      }
    }

    &__list_open {
      position: absolute;
      z-index: 10;
      display: flex;
      flex-direction: column;
      height: 200px;
      overflow-y: auto;
    }

    &__list_open > &__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media(min-width: 768px) {
    .select {
      height: 60px;

      &__list {
        width: 200px;
        height: 60px;

        font-size: 20px;

        &_open {
          height: 200px;
        }
      }

      &__title, &__item {
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
</style>
