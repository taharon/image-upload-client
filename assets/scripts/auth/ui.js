'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#Messages').text('Signed up Succesfully, you have to Log in').removeClass('failure').addClass('success')
  $('.sign-up, sign-in').trigger('reset')
  $('.sign-up').hide()
  $('.sign-in').show()
}
const signUpFailure = function () {
  $('#Messages').text('Error Signing up').removeClass('success').addClass('failure')
}

const signInSuccess = function (data) {
  $('#Messages').text('Signed in Succesfully').removeClass('failure').addClass('success')
  $('.change-Pw, .btn-logOut').show()
  $('.sign-up, .sign-in').hide().trigger('reset')
  store.user = data.user
}

const signInFailure = function () {
  $('#Messages').text('Error Signing in').removeClass('success').addClass('failure')
}

const changePWSuccess = function () {
  $('#Messages').text('Changed Password Succesfully').removeClass('failure').addClass('success')
  $('.change-Pw').trigger('reset')
}
const changePWFailure = function () {
  $('#Messages').text('Error changing Password').removeClass('success').addClass('failure')
}

const signOutSuccess = function () {
  $('#Messages').text('Signed out Succesfully').removeClass('failure').addClass('success')
  $('.change-Pw, .btn-logOut').hide()
  $('.sign-up, .sign-in').show()
}

const signOutFailure = function () {
  $('#Messages').text('Error Signing out').removeClass('success').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
