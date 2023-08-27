const ticketRouter = require('express').Router()
const Ticket = require('../utils/ticketSchema')
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
const path = require('path')

ticketRouter.get('/', async (request, response) => {
  const tickets = await Ticket.find({})
  response.json(tickets)
})

ticketRouter.get('/:id', async (request, response) => {
  const ticket = await Ticket.findById(request.params.id)
  return response.json(ticket)
})

ticketRouter.post(
  '/',
  async (request, response) => {
    const body = request.body
    const ticket = new Ticket({ ...body })

    if (!body.name || !body.email) {
      return response.status(400).json({
        error: 'name or email missing',
      })
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    let MailGenerator = new Mailgen({
      theme: {
        path: path.resolve('mailRaised.html'),
      },
      product: {
        name: 'KIIT MUN',
        link:'www.kiitmun.org',
        user: body.name,
        ticket: ticket.id
      },
    })
    
    let mail = MailGenerator.generate({ body:{} })

    let message = {
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: `Ticket Raise Successful: ${body.subject}`,
      html: mail
    }

    await ticket.save()
    await transporter.sendMail(message)
    return response.status(201).json(ticket)
  }
)

ticketRouter.put('/:id', async (request, response) => {
  if (request.body.authCode !== process.env.AUTH_CODE) {
    return response.status(400).json({
      error: 'You are not authorized',
    })
  }

  const addToTicket = {
    status: request.body.status,
    message: request.body.message,
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    request.params.id,
    addToTicket,
    { new: true }
  )

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  let message = {
    from: process.env.EMAIL_USER,
    to: updatedTicket.email,
    subject: 'Ticket Issue Resolved',
    text: `Dear ${updatedTicket.name},\n\nYour ticket ${request.params.id} has an update.\nStatus: ${addToTicket.status}.\nMessage: ${newTicket.message}\n\nBest Regards,\nTech Team,\nKIIT MUN Society
    `,
  }

  await transporter.sendMail(message)
  return response.status(201).json(updatedTicket.toJSON())
})

module.exports = ticketRouter