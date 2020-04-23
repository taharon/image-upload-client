'use strict'

const onSignIn = function () {
  console.log('In Nav Events')
  $('.sign-in, .Auth').show()
  $('.sign-up').hide()
}

const onSignUp = function () {
  $('.sign-in').hide()
  $('.sign-up, .Auth').show()
}

// export handlers
module.exports = {
  onSignIn,
  onSignUp
}
