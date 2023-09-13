// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).

// b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

// c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.

function criacaoDeArrays()
{
const numeros = [5, 8484, 848, 1156]
const strings = ["Rafaela", "Luís", "Zenilda"]
const all = [true, 457, "Palhaço"]

console.log(numeros.length)
console.log(strings.length)
console.log(all.length)

}


criacaoDeArrays()

function exe2()
{
const numeros = [5, 8484, 848, 1156]
const strings = ["Rafaela", "Luís", "Zenilda"]
const all = [true, 457, "Palhaço"]

console.log(numeros[0])
console.log(strings[1])
console.log(all[2])

console.log(numeros.includes(5))
console.log(all.includes(12))
}

exe2 ()
