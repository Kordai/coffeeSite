ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.157294, 71.428934],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark1 = new ymaps.Placemark([51.095697, 71.42089], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в магазине Accent: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark2 = new ymaps.Placemark([51.097045, 71.421347], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в магазине Assorti: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark3 = new ymaps.Placemark([51.109106, 71.426337], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в магазине Коркем3: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark4 = new ymaps.Placemark([51.119846, 71.430294], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в магазине Жереуйык: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark5 = new ymaps.Placemark([51.169289, 71.405501], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в кулинария Вкусняшка: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark6 = new ymaps.Placemark([51.120576, 71.281117], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE на АЗС TAIM: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark7 = new ymaps.Placemark([51.204537, 71.296963], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE на АЗС TAIM: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark8 = new ymaps.Placemark([51.178055, 71.435266], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE  в донерной #ЛАВАШ: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark9 = new ymaps.Placemark([51.165187, 71.422989], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE в магазине Астана Мир вкуса: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

        myPlacemark10 = new ymaps.Placemark([51.159907, 71.473988], {
            hintContent: 'HOT COFFEE',
            balloonContent: 'Кофе с собой HOT COFFEE в магазине Вкус март: Американо, Латте, Капучино, Мокачино и горячий шоколад. Натуральный зерновой кофе. hotcoffee.kz'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mm3.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -45]
        });

    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10);
});