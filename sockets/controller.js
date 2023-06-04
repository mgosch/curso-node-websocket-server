


const socketController = (socket) => {
    
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        // tratar de enviar lo menor posible para que no tarde
        callback({ id, fecha: new Date().getTime() });

        // this.io.emit('enviar-mensaje', payload);

        //broadcast = manda mensaje a todos
        socket.broadcast.emit('enviar-mensaje', payload );

    })

}



module.exports = {
    socketController
}

