//Q#2

// let name= "Eric "
// alert('Hello'+' '+name)

//Q#3

// let personName='Danial'
// alert("Uppercase =" +personName.toUpperCase())
// alert("Lowercase ="+personName.toLowerCase())

// alert("Titlecase ="+personName[0].toUpperCase()+personName.substring(1))

//Q#4
// let authorName="Joun F.Kennedy"
// let quote=' "Those who dare to fail miserably can achieve greatly." '

// alert(authorName+" "+"once said"+" "+quote)

//Q#5

// let  famous_person="Joun F.Kennedy"
// let quote=' "Those who dare to fail miserably can achieve greatly." '

// alert(famous_person+" "+"once said"+" "+quote)

//Q6




//Q7

// let a=5;
// let b=3;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

//Q8

// for(let i=0 ;i<=3; i++){
//     document.write(5+3 +'</br>' )
// }

//Q9

// let myFavNum="9"
// alert("My favourite number is"+" "+myFavNum)


//Q#10
//Commenting

// let  famous_person="Joun F.Kennedy"
// let quote=' "Those who dare to fail miserably can achieve greatly." '

// alert(famous_person+" "+"once said"+" "+quote)

//Q11
// let names=["Fahad", "Ayesha", "Saleh", "Aqeel","Inaya"]
// for(let i=0 ; i<names.length ; i++){
//     console.log(names[i])
// }

//Q12
// let names1=["Fahad", "Ayesha", "Saleh", "Aqeel","Inaya"]
// for(let i=0 ; i<names1.length ; i++){
//     console.log("Hello"+" "+names1[i])
// }

//Q#13
// let favCar =['Honda','Toyota','Lexus','Range Rover']
// let statement=[' I would like to ride','I love red'  ,'my favourite car is','I am planning to buy']
// for (let i=0; i<favCar.length;i++){
//     alert(statement[i]+' '+favCar[i])
// }

//Q#14
// let guest =['Ayliya .','Ali .','Zoya .','Zain .']
//  let message=[' I would love to have you here.','Try to reach on time.'  ,'Dinner will be served at 9:00 sharp.','We will be waiting for you and your family.']
//  for (let i=0; i<guest.length;i++){
//      alert(message[i]+' '+guest[i])
// }


//Q15
// let guest =['Ayliya .','Ali .','Zoya .','Zain .']
// console.log(guest)
// let guestNotAvail=guest.pop('Zain')
// let guestAvail=guest.push('Ahmed')

// console.log(guestNotAvail+"can't make it to dinner")
// console.log(guest)

// let message=[' I would love to have you here.','Try to reach on time.'  ,'Dinner will be served at 9:00 sharp.','We will be waiting for you and your family.']
// for (let i=0; i<guest.length;i++){
//     console.log(message[i]+' '+guest[i])
// }


//Q18

//const arr=["maldives","switzerland","france","moroco","australia"]
//Print your array in its original order.

//console.log("orignal array"+ ' '+arr)

//Print your array in alphabetical order without modifying the actual list.

//let places=[...arr]
//console.log(places.sort())

//Show that your array is still in its original order by printing it.
//console.log(arr)

//Print your array in reverse alphabetical order without changing the order of the original list.

//console.log(places.reverse())

//Show that your array is still in its original order by printing it again.
//console.log(arr)

//Reverse the order of your list. Print the array to show that its order has changed.
//console.log(places.reverse())

//Reverse the order of your list again. Print the list to show it’s back to its original order.

//console.log(places.reverse())

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//console.log(places.sort())

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//console.log(places.sort())


//Q19

// let guest =['Ayliya .','Ali .','Zoya .','Zain .']
// console.log("no guest  invited are" +' '+guest.length)

//Q20


//Q21

// let personalInfo=new Object()

// personalInfo.FirstName='Fahad'
// personalInfo.LastName='Qasim'
// personalInfo.age='21'

// console.log(personalInfo)

//Q22


// let list=[1,2,3,4]
// console.log('deleting an element which is out of range')
// console.log(list.splice(52))

//Q#23

// const pet = prompt('enter your pet')

