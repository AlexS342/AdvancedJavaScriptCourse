const ruleName = /^([A-Z][a-z]+)|([А-ЯЁ][а-яё]+)$/; // Только с большой буквы и не разными алфавитами
const rulePhone = /^\+7\(\d\d\d\)\d\d\d\-\d\d\d\d\b$/; //7([0-9][0-9][0-9])[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$
const ruleMail = /^([a-z0-9]+[a-z0-9\.-_][a-z0-9]+)@([a-z0-9]+[a-z0-9\.\-][a-z0-9]+)\.[a-z]{2,6}\b$/
//еще один из вариантов для email, но активный нравится больше  /^[a-z]+\@[a-z]+\.[a-z]+\b$|[a-z]+\.[a-z]+@[a-z]+\.[a-z]+\b$|[a-z]+\-[a-z]+@[a-z]+\.[a-z]+\b$|[a-z]+\_[a-z]+@[a-z]+\.[a-z]+\b$/;
//вариант из методички не нравится, он допускает кривые адреса
//с ним можно указать почту _34-sdf.@_-hg.u-.a...z его непропускает сам input
//а вот такой адрес _34-sdf-.@m-a.il.ru прошол проверку и вернул true

let formInDoc = document.querySelector('form');

formInDoc.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (ruleName.test(formData.get("formName"))) {
        document.querySelector('input#username').classList.remove("redInput");
        document.querySelector('#formNameError').classList.add('hide');
    } else {
        let userName = document.querySelector('input#username');
        userName.classList.add("redInput");
        userName.value = "";
        userName.placeholder = " Error";
        document.querySelector('#formNameError').classList.remove('hide');
    }

    if (rulePhone.test(formData.get("formPhone"))) {
        document.querySelector('input#userphone').classList.remove("redInput");
        document.querySelector('#formPhoneError').classList.add('hide');
    } else {
        let userPhone = document.querySelector('input#userphone');
        userPhone.classList.add("redInput");
        userPhone.value = "";
        userPhone.placeholder = " Error";
        document.querySelector('#formPhoneError').classList.remove('hide');
    }

    if (ruleMail.test(formData.get("formMail"))) {
        document.querySelector('input#usermail').classList.remove("redInput");
        document.querySelector('#formMailError').classList.add('hide');
    } else {
        let userMail = document.querySelector('input#usermail');
        userMail.classList.add("redInput");
        userMail.value = "";
        userMail.placeholder = " Error";
        document.querySelector('#formMailError').classList.remove('hide');
    }

});