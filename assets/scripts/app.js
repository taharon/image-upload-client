'use strict'

const authEvents = require('./auth/events.js')
const navEvents = require('./nav/events.js')
const uploadEvents = require('./upload/events.js')

$(() => {
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  authEvents.addHandlers()
  $('#navsign-in').on('click', navEvents.onSignIn)
  $('#navsign-up').on('click', navEvents.onSignUp)
  $('#navUpload').on('click', uploadEvents.onUpload)
  $('#navViewAll').on('click', uploadEvents.onViewAll)
  $('#navFileUpdate').on('click', uploadEvents.onUpdate)
  $('.gallery').on('submit', '#upload-btn', uploadEvents.onCreateUpload)
  $('.gallery').on('click', '.update-btn', uploadEvents.onUpdateForm)
  $('.gallery').on('submit', '.update-form', uploadEvents.onUpdateUpload)
  $('.gallery').on('click', '.delete-btn', uploadEvents.onDeleteUpload)
})
