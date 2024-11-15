// დავალებები
//პროექტი 19 - Paint Calculator - საღებავის კალკულატორი
//ზოგჯერ, დამრგვალების სტანდარტული წესების ნაცვლად, გვიწევს, რიცხვი მომდევნო რიცხვზე დავამრგვალოთ.
// გამოთვალეთ საღებავი გალონებში, რომელიც ოთახის ჭერის შესაღებადაა საჭირო. პროგრამამ input-ად უნდა მოითხოვოს
// ოთახის სიგრძე და სიგანე. ჩავთვალოთ, რომ ერთი გალონი 350 კვადრატულ ფუტს მოიცავს. მთელი რიცხვით აჩვენეთ გალონების
// ის რაოდენობა, რაც საჭიროა ჭერის შესაღებად.
//მაგალითად:
//shell
//> You will need to purchase 2 gallons of paint to cover 360 square feet.
//გახსოვდეთ - გალონი საღებავის ნაწილის შეძენა არ შეგიძლიათ, რიცხვი მომდევნო მთელ რიცხვზე - მთელ გალონზე უნდა დაამრგვალოთ.

// Prompt user for the width and length of the room
// const roomWidth = 50
// const roomLength = 50

// const calculator = roomWidth * roomLength;

// const averageGallon = 350;

// const gallonsNeeded = Math.ceil(calculator / averageGallon);

// console.log(`You will need to purchase ${gallonsNeeded} gallon(s) of paint to cover ${calculator} square feet.`);


// პროექტი 20 - Self-Checkout - თვით-გადახდა
//შექმენით მარტივი გადახდის სისტემა, რომლითაც მომხმარებელი შეძენილი პროდუქტების ფასს გამოითვლის. პროგრამამ input-ად უნდა 
//მოითხოვოს სამი ნივთის ფასები და თითოეულის რაოდენობა. გამოთვალეთ მათი საერთო ფასი. შემდეგ, გამოთვალეთ
// დამატებითი - 5.5%-იანი გადასახადი (tax). საბოლოოდ, პროგრამამ უნდა დაბეჭდოს პროდუქტების ფასი, გადასახადი და
// მთლიანი გადასახდელი თანხა - ანუ ფასისა და გადასახადის ჯამი.
//მაგალითად:
//shell
// Enter the price of item 1: 25
// Enter the quantity of item 1: 2
// Enter the price of item 2: 10
// Enter the quantity of item 2: 1
// Enter the price of item 3: 4
// Enter the quantity of item 3: 1
// Subtotal: $64.00
//Tax: $3.52
// Total: $67.52
//თქვენი პროგრამის input-ების, კალკულაციებისა და output-ების ნაწილები ერთმანეთისგან გამიჯნეთ.
// let price1 = Number(prompt('enter the price of item1'))
// let amount1 = Number(prompt('enter the amount of item1'))
// let sum1 = price1 * amount1

// let price2 = Number(prompt('enter the price of item2'))
// let amount2 = Number(prompt('enter the amount of item2'))
// let sum2 = price2 * amount2

// let price3 = Number(prompt('enter the price of item3'))
// let amount3 = Number(prompt('enter the amount of item3'))
// let sum3 = price3 * amount3

// const subPrice = sum1 + sum2 + sum3
// const subTax = subPrice * 5.5 / 100
// const sumEverything = subPrice + subTax

// console.log(`the price is ${subPrice}`)
// console.log(`the tax is ${subTax}`)
// console.log(`you have to pay ${sumEverything}`)

//პროექტი 21 - Currency Conversion - ვალუტის კონვერტაცია
//ზოგჯერ შეიძლება დაგჭირდეთ ვალუტის გაცვლის კურსებთან შეხება და უნდა დარწმუნდეთ, რომ თქვენი გამოთვლები მაქსიმალურად ზუსტია.
//დაწერეთ პროგრამა, რომელიც გარდაქმნის ვალუტას. კერძოდ, გადააკეთეთ ევრო აშშ დოლარში. მოითხოვეთ თანხის რაოდენობა ევროში და ევროს მიმდინარე კურსი. ამობეჭდეთ ახალი თანხა  დოლარში.

//ვალუტის კონცერტაციის ფორმულაა:

