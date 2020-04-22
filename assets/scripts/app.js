'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  authEvents.addHandlers()
})
