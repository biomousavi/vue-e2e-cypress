<template>
  <button :id="name" :class="className" :name="name" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['className', 'name', 'label', 'onClick'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 25px;
  outline: none;
  font-weight: 600;

  &:hover {
    transition: all 0.5s ease;
    cursor: pointer;
  }

  &:active {
    box-shadow: 1px;
    transform: translateX(2px);
    transform: translateY(2px);
  }

  &.primary {
    background: #ff1675;
    border: 2px solid #ff1675;
  }

  &.primary:hover {
    border: 2px solid #ff1675;
    background: #f8ebf0;
    color: #ff1675;
  }

  &.secondary {
    background: #130f24;
    border: 2px solid #130f24;
  }

  &.secondary:hover {
    border: 2px solid #130f24;
    background: #fcf5f5;
    color: #130f24;
  }
}
</style>
