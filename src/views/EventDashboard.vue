<template>
  <div class="dashboard">
    <h2>Upcoming events</h2>
    <div v-for="event in events" :key="event._id">
      <event-tile :event="event" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'

import { EventTile } from '../components'

export default {
  components: {
    EventTile,
  },

  setup() {
    const store = useStore()

    const events = computed({
      get: () => store.getters.topEvents,
    })

    onMounted(() => {
      store.dispatch('getEvents')
    })

    return {
      events,
    }
  },
  methods: {
    moment: function (date) {
      return moment(date)
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin: 60px 10%;
}
h2 {
  text-transform: uppercase;
  color: #4e4e4e;
  font-size: 22px;
  text-align: left;
  font-weight: 600;
  margin: 60px 10%;
}
</style>










