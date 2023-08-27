const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  }, 	
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  replyMessage: {
    type: String,
  },
})

// removing _v from mongoose schema and making _id to id (transforming mongoose)
ticketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Ticket', ticketSchema)