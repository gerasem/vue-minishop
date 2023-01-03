<template>
  <div class="input__field">
    <div class="input__container">
      <input
        type="text"
        :value="modelValue"
        @input="updateInput"
        @blur="handleOnBlur"
        @keydown.enter="handleOnBlur"
        class="form-control input"
        :class="{ active: modelValue }"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UiInput",
};
</script>
