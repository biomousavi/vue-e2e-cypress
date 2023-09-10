<template>
  <div>
    <div class="input-group">
      <label :for="name">{{ label }} <span v-if="isRequired">*</span> </label>
      <div class="select-date">
        <select :id="`${name}-month`" v-model="monthValue" :name="`${name}-month`">
          <option value="0" selected disabled>Month</option>
          <option
            v-for="month in Array.from({ length: 12 }, (_, i) => i)"
            :key="month"
            :value="month"
          >
            {{ month + 1 }}
          </option>
        </select>
        <select :id="`${name}-day`" v-model="dayValue" :name="`${name}-day`">
          <option value="0" selected disabled>Day</option>
          <option
            v-for="day in Array.from({ length: 31 }, (_, i) => i + 1)"
            :key="day"
            :value="day"
          >
            {{ day }}
          </option>
        </select>
        <select :id="`${name}-year`" v-model="yearValue" :name="`${name}-year`">
          <option value="0" selected disabled>Year</option>
          <option
            v-for="year in Array.from({ length: 20 }, (_, i) => i + new Date().getFullYear())"
            :key="year"
            :value="year"
          >
            {{ year }}
          </option>
        </select>
      </div>
      <span v-if="validationError">{{ validationError }}.</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['name', 'label', 'modelValue', 'validationError', 'isRequired'],
  setup(props, { emit }) {
    let tempDate = {
      day: 0,
      month: 0,
      year: 0,
    }

    function updateDate(date) {
      tempDate = { ...tempDate, ...date }
      const { day, month, year } = tempDate
      if (day != 0 && month != 0 && year != 0) {
        emit('update:modelValue', new Date(year, month, day))
      }
    }

    const monthValue = computed({
      get: () => props.modelValue?.getMonth() || tempDate.day,
      set: (value) => updateDate({ month: value }),
    })

    const dayValue = computed({
      get: () => props.modelValue?.getDate() || tempDate.month,
      set: (value) => updateDate({ day: value }),
    })

    const yearValue = computed({
      get: () => props.modelValue?.getFullYear() || tempDate.year,
      set: (value) => updateDate({ year: value }),
    })

    return {
      monthValue,
      dayValue,
      yearValue,
    }
  },
}
</script>

<style lang="scss" scoped>
.input-group {
  margin: 2% 10%;
  width: 82%;

  label {
    display: block;
    margin-bottom: 5px;
    text-align: left;

    span {
      display: inline-block;
    }
  }

  .select-date {
    text-align: left;

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 1px solid rgb(58, 58, 58);
      border-radius: 5px;
      outline: none;
      margin-right: 1%;
      display: inline-block;
      padding: 10px 5px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 110%;

      &:nth-child(1) {
        width: 33%;
      }

      &:nth-child(2) {
        width: 27%;
      }

      &:nth-child(3) {
        width: 38%;
        margin-right: 0;
      }
    }
  }

  span {
    margin-top: 5px;
    display: block;
    text-align: left;
    font-size: 90%;
    color: rgb(255, 0, 51);
  }
}
</style>
