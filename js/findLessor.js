import data from "./data.js";

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
const btnBack = document.getElementById("btn-back");

const inputSupply = document.getElementById("input-abast");
const quantSupply = document.getElementById("qtd-abast");
const quantRemainder = document.getElementById("qtd-remainder");

const qtdGroupPanel = document.getElementById("qtd-group");

const dialog = document.getElementById("dialog");
const dialogOverlay = document.getElementById("dialog-overlay");
const btnCloseDialog = document.getElementById("btn-close-dialog");
const messageDialog = document.getElementById("message-dialog");

let lessorName;
let reset = false;

init();

function init(){
    qtdGroupPanel.style = "display: none";
}

function showLessorInformation(){
    qtdGroupPanel.style = "display: flex";
}

function clearFields(){
    span.textContent = "";
    spanFleet.textContent = "Frota";
    spanPlate.textContent = "Placa";

    listFleetsPanel.style = "display: none";
    qtdGroupPanel.style = "display: none";
}

inputSearch.addEventListener("change", () => {

    listFleets.textContent = "";

    let input = inputSearch.value.toUpperCase();
    
    data.forEach(lessor => {
        lessor.vehicles.forEach(vehicle => {
            if (input != vehicle.fleet || input != vehicle.plate) {
                clearFields();
                span.textContent = "Arrendante ou terceiro não encontrado!";
                init();
            }
        });
    });
    

    data.forEach(lessor => {
        lessor.vehicles.forEach(vehicle => {

            if(input == "" || input == "NULL"){
                clearFields();
                span.textContent = "Faça sua pesquisa";
            }else if(input == vehicle.fleet || input == vehicle.plate){
                
                span.textContent = lessor.name;
                spanFleet.textContent = "Frota: " + vehicle.fleet;

                if(vehicle.plate != "NULL"){
                    let sufixoplate = vehicle.plate.slice(3);
                    let prefixoplate = vehicle.plate.slice(0, 3);
                    let plate = prefixoplate + "-" + sufixoplate;

                    spanPlate.textContent = "Placa: " + plate;
                }else{
                    spanPlate.textContent = "Placa: " + "---";
                }

                lessorName = lessor.name;
                
                showListElements(lessorName);
                updateSupply(lessorName);
                
                if(lessor.third == "1"){
                    labelSpan.textContent = "Terceiro";
                    qtdGroupPanel.style = "display: none";
                }else{
                    labelSpan.textContent = "Arrendante";
                    showLessorInformation();
                }
            }

        });
    })

});

btnCloseDialog.addEventListener("click", closeDialog);

function showDialog(message){

    if(message != null || message != ""){
        messageDialog.textContent = message;
    }else{
        messageDialog.textContent = "Mensagem padrão";
    }

    dialog.style = "display: block";
    dialogOverlay.style = "display: block"
}

function closeDialog(){
    dialog.style = "display: none";
    dialogOverlay.style = "display: none"
}

function updateSupply(name){
    if(localStorage.getItem(name) == null || localStorage.getItem(name) == "null"){
        quantSupply.textContent = "0 litros";
        quantRemainder.textContent = "300 litros"
        return;
    }
    quantSupply.textContent = `${localStorage.getItem(name)} litros`;

    let remainder = 300 - localStorage.getItem(name);
    quantRemainder.textContent = `${remainder} litros`;
}

function showListElements(name){
    listFleetsPanel.style = "display: flex; flex-direction: column";

    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    data.forEach(lessor => {
        lessor.vehicles.forEach(vehicle => {
            if(lessor.name == name){
                let item = document.createElement('li');
                item.textContent = vehicle.fleet;
                ul.appendChild(item);
                listFleets.appendChild(ul);
            }
        });
    });
}

btnSupply.addEventListener("click", () => {
    showDialog("Abastecimento");
});

dialogBtnAdd.addEventListener("click", () => {

    if(inputSupply.value != ""){

        data.forEach(lessor => {
            if(lessor.name == lessorName){
                let quantity = localStorage.getItem(lessor.name);

                if(reset){
                    quantity = 0;
                    reset = false;
                }
                
                console.log(quantity);
                lessor.supply = +inputSupply.value + +quantity;
                localStorage.setItem(lessor.name, lessor.supply);
                updateSupply(lessor.name);
            }
        })
    }

    inputSupply.value = "";
});

dialogBtnReset.addEventListener("click", () => {

    data.forEach(lessor => {
        if(lessor.name == lessorName){
            reset = true;
            localStorage.setItem(lessor.name, 0);
            lessor.supply == 0.0;
            updateSupply(lessor.name);
        }
    })

    closeDialog();
});

btnBack.addEventListener("click", () => {
    window.location.href = "../index.html";
});
