<template>
  <div>
    <h2>Events List</h2>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Event Name</th>
            <th>Due Date</th>
            <th>Remaining</th>
            <th></th>
          </tr>
        </thead>
        <br />
        <tbody>
          <router-link
            v-for="event in events"
            :key="event._id"
            :to="`/event/${event._id}`"
            :class="event.isCancelled || moment(event.date).isBefore() ? 'event-cancelled' : ''"
          >
            <td>
              <img :src="event.image" />
            </td>
            <td>{{ moment(event.date).format('MM/DD/YYYY') }}</td>
            <td>{{ event.name }}</td>
            <td
              :class="
                event.isCancelled
                  ? 'event-cancelled'
                  : moment(event.date).isBefore()
                  ? 'event-passed'
                  : ''
              "
            >
              {{
                event.isCancelled
                  ? 'Cancelled'
                  : moment(event.date).isBefore()
                  ? 'Passed'
                  : moment().to(event.date)
              }}
            </td>
            <td>
              <b
                >{{ event.ticketQuantity > 0 ? `${event.ticketQuantity} ticket(s)` : 'Sold Out' }}
              </b>
            </td>
          </router-link>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const store = useStore()

    const events = computed({
      get: () => store.getters.events,
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
h2 {
  text-transform: uppercase;
  color: #4e4e4e;
  font-size: 22px;
  text-align: left;
  font-weight: 600;
  margin: 60px 10%;
}

div.table {
  overflow-x: auto;
  white-space: nowrap;
  width: 80%;
  margin: 0 10%;

  table {
    width: 100%;
    font-size: 18px;
    border-collapse: collapse;
    margin-bottom: 60px;

    thead {
      color: #4e4e4e;
      padding: 0;
    }

    a {
      display: table-row;
      vertical-align: middle;
      text-decoration: none;
      height: 40px;
      border-bottom: 1px solid rgb(195, 195, 195);
      color: rgb(44, 62, 80);

      &:visited {
        color: rgb(44, 62, 80);
      }

      &:hover {
        transition: 600ms;
        background-color: #f8ebf0;
      }

      button {
        position: absolute;
      }

      &.event-cancelled {
        background-color: #dddada;
        color: #4e4e4e;
      }

      td {
        img {
          height: 80px;
          width: 120px;
          margin: 25px 0 20px 0;
        }

        &.event-cancelled {
          font-weight: 600;
          color: #c94d5f;
        }

        &.event-passed {
          font-weight: 600;
          color: #4e4e4e;
        }
      }
    }
  }
}
</style>




















