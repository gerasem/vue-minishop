<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  count: {
    type: Number,
    default: 0,
    required: false,
  },

  customClass: {
    type: String,
    required: false,
  },
});

const minHeightForTotalCount = computed({
  "min-height": props.count.toFixed(0).toString().length + "8" + "px",
});
</script>

<template>
  <div
    class="icon__container"
    :class="{ 'icon__container--active': props.count > 0 }"
  >
    <i
      class="icon bi"
      :class="`bi-${props.icon} icon--${props.customClass ?? props.icon}`"
    >
    </i>

    <span
      v-if="props.count"
      class="icon__count"
      :style="minHeightForTotalCount"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "UiIcon",
};
</script>

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

  &--icon {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: $text-muted;
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

  &--x-lg {
    font-size: 1.5rem;
    color: $text-muted;
    transition: 0.2s;

    &:hover,
    &:focus {
      color: $color-primary;
    }
  }

  &--search {
    font-size: 1.3rem;
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
}
</style>
