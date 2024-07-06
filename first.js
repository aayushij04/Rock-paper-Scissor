// let naem="aayyuyshi"
// for(let i of naem)
//     {
//         console.log(i);
//     }

// for in
//  let student={
//     name:"aayushi",
//     roll:8,
//     sub:"math"

//  }
//  for(let i in student)
// {
//     console.log(student[i]);
// }

// let loop=100;
// for(let i=0;i<=100;i++)
//     {
//         if(i%2==0)
//             {
//                 console.log(i);
//             }
//     }


//game
// let final=132;
// let guess;
// while(final!=guess)
//     {
//         guess=prompt("Guess Another as You are not Right",guess);
//     }
//     console.log("Yes You are right now");

//strings

// let str1='Aayushi'
// let str2="Jain"
// console.log(typeof(str1))
// console.log(str1+str2);
// console.log(str2[3])
// console.log(str1.length);
// console.log(str2.length);

//string literals
// let obj={

    
//       price:300,
// };
// let item=50
// let ans='The item is ${item} and its value is ';
// console.log(ans);

//template literals

// let name="Aayushi\nJain"
// let ans=console.log(name.length)
// console.log(name);
// console.log(3+4)


// let s1="Aayushi   Jain"
// s1.toUpperCase();
// console.log(s1.toUpperCase())
// console.log(s1.toLowerCase())

// console.log(s1.trim())


//String Methods

// let s1="Aayushi"
// console.log(s1.slice(1,5)) //slice

// let s2="Jain"
// let ans=s2.concat(s1);   //concat
// console.log(ans)


// console.log(s2.replace('n','m'));  //replace   //Strings are immutable means it cant be change you have to make new string 

// console.log(s2.charAt(1))   //charAt




//arr    //immutable


// let arr=[230,123,120,90,60]
// let ind=0;
// for(let i of arr)
//     {
//         arr[ind]=arr[ind]-(0.1*arr[ind])
//         ind++;
      
//     }


//     for(let i of arr)
//         {
//             console.log(i)
           
//         }
        


//push pop

// let arr=["Aayushi","Jain","is",5]
// arr.push("good girl")
// console.log(arr);

// arr.pop();
// console.log(arr)

// console.log(toString(arr))


//splice

// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,7,101,102,103,104,105)
// console.log(arr)


// let arr=["google","Microsoft","Amazon","Myntra"]
// arr.splice(0,1);
// console.log(arr)


// function sum(a,b)
// {
//    return a+b;
// }
// console.log(sum(3,7));

//call back function is used to call each element in array
//hof --higher order function---which takes function as parameter

// let arr=["turi","jgh"]
// arr.forEach((val)=>
//     {

//       console.log(val.toUpperCase(arr))
//     }
// )

// let arr=[2,3,4,5,6];
// let ans=arr.reduce((prev,curr)=>
// {
//     return prev+curr;
// })
// console.log(ans)

// let x=document.getElementById(1)
// console.log(x)
// console.dir(x)
// let h2=document.querySelector("h2")
// // console.dir(h2.innerText)
// h2.innerText=h2.innerText+"from Apna college student"
// console.dir(h2.innerText)


// let ide=document.querySelector("h2")
// console.log(ide)
// let ans=ide.getAttribute("id")
// console.log(ans)

// let ans1=ide.setAttribute("id","Chunu")
// console.log(ans1)
// console.dir(ans1)


// let ide=document.querySelector("p")
// console.log(ide)
// let newBtn=document.createElement("button")
// newBtn.innerText="Click me!"
// console.log("newBtn")
// let ide=document.querySelector("div")
// console.log(ide)

// ide.after(newBtn)

// let btn=document.createElement("button")
// btn.innerText="Click Here"
// btn.style.color="white"
// btn.style.background="red"
// document.querySelector("body").prepend(btn)

// let new1=document.querySelector("newClass")
// let x=new1.getAttribute("p")
// x.innerText("Hiii")
// console.log("x")


// let btn1=document.querySelector("#btn");
// // btn1.onclick=(evt)=>{
   
// //     console.log(evt.type);
// //     console.log(evt.target)

// // }
// const handler= ()=>{ console.log("Yes clicked")

// }
// btn1.addEventListener("click",handler)



// let box1=document.querySelector("#box");
// box1.onmouseover=()=>{
//     console.log("Pagal")
// }

// btn1.removeEventListener("click",handler)
// let currmode="light"
// const handler=()=>{
//     if(currmode=='light')
//         {
//             currmode="dark"
//             document.querySelector("body").style.backgroundColor="black"
//             document.querySelector("body").onclick=console.log("HII")
            
//         }
//         else{
//             currmode="light"
//             document.querySelector("body").style.backgroundColor="white"
//         }
//         console.log(currmode);
// }

// let btn1=document.querySelector("#btn")
// btn1.addEventListener("click",handler)





let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#play");
const user=document.querySelector("#userscore")
const comp=document.querySelector("#compScore");

const drawGame=()=>{
  console.log("game draw.")
  msg.innerText="Game Draw";
  msg.style.backgroundColor="purple";

}

const genCompChoice=()=>{
  let options=["rock","paper","scissor"];
  let ans=Math.floor(Math.random()*3);
  return options[ans];
}


const whoWin=(userwin,userChoice,compchoice)=>{
  if(userwin)
    {
      console.log('You win! Your ${userChoice} beats ${compchoice}');
      msg.innerText=`You win! Your ${userChoice} beats ${compchoice}`;
      msg.style.backgroundColor="Green";
      userscore++;
      user.innerText=userscore;
    }
    else{
      console.log("You lose");
      msg.innerText=`You lose! ${compchoice} beats your ${userChoice}`;
      msg.style.backgroundColor="Red";
      compscore++;
      comp.innerText=compscore;
    }
}
const playgame=(userChoice)=>{
  console.log("userChoice is :",userChoice)
   const compchoice=genCompChoice();
   console.log("computer choice :" ,compchoice);
   
   if(userChoice===compchoice)
    {
      drawGame();
    }

    else{
      let userwin=true;
      
      if(userChoice==="rock")
        {
          userwin=compchoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
          {
            userwin=compchoice==="scissor"?false:true;
          }
          else if(userChoice==="scissor")
            {
              userwin=compchoice==="rock"?false:true;
            }
            whoWin(userwin,userChoice,compchoice);
    }
    

}


choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
           const userChoice= choice.getAttribute("id");
           playgame(userChoice);
      });
});









