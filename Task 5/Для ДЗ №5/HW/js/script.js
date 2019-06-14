// Восстановить порядок в меню, добавить пятый пункт

let menu=document.querySelector('.menu');
let menuItems=document.querySelectorAll('.menu-item');
menu.insertBefore(menuItems[2], menuItems[1]);
let liFifth=document.createElement('li');
liFifth.classList.add('menu-item');
liFifth.innerHTML="Пятый пункт"
menu.appendChild(liFifth);

// Заменить картинку заднего фона на другую из папки img
let img="url(../img/apple_true.jpg) center no-repeat"
 document.body.style.background=img;

//  Поменять заголовок, добавить слово "подлинную" 
//  ( Получится - "Мы продаем только подлинную технику Apple")
let title=document.getElementById('title');
title.innerHTML='Мы продаем только <b>подлинную</b> технику Apple';

// Удалить рекламу со страницы
let adv=document.querySelector('.adv');
adv.remove();

// Спросить у пользователя отношение к технике apple
//  и записать ответ в блок на странице с id "prompt"
let answer=prompt("What do you think about Apple's equipment?", "");
let promptAnsw=document.querySelector('#prompt');
promptAnsw.textContent=answer;