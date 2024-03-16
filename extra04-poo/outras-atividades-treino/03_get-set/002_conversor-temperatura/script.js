// Classe ConversorTemperatura com propriedade celsius
class ConversorTemperatura{
    constructor(celsius, fahrenheit){
        this._celsius = celsius;
        this._fahrenheit = (celsius * 9/5) + 32;
    }

    // Get celsius() --> acessar o valor da propriedade celsius
    get celsius(){
        return this._celsius;
    }

    // Set celsius(valor) --> permite modificar o valor da propriedade celsius
    set celsius(valor){
        this._celsius = valor;
        this._fahrenheit = (valor * 9/5) + 32;
    }

    // Get fahrenheit() --> acessar o valor da propriedade fahrenheit
    get fahrenheit(){
        return this._fahrenheit;
    }

    // Set fahrenheit(value) --> permite modificar o valor da propriedade fahrenheit
    set fahrenheit(valor){ 
        this._fahrenheit = valor;
        this._celsius = (valor - 32) * 5/9;
    }
}

// Instância
let temperatura = new ConversorTemperatura(0)

// Exibição
console.log(temperatura.celsius);  // Output: 0
console.log(temperatura.fahrenheit);  // Output: 32
temperatura.fahrenheit = 68;
console.log(temperatura.celsius);  // Output: 20
console.log(temperatura.fahrenheit);  // Output: 68