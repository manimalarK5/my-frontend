console.log("array");
let m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25
console.log("creat array");
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
document.write(colors)
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
colors[2]=70;
console.log(colors[2]);

console.log(colors.length)
//delete.colors[2]
console.log(colors.length)
m73=function myFunction() {
    for (let i = colors.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = colors[i];
      colors[i] = colors[j];
      colors[j] = k;
    }
    console.log( colors);
  }
  console.log(m73());
m72=colors.sort(function(){return 0.5 - Math.random()});
console.log(m72);
function book(title, author){
    this.title = title; 
    this.author = author;
   }
   var myBook = new book("Perl", "Mohtashim");
   book.prototype.price = null;
   myBook.price = 100;
   document.write("Book title is : " + myBook.title + "<br>");
   document.write("Book author is : " + myBook.author + "<br>");
   document.write("Book price is : " + myBook.price + "<br>");
     console.log(myBook);
console.log("constructor array");
let numbers=new Array()//Array(arrayLength?: number | undefined): any[]
numbers[0]="one"
numbers[1]="two"
numbers[2]="three"
numbers[3]="four"
numbers[4]="five"
numbers[5]="six"
function isBigEnough(element, index, array) {
    return (element >= 3);
   }
   console.log(isBigEnough());
   console.log("sort");
   let m7=numbers.sort()//ort(compareFn?: ((a: any, b: any) => number) | undefined): any[]
console.log(m7);
let m71=numbers.sort(function(a, b){return b-a});//Numerically
console.log(m71);

console.log("reverse");
m13=numbers.reverse()//reverse(): any[]
console.log(m13);

console.log(("array constructor"));
let aa=numbers.constructor
console.log(aa);

console.log("length");
console.log(numbers.length);
console.log(numbers[0]);

console.log("concat");
let conc=colors.concat(numbers)
console.log(conc);

console.log("join");
m1=numbers.join("-")
console.log(m1);

console.log("copywith");
console.log(numbers.copyWithin(4,1))//copyWithin(target: number, start: number, end?: number | undefined): any[]

console.log("entairs");
console.log(numbers.entries());//entries(): IterableIterator<[number, any]>
//console.log(numbers.every(element, index, array));//every(predicate: (value: any, index: number, array: any[]) => value is any, thisArg?: any): this is any[]

//console.log(numbers.filter(isBigEnough()));//filter(predicate: (value: any, index: number, array: any[]) => value is any, thisArg?: any): any[]
//console.log(numbers.find("one"));//find(predicate: (value: any, index: number, obj: any[]) => value is any, thisArg?: any): any
//console.log(numbers.findIndex());//findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number

console.log("slice it creat new arr specify start to end ele index");//exract method
m12=numbers.slice(2,6)//slice(start?: number | undefined, end?: number | undefined): any[]
console.log(m12);


console.log("values");
let m2=numbers.values()
console.log(m2);

console.log("unshift");
let m3=numbers.unshift("ggggg")
console.log(m3);//unshift(...items: any[]): number

console.log("splice -> new arr -start,del ele, values");
let m6=numbers.splice(1,3,"kkkkkk","ooooo")//(method) Array<any>.splice(start: number, deleteCount: number, ...items: any[]): any[] (+1 overload)
console.log(m6);

console.log("to string");
let m4=numbers.toString()
console.log(m4);

console.log("toLocaleString");
let m5=numbers.toLocaleString()
console.log(m5);//toLocaleString(): string

console.log(numbers);

// console.log("splice -> new arr -start,del ele, values");
// let m6=numbers.splice(1,0,"kkkkkk","ooooo")//(method) Array<any>.splice(start: number, deleteCount: number, ...items: any[]): any[] (+1 overload)
// console.log(m6);//splice(start: number, deleteCount?: number | undefined): any[]



// numbers.length - 1
// console.log(numbers);

console.log("pop -> del last ele");
let m8=numbers.pop()//pop(): any//remove last element);
console.log(m8)

