import data from "../data.js";

const span = document.getElementById("span");
const inputSearch = document.getElementById("input");
const labelSpan = document.getElementById("label-span");
const spanFleet = document.getElementById("span-fleet");
const spanPlate = document.getElementById("span-plate");

const listFleets = document.getElementById("list");
const listFleetsPanel = document.getElementById("group-2");
const ul = document.createElement("ul");

const btnSupply = document.getElementById("btn-add-supply");
const dialogBtnAdd = document.getElementById("btn-add");
const dialogBtnReset = document.getElementById("btn-reset");

const inputSupply = document.getElementById("input-abast");
const quantSupply = document.getElementById("qtd-abast");
const quantRemainder = document.getElementById("qtd-remainder");

const qtdGroupPanel = document.getElementById("qtd-group");

const dialog = document.getElementById("dialog");
const dialogOverlay = document.getElementById("dialog-overlay");
const btnCloseDialog = document.getElementById("btn-close-dialog");
const messageDialog = document.getElementById("message-dialog");

const btnFullReset = document.getElementById("btn-full-reset");

let recoveredData;

init();

function init() {
    qtdGroupPanel.style = "display: none";
}

function initArraySupplies() {
    const arraySupplies = JSON.parse(localStorage.getItem(recoveredData.name));
    recoveredData.supplies = arraySupplies;
}

function showLessorInformation() {
    qtdGroupPanel.style = "display: flex";
}

function clearFields() {
    span.textContent = "";
    spanFleet.textContent = "Frota";
    spanPlate.textContent = "Placa";

    listFleetsPanel.style = "display: none";
    qtdGroupPanel.style = "display: none";
}

inputSearch.addEventListener("change", () => {
    listFleets.textContent = "";
    const input = inputSearch.value.toUpperCase();

    if(input === '' || input === 'NULL'){
        clearFields();
        span.textContent = "Faça sua pesquisa";
        return
    }

    recoveredData = data.find( d => {
        const vehicleFound = d.vehicles.find( v => 
            v.fleet === input || v.plate === input
        )
        return vehicleFound;
    })

    if(!recoveredData){
        clearFields();
        span.textContent = "Arrendante ou terceiro não encontrado!";
        init();
        return
    }

    initArraySupplies();
    const lessorName = recoveredData.name;
    const recoveredVehicles = recoveredData.vehicles.find(v => v.fleet === input || v.plate === input);

    span.textContent = lessorName;
    spanFleet.textContent = "Frota: " + recoveredVehicles.fleet;

    const plate = recoveredVehicles.plate;

    if(plate != 'NULL'){
        const suffixPlate = plate.slice(3);
        const prefixPlate = plate.slice(0, 3);
        const plateFormated = prefixPlate + "-" + suffixPlate;

        spanPlate.textContent = "Placa: " + plateFormated;
    } else {
        spanPlate.textContent = "Placa: " + "---";
    }

    showListElements();
    updateSupply(lessorName);

    if(recoveredData.third === true){
        labelSpan.textContent = "Terceiro";
        qtdGroupPanel.style = "display: none";
    }else{
        labelSpan.textContent = "Arrendante";
        showLessorInformation();
    }
});

function showDialog(message) {
    messageDialog.textContent = (message != null || message != "") ? message : "Mensagem padrão";
    
    dialog.style = "display: block";
    dialogOverlay.style = "display: block";
}

function closeDialog() {
    dialog.style = "display: none";
    dialogOverlay.style = "display: none";
}

function updateSupply(lessorName) {
    if(localStorage.getItem(lessorName) == null || localStorage.getItem(lessorName) == "null"){
        quantSupply.textContent = "0 litros";
        quantRemainder.textContent = "300 litros"
        return;
    }
    const quantity = JSON.parse(localStorage.getItem(lessorName));
    const sumQuantity = quantity.reduce((sum, quant) => sum += quant, 0);
    quantSupply.textContent = `${sumQuantity} litros`;
    
    const remainder = 300 - sumQuantity;
    quantRemainder.textContent = `${remainder} litros`;
}

function showListElements() { 
    const lessor = recoveredData;
    
    listFleetsPanel.style = "display: flex; flex-direction: column";
    
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    
    const vehicles = lessor.vehicles;
    
    for(let i = 0; i < vehicles.length; i++){
        const item = document.createElement('li');
        item.textContent = vehicles[i].fleet;
        ul.appendChild(item);
        listFleets.appendChild(ul);
    }
    
}

function addSupply() {
    const lessorName = recoveredData.name;
    
    if(inputSupply.value !== ""){
        
        if(recoveredData.supplies === null){
            recoveredData.supplies = []; // transformando a variavel que está nula em um array vazio
        }
        
        recoveredData.supplies.push(+inputSupply.value);
        localStorage.setItem(lessorName, JSON.stringify(recoveredData.supplies));
        updateSupply(lessorName);
    }
    inputSupply.value = "";
}

function resetSupply() {
    const lessorName = recoveredData.name;
    localStorage.setItem(lessorName, '[]');
    recoveredData.supplies = [];
    updateSupply();
    
    closeDialog();
}

btnCloseDialog.addEventListener("click", closeDialog);
btnSupply.addEventListener("click", () => { showDialog("Abastecimento"); });
dialogBtnAdd.addEventListener("click", addSupply);
dialogBtnReset.addEventListener("click", resetSupply);

btnFullReset.addEventListener('click', () => {
    confirm('Deseja realmente deletar todos os dados de abastecimentos?') ? localStorage.clear() : console.log('Reset cancelado');
    location.reload();
});

