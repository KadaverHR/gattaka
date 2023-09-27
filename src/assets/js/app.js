document.addEventListener('DOMContentLoaded', function () {

  const Svg = () => {
    let x = [".svg"];
    x.forEach((item) => {
      $(item).each(function () {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(
          imgURL,
          function (data) {
            let $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (
              !$svg.attr("viewBox") &&
              $svg.attr("height") &&
              $svg.attr("width")
            ) {
              $svg.attr(
                "viewBox",
                "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
              );
            }
            $img.replaceWith($svg);
          },
          ""
        );
      });
    });
  };
  Svg();




  //scroll
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };



  //Свипер
  if (document.querySelector('.swiper-help') !== null) {
    new Swiper(".swiper-help", {
      // loop: true,
      // loopPreventsSliding: true,
      // loopedSlides: 9,
      // allowSlideNext: true,
      slidesPerView: 5,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true'
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        450: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        567: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetweenSlides: 15,
        },
        816: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20
        },
        1023: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          spaceBetween: 20
        },
        1139: {
          slidesPerView: 6,
          slidesPerGroup: 3,
          spaceBetween: 25
        },
        1920: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 25
        },
      },
    });







    ///Юридическая помощь


    const data_help = [
      {
        id: 1, name: 'семейные <span>споры</span>', img: 'assets/img/help1.jpg', minimg: 'assets/img/help1-min.png', info: 'Судебные разногласия между супругами, связанные и вытекающие из семейных отношений. Это право на материнство, детство, отцовство, включая заключение брака, развод, раздел имущества, алименты, определение места жительства и порядка общения с детьми. Семейный спор рассматривается городским судом общей юрисдикции, включая судебные участки и регламентируются семейным правом.', list: [
          'Брачный договор',
          'Расторжение брака',
          'Установление отцовства',
          'Взыскание алиментов',
          'Раздел имущества супругов',
          'Опека и попечительство, эмансипация',
          'Ограничение и лишение родительских прав',
          'Определение места жительства и порядка общения с ребенком']
      },

      {
        id: 2, name: 'ВОЗМЕЩЕНИЕ <span>УЩЕРБА</span>', img: 'assets/img/help2.jpg', minimg: 'assets/img/help2-min.png', info: 'Возмещение ущерба, причиненного вашему имуществу, жизни или здоровью в результате преступления, правонарушения, происшествия природного или техногенного характера, взыскание утраченного заработка, компенсация морального вреда.', list: ['Возмещение ущерба, причиненного имуществу',
          'Возмещение вреда, причиненного жизни или здоровью',
          'Взыскание утраченного заработка',
          'Упущенная выгода, проценты ',
          'Ущерб от ДТП, преступления, правонарушения, происшествия',
          'Компенсация морального вреда']
      },

      {
        id: 3, name: 'АРБИТРАЖНЫЕ <span>СПОРЫ</span>', img: 'assets/img/help3.jpg', minimg: 'assets/img/help3-min.png', info: 'Имущественные и неимущественные споры между субъектами предпринимательской деятельности, корпоративные споры, оспаривание решений (действий, бездействия) органов государственной власти.', list: [
          'Имущественные и неимущественные споры',
          'Корпоративные споры',
          'Оспаривание решений (действий, бездействия) органов государственной власти',
          'Дела об установлении юридических фактов'
        ]
      },

      {
        id: 4, name: 'ЗАЩИТА ПРАВА <span>СОБСТВЕННОСТИ</span>', img: 'assets/img/help4.jpg', minimg: 'assets/img/help4-min.png', info: 'Признание права собственности на движимое и недвижимое имущество, выдел доли в натуре, истребование имущества из чужого незаконного владения, устранение препятствий в пользовании имуществом, обременения имущества, залоговые споры, обращение взыскания на имущество, оспаривание торгов.', list: [
          'Признание права собственности на движимое и недвижимое имущество',
          'Раздел домовладений и выдел доли в натуре',
          'Истребование имущества из чужого незаконного владения',
          'Устранение препятствий в пользовании имуществом',
          'Снятие обременений с имущества',
          'Залоговые споры, обращение взыскания на имущество',
          'Наследственные споры',
          'Приобретательская давность']
      },

      {
        id: 5, name: 'ЗАЩИТА ПО УГОЛОВНЫМ <span>ДЕЛАМ</span>', img: 'assets/img/help5.jpg', minimg: 'assets/img/help5-min.png', info: 'Защита подозреваемых, обвиняемых, а также представление интересов потерпевших по уголовным делам частного, частно-публичного и публичного обвинения со стадии проверки по сообщению о преступлении до судебного разбирательства во всех судебных инстанциях на территории Российской Федерации, а также обращение в Европейский Суд по правам человека.', list: [
          'Защита подозреваемых, обвиняемых',
          'Представление интересов потерпевших',
          'Проверка по сообщениям о преступлении',
          'Сбор доказательств и подготовка ходатайств',
          'Обжалование решений и действий (бездействия) следователя, дознавателя',
          'Посещение осужденного в исправительном учреждении',
          'Условно-досрочное освобождение, замена наказания',
          'Досрочное снятие судимости'
        ]
      },

      {
        id: 6, name: 'ЖИЛИЩНЫЕ <span>СПОРЫ</span>', img: 'assets/img/help6.jpg', minimg: 'assets/img/help6-min.png', info: 'Социальный наем, аренда, приватизация жилых помещений, вселение и выселение, признание утратившим или не приобретшим право пользования, определение порядка пользования жилым помещением, аварийное жилье и переселение, изъятие и выкуп жилого помещения.', list: ['Социальный найм и аренда ',
          'Приватизация жилых помещений',
          'Вселение и выселение из жилого помещения',
          'Признание гражданина утратившим право пользования ',
          'Признание гражданина не приобретшим право пользования',
          'Определение порядка пользования жилым помещением ',
          'Переселение из аварийного жилья ',
          'Изъятие и выкуп жилого помещения'
        ]
      },

      {
        id: 7, name: 'ЗАЩИТА ПРАВ <span>ПОТРЕБИТЕЛЕЙ</span>', img: 'assets/img/help7.jpg', minimg: 'assets/img/help7-min.png', info: 'Споры из договоров продажи товаров, выполнения работ или оказания услуг для бытовых нужд, не связанных с осуществлением покупателем предпринимательской деятельности, недостатки товаров, выполнение работ или оказания услуг с отступлением от условий договора, требований безопасности и качества, нарушение сроков оказания услуг или выполнения работ, гарантийные споры, жилищно-коммунальные услуги, медицинские споры.', list: [
          'Споры из договоров продажи товаров, выполнения работ или оказания услуг',
          'Возврат и замена товаров ненадлежащего качества',
          'Возврат товаров надлежащего качества',
          'Недостатки товаров, выполненных работ или оказанных услуг',
          'Нарушение сроков оказания услуг или выполнения работ',
          'Жилищно-коммунальные услуги с УК',
          'Медицинские споры'
        ]
      },

      {
        id: 8, name: 'ДОГОВОРНЫЕ  <span>СПОРЫ</span>', img: 'assets/img/help8.jpg', minimg: 'assets/img/help8-min.png', info: 'Преддоговорные споры, споры по условиям договора, изменение условий договора, расторжение и отказ от договора в одностороннем порядке, нарушение договора одной из сторон, отказ от заключения основного договора, оспаривание сделок, признание сделки недействительной, применение последствий недействительности ничтожной сделки.', list: [
          'Преддоговорные споры и споры по условиям договора',
          'Изменение условий договора',
          'Расторжение и отказ от договора в одностороннем порядке',
          'Нарушение договора одной из сторон',
          'Отказ от заключения основного договора',
          'Оспаривание сделок, применение последствий недействительности ничтожной сделки'
        ]
      },

      {
        id: 9, name: 'АВТО и СТРАХОВЫЕ <span>СПОРЫ</span>', img: 'assets/img/help9.jpg', minimg: 'assets/img/help9-min.png', info: 'Споры из договоров о купле-продаже ТС, сопровождение сделок купли – продажи ТС, проверка юридической чистоты ТС, оспаривание решений, действий, бездействия регистрирующего органа ГИБДД, страховые споры по договорам обязательного страхования гражданской ответственности (ОСАГО), по договорам добровольного страхования имущества или ответственности, возмещение ущерба от ДТП с виновного лица.', list: [
          'Споры из договоров о купле-продаже ТС',
          'Сопровождение сделок купли – продажи ТС',
          'Проверка юридической чистоты ТС',
          'Снятие обременений и запретов с ТС',
          'Оспаривание решений, действий, бездействия регистрирующего органа ГИБДД',
          'Страховые споры по договорам ОСАГО и КАСКО'
        ]
      },

    ]

    let helpList = document.querySelector('.help__list')
    let helpBlock = document.querySelector('.help__block-wrapper')



    data_help.forEach((item, index) => {

      let elem = `<div data-id=${item.id} class="swiper-slide">
    <div class="help__swiper-card-wrapper">
      <div class="help__swiper-card">
        <img src=${item.minimg} alt="Photo">
        <div class="help__swiper-title-wrapper">
          <p class="help__swiper-title">
          ${item.name}
          </p>
        </div>
      </div>
    </div>
  </div>`;
      helpList.innerHTML += elem;
    })



    let helpItem = document.querySelectorAll('.swiper-slide')

    helpItem.forEach((item) => {

      item.addEventListener('click', function () {
        createBlockInfo(this.getAttribute('data-id'))
      })

    });



    const createBlockInfo = (id) => {
      if (helpBlock !== null) {
        helpBlock.innerHTML = ""
      }

      let item = data_help.filter(data => data.id === +id)[0]
      console.log(item)
      let block = document.querySelector('.help__block')
      if (block !== null) {
        block.innerHTML = ""
      }


      let elem = `  
    <div class="help__block">
           
    <div class="help__left">
    <div class="help__right-title-wrapper">
                <p class="help__right-title subtitle">
                ${item.name}
                </p>
              </div>
    <div class="help__left help__left-card" 
    style= "
    display: flex;
    align-self: center;
    justify-self: center;
    background-image: url(${item.img});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 17px -17px 0px rgb(25 25 43 / 44%);
    filter: drop-shadow(17px -17px 0px rgba(247, 183, 11, 0.1));
    border-radius: 2px;
    ">
    </div>
    </div>
    <div class="help__right">

      <div class="help__right-content-wrapper">
     
        <ul class="help__right-list">
        </ul>
      </div>

    </div>

    <div class="help__left-desc-wrapper">
      <p class="help__left-desc t-16">
      ${item.info}
      </p>
    </div>

</div>
`

      helpBlock.innerHTML = elem
      let ulList = document.querySelector('.help__right-list')
      item.list.forEach((el, index) => {
        let li = `  <li li class="help__right-item" >
              <p class="t-16">
                ${el}
              </p>
            </li>
    `;
        ulList.innerHTML += li;


      })
    };
  }


  //Бургер
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__list-mobile');
  let menuLinks = menu.querySelectorAll('.header__link');


  burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__list-mobile--active');
    document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__list-mobile--active');
      document.body.classList.remove('stop-scroll')
    })
  });




  //Шапка//





  var m = document.querySelector("main"),
    h = document.querySelector("header"),
    // c = document.querySelector(".counter"),
    // counter = 0,
    hHeight;
  console.log(m, h)

  function setTopPadding() {
    hHeight = h.offsetHeight;
    // m.style.paddingTop = hHeight + "px";
  }

  function onScroll() {

    // window.addEventListener("scroll", _.throttle(callbackFunc, 200));
    /**
     * Replace the line above with the following one 
     * to see how many more times the "callbackFunc" is executed
     */
    window.addEventListener("scroll", callbackFunc);

    function callbackFunc() {
      // c.style.visibility = "visible";
      // c.innerHTML = counter++;
      var y = window.pageYOffset;
      if (y > 150) {
        h.classList.add("scroll");
      } else {
        h.classList.remove("scroll");
      }
    }
  }

  window.onload = function () {
    setTopPadding();
    onScroll();
  };

  window.onresize = function () {
    setTopPadding();
  };




  tippy('#submenu1', {
    allowHTML: true,
    content: ` 
    <ul class="submenu__list">
      <li class="submenu__item">
        <a href="" class="submenu__link">Создание сайтов</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link ">Контекстная реклама</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link ">Маркетинговое исследование</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link ">Фирменный стиль</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link ">Полиграфия</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link">SEO-продвижение</a>
      </li>
      <li class="submenu__item">
        <a href="" class="submenu__link">Техническая поддержка</a>
      </li>
    </ul>
 `,
    trigger: 'click',
    theme: 'light',
    interactive: true,
    placement: 'bottom-start'
  });

  Fancybox.bind('[data-fancybox="test"]', {
    autoFocus: false,
    touch: false
  });

  $('input').removeAttr('autofocus');


});



