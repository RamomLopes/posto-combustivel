import data from './data.js';

const value = document.getElementById("value");
const quant = document.getElementById("quant");
const dateDay = document.getElementById("data2");
const hour = document.getElementById("hora");

const frontmenSelect = document.getElementById("select-frent");
const frontmenField = document.getElementById("frent");
const registrationField = document.getElementById("mat");
const litersInput = document.getElementById("input-litros");
const fleetInput = document.getElementById("input-fleet");
const fleetField = document.getElementById("fleet");
const driverField = document.getElementById("arrend");
const plateField = document.getElementById("plate");
const controlInput = document.getElementById("input-controle");
const numSupply = document.getElementById("num-abast");
const selectFuel = document.getElementById("select-comb");
const fuelField = document.getElementById("combust");
const timeInput = document.getElementById("input-hour");

const btnPrint = document.getElementById("btn-print");

const btnOpenPanelUpdateFuelValue = document.getElementById("btn-config-value");
const dialog = document.getElementById("dialog");
const dialogOverlay = document.getElementById("dialog-overlay");
const dialogSelect = document.getElementById("select-config");
const btnUpdateFuelValue = document.getElementById("btn-update");
const btnCloseDialog = document.getElementById("btn-close-dialog");
const inputFuelPrice = document.getElementById("input-config");
const spanNotification = document.getElementById("span-notification");

const frontmans = [
    { name: "", registration: "" },
    { name: "RAMOM LOPES", registration: "77227" },
    { name: "AIRTON SATIL", registration: "77851" },
    { name: "CLAUDIO MOREIRA", registration: "77047" },
    { name: "MIRIÃ LORRAINE", registration: "77767" },
    { name: "WELLINGTON CANDIDO", registration: "77323" },
    { name: "WESLEY SILVA", registration: "77208" },
    { name: "WALISON SANTANA", registration: "77824" },
    { name: "WALISSON GOMES", registration: "76672" },
];

frontmans.forEach(frontman => {
    const optionElement = document.createElement('option');
    optionElement.value = frontman.name;
    optionElement.textContent = frontman.name;
    frontmenSelect.appendChild(optionElement);
});

function calcPrice(quantity){
    let result = 0.0;

    if(selectFuel.value == "ETANOL"){
        result = quantity * +localStorage.getItem("priceEtanol");
    }else {
        result = quantity * +localStorage.getItem("priceDiesel");
    }
    
    return result;
}

selectFuel.addEventListener("change", () => {
    fuelField.textContent = "COMBUSTÍVEL: " + selectFuel.value;
    value.textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
});

litersInput.addEventListener("change", () => {
    quant.textContent = "QUANTIDADE: " + litersInput.value + " LITROS";
    value.textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
});

let date = new Date();

dateDay.textContent += date.toLocaleDateString('pt-br', {dateStyle: "short"});
hour.textContent += date.toLocaleTimeString('pt-br', {timeStyle: "short"});

timeInput.addEventListener("change", () => {
    hour.textContent = "HORA: " + timeInput.value; 
});

frontmenSelect.addEventListener("change", () => {
    frontmenField.textContent = "FRENTISTA: " + frontmenSelect.value;

    frontmans.forEach(frent => {
        if(frontmenSelect.value == frent.name){
            registrationField.textContent = "MATRÍCULA: " + frent.registration;
        }
    });
});

fleetInput.addEventListener("change", () => {
    data.forEach(lessor => {
        lessor.vehicles.forEach(vehicle => {
            let info = fleetInput.value.toUpperCase();

            if(info == vehicle.fleet || info == vehicle.plate){
                fleetField.textContent = "FROTA: " + vehicle.fleet;
                driverField.textContent = "MOTORISTA: " + lessor.name;

                let sufixoplate = vehicle.plate.slice(3);
                let prefixoplate = vehicle.plate.slice(0, 3);

                let plate = prefixoplate + "-" + sufixoplate;

                plateField.textContent = "PLACA: " + plate;
            } 
        });
    });
});

btnUpdateFuelValue.addEventListener("click", () => {
    if(inputFuelPrice.value == ""){
        spanNotification.textContent = "Campos em branco!";
        spanNotification.style.color = "red";
        return;
    }else{
        spanNotification.textContent = "Alteração realizada com sucesso!";
        spanNotification.style.color = "green";
    }

    if(dialogSelect.value == "ETANOL"){
        localStorage.setItem("priceEtanol", inputFuelPrice.value);
    }else if(dialogSelect.value == "DIESEL S10") {
        localStorage.setItem("priceDiesel", inputFuelPrice.value);
    }

    inputFuelPrice.value = "";
});

controlInput.addEventListener("change", () => {
    numSupply.textContent = "ABAST. NÚMERO: " + controlInput.value;
});

btnPrint.addEventListener("click", () => {
    window.print();
});

btnOpenPanelUpdateFuelValue.addEventListener("click", () => {
    dialog.style = "display: block";
    dialogOverlay.style = "display: block";
});

function closeDialog(){
    dialog.style = "display: none";
    dialogOverlay.style = "display: none";
    spanNotification.textContent = "";
}

btnCloseDialog.addEventListener("click", closeDialog);

