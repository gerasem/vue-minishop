<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
    required: false,
  },

  modelValue: {
    type: [String, Number],
    required: true,
  },

  placeholder: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
});

const emit = defineEmits({ "update:modelValue": null });

function updateInput(event) {
  emit("update:modelValue", event.target.value);
}

function handleOnBlur() {}

function handleClickOnIcon() {
  if (props.modelValue) {
    emit("update:modelValue", "");
  }
}
</script>

<template>
  <div class="input__field">
    <div class="input__container">
      <input
        type="text"
        :value="props.modelValue"
        @input="updateInput"
        @blur="handleOnBlur"
        @keydown.enter="handleOnBlur"
        class="form-control input"
        :class="{ active: props.modelValue }"
        :placeholder="placeholder"
      />

      <template v-if="props.icon">
        <template v-if="props.icon === 'search'">
          <ui-icon
            :icon="props.modelValue ? 'x-lg' : 'search'"
            customClass="icon"
            @click="handleClickOnIcon"
          >
          </ui-icon>
        </template>

        <template v-else>
          <ui-icon
            :icon="props.icon"
            customClass="icon"
            @click="handleClickOnIcon"
          >
          </ui-icon>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiInput",
};
</script>

<style lang="scss" scoped>
.input {
  height: 3.125rem;

  &:hover,
  &:focus,
  &.active {
    box-shadow: none;
    border-color: $color-secondary !important;
  }

  &__container {
    position: relative;
    display: flex;
  }

  &__field {
    display: inline-flex;
    width: 100%;
    flex-direction: column;
    margin-top: 1rem;
  }

  &__description {
    margin-top: 0;
    text-align: left;
  }
}

.header__search {
  margin-top: 0;
  width: auto;
  & .input {
    height: 2.5rem;
    border: 0;
    border-bottom: 1px solid $border-color;
  }
}
</style>
