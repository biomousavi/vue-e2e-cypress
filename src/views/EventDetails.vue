<template>
  <div>
    <h2>Event Details</h2>
    <ul>
      <li><p v-if="!event">Loading...</p></li>
      <li v-if="event && event.name"><b class="key">Event name</b>: <span class="value">{{ event.name }}</span></li>
      <li v-if="event && event.venue"><b class="key">Event venue</b>: <span class="value">{{ event.venue }}</span></li>
      <li v-if="event && event.date"><b class="key">Event date</b>: <span class="value">{{ moment(event.date).format('MMMM Do YYYY') }}</span></li>
      <li v-if="event && event.time"><b class="key">Event time</b>: <span class="value">{{ event.time }}</span></li>
      <li v-if="event && event.ticketQuantity"><b class="key">Remaining tickets</b>: <span class="value">{{ event.ticketQuantity }}</span></li>
      <li v-if="event"><b class="key">Cancelled</b>: <span class="value">{{ event.isCancelled ? 'Yes' : 'No' }}</span></li>
      <li v-if="event && event.additionalNotes"><b class="key">Additional notes</b>: <p class="value">{{ event.additionalNotes }}</p></li>
    </ul>
    <AppButton v-if="event" id="cancel-event-btn" class-name="primary" label="Cancel Event" :on-click="() => cancelEvent(event)" />
  </div>
</template>

<script>
import { computed, onMounted, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import moment from 'moment'
import router from '../router'

import { AppButton } from '../components'

export default {
  components: {
    AppButton,
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const event = computed({
      get: () => store.getters.event(route.params.id),
    })

    onBeforeMount(() => {
      store.dispatch("clearEvents");
    })

    onMounted(() => {
      try {
        setTimeout(() => {
          store.dispatch('getEvent', route.params.id)
        }, 2000)
      } catch {
        router.push('/')
      }
    })

    const cancelEvent = async (target) => {
      target.isCancelled = true
      store.dispatch('updateEvent', target)
      router.push('/events-list')
    }

    return {
      event,
      cancelEvent,
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
div {
  margin: 60px 10%;

  h2 {
    text-transform: uppercase;
    color: #4e4e4e;
    font-size: 22px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 60px;
  }

  ul {
    padding: 0
  }

  p, li {
    list-style: none;
    list-style-type: none;
    margin-bottom: 12px;
    text-align: left;
    font-size: 18px;
  }
}
</style>










