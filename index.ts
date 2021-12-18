import { LobbyRoom, RelayRoom, Server } from 'colyseus'

// import socialRoutes from "@colyseus/social/express"

import { OfficeRoom } from './rooms/OfficeRoom'

const port = Number(process.env.PORT || 2567)

// app.use(express.static('dist'))

const gameServer = new Server()

// register your room handlers
gameServer.define('lobby', LobbyRoom);
gameServer.define('officeRoom', RelayRoom);
gameServer.define('officeRoom', OfficeRoom).enableRealtimeListing();
// gameServer.define('officeRoom', OfficeRoom).enableRealtimeListing();
/**
 * Register @colyseus/social routes
 *
 * - uncomment if you want to use default authentication (https://docs.colyseus.io/server/authentication/)
 * - also uncomment the import statement
 */
// app.use("/", socialRoutes);

// register colyseus monitor AFTER registering your room handlers
// gameServer..use('/colyseus', monitor())

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
