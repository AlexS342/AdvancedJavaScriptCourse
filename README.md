# AdvancedJavaScriptCourse
Задание к уроку №1:
1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или
сократить запись функций?
3. * Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит?
Как это исправить?

Задание к уроку №2
1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
какие методы понадобятся для работы с этими сущностями.
2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
    a. Маленький (50 рублей, 20 калорий).
    b. Большой (100 рублей, 40 калорий).
    Гамбургер может быть с одним из нескольких видов начинок (обязательно):
    a. С сыром (+10 рублей, +20 калорий).
    b. С салатом (+20 рублей, +5 калорий).
    c. С картофелем (+15 рублей, +10 калорий).
    Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
    майонезом (+20 рублей, +5 калорий).
    Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно
    использовать примерную архитектуру класса со следующей страницы, но можно использовать
    и свою.
    class Hamburger {
        constructor(size, stuffing){ ... }
        addTopping(topping) { // Добавить добавку }
        removeTopping(topping) { // Убрать добавку }
        getToppings(topping) { // Получить список добавок }
        getSize() { // Узнать размер гамбургера }
        getStuffing() { // Узнать начинку гамбургера }
        calculatePrice() { // Узнать цену }
        calculateCalories() { // Узнать калорийность }
    }

Задание к уроку №3
Основное:
1. Вывести товары для карзины через файл getBasket.json.
цель: увидеть существующую карзину.
Можно вывести:  над каталогом, под каталогом, по клику на кнопку "карзина"
Дополнительно: Сделать добавление и удаление товаров в карзине (Без изменения json файла)

Задание к уроку №4
1. Дан большой текст, в котором для оформления прямой речи используются одинарные
кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на
двойную.
3. * Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
a. Имя содержит только буквы.
b. Телефон имеет вид +7(000)000-0000.
c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
d. Текст произвольный.
e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой
и сообщить пользователю об ошибке.

Задание к уроку №5
1. Сделать наш фильтр.
2. * Сделать вывод товаров карзины
3. * Добавление/Удаление товаров в карзину

задание к уроку №6
1. Сделать компанент фильтр
2. * Сделать компанент Ошибка

Задание к уроку №7
1. Внедрить в текущий проект верстку из курса "Верстка"
Продукты каталога должны вытягиватся с сервера
p.s.:Однастраничный сайт с получением товаров с сервера а не из верстки
2. (минимально) Уникальные фотографии для каждого товара
3. * Функция удаления товаров

Задание к уроку №8
Доделать основное задание к уроку №7