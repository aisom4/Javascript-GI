// alert("welcome user");
// var visitorAnswer = prompt("what would you like to say?");
// var result = caseCheck(visitorAnswer);
// // var result2 = caseCheck(visitorAnswer);

// function caseCheck(visitorAnswer) {
//   const result = visitorAnswer.match(/[A-Z]/g).length;
//   //   // const result2 = visitorAnswer.match(/[a-z]/g).length;

//   //   return result;

//   if ((visitorAnswer = true)) {
//     console.log("Yelling?");
//   } else {
//     console.log("whisper?");
//   }

//   //   if (visitorAnswer.match(/[A-Z]/g).length) {
//   //     console.log("why are you yelling? ");
//   //   } else {
//   //     console.log("why are you whispering? ");
//   //   }
// }

// document.write("why are you yelling" + result);

// console.log(result);

// // var result = caseCheck("a");

// // function caseCheck(letters) {
// //     return "why are you yelling?";
// // }
// // else if (letter == letter.toLowerCase()){
// //     return "why are you whispering";
// // }

// // console.log(result);

// // document.write(result + answer);

let usertxt = prompt("Please insert a word");

if (usertxt === usertxt.toUpperCase()) {
  console.log("Why are you yellling at me!!!");
} else if (usertxt === usertxt.toLowerCase()) {
  console.log("Why are you Whispering?");
} else {
  console.log("what did you say?");
}
