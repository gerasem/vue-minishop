<script setup>
import { ref } from "vue";
const search = ref("");

import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { t, locale } = useI18n({ useScope: "global" });
const router = useRouter();

function setLocale(language) {
  if (locale.value === language) return;
  locale.value = language;
  router.push({ params: { locale: language } });
}

function getLanguageClass(lang) {
  if (lang === locale.value) {
    return "header__current-language";
  } else {
    return "header__second-language";
  }
}
</script>

<template>
  <header class="header__container">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-auto">
          <router-link
            :to="{ name: 'home', params: { locale: this.$i18n.locale } }"
            class="header__logo"
          >
            Logo
            <span class="header__slogan">Lorem ipsum</span>
          </router-link>
        </div>

        <div class="col flex-1"></div>

        <div class="col-auto">
          <div class="header__languages">
            <span
              :class="getLanguageClass('de')"
              @click="setLocale('de')"
              >De</span
            >
            <span class="header__language-separator">/</span>
            <span
              :class="getLanguageClass('en')"
              @click="setLocale('en')"
              >En</span
            >
          </div>
        </div>

        <div class="col-auto">
          <router-link
            to="/"
            class="header__contact"
          >
            Contact
          </router-link>
        </div>

        <div class="col-auto">
          <ui-input
            class="header__search"
            icon="search"
            v-model="search"
            placeholder="Search ..."
          ></ui-input>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__container {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
  }

  &__logo {
    color: $color-text;
    font-size: 25px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:focus {
      color: $color-text;
      text-decoration: none;
    }
  }

  &__slogan {
    padding-left: 20px;
    color: $text-muted;
    user-select: none;
    font-size: 16px;
    text-transform: none;
    letter-spacing: normal;
  }

  &__contact {
    color: $color-text;
    padding: 15px 20px;
    text-decoration: none;

    &:hover,
    &:focus {
      background-color: $background-gray;
      text-decoration: none;
    }
  }

  &__languages {
    user-select: none;
  }

  &__current-language {
    color: #c8c8c8;
    cursor: not-allowed;
  }

  &__language-separator {
    color: #ebebeb;
    margin: 0 5px;
  }

  &__second-language {
    color: $color-icons;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