//amount to = (amount from * rate from ) / rate to

//სადაც: 
// Amount to არის თანხა დოლარში
// Amount from არის თანხა ევროში
// rate from არის მიმდინარე გაცვლითი კურსი ევროში
// rate to არის აშშ დოლარის მიმდინარე გაცვლითი კურსი

//მაგალითად:
//shell
//How many euros are you exchanging? 81
// What is the exchange rate? 137.51
// 81 euros at an exchange rate of 137.51 is 111.38 U.S. dollars.
// const amountFrom = Number(prompt('tanxa evroshi'))
// const rateFrom = Number(prompt('evros kursi'))
// const rateTo = 1;
// const amountTo = (amountFrom * rateFrom) / rateTo;
// console.log(`${amountFrom} euros at an exchange rate of ${rateFrom} is ${amountTo.toFixed(2)} U.S. dollars.`);



// პროექტი 22 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა
//მარტივი პროცენტის გამოთვლა შესანიშნავი გზაა იმის სწრაფად გასარკვევად, აქვს თუ არა ინვესტიციას ღირებულება. შექმენით პროგრამა,
//  რომელიც გამოითვლის მარტივ პროცენტს. Input-ად მოითხოვეთ ძირითადი თანხა, განაკვეთი პროცენტში და, შემდეგ კი აჩვენეთ დარიცხული
// თანხა (ძირი + პროცენტი). მარტივი პროცენტის ფორმულა არის A = P(1 + rt), სადაც P არის ძირითადი თანხა, r არის წლიური საპროცენტო 
// განაკვეთი, t არის წლების რაოდენობა და A არის თანხა ინვესტიციის დასრულებისას.

//მაგალითად:
//shell
// Enter the principal: 1500
// Enter the rate of interest: 4.3
// Enter the number of years: 4
// After 4 years at 4.3%, the investment will be worth $1758.
// let p = 1000
// let r = 10
// let t = 3
// let a = p* 1 + r*t
// console.log(`after ${t} years at ${r}% the investment will be worth ${ a} `)


// პროექტი 23 - Determining Compound Interest - რთული პროცენტის გამოთვლა
//ინვესტიციების უმეტესობა იყენებს რთული პროცენტის ფორმულას, რომელიც ბევრად უფრო ზუსტია. ეს ფორმულა მოითხოვს, რომ პროგრამებში ხარისხის 
//მაჩვენებლები ჩავრთოთ. დაწერეთ პროგრამა, 
//რომ გამოვთვალოთ ინვესტიციის ღირებულება დროთა განმავლობაში. პროგრამამ უნდა მოითხოვოს საწყისი თანხა, ინვესტიციის წლების რაოდენობა, 
//საპროცენტო განაკვეთი და წლიური პერიოდების რაოდენობა. ფორმულა შემდეგია: A = P(1 + r/n)nt, სადაც:
// P არის ძირითადი თანხა.
// r არის წლიური საპროცენტო განაკვეთი.
// t არის წლების რაოდენობა.
//n არის პროცენტის დარიცხვის რაოდენობა წელიწადში.
// A არის თანხა ინვესტიციის ბოლოს.

//მაგალითად:
//shell
// What is the principal amount? 1500
// What is the rate? 4.3
// What is the number of years? 6
// What is the number of times the interest is compounded per year? 4
// $1500 invested at 4.3% for 6 years compounded 4 times per year is $1938.84.
// let p = 1000
// let r = 10
// let t = 3
// let n = 4
// let A =  p*(1 + r/n)*(n*t)
// console.log(`${p} invested at${r}% for ${t} years compouned ${n} times per year is ${A} `)

//პროექტი 24 - Deep Thought - ღრმა ფიქრი
//“All right,” said the computer, and settled into silence again. The two men fidgeted. The tension was unbearable.
//“You're really not going to like it,” observed Deep Thought.
//“Tell us!”
//“All right,” said Deep Thought. “The Answer to the Great Question…”
//“Yes…!”
//“Of Life, the Universe and Everything…” said Deep Thought.
//“Yes…!”
//“Is…” said Deep Thought, and paused.
//“Yes…!”
//“Is…”
//“Yes…!!!…?”
//“Forty-two,” said Deep Thought, with infinite majesty and calm.”
// The Hitchhiker's Guide to the Galaxy, Douglas Adams

