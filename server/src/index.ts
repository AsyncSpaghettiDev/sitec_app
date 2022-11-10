import { app, io } from './app'
import api from './api'
import express from 'express'
import { join } from 'path'

app.use(express.static(join(__dirname, '../build')))

app.use('/api', api)

app.get('*', (_, res) => {
    res.sendFile(join(__dirname, '../build/', 'index.html'))
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('message', (msg) => {
        console.log('message: ' + msg)
        socket.broadcast.emit('message', msg)
    })
})