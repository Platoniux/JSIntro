/*Task 2*/
var nameOfSchool = "Mate Academy";
var namesOfCourses = ["MateAcademyFE", "MateAcademyQA", "MateAcademyJavaDev", "MateAcademyPython"];
var nameOfGroup = "fe_oct18";
var ourStudentsName = ["Roma", "Veronika", "Vania", "Vlad", "Alina", "Cookies", "Dimon", "Julia", "Sergey", "Anton"];



/*Task 3 In McDonalds*/
var sum = prompt("Скільки грошей ви маєте?", "");
var offer;

if (sum >= 100) {
  offer = confirm("Ви можете купити БігМакМеню. Бажаєте?");
  
  if(offer) {
    alert("Ви замовили БігМакМеню");
  } else {
    alert("Ви нічого не замовили");
  }

} else if (50 <= sum && sum < 100) {
  offer = confirm( "Ви можете купити Чізбургер і картоплю. Бажаєте?");

  if(offer) {
    alert("Ви замовили Чізбургер і картоплю");
  } else {
    alert("Ви нічого не замовили");
  }

} else if (20 <= sum && sum < 50 ) {
  offer = confirm("Ви можете купити колу. Бажаєте?");

  if(offer) {
    alert("Ви замовили колу");
  } else {
    alert("Ви нічого не замовили");
  }

} else {
  alert("Пробачте, в нашому закладі немає страв для вас :(");
}



/*Task 5 same "in McDonalds" task with console.log! BEFORE RUN IT, PLEASE COMMENT CODE ABOVE!*/

if (sum >= 100) {
  offer = confirm("Ви можете купити БігМакМеню. Бажаєте?");
  
  if(offer) {
    console.log("Ви замовили БігМакМеню");
  } else {
    console.log("Ви нічого не замовили");
  }

} else if (50 <= sum && sum < 100) {
  offer = confirm( "Ви можете купити Чізбургер і картоплю. Бажаєте?");

  if(offer) {
    console.log("Ви замовили Чізбургер і картоплю");
  } else {
    console.log("Ви нічого не замовили");
  }

} else if (20 <= sum && sum < 50 ) {
  offer = confirm("Ви можете купити колу. Бажаєте?");

  if(offer) {
    console.log("Ви замовили колу");
  } else {
    console.log("Ви нічого не замовили");
  }

} else {
  console.log("Пробачте, в нашому закладі немає страв для вас :(");
}

/*Task 6 */
var Masha, Stepan, Andry;
Stepan < Masha < Andry;


/*Task 7 Sales*/
var present = prompt("What time is it now?", "");

if(present > 9 && present < 18) {
  console.log("It's time to sales!!!")
} else {
  console.log("Sory, but can you get back in business hours?")
}


/*Task 8 Сapricious Masha*/

 var existOfAngel = confirm("Чи прийшла Анжела?");
 var existOfStepan = confirm("Чи прийшов Степан?");
 var existOfMiko = confirm("Чи пройшов Михайло?");

if((existOfMiko && existOfAngel && existOfStepan) || (!existOfMiko && !existOfAngel && !existOfStepan)) {
  alert("Маша засмучена!");
} else {
  alert("Маша щаслива!");
}

