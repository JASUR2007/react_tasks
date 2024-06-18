/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// document.addEventListener('DOMContentLoaded', () => { 
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     const img = document.querySelectorAll('.promo__adv img'),
//         bg = document.querySelector('.promo__bg'),
//         janr = document.querySelector('.promo__genre'),
//         text = document.querySelectorAll('.promo__interactive-item'),
//         list = document.querySelector('.promo__interactive-list'),
//         inp = document.querySelector('.adding__input'),
//         btn = document.querySelector('.add button'),
//         check  = document.querySelector('.add input[type = "checkbox"]')
//     img.forEach(item => {
//         item.remove()
//     });
//     janr.innerHTML = 'драма'
//     bg.style.background = 'url(img/bg.jpg) center center / cover no-repeat';


//     const addfilm = (e) => {
//         e.preventDefault();
//         let newFilm = inp.value.toUpperCase().trim();
//         if (inp.value == '') {
//             return alert('write');
//         }
        
//         if(check.checked) {
//             console.log('Добавляем любимый фильм')
//         }
//         if(newFilm.length > 10) {
//             newFilm = newFilm.slice(0, 10) + '...';
//         }
//         movieDB.movies.push(newFilm);
//         movieDB.movies.sort();
//         updated();
//         inp.value = '';
//         check.checked = false;  
//     }
//     const updated = () =>  {
//         list.innerHTML = '';
//         movieDB.movies.forEach((element,i) => {
//                 list.innerHTML += `
//                     <li class="promo__interactive-item">
//                         ${i+1} ${element}
//                         <div class="delete"></div>
//                     </li>`
//         });
//         const deleted = document.querySelectorAll('.delete');
//         deleted.forEach((element,i) => {
//             element.addEventListener('click' , () => {
//                 movieDB.movies.splice(i, 1);
//                 updated();
//             })     
//         });
//     }
//     updated();
//     btn.addEventListener('click', addfilm)
// })






document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    }
    const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`
            }
            if (favorite) {
                console.log('lovely')
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }


        e.target.reset();
    })

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }
    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${i+1} ${film}
                    <div class="delete"></div>
                 </li>`
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(movieDB.movies, movieList)
            })
        }) 
    }
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
})