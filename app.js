const cep = document.getElementById("cepIn");
const city = document.getElementById("cityIn");
const estado = document.getElementById("estadoIn");
cep.addEventListener("blur", (e) => {
    const valorCep = cep.value.replace(/\D/g, '');
    const validacep = /^[0-9]{8}$/;

    if (!validacep.test(valorCep)) {
        alert("CEP inválido");
    } else {
        city.value = "Carregando...";
        estado.value = "Carregando...";
        let cepsaida = valorCep;
        alert(cepsaida)
        fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
            .then(response => response.json())
            .then(data => {
                city.value = data.localidade;
                estado.value = data.uf;
            })
    }
})

const refForm = document.querySelector("form")
function registroStorage() {
    const formData = new FormData(refForm);
    const dados = Object.fromEntries(formData.entries());
    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Dados salvos com sucesso!");
}
window.addEventListener("load", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("cadastro"));
    if (dadosSalvos) {
        Object.entries(dadosSalvos).forEach(([id, valor]) => {
            const campo = document.getElementById(id);
            if (campo) campo.value = valor;
        });
    }
});
