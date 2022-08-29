import io from 'socket.io-client'

export const socketService = {
  socket: io('https://indoor-localization.net:3000'),
  socketOn: async ({ event }, listener) => {
    const socket = socketService.socket
    console.log(socket)
    return socket.on(event, listener)
  },
  socketOff: async ({ event }, listener) => {
    const socket = socketService.socket
    return socket.off(event, listener)
  }
}
