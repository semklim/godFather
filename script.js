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
\n 3) Пройти вопросы от Крестного Отца.\
\n (Напишите только одну цифру; напишите стоп для выхода)');

		if(menuNum === 'стоп'){
			break;
		}

		menuNum = Number(menuNum);

		switch (menuNum) {
			case 1:{
				talkToFather();
			break;
			}
			case 2:{
        start_game();
			break;
			}
			case 3:{
				startQuiz();
			break;
			}

			default: {
				alert('Только не говори, что ты не виноват. Это оскорбляет мой разум. \nПопробуй еще раз!');
			break;
			}
		}
	}
}

function talkToFather() {
	let message = [
		'Наконец-то можно поговорить как мужчина с мужчиной. Скажи мне, это ты захотел познакомиться со мной, или моя дочь тебя убедила?',
		'Только не ври мне, это оскорбляет мой разум. И давно ты познакомился с моей дочерью? Почему не пришел сразу как порядочный молодой человек?',
		'Ты приходишь и говоришь, что встречаешься с моей дочерью, но делаешь это без уважения. Ты даже не узнал моего мнения.',
		'Ладно, мое мнение не имеет здесь большого значения. Все-таки, моя дочь что-то в тебе нашла. А чем ты занимаешься по жизни?',
		'Помни, что мужчина никогда не должен быть беспечным. Позволяешь ли ты себе выпить?',
		'Главное, знай меру. С твоей жизнью все ясно, а что насчет моей дочери? Какие у тебя на нее планы?',
		'А ты тот еще наглец, мне это не нравится. Я впустил тебя в свой дом, моя жена приготовила для тебя ужин, а я так и не услышал, чтобы ты позвал меня в свой дом, хотя бы на чашку кофе',
		'Будем сейчас откровенны, ты не ищешь моей дружбы, и я не уверен, что ты хочешь жениться на моей дочери.',
		'Что я тебе сделал, почему ты ни капли меня не уважаешь?',
		'Если бы ты пришел ко мне, как честный молодой человек и спросил моего разрешения, уже сегодня ты бы стал мне как сын. Твои враги стали бы моими врагами, и тогда они бы боялись тебя!',
		'Ты безнадежен. У меня есть к тебе последний вопрос. Скажи мне, ты бываешь со своей семьей?'
	];
	let backToMenu =true;

	while (true) {
			prompt(message[0]); 
			prompt(message[1]);
			prompt(message[2]);
			prompt(message[3]);
			prompt(message[5]);
			prompt(message[6]);
			prompt(message[7]);
			prompt(message[8]);
			prompt(message[9]);
		
		backToMenu = confirm('Вернутся в главное меню?')
		if (backToMenu) {
			break;
		}
	}
}

//
function startQuiz(){
	let lng = prompt(`Виберіть мову опитування`, `укр \n рос`);
	switch (lng) {
	  case `укр`:{
		quiz();
		break;
	  }
		case `рос`:{
		  quizLast();
		  break;
		}
	  default:
  
	}
  }
  
  function quiz(){
  
  alert(`Опитування: Хрещені батьки`);
  let answer1 = prompt('Хто такі хрещені батьки?',
  'Батьки дитини\
  \nРодичі батьків\
  \nДуховні батьки дитини');
  let answer2 = prompt('Перший подарунок від хрещених своєму похресникові?',
  'Гроші\
  \nКрижмо та хрестик\
  \nОдяг та іграшки'
  );
  let answer3 = prompt('Як у дохристиянській Україні звалися хрещені батьки?',
  'Куми\
  \nБожати\
  \nХресні'
  );
  let answer4 =prompt('Яке основне завдання хрещених батьків?',
  'Освіта\
  \nДуховне виховання дитини\
  \nПодарунки'
  );
  let answer5 = prompt('Де проводиться таїнство хрещення?',
  'Вдома\
  \nВ церкві'
  );
  let cancel = alert('Дякуємо за відповіді, опитування завершено.');
  
  let res = 0;
  switch (answer1) {
	case `Духовні батьки дитини`:{
  console.log('Відповідь правильна');
  res +=1;
	break;
  }
	case `Батьки дитини`:
	case `Родичі батьків`:
	break;
	default:{
	console.log('Відповідь не правильна');
  }
  }
  
  switch (answer2){
  case `Крижмо та хрестик`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Гроші`:
  case `Одяг та іграшки`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  
  switch (answer3){
  case `Божати`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Куми`:
  case `Хресні`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  
  switch (answer4){
  case `Духовне виховання дитини`:{
  console.log('Відповідь правильна');
  res +=1;
	break;
  }
	case `Освіта`:
	case `Подарунки`:
	break;
	default:{
	console.log('Відповідь не правильна');
  }
  }
  
  switch (answer5){
  case `В церкві`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Вдома`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  alert(`Правильних відповідей - ${res} / 5`);
  return;
  }
  
  
  function quizLast(){
  
  alert(`Опрос: Крестные родители`);
  let answer1 = prompt('Кто такие крестные родители?',
  'Родители ребенка\
  \n Родственники родителей\
  \nДуховные родители ребенка'
  );
  let answer2 = prompt('Первый подарок от крестных своему крестнику?',
  'Деньги\
  \nКрыжма и крестик\
  \nОдеджа и игрушки'
  );
  let answer3 = prompt('Как в дохристиянской Украине назывались крестные родители?',
  'Кумовья\
  \nБожаты\
  \nКрестные'
  );
  let answer4 =prompt('Какое основное задание крестных родителей?',
  'Образование\
  \nДуховное воспитание ребенка\
  \nПодарки'
  );
  let answer5 = prompt('Где проводится таинство крещения?',
  'Дома\
  \nВ храме'
  );
  let cancel = alert('Спасибо за ответы, опрос завершен.');
  
  let res = 0;
  switch (answer1) {
	case `Духовные родители ребенка`:{
  console.log('Відповідь правильна');
  res +=1;
	break;
  }
	case `Родители ребенка`:
	case `Духовные родители ребенка`:
	break;
	default:{
	console.log('Відповідь не правильна');
  }
  }
  
  switch (answer2){
  case `Крыжма и крестик`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Деньги`:
  case `Одеджа и игрушки`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  
  switch (answer3){
  case `Божаты`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Кумовья`:
  case `Крестные`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  
  switch (answer4){
  case `Духовное воспитание ребенка`:{
  console.log('Відповідь правильна');
  res +=1;
	break;
  }
	case `Образование`:
	case `Подарки`:
	break;
	default:{
	console.log('Відповідь не правильна');
  }
  }
  
  switch (answer5){
  case `В храме`:{
  console.log('Відповідь правильна');
  res +=1;
  break;
  }
  case `Дома`:
  break;
  default:{
  console.log('Відповідь не правильна');
  }
  }
  alert(`Правильних відповідей - ${res} / 5`);
  return;
  }
  // Богдан//

function start_game() {
	let c = false;
	do {
        let b = prompt ( ' Скажите что повторить? ') ;
    let a = Number( prompt ( 'Сколько раз повторить? ')) ;
   
    if ( a=== '' || isNaN(a) === true ){
        alert('Не могу посчитать');
        continue;
    }
    for (let i = 0 ; i < a ; i+=1) { 
    alert(b)
    }   
    c=confirm ('Вернуться в главное меню?');    
    } while (!c);
}
  