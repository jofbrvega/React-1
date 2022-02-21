Det finns olika sätt att ska arrow functions 

const arrowFunc1 = () => {
        console.log('arrowFunc1')
} 
arrowFunc1(); 

const arrowFunc2WithReturn = () => {
        return 'This is arrow function 2 with return';
}
console.log(arrowFunc2WithReturn());

const arrowFunc3WithReturn = () => 'This is returned without the "return" word';
console.log(arrowFunc3WithReturn());

const arrowFunc4WithReturn = () => (
        ' This type of way to write, 
        + ' can return multi lines '
);
console.log(arrowFunc4WithReturn())

const arrowFunc5WithReturn = () => (     
      {
        text: 'Detta är ett object inom måsvingarna och paranteserna representerar return'; 
      }
)      