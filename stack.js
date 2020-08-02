const myPila = []//Esto ya es una pila, es una pila 

myPila.push("El quijote de la mancha")
myPila.push("El principito")
 myPila.pop()
console.log("myPila", myPila)

const Word = "arriba a birra" //Quiero comprobar si es un palindomp
var revert_word = "";//esta me va a servir para convrtir al palindromo
const letters = []//mi pila de letras
const espacios = []
Word[0]// a
Word[6]//espacio
for (var i = 0; i < Word.length; i++){
    if(Word[i] != " "){ 
    letters.push(Word[i]);
    }else {
        espacios.push(i)
        console.log("espacios", espacios)
    }
}

console.log(letters.length)
console.log("espacios", espacios)


for(var i=0; i < letters.length;i++){
    if(Word[i] != " "){
        revert_word = revert_word + letters.pop()
    }
}

console.log("revert_word", revert_word)

if(Word == revert_word){
    console.log(`${Word} es un palindromo`)
}else {
    console.log(`${Word} no es un palindromo`)
}

console.log(typeof(myPila))

class Stack {

    //Va a tener dos metodos push y pop 
    //peek ---> me dice ultimo elemento en pila
    //length  ---> me dice el tamaño de mi pila

    constructor(){
        this.count = 0 //Aqui voy a uardar cuantos elementos tengo en la pila
        this.storage = {}// aqui voy a guardar los lementos de la pila
    }

    push(nuevoElemento) {//Mete cosas nuevas a mi pila
        //{0:"x",1"y",2"z}
        this.storage[this.count] = nuevoElemento;//agrega un elemento a una pocision
        this.count++;
    }

    pop(){

        if(this.count == 0){
            return null;
        }//checa si la pila esta vacia

        this.count--;//quito uno a count
        var result = this.storage[this.count]// va guardar el ultimo elemento
        delete this.storage[this.count]//Se borra el ultimo elemento
        return result //rereso el ultimo elemento
    }

    length(){
        return this.count;

    }

    peek(){
        return this.storage[this.count]
    }
}