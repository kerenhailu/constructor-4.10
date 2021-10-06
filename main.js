// function Person(name, age, city) {
//   this.Name = name;
//   this.Age = age;
//   this.City = city;
// }
// const haim = new Person("haimm", 24, "natanya");

// console.log(`hi haim from ${haim.City}`);
// -------------------------------------------------

// צרו פונקצית בנאי של מוצרים(שם ת מחיר ת אחוזים ומערך תמונות)

// function product(Name,Price,Discount,Imgs){
// this.name=Name;
// this.price=Price;
// this.discount=Discount;
// this.imgs=Imgs;
// this.update = function (Key,Value){
// this[Key]=Value
// }
// this.updateImgs = function (src){
//   this.imgs.push(src)
//   }
// }

// let fruit1=new product("Bnana",40,10,
//     ["https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg"])
// fruit1.update("price",200)
// fruit1.updateImgs("https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg",)
// console.log(fruit1);

// const fruit2=new product("Apple",20,5,
// ["https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg"])
// console.log(fruit2);

// const fruit3=new product("Orenge",100,25,
// ["https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg",
// "https://cdn.pixabay.com/photo/2021/09/12/20/05/waterfall-6619377__340.jpg"])
// console.log(fruit3);

// const Array=[fruit1,fruit2,fruit3]
// console.log(Array);

// -----------------------------------------------------------------------------------------

// const cars = [{
//     dagem: "honda",
//     price: 20000,
//     year: 2010,
//     speed: 100,
//     fast: function () {
//       this.speed += 10;
//     },
//     slow: function () {
//       this.speed -= 15;
//     },
//   },
//   {
//     dagem: "honda",
//     price: 8000,
//     year: 2000,
//     speed: 300,
//     fast: function () {
//       this.speed += 10;
//     },
//     slow: function () {
//       this.speed -= 15;
//     },
//   },
//   {
//     dagem: "honda",
//     price: 20000,
//     year: 2020,
//     speed: 600,
//     fast: function () {
//       this.speed += 10;
//     },
//     slow: function () {
//       this.speed -= 15;
//     },
//   },
// ];
// (cars[0].fast());
// (cars[1].slow());
// (cars[2].fast());
// console.log(cars);
// ---------------------------------------------------------------------
// צור מערך של רכבים(3 רכבים): דגם, מחיר, שנתון, מהירות ,פונקציית מאיץ(מוסיפה 10 למהירות), פונקציית מאט(מורידה 10 מהמהירות)

// function Car(degem,price,year,speed){
//   this.degem=degem,
//   this.price=price,
//   this.year=year,
//   this.speed=speed,
//   this.fast= function (){
//     this.speed+=10
//   }
//   this.slow= function (){
//     this.speed-=15
//   }
// }
// const CAR1=new Car("honda",20000,2010,100)
// CAR1.fast()
// const CAR2=new Car("kia",8000,2020,300)
// CAR2.slow()
// const CAR3=new Car("mazda",60000,2008,500)
// CAR3.slow()

// const ARRAY_CARS=[CAR1,CAR2,CAR3]
// console.log(ARRAY_CARS);
// --------------------------------------------------------------------
// צור פונקציית בנאי של משתמש: שם, אימייל, גיל, תמונת פרופיל(לינק).
// הוסף פונקציית עדכון המקבל KEY ו - VALUE ומעדכן בהתאם
// הוסף פונקציה לבנאי בשם render המקבל אלמנט עוטף שתפקידה להציג את האובייקט על המסך.
// הוסף תנאי בפונקציית בנאי שבודק האם השם הוא מסוג string במידה ולא החזר null

// function User(name, email, age, img) {
//     if (typeof name != "string")return null;
    // typeof name != "string"?console.log("no"):console.log("yes");
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.img = img;
//   this.update = function (Key, Value) {
//     this[Key] = Value;
//   };
//   this.render = function (element) {
//     element.innerHTML += `${this.name} <br>
//      ${this.email} <br>
//       ${this.age} <br>
//        <img src=${this.img}>`;
//   };
// }
// const USER1 = new User(
//   "keren",
//   "keren@gmail.com",
//   22,
//   "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852__340.jpg"
// );
// USER1.update("age", 25);
// USER1.render(document.getElementById("div"));
// console.log(USER1);

// --------------------------------------------------------------------
// צור מערך של כתבות: כותרת, מחבר, תאריך, פונקציית render - השתמש בבנאי על מנת ליצור אובייקט של כתבה
// תרוץ על המערך ותציג את הכתבות על המסך

function Article(title,author,date){
this.title=title;
this.author=author;
this.date=date;
this.render=function(tag){
tag.innerHTML+=`<h1> ${this.title}</h1>
<h3> ${this.author}</h3>
<h3> ${this.date}</h3>
----------------`
}
this.render(document.getElementById("div"))
}

const article1=new Article("kerenBook","keren",1.2)
const article2=new Article("DanaBook","Dana",13.4)
const article3=new Article("RonBook","Ron",18.11)
const article4=new Article("DanielBook","Daniel",1.12)

const ARRAY_A=[article1,article2,article3,article4]
// console.log(ARRAY_A);
