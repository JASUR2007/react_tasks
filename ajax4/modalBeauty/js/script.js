    'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //tab
        const tabs = document.querySelectorAll('.tabheader__item'),
            tabContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items')

            function hideTabContent() {
                tabContent.forEach(element => {
                    element.classList.add('hide');
                    element.classList.remove('show', 'fade');
                });
                tabs.forEach(tab => {
                    tab.classList.remove('tabheader__item_active');
                })
            }

            function showContent(i = 0) {
                tabContent[i].classList.add('show', 'fade');
                tabContent[i].classList.remove('hide');
                tabs[i].classList.add('tabheader__item_active')
            }
            hideTabContent();   
            showContent();

            tabsParent.addEventListener('click',(e) => {
                const target = e.target
                if  (target && target.classList.contains('tabheader__item')) {
                    tabs.forEach((item, i) => {
                      if (target == item) {
                        hideTabContent();
                        showContent(i);
                      }
                    })
                }
            })

    // timer
    const deadline = '2023-06-25';

    function gettimeRemaining(endtime) {
     let days, hours, minutes, seconds;
      const  t = Date.parse(endtime) - Date.parse(new Date());
    
      if (t<= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      } else {
            days = Math.floor(t / (1000 * 60* 60 * 24)),
            hours = Math.floor((t / 1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }
             return {
                'total':t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds 
            };
    }

    function getZero(num) {
        if (num >= 0 && num  <10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(seleсtor, endtime) {
        const timer = document.querySelector(seleсtor),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const  t = gettimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
            
        }

    }
    setClock('.timer', deadline)


    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');

            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
        }

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        function closeModal() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            // modal.classList.toggle('show');
            document.body.style.overflow = '';
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal();
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
        function showModalbyScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
                openModal();
                window.removeEventListener('scroll', showModalbyScroll)
            }
        }

        const modalTimerId = setTimeout(openModal, 5000)
        window.addEventListener('scroll', showModalbyScroll)

        // Forms
        const forms = document.querySelectorAll('form');
        const message = {
            loading: 'Download..',
            success: 'Thanks!',
            failure: 'Smth was wrong'
        }
        
        forms.forEach(element => {
            postData(element);
        });
        function postData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.textContent = message.loading;
                form.append(statusMessage);
                const request = new XMLHttpRequest();
                
                request.open('POST', 'serve1r.php');
                request.setRequestHeader('Content-type', 'application/json;  charset=utf-8');
                const formData = new FormData(form);
                
                const object = {};
                formData.forEach((value, key)=> {
                    object[key] = value;
                });
                const json = JSON.stringify(object);

                request.send(json);

                request.addEventListener('load', () => {
                    console.log(request)
                    if(request.status === 2001) {
                        console.log(request.response);
                        showThinksModal(message.success);
                        form.reset();
                        statusMessage.remove();
                    } else {
                        showThinksModal(message.failure);
                    }
                })
            })
        }
        function showThinksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class = 'modal__content'>
                <div class='modal__close' data-close>×</div>
                <div class ='modal__title'>${message}</div>
            </div>`;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 4000)
        }
})                                                           