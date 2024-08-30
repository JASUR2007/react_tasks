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
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]')

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

        modalClose.addEventListener('click', closeModal)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
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

        // const modalTimerId = setTimeout(openModal, 5000)
        window.addEventListener('scroll', showModalbyScroll)

        // class to cards
        class MenuCard {
            constructor(srcImg, alt, TitleCard, text, price, parentCode, ...classes) {
                this.src = srcImg;
                this.alt = alt;
                this.title = TitleCard;
                this.text = text;
                this.price = price;
                this.transfer = 27;
                this.classes  = classes;
                this.parentCode = document.querySelector(parentCode);
                this.changeToUAH();
            }
            
            changeToUAH() {
                this.price = this.price * this.transfer;
                
            }
            render() {
                const element = document.createElement('div');
                if (this.classes.length === 0) {
                //    this.classes = ['menu__item'];     
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `              
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.text}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
                    this.parentCode.append(element);
            }
        }

        new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container',

        ).render();
})