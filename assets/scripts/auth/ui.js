'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#Messages').text('Signed up Succesfully, you have to Log in').removeClass('failure').addClass('success')
}
const signUpFailure = function () {
  $('#Messages').text('Error Signing up').removeClass('success').addClass('failure')
}

const signInSuccess = function (data) {
  $('#Messages').text('Signed in Succesfully').removeClass('failure').addClass('success')
  store.user = data.user
}
const signInFailure = function () {
  $('#Messages').text('Error Signing in').removeClass('success').addClass('failure')
}

const changePWSuccess = function () {
  $('#Messages').text('Changed Password Succesfully').removeClass('failure').addClass('success')
}
const changePWFailure = function () {
  $('#Messages').text('Error changing Password').removeClass('success').addClass('failure')
}

const signOutSuccess = function () {
  $('#Messages').text('Signed out Succesfully').removeClass('failure').addClass('success')
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
