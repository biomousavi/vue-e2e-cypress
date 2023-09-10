import axios from 'axios'

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8080'

const get = async function (id) {
  if (id) {
    const response = await axios.get(`${SERVER_URL}/api/event/${id}`)
    return response.data
  }
}

const getAll = async function () {
  const response = await axios.get(`${SERVER_URL}/api/event`)
  return response.data
}

const post = async function (event) {
  return await axios.post(`${SERVER_URL}/api/event`, event, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
}

const put = async function (event) {
  return await axios.put(`${SERVER_URL}/api/event/${event._id}`, event, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
}

export const eventApi = {
  get,
  getAll,
  post,
  put,
}
