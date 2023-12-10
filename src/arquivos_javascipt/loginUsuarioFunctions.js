const realizarLogin = () => {
    const usuariosCadastrados = JSON.parse(
        localStorage.getItem("usuariosCadastrados")
    );

    let loginUsuario = document.getElementById("loginUsuario").value;
    let senhaUsuario = document.getElementById("senhaUsuario").value;

    if (usuariosCadastrados === null || usuariosCadastrados.length === 0) {
        alert("Não há usuários cadastrados!");
        return;
    }

    if (
        possuiUsuarioCadastradoComCredenciais(
            loginUsuario,
            senhaUsuario,
            usuariosCadastrados
        )
    ) {
        const usuarioLogado = {
            loginUsuario,
        };
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        alert("Login realizado com sucesso!");
        redirecionarUsuario(loginUsuario);
    } else {
        alert("Usuário ou senha inválidos!");
    }
};

const possuiUsuarioCadastradoComCredenciais = (
    loginUsuario,
    senhaUsuario,
    usuariosCadastrados
) => {
    return usuariosCadastrados.some(
        (usuario) =>
            usuario.nomeSobrenomeCnpj === loginUsuario &&
            usuario.senha === senhaUsuario
    );
};

const redirecionarUsuario = (loginUsuario) => {
    if (isUsuarioPessoaJuridica(loginUsuario)) {
        window.location.href = "Dashboard.html";
    } else {
        window.location.href = "youfeed.html";
    }
};

const isUsuarioPessoaJuridica = (loginUsuario) => {
    loginUsuario = loginUsuario.replace(/[^\d]/g, "");
    console.log(loginUsuario);
    if (!isNumeric(loginUsuario)) {
        return false;
    }

    if (loginUsuario.length !== 14) {
        return false;
    }

    return true;
};

const isNumeric = (input) => {
    return !isNaN(parseInt(input, 10));
};

const removerCaracteresEspeciaisCNPJ = (nomeSobrenomeCnpj) => {
    nomeSobrenomeCnpj = nomeSobrenomeCnpj.replace(/[^\d]/g, "");
};
