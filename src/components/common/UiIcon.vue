<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  count: {
    type: [Number, String],
    required: false,
  },
});

const minHeightForTotalCount = computed(() => {
  return { "min-width": props.count.toString().length + "8" + "px" };
});
</script>

<template>
  <div
    class="icon__container"
    :class="{ 'icon__container--active': count > 0 }"
  >
    <i
      class="icon bi"
      :class="`bi-${icon} icon--${icon}`"
    >
    </i>

    <span
      v-if="count"
      class="icon__count"
      :style="minHeightForTotalCount"
    >
      {{ count }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 1.625rem;
  transition: 0.2s;
  color: currentColor;
  cursor: pointer;

  &--heart {
    &:before {
      vertical-align: -0.2em;
    }
  }

  &--person {
    font-size: 1.75rem;
  }

  &--list {
    font-size: 2rem;
  }

  &--bag-plus {
    font-size: 1.5rem;
  }

  &__count {
    padding-left: 5px;
    text-align: left;
    color: $color-text;
    transition: 0.2s;
    @media (max-width: $screen-md-max) {
      position: absolute;
      top: -1.75rem;
      padding: 0;
      min-width: 0 !important;
      width: fit-content;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__container {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: $color-icons;
    position: relative;

    &:hover,
    &:focus,
    &--active {
      color: $color-secondary;
    }

    &:hover,
    &:focus {
      .icon__count {
        color: $color-secondary;
      }
    }
  }

  &--disabled {
    .icon {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__input-field {
    & .icon {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
      color: $text-muted;
      transition: color 0.2s;
      cursor: default;

      &.bi-x-lg,
      &.bi-ticket {
        cursor: pointer;

        &:hover,
        &:focus {
          color: $color-secondary;
        }
      }
    }

    &--active {
      & .bi-x-lg {
        background: $color-secondary;
        width: 38px;
        height: 38px;
        margin-right: -12px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        &:hover,
        &:active {
          color: #fff !important;
        }
      }
      & .bi-ticket {
        background: $color-secondary;
        width: 48px;
        height: 48px;
        margin-right: -11px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        &:hover,
        &:active {
          color: #fff !important;
        }
      }
    }
  }
}

.bi-x-lg {
  font-size: 1.5rem;
  color: $color-primary;
  transition: 0.2s;
}

.bi-search {
  font-size: 1.3rem;
}
</style>
