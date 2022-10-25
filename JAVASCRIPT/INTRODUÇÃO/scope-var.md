# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement

```js

// vamis iniciar um bloco

{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco também criará um novo escopo. Chamaos de `block-scoped`

## var
```js

// var é global e local e poderá funcionar fora de um escopo de bloco
// isto é hoisting (elevação)

// como se existisse uma var x

console.log('> existe x antes do bloco? ', x)

{
    var x = 0 // e aqui só atribui o valor x = 0
}

console.log('> existe x depois do bloco? ', x)
```

## let e const
```js

// const e let são colais e só funcionam no escopo onde foi criada.

console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> existe y depois do bloco? ', y)

// se atualizar o valor atribuído a variável, ela irá buscar a referência nas linhas de código anteriores, mesmo que dentro de um escopo

/* ex: 

let y = 1;

{
    y = 0
    console.log(y) = será 0
}

console.log(y) = o valor também será 0 pois foi atualizado mesmo que dentro do escopo

**No caso de atualizar o valor de uma const, irá dar erro pois não se pode mudar o valor a ela atribuído

**Porém, caso for criada uma const fora do escopo e outra dentro de um escopo com o mesmo nome não dará erro pois não se trata de atualização do escopo mas de duas const em escopos diferentes. ex:

const y = 1

{
    {
        {
            const y = 0
            console.log(y) o valor será = 0 pois está dentro do escopo
        }
    }
}

console.log(y) já aqui o valor será = 2 pois está dentro de outro escopo e usará o valor atribuído acima

** são const diferentes pois estão em escopos diferentes.


** O uso da var é evitado pois pode causar conflitos e bugs nos códigos. 

*/