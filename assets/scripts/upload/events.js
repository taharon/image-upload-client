'use strict'

const api = require('./api')
const ui = require('./ui')

const onUpload = event => {
  event.preventDefault()
  ui.createForm()
}

const onCreateUpload = event => {
  event.preventDefault()
  // console.log(event.target)
  const formData = new FormData(event.target)
  // console.log(formData)
  api.createUpload(formData)
    .then(ui.createUploadSuccess)
    .catch(ui.createUploadFailure)
}

const onViewAll = event => {
  event.preventDefault()
  api.indexUpload()
    .then(ui.indexUploadSuccess)
    .catch(ui.indexUploadFailure)
}

const onUpdateUpload = event => {
  event.preventDefault()
  // console.log($(event.target))
  const id = $(event.target).data('id')
  const formData = new FormData(event.target)
  // console.log(formData)
  api.updateUpload(id, formData)
    .then(ui.updateUploadSuccess)
    .catch(ui.updateUploadFailure)
}

const onDeleteUpload = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteUpload(id)
    .then(() => {
      ui.deleteUploadSuccess(id)
    })
    .catch(ui.deleteUploadFailure)
}

const onUpdateForm = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.updateForm(id)
}

module.exports = {
  onUpload,
  onCreateUpload,
  onViewAll,
  onUpdateUpload,
  onDeleteUpload,
  onUpdateForm
}
