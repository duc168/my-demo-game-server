import { Server } from 'colyseus'

import { OfficeRoom } from './rooms/OfficeRoom'

const port = Number(process.env.PORT || 2567)

const gameServer = new Server()

// register your room handlers
gameServer.define('officeRoom', OfficeRoom);

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
