'use strict';
    const btn = document.querySelectorAll('button'),
          wrapper = document.querySelector('.btn-block');

    //  console.log(btn[0].classList.add('red'));
    //  console.log(btn[0].classList.remove('blue'))
    //  console.log(btn[0].classList.toggle('blue'))
     if (btn[1].classList.contains('red')) {
        console.log('red')
     }
     btn[0].addEventListener('click', () => {
        // if (!btn[1].classList.contains('red')) {
        //   btn[1].classList.add('red');
        // }else {
        //   btn[1].classList.remove('red');
        // }
        btn[1].classList.toggle('red')
     })
    //  className

    wrapper.addEventListener('click', (event) => {
      //console.dir(e);
      if (event.target && event.target.tagName == 'BUTTON' && event.target.matches('button.red')) {
        console.log('hello')
      }
    //   if (event.target && event.target.contains('blue')) {
    //     console.log('hello')
    //   } 
      
    });
    btn.forEach(element => {
        element.addEventListener('click', () => {
            console.log('hello')
        })
    });

    let btns =  document.createElement('button');
    btns.classList.add('red');
    wrapper.append(btns)
    