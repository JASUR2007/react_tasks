function pow(x, n) {
    let result =  1;
    
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}


console.log(pow(2,4))


function pow_2(x,n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow_2(x, n-1);
    }
}
console.log(pow_2(3,1))



    let students = {
        js:[ 
            {
                name: 'Peter',
                progress: 60
            }
        ],
        html: {
            basics: [{
                name: 'Sharik',
                progress: 100
            }],
            pro: [{
                name: 'Gulchapchap',
                progress: 30
            }]
        }
    }
    console.log(Array.isArray(Object.values(students)))
    // console.log(Object.values(students)[1].basics[0].name)
    // function getTotal(data) {
    //     let total = 0;
    //     let students = 0;

    //     for (let course of Object.values(data)) {
    //         if (Array.isArray(course)) {
    //             students += course.length;
                
    //             for (let i = 0; i < course.length;i++) {
    //                 total += course[i].progress;
    //             }
    //         }else {
    //             for(let subCourse of Object.values(course)) {
    //                 students += subCourse.length;

    //                 for (let i = 0; i < subCourse.length;i++) {
    //                     total += subCourse[i].progress;
    //                 }      
    //             }   
    //         }
    //     }
    //     return total / students;
    // }

    // console.log(getTotal(students))

console.log(Array.isArray(students))
    function getTotalRecourse(data) {
        if (Array.isArray(data)) {
            let total = 0;

            for (let i = 0; i < data.length; i++) {
                total += data[i].progress            
            }
            
            return [total, data.length];
        } else {
            let total = [0, 0];
            for (let subreCourse of Object.values(data)) {
                const subArr = getTotalRecourse(subreCourse);
                total[0] += subArr[0];
                total[1] += subArr[1];
            }
            return total;
        }
    }

    
    const divide = getTotalRecourse(students)
    console.log(divide[0]/divide[1])





    function factorial(num) {
        if(typeof(num) !== 'number' || !Number.isInteger(num)) {
            return 'something get wrong'
        }
        
        if (num >= 1) {
            return num * factorial(num - 1);
        } else {
            return 1;
        }
    }   

    console.log(factorial(5))
