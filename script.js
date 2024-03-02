
// 1 .მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
let array2 = [14, 150, "css", null, "javascript", 25];
let array3 = array2.map((item) => {

  if (typeof item == "number") {

    return item ;
  } else if (typeof item == "string") {
    return item.toUpperCase();
  }
  {
    return item;
  }
});
console.log(array3);

// 2. მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let item = "good day";
let item1 = info.slice(1.1);
console.log(item1);

// 3.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let function1 = (string)=>{
    let functionc1 = string.length;
    return function1;
    };
    console.log(functionn1("string"));
    
// 4. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.
    
let capital = prompt("რა არის საქართველოს დედაქალაქი");
    if (capital.toLowerCase() === "Tbilisi") {
      console.log(true);
    }else{
      console.log(false);
    }
    // 5.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 
   
    let fruits = ["apple", "mango", "avocado","kiwi",];
    fruits.splice(fruits.length,0,"strawberry");
    console.log(fruits);

    // 6.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
  
     let numbers = [5, 25, 89, 120, 36];
     numbers.splice(numbers.length, 0, "javascript", "python");
      numbers.splice(0, 0, "html", "css");
      numbers.push();
      numbers.pop();
      console.log(numbers.length);
      console.log(numbers4);

    //   7.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

    let frut = ["orange", "banana", "Kiwi",];
    frut.splice(frut.length,0, "apple", "ananas")
    frut.unshift("watermelon");
    frut.splice(2,0, "mango")
    frut.shift();
    frut.pop();
    console.log(frut);
    console.log(frut.length);
    

    // 8. მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
    
    let array1 =[1, 2, 3, 4, 5,];
    array1.splice(3,0,"a", "b", "c")
    console.log(array1);

    // 9 მოცემულია მასივი:
    let aray4 [12, 25, 3, 6, 8, 14, 7, 23];
    let aray4.map((item)=>{
      return item / 3;
    })
    console.log(aray4);

    // 10.მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
  
        let array7 =  [15, 100, 25, 10, 36]
        array7.splice(3,1);
        console.log(array7);

        // 11.მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]
        let array8 = [1, 2, 3, 4, 5];
        array8.splice(2, 1, "Three");
        console.log(array8);

        // 12.მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

        let array9 = ["hello1", 14, 24, "hello2"];
let array9 = array10.filter((item) => {
  if (typeof item === "number") {
    return item;
  }
});
console.log(array10);

// 13.მოცეულია მასივი:
let arrayn = [1, 2, 3, 4, 5];

let sum = 0 
arrayn.forEach(item => {return sum += item;})
console.log(sum);

// 14.let languages = ['html', 'css', 'javascript', ‘python’, 'php'];

let languages = ["html", "css", "javascript", "python", "php"];
let languagess = languagess.filter((item)=> {if(item.length > 3){
  return item;
}})
console.log(languagess);

// 15.let words = ['Madrid', 'rome', 'Milan', 'berlin'];





  

