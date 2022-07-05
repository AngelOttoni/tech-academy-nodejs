function myMessage(callback) {
    setTimeout(() => {
        console.log('Bebam água e vamos de NodeJS!');
        callback();
    }, 0);
}

function messageResponse() {
    console.log('Hidratado! Bora pra cima!');
}

mensagemGabriel(mensagemRafael);
// mensagemRafael();