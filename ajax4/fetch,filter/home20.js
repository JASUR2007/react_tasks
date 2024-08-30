const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const rating = arr.filter(item => {
        return item.rating >= 8;
    });
    console.log(rating)

}
showGoodFilms(films);

function showListOfFilms(arr) {
    arr = arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
    console.log(arr);
}
showListOfFilms(films);

function setFilmsIds(arr) {
    arr = arr.map((items, id) => {
        items.id = id;
        return items;
    })
    return arr;
}
const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);


function checkFilms(arr) {
    return arr.every(films => films.id || films.id === 0 ? true : false);
}
console.log(checkFilms(tranformedArray));
