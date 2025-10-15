
const table = document.querySelector('#table-lessor');

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`Chave: ${key}, Valor: ${value}`);

    if (!key.toString().includes('price') && (value !== '0')){
        let register = document.createElement('tr');
        let registerName = document.createElement('td');
        let registerSupply = document.createElement('td');
        let registerRemaind = document.createElement('td');

        registerName.textContent = key;
        registerSupply.textContent = value + ' litros';
        registerRemaind.textContent = (300 - (+value)) + ' litros';

        registerRemaind.style.color = (value >= 245) ? 'lightcoral' : (value >= 200) ? 'yellow' : registerRemaind.style.color;

        register.appendChild(registerName);
        register.appendChild(registerSupply);
        register.appendChild(registerRemaind);

        table.appendChild(register);
    }
    // Faça algo com a chave e o valor aqui
}