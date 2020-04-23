'use strict'

const config = require('../config')
const store = require('../store')

const createUpload = formData => {
  console.log('in upload/api')
  return $.ajax({
    url: config.apiUrl + '/uploads/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ` + store.user.token
    },
    data: formData,
    contentType: false,
    processData: false
  })
}

const indexUpload = () => {
  console.log('in upload/api')
  return $.ajax({
    url: config.apiUrl + '/uploads/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ` + store.user.token
    }
  })
}

const updateUpload = (id, formData) => {
  console.log('in upload/api')
  return $.ajax({
    url: config.apiUrl + '/uploads/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ` + store.user.token
    },
    data: formData,
    contentType: false,
    processData: false
  })
}

const deleteUpload = id => {
  console.log('in upload/api')
  return $.ajax({
    url: config.apiUrl + '/uploads/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ` + store.user.token
    }
  })
}

module.exports = {
  createUpload,
  indexUpload,
  updateUpload,
  deleteUpload
}
