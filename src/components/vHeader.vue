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
          <div class="header__languages">de / en</div>
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
}
</style>
