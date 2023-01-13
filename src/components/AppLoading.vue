<template>
  <div class="d-flex justify-content-center loading__container">
    <div
      class="spinner-border"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  &__container {
    align-items: center;
    color: $text-muted;
    flex: 1;
    height: calc(100vh - 100px);
  }
}
</style>
