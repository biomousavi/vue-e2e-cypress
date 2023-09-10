<template>
  <div class="input-group">
    <label :for="name">{{ label }} <span v-if="isRequired">*</span> </label>
    <textarea
      :id="name"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="validationError">{{ validationError }}.</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'label', 'placeholder', 'modelValue', 'validationError', 'isRequired'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.input-group {
  margin: 2% 10%;

  label {
    display: block;
    margin-bottom: 5px;
    text-align: left;

    span {
      display: inline-block;
    }
  }

  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    display: block;
    padding: 10px 5px;
    width: 100%;
    color: rgba(0, 0, 0, 0.8);
    font-size: 110%;
    border: 1px solid rgb(58, 58, 58);
    border-radius: 5px;
  }
}
</style>
