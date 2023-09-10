<template>
  <router-link
    :key="event._id"
    :to="`/event/${event._id}`"
    class="event-tile"
    :style="cssProps(event)"
  >
    <div class="event-tile-text">
      <h3>{{ event.name }}</h3>
      <p>{{ moment().to(event.date) }}</p>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EventTile',
  props: ['event'],
  methods: {
    moment: function (date) {
      return moment(date)
    },
    cssProps(event) {
      return {
        backgroundImage: `url(${event.image})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.event-tile {
  display: block;
  margin: 20px 10%;
  background-position: bottom;
  font-size: 18px;
  text-decoration: none;

  .event-tile-text {
    display: block;
    padding: 20px 0;
    color: #ffffff;
    transition: 600ms;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    cursor: pointer;

    .event-tile-text {
      transition: 600ms;
      text-shadow: 1px 1px #000000;
      background-color: rgba(0, 0, 0, 0.311);
    }
  }
}
</style>
