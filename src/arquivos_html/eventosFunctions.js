const cadastrarEventos = () => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    console.log(usuarioLogado);

    const nomeEvento = document.getElementById("nomeEvento").value;
    const dataEvento = document.getElementById("dataEvento").value;
    const atracaoEvento = document.getElementById("atracaoEvento").value;

    const novoEvento = {
        nomeEvento,
        dataEvento,
        atracaoEvento,
        usuario: usuarioLogado.loginUsuario,
    };

    let eventosCadastrados = JSON.parse(
        localStorage.getItem("eventosCadastrados")
    );

    if (eventosCadastrados === null) eventosCadastrados = [];

    eventosCadastrados.push(novoEvento);

    localStorage.setItem(
        "eventosCadastrados",
        JSON.stringify(eventosCadastrados)
    );

    alert("Evento cadastrado com sucesso!");
};

const renderizarEventos = () => {
    const eventosCadastrados = JSON.parse(
        localStorage.getItem("eventosCadastrados")
    );

    const listaEventos = document.getElementById("listaEventos");
    listaEventos.innerHTML = "";

    if (!eventosCadastrados || eventosCadastrados.length === 0) {
        listaEventos.innerHTML += "<p>Nenhum evento cadastrado!</p>";
        return;
    }
    eventosCadastrados.forEach((evento, index) => {
        listaEventos.innerHTML += `
            <div id = ${evento.nomeEvento}-${index}>
                <h2>Nome do evento: ${evento.nomeEvento}</h2>
                <h4>Data do evento: ${formatarData(evento.dataEvento)}</h4>
                <p>${evento.atracaoEvento}</p>
                <hr/>
            </div>
        `;
    });
};

const removerEventosCadastradosByUsuarioLogado = () => {
    const eventosCadastrados = JSON.parse(
        localStorage.getItem("eventosCadastrados")
    );

    if (!eventosCadastrados || eventosCadastrados.length === 0) {
        alert("Não existem eventos cadastrados!");
        return;
    }

    let confirmacaoRemoverEventos = window.confirm(
        "Todos os eventos cadastrados por você serão removidos, tem certeza que deseja continuar?"
    );

    if (confirmacaoRemoverEventos) {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (eventosCadastrados && eventosCadastrados.length != 0) {
            const eventosCadastradosPelousuarioLogado =
                eventosCadastrados.filter(
                    (evento) => evento.usuario === usuarioLogado.loginUsuario
                );
            if (
                eventosCadastradosPelousuarioLogado &&
                eventosCadastradosPelousuarioLogado.length > 0
            ) {
                const eventosFiltrados = eventosCadastrados.filter(
                    (evento) => evento.usuario !== usuarioLogado.loginUsuario
                );

                if (eventosFiltrados && eventosFiltrados.length > 0) {
                    localStorage.setItem(
                        "eventosCadastrados",
                        JSON.stringify(eventosFiltrados)
                    );

                    alert(
                        "Todos os eventos cadastrados por você foram removidos com sucesso!"
                    );
                }
            } else {
                alert("Não existem eventos cadastrados por você!");
            }
        }
    } else {
        alert("Nenhum evento foi removido!");
    }
};

function formatarData(dataString) {
    const data = new Date(dataString);

    if (isNaN(data.getTime())) {
        console.error("A string de data é inválida.");
        return null;
    }
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
