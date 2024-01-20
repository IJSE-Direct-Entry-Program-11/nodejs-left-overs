import {Request} from "express";
import {WebSocket} from 'ws';

export function CustomerWsHandler(ws: WebSocket, req: Request){
    // New Web Socket Connection
    console.log("New web socket connection has been established");

    // Disconnect
    ws.on('close', () => console.log("Web socket connection has been closed"));

    // Receive
    ws.on('message', msg => {
        console.log(msg);

        // Send
        ws.send(`Server: ${msg}`);
    });
}