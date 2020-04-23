'use strict'

const indexImageTemplate = require('../templates/image-listing.handlebars')
const uploadImageTemplate = require('../templates/upload-image.handlebars')

const createForm = function () {
  $('.gallery').html(uploadImageTemplate)
}

const indexUploadSuccess = (data) => {
  const indexImageHtml = indexImageTemplate({ uploads: data.uploads })
  $('.gallery').html(indexImageHtml)
  $('.Auth').hide()
  $('#Messages').text('Index Succesfully').removeClass('failure').addClass('success')
}

const indexUploadFailure = function () {
  $('#Messages').text('Error Indexing').removeClass('success').addClass('failure')
}

const createUploadSuccess = function () {
  $('#Messages').text('Upload Succesful').removeClass('failure').addClass('success')
}

const createUploadFailure = function () {
  $('#Messages').text('Upload Error').removeClass('success').addClass('failure')
}

const updateUploadSuccess = function () {
  $('#Messages').text('Update Successfully').removeClass('failure').addClass('success')
}

const updateUploadFailure = function () {
  $('#Messages').text('Error Updating').removeClass('success').addClass('failure')
}

const deleteUploadSuccess = function () {
  $('#Messages').text('Delete Successful').removeClass('failure').addClass('success')
}

const deleteUploadFailure = function () {
  $('#Messages').text('Error Deleting').removeClass('success').addClass('failure')
}

module.exports = {
  indexUploadSuccess,
  indexUploadFailure,
  createUploadSuccess,
  createUploadFailure,
  updateUploadSuccess,
  updateUploadFailure,
  deleteUploadSuccess,
  deleteUploadFailure,
  createForm
}
