// ##### setInterval / clearInterval #####
Detta är async (läses inte rad för rad)

let counter = 1;

// Anropa en icke-anonym funktion genom namnet
const increment = () => {
  counter++
  console.log(counter)
}
setInterval (
  increment,
  1000
)

// Anonym callback funktion(deklarerad inne i funktionen):
setInterval (
  () => {
    counter++ 
    console.log(counter)
  },
  1000 //  Varje 1 sec
 )

// Att stoppa ett interval
const increment = () => {
  counter++
  console.log(counter);

  if (counter === 10){
    clearInterval(counterID)
  }
}
const counterID = setInterval (
  increment,
  1000
)



