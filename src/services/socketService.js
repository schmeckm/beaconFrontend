import io from 'socket.io-client'
import { BASE_URL_LOCAL } from '../config/index'

export const socketService = {
  socket: io(BASE_URL_LOCAL),
  on: (event, listener) => socketService.socket.on(event, listener),
  off: (event, listener) => socketService.socket.off(event, listener),
  emit: (event) => socketService.socket.emit(event)
}
