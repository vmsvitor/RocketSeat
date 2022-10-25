// if... else

// IF | Se
// ELSE | Se não

let temperature = 36.5
let highTemperature = temperature  >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else{
    console.log('Saudável')
}

// colocar as condicionais que tenham relevancia em variáveis
// Se a primeira opção foi selecionada, o JS não analisará as outras opções
// As condicionais aceitam valores truthy e falsy exemplo:

/*if(0) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else{
    console.log('Saudável')

    O JS pulará o if e analisará as outras condições pois 0 é falsy
    */