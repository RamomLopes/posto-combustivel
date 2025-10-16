
const table = document.querySelector('#table-lessor');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (!key.toString().includes('price') && (value !== '0')){
        const register = document.createElement('tr');
        const registerName = document.createElement('td');
        const registerSupply = document.createElement('td');
        const registerRemaind = document.createElement('td');

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