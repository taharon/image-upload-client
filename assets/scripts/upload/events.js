'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateForm = event => {
  event.preventDefault()
  ui.createForm()
}

const onCreateUpload = event => {
  event.preventDefault()
  const formData = FormData($(event.target))
  console.log(formData)
  api.createUpload(formData)
    .then(ui.createUploadSuccess)
    .catch(ui.createUploadFailure)
}

const onIndexUpload = event => {
  event.preventDefault()
  api.indexUpload()
    .then(ui.indexUploadSuccess)
    .catch(ui.indexUploadFailure)
}

const onUpdateUpload = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = FormData($(event.target))
  console.log(formData)
  api.updateUpload(id, formData)
    .then(ui.updateUploadSuccess)
    .catch(ui.updateUploadFailure)
}

const onDeleteUpload = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteUpload(id)
    .then(ui.deleteUploadSuccess)
    .catch(ui.deleteUploadFailure)
}

module.exports = {
  onCreateForm,
  onCreateUpload,
  onIndexUpload,
  onUpdateUpload,
  onDeleteUpload
}
