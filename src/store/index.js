import { createStore } from 'vuex'
import moment from 'moment'

import { SET_EVENTS, REPLACE_EVENT } from './mutation-types'
import { eventApi } from '../api'

const store = createStore({
  state() {
    return {
      events: [],
      lastCreatedEvent: {},
    }
  },
  getters: {
    events(state) {
      return state.events
    },
    topEvents(state) {
      return state.events
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .filter((event) => !event.isCancelled && moment(event.date).isAfter())
        .slice(0, 3)
    },
    event: (state) => (id) => {
      return state.events.find((event) => event._id === id)
    },
  },
  actions: {
    getEvents({ commit }) {
      eventApi.getAll().then((data) => {
        commit(SET_EVENTS, data)
      })
    },
    clearEvents({ commit }) {
        commit(SET_EVENTS, [])
    },
    getEvent({ commit }, id) {
      eventApi.get(id).then((data) => {
        commit(REPLACE_EVENT, data)
      })
    },
    updateEvent({ commit }, event) {
      eventApi.put(event).then((res) => {
        commit(REPLACE_EVENT, res.data)
      })
    },
    createEvent({ commit }, event) {
      return new Promise((resolve, reject) => {
        eventApi.post(event).then(
          (res) => {
            commit(REPLACE_EVENT, res.data)
            resolve(res.data)
          },
          (error) => {
            reject(error)
          }
        )
      })
    },
  },
  mutations: {
    [SET_EVENTS](state, events) {
      state.events = events
    },
    [REPLACE_EVENT](state, event) {
      const index = state.events.findIndex((x) => x._id == event._id)
      if (index != -1) {
        state.events[index] = event
      } else {
        state.events.push(event)
      }
    },
  },
})

export default store