console.log("shift -> del 1st ele");
m9=numbers.shift()//shift(): any//remove first element);
console.log(m9)

console.log("unshift -> add 1st ele");
 m10=numbers.unshift("ddddd","kkkkkk") //unshift(...items: any[]): number//// add 1st element);
console.log(m10)

console.log("push-> add last element");
m11=numbers.push("jjjjjj","mmmmmm")//push(...items: any[]): number
console.log(m11);

// numbers.some()//some(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean
// console.log(numbers);




// m14=numbers.reduceRight()//reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any
// console.log(m14);

// m15=numbers.reduce()//reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any
// console.log(m15);

// m16=numbers.map()
// console.log(m16);

console.log("indexof");
console.log(numbers);
m18=numbers.indexOf("three")
console.log(m18);// -1 mmeans not in arr

console.log("last indexof");
m17=numbers.lastIndexOf("one")//lastIndexOf(searchElement: any, fromIndex?: number | undefined): number
console.log(m17);

console.log("flat");
m19=numbers.flat()//
console.log(m19);

console.log("includes it check the ele in arr");
m21=numbers.includes("one")
console.log(m21);


 m20=numbers.fill("&",3)
console.log(m20);//fill(value: any, start?: number | undefined, end?: number | undefined): any[]


console.log("***************************","<br>");
console.log("find","<br>");
let order=[
    {id:1, item:"phone", quantity:3, price:50000},
    {id:2, item:"apple", quantity:3, price:50},
    {id:4, item:"tea", quantity:8, price:50}
]
let test=order.find(function(order){//callback method
    return (order.price===50) 

})// variable name kodukkalana varathu
console.log(test);

let test1=order.findIndex(function(order){
   return (order.price==50);
})
console.log(test1);

let test3=order.find((order) =>  order.id===4)
console.log(test3);//value mathi pota undefine nu varum

// console.log("****************","<br>");
// console.log("empty arr","<br>");
// console.log(colors);
// //colors=[] //1
// // colors.length=0 //2
// colors.splice(0,colors.length)//3
//
// console.log(colors);


console.log("array methods");
console.log("add ele");
console.log(`unshift
             push
             splice`);
console.log("dei ele");
console.log(`shift
             pop
             splice`);
console.log("finding an ele");
console.log(`indexof
             lastindexof
             includes(value)
             find((pram)=>return)
             findindex((pram)=>return)`);
console.log("empty arr");
console.log(`colors=[] //1
              colors.length=0 //2
             colors.splice(0,colors.length)//3
while (colors.length) {    //4
    colors.pop()
}
console.log(colors);`);
console.log("combining &extracting arr");
console.log(`concat
          slice`);
console.log("spread operator [...arr/obj name");
console.log("itrating ele");
console.log(`for..of
             for..in
             foreach()`);
console.log("joinng&split");
console.log(`join(seperatot)
             split(seperatot)`);
console.log("sorting an arr");
console.log(`sort()
             reverce()
             sort(()=>logic)`);
console.log("testing an arr");
console.log(`every() ->//every value is satisfy the logic it return true
             some()-> any one or 2 values statify the logic it return true
             itreturn boolean value`);
console.log(`filter arr
              filter(()=>{})`);

console.log(`array itration
              entries()
              key()
              includes()
              Array.form("value")
              `);













// let colors=[45,56,67,78]
// colors[5]=79;
// console.log(colors);
// document.write(colors)


console.log("loop through an array");
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
console.log("for");
    // Loop through the array using a for loop
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }

    console.log("for..each");
    // Loop through the array using forEach
    fruits.forEach(function(fruit,index,array) {
        console.log(index,fruit,array);
      });

      console.log("for..of");
      // Loop through the array using for...of loop
    for (const fruit of fruits) {
        console.log(fruit);
      }
let num=[4,5,7,8,99,5,33]
      let fru1=num.map(myfru)
      function myfru(value,index,array){
        return index,value*2

      }
      console.log(fru1);

      let fru=fruits.map(myfruit)
      function myfruit(value,index,array){
        return index,value
      }
      console.log(fru);

      const myArr = [1, 2, 3, 4, 5,6];
      const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);
