<template>
  <div>
    <h2>Create Event</h2>
    <div class="create-event">
      <div class="col-2">
        <h4>Event Information</h4>
        <text-input
          v-model="name"
          name="event-name"
          label="Event Name"
          placeholder="Alexander Lemtov Live"
          :validation-error="nameError"
          :is-required="true"
        />
        <text-input
          v-model="venue"
          name="event-venue"
          label="Event Venue"
          placeholder="Sherwood Event Hall, WA"
          :validation-error="venueError"
          :is-required="true"
        />
        <date-input
          v-model="date"
          name="event-date"
          label="Event Date"
          :validation-error="dateError"
          :is-required="true"
        />
        <time-input v-model="time" name="event-time" label="Event Time" :is-required="true" />
        <number-input
          v-model="ticketQuantity"
          name="ticket-quantity"
          label="Ticket Quanity"
          placeholder="142"
          :validation-error="ticketQuantityError"
          :is-required="true"
        />
        <text-area
          v-model="additionalNotes"
          name="event-notes"
          label="Additional Notes"
          placeholder="Register now! Dress in orange..."
          :is-required="false"
        />
        <div class="actions">
          <AppButton
            id="create-btn"
            class-name="primary"
            label="Create"
            :on-click="() => postEvent()"
          />
          <AppButton
            id="cancel-btn"
            class-name="secondary"
            label="Cancel"
            :on-click="() => router.push('/')"
          />
        </div>
      </div>
      <div class="col-2">
        <h4>Cover Image</h4>
        <cover-select v-model="image" name="event-image" />
      </div>
    </div>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate'
import { useStore } from 'vuex'
import * as yup from 'yup'

import router from '../router'

import {
  TextInput,
  NumberInput,
  DateInput,
  TimeInput,
  CoverSelect,
  TextArea,
  AppButton,
} from '../components'

export default {
  components: {
    TextInput,
    NumberInput,
    DateInput,
    TimeInput,
    CoverSelect,
    TextArea,
    AppButton,
  },
  setup() {
    const store = useStore()

    // define validation schema
    const schema = yup.object({
      'Event name': yup.string().required(),
      'Event venue': yup.string().required(),
      'Event date': yup.date().required().min(new Date(), 'Event date must be in the future'),
      'Event time': yup.string(),
      'Ticket quantity': yup
        .number()
        .required()
        .typeError('Ticket quanitity is a required field')
        .min(1),
      'Additional notes': yup.string(),
      'Event image': yup.string(),
    })

    const { validate } = useForm({
      validationSchema: schema,
    })

    // create fields
    const { value: name, errorMessage: nameError } = useField('Event name')
    const { value: venue, errorMessage: venueError } = useField('Event venue')
    const { value: date, errorMessage: dateError } = useField('Event date')
    const { value: additionalNotes } = useField('Additional notes')

    const { value: time } = useField('Event time', undefined, {
      initialValue: '12:00AM',
    })

    const { value: ticketQuantity, errorMessage: ticketQuantityError } = useField('Ticket quantity')

    const { value: image } = useField('Event image', undefined, {
      initialValue: './assets/event-1.jpg',
    })

    // create event
    const postEvent = async () => {
      const { valid } = await validate()

      if (!valid) {
        return
      }

      store
        .dispatch('createEvent', {
          name: name.value,
          venue: venue.value,
          date: date.value,
          time: time.value,
          ticketQuantity: ticketQuantity.value,
          additionalNotes: additionalNotes.value,
          isCancelled: false,
          image: image.value,
        })
        .then((data) => {
          router.push(`/event/${data._id}`)
        })
    }

    return {
      schema,
      name,
      nameError,
      venue,
      venueError,
      date,
      dateError,
      time,
      ticketQuantity,
      ticketQuantityError,
      additionalNotes,
      image,
      postEvent,
      router,
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  display: block;
  text-transform: uppercase;
  color: #4e4e4e;
  font-size: 22px;
  text-align: left;
  font-weight: 600;
  margin: 50px 10%;
}

h4 {
  display: block;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin: 30px 10%;
  color: rgb(111, 111, 111);
  border-bottom: 1px solid rgb(195, 195, 195);
}
.create-event {
  margin: 0 5%;

  .col-2 {
    width: 50%;
    float: left;

    .actions {
      margin: 20px 10%;

      button {
        float: left;
        margin-bottom: 20px;

        &:nth-child(1) {
          margin-right: 3%;
        }
      }
    }
  }
}
</style>