//შექმენით პროგრამა, რომელიც მომხმარებელს ცხოვრებაზე, სამყაროსაა და ყველაფერზე მნიშვნელოვან კითხვას დაუსვამს.
// თუ მომხმარებელი input-ად 42-ს შეიყვანს, რიცხვითი ან სტრიქონის ტიპით - forty-two ან forty two, პროგრამამ Yes უნდა დაბეჭდოს,
// ყველა სხვა შემთხვევაში კი - No.

//Example Output
//shell
// What is the answer to the Great Question of Life, the Universe, and Everything? 42
//Yes
// What is the answer to the Great Question of Life, the Universe, and Everything? forty-two
// Yes
// What is the answer to the Great Question of Life, the Universe, and Everything? forty two
// Yes
// პროგრამის output-ისთვის დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.

// პროექტი 25 - Home Federal Saving Bank  - ფედერალური ბანკი
//Seinfeld-ის მე-7 სეზონის 24-ე ეპიზოდში, კრამერი სტუმრობს ბანკს, რომელიც 100 დოლარის ჩუქებას ჰპირდება ყველას, ვისაც მისალმების ნიშნად 
//hello-ს არ ეტყვიან. კრამერს hey-ს ეუბნებიან, რაზეც ის ამბობს, რომ ეს hello არ არის და ამიტომ, ბანკისგან 100 დოლარს ითხოვს. ბანკის მენეჯერი
// მას კომპრომისს სთავაზობსს: "თქვენ მიიღეთ მისალმება, რომელიც იწყება "h"-ით, $20-ზე რას იტყვით?" კრამერი თანხას იღებს.

//შექმენით პროგრამა, რომელიც მომხმარებელს მისალმებას მოსთხოვს. თუ მისალმება hello-თი იწყება, დაბეჭდეთ $0; თუ input "h"-ით იწყება,
// მაგრამ სიტყვა hello არ არის, $20 დაბეჭდეთ; სხვა შემთხვევებში კი - $100. 

//Example Output
//shell
// Greeting: Hello
// $0
// Greeting: Hi
// $20
//Greeting: Ciao
// $100
//Input-ში იგნორირება გაუკეთეთ დასაწყისში არსებულ ცარიელ სივრცეს (whitespeace).
// დიდ თუ პატარა ასოებს მნიშვნელობა არ უნდა ჰქონდეს.
// const greeting1 = "hello"
// const greeting2 = "hi"
// const greeting3 = "Ciao"
// if(greeting1 ==='hello'){
//     console.log(`${greeting1} \n 0$`)
// }
// if(greeting2 === 'hi'){
//     console.log(`${greeting2} \n 20$`)
// }
// if(greeting3[0] !== 'h'){
//     console.log(`${greeting3} \n 100$`)
// }
// პროექტი 26 - Felipe's Taqueria - ფელიპეს სასადილო

//ჰარვარდის მოედანზე ერთ-ერთი ყველაზე პოპულარული საკვები ადგილია Felipe's Taqueria, რომელიც გთავაზობთ მენიუს, სადაც თითოეული 
//დასახელების ღირებულება კერძის ფასია:
//shell
//{
 //   "Baja Taco": 4.25,
 //   "Burrito": 7.50,
 //   "Bowl": 8.50,
  //  "Nachos": 11.00,
 //   "Quesadilla": 8.50,
//    "Super Burrito": 8.50,
//    "Super Quesadilla": 9.50,
 //   "Taco": 3.00,
 //   "Tortilla Salad": 8.00
//}
//შექმენით პროგრამა, რომელიც მომხმარებელს საშუალებას აძლევს, განათავსოს შეკვეთა - სთხოვს მას თითო კერძს თითო ხაზზე,
// სანამ მომხმარებელი არ შეიყვანს control-d-ს (რაც არის პროგრამაში input-ის შეყვანის დასრულების საშუალება). ყოველი ჩაწერილი ელემენტის 
//შემდეგ, აჩვენეთ აქამდე ჩაწერილი ყველა კერძის ჯამური ღირებულება, პრეფიქსით - დოლარის ნიშნით ($) და ასწილადად დაფორმატებული.
// მომხმარებლის input-თან მოპყრობისას არ პროგრამამ დიდი და პატარა რეგისტრის სიმბოლოები არ უნდა გაითვალისწინოს (case-insensitive).
// უგულებელყოთ ნებისმიერი ისეთი input, რომელიც არ ემთხვევა კერძის სახელს.

