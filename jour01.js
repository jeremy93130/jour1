/* Exercice 1 - Hello World*/

console.log("hello world")


/* Exercice 2 - String*/


var test = "My name is Jeremy"

console.log(test)

/* Exercice 3 - Concatenation */

var firstName = "Jeremy"

console.log("nice to meet you " + firstName)


/* Exercice 4 - String Lenght*/

var testLenght = "i am very long !"

console.log(testLenght.length)

/* Exercice 5 - Replace*/

var food = "croissant is meh"

var food = food.replace(`meh`, `so good`)

console.log(food)


/* Exercice 6 - Up and Down */

var basic = "This is Cool"

var basicUp = basic.toUpperCase()

var basicDown = basic.toLowerCase()

console.log(basic)

console.log(basicUp)

console.log(basicDown)


/* Exercice 7 - Split */

var word = "banana"

var letters = word.split("")
console.log(letters)


/* Exercice 8 - Templates */

var age = 29

var template = `i'm ${age} years old`

console.log(template)



/* Bonus 1 - Substring*/

var game = "Grand Thief Auto"

console.log(game.substring(0, 8))

console.log(game.substring(4))


/* Bonus 2 - Echappement */

var game = " Grand Thief \t Auto"

console.log(game)

var sentence = "\Je m'appelle Jeremy\ je suis\ntrès content merci beaucoup au revoir"

console.log(sentence)


/* Bonus 3 - Banjaur */
var changed = "bonjour"

var changed = changed.replaceall("o", "a")
console.log(changed)