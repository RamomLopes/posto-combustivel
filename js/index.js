import data from './data.js';

let value = document.getElementById("value");
let quant = document.getElementById("quant");
let dateDay = document.getElementById("data2");
let hour = document.getElementById("hora");

let frontmenSelect = document.getElementById("select-frent");
let frontmenField = document.getElementById("frent");
let registrationField = document.getElementById("mat");
let litersInput = document.getElementById("input-litros");
let fleetInput = document.getElementById("input-fleet");
let fleetField = document.getElementById("fleet");
let driverField = document.getElementById("arrend");
let plateField = document.getElementById("plate");
let controlInput = document.getElementById("input-controle");
let numSupply = document.getElementById("num-abast");
let selectFuel = document.getElementById("select-comb");
let fuelField = document.getElementById("combust");
let timeInput = document.getElementById("input-hour");
let btnSearch = document.getElementById("btn-search");
let btnPrint = document.getElementById("btn-print");

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
    let result = quantity * 3.672;
    return result;
}

selectFuel.addEventListener("change", () => {
    fuelField.textContent = "COMBUSTÍVEL: " + selectFuel.value;
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

controlInput.addEventListener("change", () => {
    numSupply.textContent = "ABAST. NÚMERO: " + controlInput.value;
});

btnSearch.addEventListener("click", () => {
    window.location.href = "./html/findLessor.html";
});

btnPrint.addEventListener("click", () => {
    window.print();
});

