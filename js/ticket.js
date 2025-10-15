import data from '../data.js';

const value = document.querySelectorAll(".value");
const quant = document.querySelectorAll(".quant");
const dateDay = document.querySelectorAll(".data2");
const hour = document.querySelectorAll(".hora");

const employeeSelect = document.getElementById("select-frent");
const employeeField = document.querySelectorAll(".frent");
const registrationField = document.querySelectorAll(".mat");
const litersInput = document.getElementById("input-litros");
const fleetInput = document.getElementById("input-fleet");
const fleetField = document.querySelectorAll(".fleet");
const driverField = document.querySelectorAll(".arrend");
const plateField = document.querySelectorAll(".plate");
const controlInput = document.getElementById("input-controle");
const numSupply = document.querySelectorAll(".num-abast");
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
const btnShowSecondCopy = document.getElementById("btn-second-copy");
const ticket = document.querySelectorAll(".ticket");

const employees = [
    { name: "", registration: "" },
    { name: "RAMOM LOPES", registration: "77227" },
    { name: "AIRTON SATIL", registration: "77851" },
    { name: "CLAUDIO MOREIRA", registration: "77047" },
    { name: "MIRIÃ LORRAINE", registration: "77767" },
    { name: "WELLINGTON CANDIDO", registration: "77323" },
    { name: "WESLEY SILVA", registration: "77208" },
    { name: "WALISON SANTANA", registration: "77824" },
];

employees.forEach(frontman => {
    const optionElement = document.createElement('option');
    optionElement.value = frontman.name;
    optionElement.textContent = frontman.name;
    employeeSelect.appendChild(optionElement);
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
    value[0].textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
    value[1].textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
});

litersInput.addEventListener("change", () => {
    quant[0].textContent = "QUANTIDADE: " + litersInput.value + " LITROS";
    quant[1].textContent = "QUANTIDADE: " + litersInput.value + " LITROS";

    value[0].textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
    value[1].textContent = "VALOR: R$ " + calcPrice(litersInput.value).toFixed(2).replace(".", ",");
});

let date = new Date();

dateDay[0].textContent += date.toLocaleDateString('pt-br', {dateStyle: "short"});
dateDay[1].textContent += date.toLocaleDateString('pt-br', {dateStyle: "short"});
hour[0].textContent += date.toLocaleTimeString('pt-br', {timeStyle: "short"});
hour[1].textContent += date.toLocaleTimeString('pt-br', {timeStyle: "short"});

timeInput.addEventListener("change", () => {
    hour[0].textContent = "HORA: " + timeInput.value; 
    hour[1].textContent = "HORA: " + timeInput.value; 
});

employeeSelect.addEventListener("change", () => {
    employeeField[0].textContent = "FRENTISTA: " + employeeSelect.value;
    employeeField[1].textContent = "FRENTISTA: " + employeeSelect.value;

    employees.forEach(frent => {
        if(employeeSelect.value == frent.name){
            registrationField[0].textContent = "MATRÍCULA: " + frent.registration;
            registrationField[1].textContent = "MATRÍCULA: " + frent.registration;
        }
    });
});

function clearFields(){
    fleetField.textContent = "FROTA:";
    driverField.textContent = "TERCEIRO:";
    plateField.textContent = "PLACA:";
}

fleetInput.addEventListener("change", () => {
    let info = fleetInput.value.toUpperCase();

    if(info == ""){
        clearFields();
        return;
    } 

    data.forEach(lessor => {
        lessor.vehicles.forEach(vehicle => {
            if(info == vehicle.fleet || info == vehicle.plate){
                fleetField[0].textContent = "FROTA: " + vehicle.fleet;
                fleetField[1].textContent = "FROTA: " + vehicle.fleet;
                driverField[0].textContent = "TERCEIRO: " + lessor.name;
                driverField[1].textContent = "TERCEIRO: " + lessor.name;

                if(vehicle.plate != "NULL"){
                    let suffixPlate = vehicle.plate.slice(3);
                    let prefixPlate = vehicle.plate.slice(0, 3);
                    let plateFormated = prefixPlate + "-" + suffixPlate;

                    plateField[0].textContent = "PLACA: " + plateFormated;
                    plateField[1].textContent = "PLACA: " + plateFormated;
                }else{
                    plateField[0].textContent = "PLACA: SEM PLACA";
                    plateField[1].textContent = "PLACA: SEM PLACA";
                }                
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
    numSupply[0].textContent = "ABAST. NÚMERO: " + controlInput.value;
    numSupply[1].textContent = "ABAST. NÚMERO: " + controlInput.value;
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

// inicialmente é vizualizado apenas um ticket
ticket[1].classList.remove('ticket');

btnShowSecondCopy.addEventListener("click", () => {

    if (ticket[1].classList.contains('show')){
        ticket[1].classList.remove('show', 'ticket');
        ticket[1].classList.add('hidden');
    }else if (ticket[1].classList.contains('hidden')){
        ticket[1].classList.remove('hidden');
        ticket[1].classList.add('show', 'ticket'); 
    }
        
});