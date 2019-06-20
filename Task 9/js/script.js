window.addEventListener('DOMContentLoaded', function () {
    'use strict';
        //kids (tabs)
    let tab = document.querySelectorAll('.info-header-tab'),
         //parent
        info = document.querySelector('.info-header'),
        //content
        tabContent = document.querySelector('.info-tabcontent');
        
        //HIDE ALL TABS
        function hideTabContent(a){
            for(let i=a; i<tabContent.clientHeight;i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);
        //SHOW CURRENT(clicked) TAB
        function showTabContent(b){
            if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }     
        }

        info.addEventListener('click', function(event){
            let target=event.target;
            if(target&&target.classList.contains('info-header-tab')){
                for(let i=0;i<tab.length;i++){
                    if(target==tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
});