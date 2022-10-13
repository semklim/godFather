'use strict';

alert('Вас приветствует бот Крестный Отец.');

let power = confirm('Разбудить Отца?');

if(power){
 godFather();
}else{
	alert('Мужчина, забывший свою семью, не может называться настоящим мужчиной.');
	}

function godFather() {
	let menuNum = 0;

	while (true) {
		menuNum = prompt(
'Выберите пункт меню для продолжения: \
\n Меню: \
\n 1) Прийти на ковер к Отцу. \
\n 2) Попроси Отца повторить слова.\
\n 3) Пройти вопросы от Кресного Отца.\
\n (Напишите только одну цифру; напишите стоп для выхода)');

		if(menuNum === 'стоп'){
			break;
		}

		menuNum = Number(menuNum);

		switch (menuNum) {
			case 1:{
			break;
			}
			case 2:{
				
			break;
			}
			case 3:{
				
			break;
			}

			default: {
				alert('Только не говори, что ты не виноват. Это оскорбляет мой разум. \nПопробуй еще раз!');
			break;
			}
		}
	}
}