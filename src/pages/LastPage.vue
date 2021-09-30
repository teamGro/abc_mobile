<template>
  <div class="container container__last-page" :class="{'data-loaded': !dataLoaded}">
    <div class="text">
      <p>Спасибо за Ваши ответы!</p>
      <p class="text__yellow">
        Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
      </p>
    </div>

    <p class="text">
      Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.
    </p>

    <div class="text text_bordered">
      <span class="text__red text__upper">Первое значимое событие может произойти уже </span>
      <b>14.02.2021</b>,
      <span class="text__red">
        Вам надо быть готовым, что бы последствия не оказались необратимыми.
      </span>
    </div>

    <p class="text text_blue">
      Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.<br>
      <b>Прослушайте важную информацию!</b>
    </p>

    <div class="call-btn-wrapper" v-if="!dataLoading && !dataLoaded">
      <button class="call-btn" @click="loadData">Позвонить и прослушать</button>
    </div>

    <loader v-else-if="dataLoading && !dataLoaded"></loader>

    <div v-if="dataLoaded" class="text">
      <ul>
        <li>Имя: <b>{{ serverResponse.name }}</b></li>
        <li>Пол: <b>{{ serverResponse.gender }}</b></li>
        <li>Вес: <b>{{ serverResponse.mass }}</b></li>
        <li>Рост: <b>{{ serverResponse.height }}</b></li>
        <li>Цвет волос: <b>{{ serverResponse.hair_color }}</b></li>
        <li>Дата рождения: <b>{{ serverResponse.birth_year }}</b></li>
        <li>Фильмы:
          <button
            type="button"
            class="show-btn"
            v-if="!isShowFilms && !filmsLoading"
            @click.prevent="showFilms">
            Показать
          </button>
          <loader v-else-if="!isShowFilms && filmsLoading"></loader>
          <b v-else v-for="item in filmsTitle" :key="item.title">
            "{{ item }}" <br>
          </b>
        </li>
      </ul>
    </div>

    <p class="footer">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT.
      PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from '@/components/Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      dataLoaded: false,
      dataLoading: false,
      isShowFilms: false,
      filmsLoading: false,
      filmsTitle: [],
    };
  },
  computed: {
    serverResponse() {
      return this.$store.state.serverResponse;
    },
  },
  methods: {
    loadData() {
      this.dataLoading = true;
      axios.get('https://swapi.dev/api/people/1/')
        .then((response) => {
          this.$store.commit('loadData', response.data);
          this.dataLoading = false;
          this.dataLoaded = true;
        })
        .catch(() => {})
        .then(() => { this.dataLoading = false; });
    },
    showFilms() {
      this.filmsLoading = true;
      const requests = this.serverResponse.films.map((url) => axios.get(url));
      Promise.all(requests)
        .then((responses) => responses.forEach(
          (response) => {
            this.filmsTitle.push(response.data.title);
            this.filmsLoading = false;
            this.isShowFilms = true;
          },
        ))
        .catch(() => {})
        .then(() => { this.filmsLoading = false; });
    },
  },
};
</script>

<style lang="less">
  .container__last-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .text {
    margin-bottom: 16px;
    text-align: center;
    line-height: 20px;

    &_bordered {
      padding: 27px 22px 19px;
      margin-bottom: 25px;
      border: 1px solid #DEDEDE;
      border-radius: 3px;
    }

    &_blue {
      margin-bottom: 30px;
      color: #1A73EB;
    }

    &__yellow {
      color: #FFCE3F;
      font-size: 18px;
    }

    &__red {
      color: #DE5044;
    }

    &__upper {
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .call-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .call-btn, .show-btn {
    border: none;
    padding: 10.5px 15px;
    background: #169F5C;
    border-radius: 50px;

    color: #fff;
    font-size: 16px;
    line-height: 19px;
  }

  .show-btn {
    padding: 5px 7px;
  }

  .footer {
    flex-grow: 1;
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    font-size: 7px;
    line-height: 9px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #9D9D9D;
  }
</style>
