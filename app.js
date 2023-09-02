// ДЗ:
//1  реализуйте тот же счетчик, который мы делали на уроке,
// но другим способом, можете onclick() использовать
function handleButtonClick() {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.counter__value');
    const currentValue = +inp.value;
    let newValue;
    if (direction === 'plus') {
        newValue = currentValue + 1;
    } else if (direction === 'minus'){
        newValue = currentValue - 1;
    }
    inp.value = newValue;
}
function counter() {
    const btns = document.querySelectorAll('.counter__btn');
    btns.forEach(btn => {
        btn.onclick = handleButtonClick;
    });
}
counter();

//2  ⁃ Реализуйте калькулятор. Будет два инпута для ввода двух чисел,
// будут кнопки +, -, /, * и =.
// При клике на + два числа складываются и так далее.
	  var op;
	  function func() {
	    let result;
	    let num1 = Number(document.getElementById("num1").value);
	    let num2 = Number(document.getElementById("num2").value);
	    // смотрим, что было в переменной с действием, и действуем исходя из этого
	    switch (op) {
	      case '+':
	        result = num1 + num2;
	        break;
	      case '-':
	        result = num1 - num2;
	        break;
	      case '*':
	        result = num1 * num2;
	        break;
	      case '/':
	        result = num1 / num2;
	        break;
	    }
	    document.getElementById("result").innerHTML = result;
	  }

//3  ⁃ Создать кнопку и навесить на него обработчик событий "click".
// При нажатии на эту кнопку должно появиться диалоговое окно (promt()),
// если что либо ввести в диалоговое окно, то введённое значения должно отобразиться в HTML.
// При повторном нажатии должно происходить всё то же самое, но текст который был до этого должна поменяться.
let buttonTag = document.getElementById("buttonTag");
const button = document.getElementById('myButton');
const output = document.getElementById('outputText');
button.addEventListener('click', function () {
            const userInput = prompt('');
            if (userInput !== null) {
                output.textContent = userInput;
            }
        });




