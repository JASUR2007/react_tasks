/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',"");








let ccc = '4561wew6';

function maskify(str) {
    // let num = cc.split('');
    // let result = '';
    // for(i = 0; i < num.length; i++) {
    //     if(i < num.length-4) {
    //         result += "#"
    //     } else {
    //         result += num[i]
    //     }
    // }
    // console.log(result);
    
    if (str.length <= 4) {
        return str;
      }
      // Otherwise, return the string with all but the last four characters masked
      return '#'.repeat(str.length - 4) + str.slice(-4);
  }
  

console.log(maskify(ccc));