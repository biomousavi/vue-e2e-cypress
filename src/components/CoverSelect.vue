<template>
  <div>
    <img :src="modelValue" />
    <ul>
      <li
        v-for="cover in covers"
        :key="cover.id"
        :class="{ selected: modelValue === cover.value }"
        @click="$emit('update:modelValue', cover.value)"
      >
        <input
          :id="`${cover.name}-${cover.id}`"
          :name="cover.name"
          :value="cover.value"
          :checked="modelValue === cover.value"
          type="radio"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <label :for="`${cover.name}-${cover.id}`">Event Cover {{ cover.id }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['name', 'modelValue'],
  data: (props) => {
    return {
      covers: [
        {
          id: 1,
          name: props.name,
          value: './assets/event-1.jpg',
        },
        {
          id: 2,
          name: props.name,
          value: './assets/event-2.jpg',
        },
        {
          id: 3,
          name: props.name,
          value: './assets/event-3.jpg',
        },
        {
          id: 4,
          name: props.name,
          value: './assets/event-4.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  margin: 0 10%;

  & > label {
    display: block;
    margin-bottom: 5px;
  }

  img {
    width: 90%;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }

  ul {
    padding: 0;

    li {
      color: #ff1675;
      border: 1px solid #ff1675;
      border-radius: 25px;
      outline: none;
      font-weight: 500;
      display: block;
      text-align: center;
      height: 30px;
      width: 90%;
      margin: 5px auto;
      background: #f8ebf0;

      input {
        display: none;
      }

      input,
      label {
        position: relative;
        top: 5px;
      }

      &.selected {
        border: none;
        color: #fff;
        background: #ff1675;
      }
    }
  }
}
</style>