//მაგალითად:

//shell
// Item: burrito                                                                   
// Total: $7.50                                                                    
// Item: large quesadilla                                                          
//Item: super quesadilla                                                          
// Total: $17.00
// Item: 
// Item: nachos                                                                    
// Total: $11.00                                                                   
// Item: taco                                                                      
// Total: $14.00                                                                   
// Item: taco                                                                      
// Total: $17.00                                                                   
// Item: taco                                                                      
// Total: $20.00
//{
 //   "Baja Taco": 4.25,
 //   "Burrito": 7.50,
 //   "Bowl": 8.50,
  //  "Nachos": 11.00,
 //  
//}
// let foodName = prompt('enter foot name')
// let total = 0
// if(foodName === "Baja Taco"){
//     total = 4.25
//     console.log(`${foodName} will be ${total}$`)
// }
// if(foodName === "Burrito"){
//     total = 7.50
//     console.log(`${foodName} will be ${total}$ `)
// }
// if(foodName === "Bowl"){
//     total =8.50
//     console.log(`${foodName} will be ${total}$ `)
// }
// if(foodName === "Nachos"){
//     total = 11.00
//     console.log(`${foodName} will be ${total}$ `)
// }



// პროექტი 27 - Emojize - ემოჯებად გადაქცევა

//იმის გამო, რომ emoji არ არის ისეთი მარტივი ასაკრეფი, როგორიც ტექსტი, ყოველ შემთხვევაში, ლეპტოპებსა და პერსონალურ 
//კომპიუტერებზე, ზოგიერთ პროგრამას აქვს „კოდების“ მხარდაჭერა, რომლითაც შეგიძლიათ აკრიფოთ, მაგალითად, 👍, რომელიც
// ავტომატურად გარდაიქმნება -> 👍-ად. ზოგიერთი პროგრამა დამატებით მხარს უჭერს მეტსახელებს, რომლითაც შეგიძლიათ, უფრო
// მოკლედ აკრიფოთ, მაგალითად, 👍, რომელიც ასევე ავტომატურად გარდაიქმნება -> 👍.

//იხილეთ კოდების მეტსახელების სია: carpedm20.github.io/emoji/all.html?enableList=enable_list_alias .

//დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს str-ს (სტრიქონს) ინგლისურად და შემდეგ ბეჭდავს ამ str-ის „emojized“ ვერსიას,
// გარდაქმნის მასში არსებულ ნებისმიერ კოდს (ან მეტსახელს) შესაბამის emoji-ად.

//მაგალითად:                                                         


//shell
// Input: :thumbs_up:                                                              
// Output: 👍                                                                       
                                                     
// Input: :thumbsup:                                                               
// Output: 👍                                                                       
                                                         
// Input: hello, :earth_africa:                                                    
// output: hello , 🌎
// Input: hello, :earth_americas:                                                  
// Output: hello, 🌎
//არაა აუცილებელი, თქვენმა პროგრამამ ყველა ემოჯი აღიქვას. ხუთიც საკმარისია. მინიშნება -> შექმენით ობიექტი და მასში ჩაწერეთ
// ემოჯების სახელები და ემოჯები key-value წყვილებად.

// let obj = {
//     hello: "👋",
//     smile: "😀",
//     ball: "⚽",
//     burger: "🍔",
//     flags: "🎌"
// }
// const writeEmoji = prompt('enter the emoji nam')

// if(writeEmoji === obj[0].key){
//     console.log("👋")
// }
// if(writeEmoji === 'smile'){
//     console.log("😀")
// }
// if(writeEmoji === 'ball'){
//     console.log("⚽")
// }
// if(writeEmoji === 'burger'){
//     console.log("🍔")
// }
// if(writeEmoji === 'flags'){
//     console.log("🎌")
// }
