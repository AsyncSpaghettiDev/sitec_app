import express from 'express'
import cors from 'cors'
import { Server as SocketServer } from 'socket.io'

export const app = express()

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

export const io = new SocketServer(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    },
})

app.use(cors())
