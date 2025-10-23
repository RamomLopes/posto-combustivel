
const table = document.querySelector('#table-lessor');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const formatedValue = value.reduce((sum, v) => sum += v, 0);

    if (!key.toString().includes('price') && (formatedValue !== 0)){
        const register = document.createElement('tr');
        const registerName = document.createElement('td');
        const registerSupply = document.createElement('td');
        const registerRemaind = document.createElement('td');

        registerName.textContent = key;
        registerSupply.textContent = formatedValue + ' litros';
        registerRemaind.textContent = (300 - (+formatedValue)) + ' litros';

        registerRemaind.style.color = (formatedValue >= 245) ? 'lightcoral' : (formatedValue >= 200) ? 'yellow' : registerRemaind.style.color;

        register.appendChild(registerName);
        register.appendChild(registerSupply);
        register.appendChild(registerRemaind);

        table.appendChild(register);
    }
    // Faça algo com a chave e o valor aqui
}