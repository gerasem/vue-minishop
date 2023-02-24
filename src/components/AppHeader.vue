<script setup>
import { storeToRefs } from "pinia";
import { useItemsStore } from "@/store/items";
import { useCartStore } from "@/store/cart";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t, locale } = useI18n({ useScope: "global" });
const router = useRouter();

const setLocale = (language) => {
  if (locale.value === language) return;
  locale.value = language;
  router.push({ params: { locale: language } });
};
const { search, loading, selectedCategory } = storeToRefs(useItemsStore());
const { totalCount } = storeToRefs(useCartStore());

const handleClickOnLogo = () => {
  loading.value = true;
  search.value = "";
  selectedCategory.value = "";
  setTimeout(() => {
    loading.value = false;
  }, 500);
};
</script>

<template>
  <header class="header__container">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-auto">
          <router-link
            :to="{ name: 'main', params: { locale: locale } }"
            class="header__logo"
            @click="handleClickOnLogo"
          >
            Demo Store
            <span class="header__slogan">vue shopping cart</span>
          </router-link>
        </div>

        <div class="col flex-1"></div>

        <div class="col-auto">
          <div class="header__languages">
            <span
              :class="$i18n.locale === 'de' ? 'header__language--current' : ''"
              class="header__language"
              @click="setLocale('de')"
              >De</span
            >
            <span class="header__language-separator">/</span>
            <span
              :class="$i18n.locale === 'en' ? 'header__language--current' : ''"
              class="header__language"
              @click="setLocale('en')"
              >En</span
            >
          </div>
        </div>

        <div class="col-auto">
          <router-link
            :to="{ name: 'contact', params: { locale: $i18n.locale } }"
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

        <div class="col-auto">
          <div class="header__icons">
            <!-- <router-link
              to="/"
              class="d-none d-md-block header__icon-link"
            >
              <ui-icon icon="person"></ui-icon>
            </router-link>

            <router-link
              to="/"
              class="header__icon-link header__icon-link--first"
            >
              <ui-icon icon="heart"> </ui-icon>
            </router-link> -->

            <router-link
              :to="{ name: 'cart', params: { locale: $i18n.locale } }"
              class="header__icon-link"
            >
              <ui-icon icon="bag">
                {{ totalCount }}
              </ui-icon>
            </router-link>
          </div>
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

  &__language-separator {
    color: #ebebeb;
    margin: 0 5px;
  }

  &__language {
    color: $color-icons;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &--current {
      color: #c8c8c8;
      cursor: not-allowed;
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
}
</style>
