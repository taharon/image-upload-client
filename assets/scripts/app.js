'use strict'

const authEvents = require('./auth/events.js')
const navEvents = require('./nav/events.js')

$(() => {
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  authEvents.addHandlers()
  $('#navsign-in').on('click', navEvents.onSignIn)
  $('#navsign-up').on('click', navEvents.onSignUp)
  $('#navUpload').on('click', navEvents.onUpload)
  $('#navFileUpdate').on('click', navEvents.onUpdate)
  $('#navViewAll').on('click', navEvents.onViewAll)
})
