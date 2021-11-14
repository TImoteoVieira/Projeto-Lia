const credenciaisLogin = document.querySelector("#botaoEnviar");

credenciaisLogin.addEventListener("click", function (e){

    e.preventDefault();

    const entradaUsuario = document.querySelector("#entradaUsuario");

    const valueUser = entradaUsuario.value;

    const entradaSenha = document.querySelector("#entradaSenha");

    const valueSenha = entradaSenha.value;

        if (valueUser == "admin" && valueSenha == "admin") {
            window.open("menu.html");
        }
        else
            (alert('Usuário ou senha incorreto'));
});