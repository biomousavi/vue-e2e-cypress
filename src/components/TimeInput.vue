<template>
  <div>
    <div class="input-group">
      <label :for="name">{{ label }} <span v-if="isRequired">*</span> </label>
      <div class="select-time">
        <select :id="`${name}-hour`" v-model="hourValue" :name="`${name}-hour`">
          <option
            v-for="hour in Array.from({ length: 12 }, (_, i) => i + 1)"
            :key="hour"
            :value="hour"
          >
            {{ hour }}
          </option>
        </select>
        <select :id="`${name}-minute`" v-model="minuteValue" :name="`${name}-minute`">
          <option
            v-for="minute in Array.from({ length: 60 }, (_, i) => i)"
            :key="minute"
            :value="addLeadingZero(minute)"
          >
            {{ addLeadingZero(minute) }}
          </option>
        </select>
        <select :id="`${name}`" v-model="periodValue" :name="`${name}`">
          <option value="AM" selected>a.m.</option>
          <option value="PM">p.m.</option>
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
    function getSelectedTime() {
      return {
        hour: props.modelValue.split(':')[0],
        minute: props.modelValue.split(':')[1].slice(0, 2),
        period: props.modelValue.slice(-2),
      }
    }

    function updateTime(time) {
      const selectedTime = { ...getSelectedTime(), ...time }
      const { hour, minute, period } = selectedTime
      emit('update:modelValue', `${hour}:${minute}${period}`)
    }

    const hourValue = computed({
      get: () => getSelectedTime().hour,
      set: (hour) => updateTime({ hour }),
    })

    const minuteValue = computed({
      get: () => getSelectedTime().minute,
      set: (minute) => updateTime({ minute }),
    })

    const periodValue = computed({
      get: () => getSelectedTime().period,
      set: (period) => updateTime({ period }),
    })

    return {
      hourValue,
      minuteValue,
      periodValue,
    }
  },
  methods: {
    addLeadingZero: function (value) {
      if (String(value).length === 1) {
        return '0' + value
      }
      return String(value)
    },
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

  .select-time {
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
      width: 10%;
      color: rgba(0, 0, 0, 0.8);
      font-size: 110%;

      &:nth-child(1) {
        width: 14%;
      }

      &:nth-child(2) {
        width: 14%;
      }

      &:nth-child(3) {
        width: 14%;
        text-align: center;
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
