function efeitoBotao() {
    const botao = document.getElementById("button#click-me")

    botao.addEventListener('click', () => {
        alert("Botão clicado!")
    })
}

efeitoBotao()
