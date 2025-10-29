const cep = document.getElementById("cepIn");
const city = document.getElementById("cityIn");
const estado = document.getElementById("estadoIn");
cep.addEventListener("blur",(e)=>{
    e.preventDefault();
     const valorCep = cep.value.replace(/\D/g, ''); // remove tudo que não é número
    const validacep = /^[0-9]{8}$/;

    if (!validacep.test(valorCep)) {
        alert("CEP inválido");
    } else {
        city.value = "Carregando...";
        estado.value = "Carregando...";
    }
})