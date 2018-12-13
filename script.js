/*Task 2*/
var nameOfSchool = 'Mate Academy';
var namesOfCourses = ['MateAcademyFE', 'MateAcademyQA', 'MateAcademyJavaDev', 'MateAcademyPython'];
var nameOfOurGroup = 'fe_oct18';
var ourStudentsNames = ['Roma', 'Veronika', 'Vania', 'Vlad', 'Alina', 'Cookies', 'Dimon', 'Julia', 'Sergey', 'Anton'];



/*Task 3 In McDonalds*/
var sum = prompt('Скільки грошей ви маєте?', '');
var offer;

if (sum >= 100) {
  offer = confirm('Ви можете купити БігМакМеню. Бажаєте?');
  if (offer) {
    alert('Ви замовили БігМакМеню');
  } else {
    alert('Ви нічого не замовили');
  }
} else if (50 <= sum) {
  offer = confirm( 'Ви можете купити Чізбургер і картоплю. Бажаєте?');
  if (offer) {
    alert('Ви замовили Чізбургер і картоплю');
  } else {
    alert('Ви нічого не замовили');
  }
} else if (20 <= sum) {
  offer = confirm('Ви можете купити колу. Бажаєте?');
  if (offer) {
    alert('Ви замовили колу');
  } else {
    alert('Ви нічого не замовили');
  }
} else {
  alert('Пробачте, в нашому закладі немає страв для вас :(');
}



/*Task 5 same 'in McDonalds' task with console.log! BEFORE RUN IT, PLEASE COMMENT CODE ABOVE!*/

if (sum >= 100) {
  offer = confirm('Ви можете купити БігМакМеню. Бажаєте?');
  if (offer) {
    console.log('Ви замовили БігМакМеню');
  } else {
    console.log('Ви нічого не замовили');
  }
} else if (50 <= sum && sum < 100) {
  offer = confirm( 'Ви можете купити Чізбургер і картоплю. Бажаєте?');
  if (offer) {
    console.log('Ви замовили Чізбургер і картоплю');
  } else {
    console.log('Ви нічого не замовили');
  }
} else if (20 <= sum && sum < 50 ) {
  offer = confirm('Ви можете купити колу. Бажаєте?');

  if (offer) {
    console.log('Ви замовили колу');
  } else {
    console.log('Ви нічого не замовили');
  }
} else {
  console.log('Пробачте, в нашому закладі немає страв для вас :(');
}

/*Task 6 */
var Masha, Stepan, Andry;
Stepan < Masha < Andry;


// /*Task 7 Sales*/

var enterHour = function enterHourForTask7(question){
  var a = +prompt(question, '');
  if (isNaN(a) || a < 0 || a > 23) {
    alert('Incorrect value');
    enterHourForTask7(question, '');
  }
  return a;
}



var presentTime = enterHour('What time is it now?');
var startDiscountTime = enterHour('What time did dicounts start?');
var endDiscountTime = enterHour('What time will dicounts end?');

if (startDiscountTime < endDiscountTime && presentTime >= startDiscountTime && presentTime <=endDiscountTime) {
  console.log('It\'s time for sales!!!');
} else if (startDiscountTime > endDiscountTime && (presentTime >= startDiscountTime || presentTime <= endDiscountTime)) {
  console.log('It\'s time for sales!!!');
} else {
  console.log('Sory, but can you get back another time?');
}



/*Task 8 Сapricious Masha*/

 var existOfAngel = confirm('Чи прийшла Анжела?');
 var existOfStepan = confirm('Чи прийшов Степан?');
 var existOfMiko = confirm('Чи пройшов Михайло?');

if ((existOfMiko && existOfAngel && existOfStepan) || (!existOfAngel && (!existOfMiko || !existOfStepan))) {
  console.log('Маша засмучена!');
} else {
  console.log('Маша щаслива!');
}

