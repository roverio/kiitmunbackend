
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    if (error.code === 'P2002') {
        return response.status(400).send({ error: "This email is already registered. Try with a different email." })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
	}
    console.error(error.message)
    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
}