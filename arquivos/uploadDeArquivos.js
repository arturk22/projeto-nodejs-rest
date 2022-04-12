const fs = require('fs')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    if(tipoEhValido){
        const erro = "Tipo é invalido"
        console.log("Erro! Tipo invalido")
        callbackImagemCriada(erro)
    }else{
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho)
            .pipe(fs.createReadStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false,novoCaminho))
    
    }

}
