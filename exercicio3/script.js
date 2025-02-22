// # Exercício 3

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Crie uma função que recebe o primeiro array como parâmetro e adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para imprimir o original e a cópia.

// b) Crie uma função que recebe o segundo array por parâmetro e remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

// c) Crie uma função que recebe por parâmetro o terceiro array e remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.


// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.


const array1 = [5, 8484, 848, 1156]
const array2 = ["Rafaela", "Luís", "Zenilda"]
const array3 = [true, 457, "Palhaço"]


function exe1 () 
{
const array1Copia = array1.slice()
array1Copia.push(777)

console.log(array1)
console.log(array1Copia)

}

exe1()

function exe2 ()
{
const array2Copia = array2.slice()
array2Copia.pop()

console.log(array2)
console.log(array2Copia)
}

exe2()


function exe3 ()
{
const array3Copia = array3.slice()
array3Copia.splice(1,1)

console.log(array3)
console.log(array3Copia)

}

exe3()
