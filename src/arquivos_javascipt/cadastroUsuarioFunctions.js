const salvarDadosDoUsuarioNoLocalStorage = () => {
    let nomeSobrenomeCnpj = document.getElementById(
        "nomeSobrenomeCnpjCadastro"
    ).value;

    let email = document.getElementById("emailCadastro").value;

    let senha = document.getElementById("senhaCadastro").value;

    let confirmarSenha = document.getElementById(
        "confirmarSenhaCadastro"
    ).value;

    let numeroCelular = document.getElementById("numeroCelularCadastro").value;

    let nomeUsuario = document.getElementById("nomeUsuarioCadastro").value;

    removerCaracteresEspeciaisCNPJ(nomeSobrenomeCnpj);

    let novoUsuario = {
        nomeSobrenomeCnpj,
        email,
        senha,
        confirmarSenha,
        numeroCelular,
        nomeUsuario,
    };

    let usuariosCadastrados = JSON.parse(
        localStorage.getItem("usuariosCadastrados")
    );

    if (usuariosCadastrados === null) usuariosCadastrados = [];

    usuariosCadastrados.push(novoUsuario);

    localStorage.setItem(
        "usuariosCadastrados",
        JSON.stringify(usuariosCadastrados)
    );
};

const removerCaracteresEspeciaisCNPJ = (nomeSobrenomeCnpj) => {
    nomeSobrenomeCnpj = nomeSobrenomeCnpj.replace(/[^\d]/g, "");
};
