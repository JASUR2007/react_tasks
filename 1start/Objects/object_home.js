const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        console.log(str);
        console.log(languages);
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     console.log(plan['skills']['exp'])
// }

// showExperience(personalPlanPeter)


// function showProgrammingLangs(plan) {
//     let ssilka = plan['skills']['programmingLangs']
//     let lang = '';
//     if(Object.keys(ssilka).length == 0){
//         lang = ''
//     } else{
//         for(keys in ssilka) {
//                 lang +=  `Язык ${keys} изучен на ${ssilka[keys]}\n`
//         }
//     }
//     console.log(lang)
// }
// showProgrammingLangs(personalPlanPeter)


function yo(personal) {
    lang = '';
    for (keys in personal){
        for(language of personal['skills'].languages) {
            lang += language;
        }
    }
    
        return  `Мне 29 и я владею языками: ${lang}`;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))









//11
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    // if (family.length == 0) {
    //     console.log('Семья пуста')
    // } else {
    //     console.log(`Семья состоит из: ${arr.join(' ')}`)   
    // }
    
    let str = ''
    arr.length === 0 ? str = 'Семья пуста': str = "Семья состоит из: "
    
    arr.forEach(member => {
        str += `${member} `
    })
    console.log(str);
}
showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    // console.log(favoriteCities.join('\n'));
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}
standardizeStrings(favoriteCities);




const someString = 'This is some strange string';
function reverse(str) {
    // let array = []
    // if(typeof(someString) === "string") {
    //     for(str of someString)
    //         {
    //             array.push(str)

    //         }
    //         console.log(array.reverse().join(''))
    // } else{
    //     console.log('error')
    //     }



        if (typeof(str) !== 'string') {
            return "Ошибка!";
        }
        // Самый оптимальный вариант решения
        console.log(str.split('').reverse().join(''));
    
        // Решение при помощи цикла
        // let newStr = '';
        // for (let i = str.length - 1; i >= 0; i--) {
        //     newStr += str[i];
        // }
        // return newStr
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, args) {
    // let name = 'Доступные валюты:\n'
    // for(check of arr) {
    //     if(check == args){
    //         continue;
    //     } else{
    //      name += check + '\n';
    //     }
    // }
    // console.log(name)






    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')