// if (pet === "lizard") {
//     console.log("I own a lizard");
// } else if (pet === "dog") {
//     console.log("I own a dog");
// } else if (pet === "cat") {
//     console.log("I own a cat");
// } else if (pet === "snake") {
//     console.log("I own a snake");
// } else if (pet === "parrot") {
//     console.log("I own a parrot");
// } else {
//     console.log("I don't own a pet");
// }


// let car = 'Lexus'

// if (car != 'Prado') {
//     console.log(false)
// }
// else if (car == 'Lexus') {
//     console.log(true)
// }
// else {
//     console.log('not matched either')
// }

//Q#24
// let num= "7"
// if (num == "7"){
//     console.log(true)
// }
// else if(num != "7"){
//     console.log('false')
// }

// let Name="ayesha"
// if('ayesha'!=Name){
//     console.log(false)
// }
// else if(Name=='ayesha'){
//     console.log(true)
// }
// else if(Name.toUpperCase=='Ayesha'){
//     console.log('name matched')
// }
// else if (Name.length==5 || Name.length<6){
//     console.log('false')
// }

//Q#25
// let alien_color= "green";
// let userInput=prompt('Enter alien color');
// if (userInput==alien_color){
//     console.log("You just earned 5 points")
// }
// else if(userInput!=alien_color){
//     console.log()
// }
// else{
//    console.log("color not matched") 
// }

//Q#26
// let alien_color="green";
// let userInput= prompt("Enter alien color");
// if (userInput==alien_color){
//  console.log ('You earned 5 points for shooting the aelien')
// }
// else if(userInput!=alien_color){
//     console.log('You just earned 10 points')
//}

//Q#27
// let userInput=prompt('Enter Alien color')
// if (userInput=="green"){
//     console.log('You earned 5 points')
// }
// else if (userInput=="yellow") {
//     console.log('You earned 10 points')
// }
// else if (userInput=="red") {
//     console.log('You earned 15 points')
//}

//Q#28

// let age = 65;
// if (age<2) {
//     console.log('The person is baby');
// }
// else if (age<4 || age==2 ){
//     console.log("The person is toddler")
// }
// else if (age ==4 || age<13){
//     console.log('The person is a kid')
// }
// else if(age==13 || age<20) {
//     console.log("The person is a teenager")
// }
// else if(age==20|| age<65) {
//     console.log("The person is adult")
// }
// else if(age>=65){
//     console.log('The person is adult')
// }
// else{
//     console.log('not matched')
// }

//Q29

// let favourite_fruits=['apple','mango','orange']
// let fruit=prompt('enter your favourite  fruit')

// for(let  i=0;i<favourite_fruits.length;i++){
//     if(fruit==favourite_fruits[i]){
//         console.log(fruit+' '+'is my favourite fruit')
//         break
//     }
//     else if('bananas'==favourite_fruits[i]){
//         console.log("You really like bananas!")

//     }
//     else if('kiwi'==favourite_fruits[i]){
//         console.log("You really like kiwi!")

//     }
//     else if('cherry'==favourite_fruits[i]){
//         console.log("You really like cherry!")

//     }
//     else if('pear'==favourite_fruits[i]){
//         console.log("You really like pear!")

//     }


// }

//Q#30

// let userName = ['Admin', 'Ali', 'Fahad', 'Umer', 'Nadeem']

// let userInput = prompt('enter your name')

// for (let i = 0; i < userName.length; i++) {
//     if (userInput == 'Admin' && userInput == userName[i]){
//         console.log('Hello admin would you like to see a status report')
//         break
//     }
//     else if(userInput==userName[i]){
//         console.log('Hello'+" "+userName[i]+" " +"thank you for logging in")
//         break
//     }
//     else{
//         console.log('not found')
//     }
// }

//Q#32

// let currentUser = ['Ayan', 'Ahmed', 'Ehsan', 'Sidra', 'Fizza'];
// let newUser = ['Saira', 'Zeena', 'Ayan', 'Fariya', 'Sehrish'];
// for (let i = 0; i < currentUser.length; i++) {
//     for (let j = 0; j < newUser.length; j++) {
//         if (currentUser[i] == newUser[j]) {
//             console.log("Name has been used."+' '+currentUser[i])

