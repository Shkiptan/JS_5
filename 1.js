//Задание 1. Вычитайте строку из input. Высчитайте ее длину. 
//Выведите результат.
document.getElementById ('tocount').onclick = function () {
	var howlong = document.getElementById ('howlong').value;
	alert (howlong.length);
}

//Задание 2. Создайте массив, который содержит имена изображений 
// в определенной папке. Запустите цикл по массиву и выведите все 
// изображения на страницу. Подсказка, для вывода изображения 
// используйте тег <img src=”xxxx”> где xxx – путь к файлу.

var image = ['22.png', '23.png', '24.png', '25.png'];

var out = document.getElementById ('out');
var showImage = ' ';
	
	for (var i = 0; i<image.length; i++) {
		showImage += '<img src="images/' + image[i] +'" <br>';
	}
out.innerHTML = showImage;
	

// Задание 3. Пользователь вводит URL адрес в input в формате 
// http или https. Выведите только имя домена без префиксов 
// http://, https://.


document.getElementById ('show').onclick = function () {
	var adress = document.getElementById ('adress').value;
	if ( ~ adress.indexOf("http://")) {
		console.log (adress.slice (7));
	}
	else if ( ~ adress.indexOf("https://")) {
		console.log (adress.slice (8));
	}
}

// Задание 4. Пользователь может ввести адрес сайта в формате 
// http://site.ua, https://site.ua, http://www.site.ua, 
//https://www.site.ua или site.ua. Ваша задача используя поиск 
//в подстроке вывести site в виде: site.ua.

document.getElementById ('click').onclick = function Grate() {
	var site = document.getElementById ('site_adress').value;
	if ( ~ site.indexOf("http://")) {
		if (~ site.indexOf ("www.")) { 
			console.log (site.slice (11));
		}
		else {
			console.log (site.slice (7));
		}
	}
	else if ( ~ site.indexOf("https://")) {
		if (~ site.indexOf("https://www.")) {
		console.log (site.slice (12));
	}
		else { console.log (site.slice (8));
	}
	}
	else if ( ~ site.indexOf("www.")) {
		console.log (site.slice (4));
	}
}


// Задание 5. Пользователь заполняет форму состоящую из фамилии, 
// имени пароля и email. Используя приведенные методы выполните 
// обработку формы состоящую из удаления пробелов до и после 
// введённых слов, пароль не должен быть меньше 5 символов, 
// email должен содержать один символ @ и не содержать пробелов. 
// Если форма заполнена корректно, возвращать true.

document.getElementById ('enter').onclick = function () {
	var sname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    sname = sname.trim();
    name = name.trim();
    password = password.trim();
    email = email.trim();

	if (password.length<5) {
    	alert ('Your password is wrong');
    }
    else if ( email.search ('@') != -1 && email.search(' ') == -1 ) {
    	alert ('Your email has mastakes');
    }
    else {
    	alert ('You are wellcome');
    }
}

// Задание 6. Пользователь вводит символ, выведите его код.

document.getElementById ('cod').onclick = function () {
	var symbol = document.getElementById ('symbol').value;

	alert (symbol.charCodeAt ());
}