myArr.flatMap((x,i)=>{
console.log(i,x);
})




// let numbers=new Array()//Array(arrayLength?: number | undefined): any[]
// numbers[0]="one"
// numbers[1]="two"
// numbers[2]="three"
// numbers[3]="four"
// numbers[4]="five"
// numbers[5]="six"



console.log("****************","<br>");
console.log("empty arr","<br>");
console.log(colors);
//colors=[] //1
// colors.length=0 //2
//colors.splice(0,colors.length)//3
while (colors.length) {
    colors.pop()
}
console.log(colors);
let conca=colors.concat(numbers)
console.log(conc);
console.log(conca.slice(2,6))



let student=[
    {id:11591,name:"mani",},
    {id:11590,name:"malar"},
    {id:11592,name:"menaga"},
    {id:11593,name:"sruthi"},
    {id:11594,name:"hari"}
]
let s1=student.sort()
console.log(s1);

let s2=student.sort((a,b)=>{
    if(a.id<b.id) return -1
    if(a.id>b.id) return 1
    if(a.id==b.id) return 0
})
console.log(s2);

let s3=student.sort((a,b)=>{
    if(a.name<b.name) return -1
    if(a.name>b.name) return 1
    if(a.name==b.name) return 0
})
console.log(s3);

for(let i of student){
    console.log(i);
}
for(let i in student){
    console.log(i);
}
for(let i in student){
    console.log(student[i]);
}
console.log(student);
student.forEach((element,index,student) => { //callbackfn(value: { id: number; name: string; }, index: number, array: { id: number; name: string; }[]): void
    console.log(index,element);
});

student.every((value,index,array)=>{
    console.log("values:",value);
    console.log("index:",index);
    console.log("array:",array);
})//predicate(value: { id: number; name: string; }, index: number, array: { id: number; name: string; }[]): value is { id: number; name: string; }

let s4=student.every((value,index,array)=>{
    return value.id<=5
})
console.log(s4);//every value is satisfy the logic it return true
//student.every()
let s5=student.some((value,index,array)=>{
    return value.id>=2
})
console.log(s5);//any one or 2 values statify the logic it return true

let s6=student.filter((value,index,array)=>{
    return value.id>=11592
})
console.log(s6)
// let arr=[222,668];
//  function apply(a,b){
//     return a+b;
//  }
// apply.function name(params) {
    
// }apply(arr);
// document.write()
let color=[2,4,6,8,0,7,55,4]
let index=0
let map=color.map((value,index,array)=>{
    
// while(index<colors.length)
// {
//     console.log(value%2==0);
//     index++
// }
console.log(index,value%2==0,array);
})

let map1=color.map((value,index,array)=>{
    console.log(index,value,array);
    })
    console.log(map1);


console.log("filter()");
let filter=colors.filter((value, index, array)=>{
    return value%2==0;
})
console.log(filter);

console.log("reduce()");
let reduce=color.reduce((previousValue, currentValue, currentIndex, array)=>
{
    return previousValue+currentValue
},0)
console.log(reduce);
console.log(student);
console.log(student[2]);
student.entries();
student.every((value,ind,arr)=>{
    console.log(ind,value,arr);
})

let n=student.filter((val,ind,arr)=>{
    return(val.id==11593);
})
console.log(n);

let n1=student.find((val,ind,arr)=>{
    return val.age==22
})
console.log(n1);

let n2=student.findIndex((val,ind,arr)=>{
    return val.name=="mani"
})
console.log(n2);

let n3=student.forEach((val,ind,arr)=>{
    console.log(ind,val,arr);
})

let n4=student.includes((val)=>{
    return val.id==11593
})
console.log(n4);

let n5=student.reverse()
console.log(n5);

let n6=student.values()
console.log(n6);


console.log(reduce);
arr=['eee','cse','it','ece']
arr.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendChild(val)
})