//         }
//         else {
//             console.log("User name is available.")
//         }
//     }
// }


//Q#33

// let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < ordinalNum.length; i++) {
//     if (ordinalNum[i] == 1) {
//         console.log('1st')

//     } else if (ordinalNum[i] == 2) {
//         console.log('2nd')
//     } else if (ordinalNum[i] == 3) {
//         console.log('3rd')

//     } else {
//         console.log(ordinalNum[i] + 'th')
//     }
// }


//Q#34
// let pizza=['fajita','tikka','malai boti'];

// for (let i=0;i<pizza.length;i++){
//     console.log('I like '+' '+pizza[i]+ ' '+'pizza')
// }
// for (let i=0;i<pizza.length;i++){
//     console.log('I like '+' '+pizza[i] + ' '+"it's very yummy")
// }


//Q35

// let animals=['Lion',"Tiger","Leoperd"]

// for (let i=0;i<animals.length;i++){
//     console.log(animals[i]+' '+'is a wild animal and  they belong to cat family')
// }

//Q36

// let size=prompt('enter size of shirt')
// let message=prompt('enter message to be printed on shirt')


// const make_Shirt=(size , message)=>{

//     console.log('size of the shirt is' + ' ' +size +'\n'+ message)
// }
// make_Shirt(size,message)


//Q37

// let size = prompt('enter size of shirt')
// const make_Shirt = (size) => {
//     if (size == 'large' || size == 'medium') {

//         console.log('we  make large shirts and medium')
//     }
//     else {
//         console.log('we can make you' + ' ' + size + ' ' + 'shirt')
//     }

// }

// make_Shirt(size)


//Q38

// let countryName = prompt('Enter country name')
// let cityName = prompt('Enter city name')
// const describe_city = (cityName,countryName) => {
//     console.log(cityName+' '+'is in '+' '+countryName)
// }
// describe_city(cityName,countryName)

//Q39

// let cities = ['karachi', 'bombay', 'seoul']
// let country = ['pakistan', 'india', 'korea']

// const city_country = () => {
//     for (let i = 0; i < country.length; i++) {
//         for (let j = i; j < i + 1; j++) {
//             console.log(cities[i], country[i])
//         }
//     }
// }
// city_country()


//Q40

// const make_album = (artist, title, tracks = 0) => {

//     let album_dict = {
//         title: title,
//         artist: artist
//     }
//     if(tracks){
//         album_dict.tracks=tracks
//     }
//     return album_dict

// }
// console.log(make_album('annie marie',20))


//Q41

// let magicians = ['harry houdini', 'david blaine', 'teller']

// const magicians_name=(arr)=>{
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }
// magicians_name(magicians)

//Q42
// let magicians = ['harry houdini', 'david blaine', 'teller']

// const magicians_name = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// magicians_name(magicians)

// const make_great = (magicians) => {
//     let great_magicans = []

//     for (let i = 0; i < magicians.length; i++) {
//         let magician = magicians.pop()
//         let greatMagicans = magician + ' ' + 'Great'
//         great_magicans.push(greatMagicans)
//     }
//     for(let i=0;i<great_magicans.length;i++){
//         magicians.push(great_magicans[i])
//     }
//     return magicians

// }
// magicians_name(magicians)
// console.log(make_great(magicians))


//Q44

// const sandwich = (items) => {
//     for (let i = 0; i < items.length; i++) {
//         console.log(items[i] + ' ' + 'is added to your order')
//     }
//     console.log('your sandwich is ready')

// }
// sandwich(['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'])
// sandwich(['turkey', 'apple slices', 'honey mustard'])
// sandwich(['peanut butter', 'strawberry jam'])


//Q45

const car_make = (make, model, color = 0, addFeature = 0) => {
    if (color || addFeature) {
        let car = {
            make: make,
            model: model,
            color: color,
            additionalFeature: addFeature

        }
        console.log(car)
    }
    else {
        let car = {
            make: make,
            model: model,
        }
        console.log(car)
    }

}

car_make('subaru', 'outback', 'blue', 'abs brake')