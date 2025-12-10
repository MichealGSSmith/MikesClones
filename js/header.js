//This is letting us make the header disappear


let lastScrollTop = 0; //initial position of the header
const header = document.querySelector('.header'); 

window.addEventListener('scroll', function(){
    let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
    console.log('it happened')
});


//This makes the drop down for vehicles in header

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.nav-items'); //grabs the li element
    const menu = document.querySelectorAll('.vehicles-sub'); //grabs all sub-li elements

    trigger.addEventListener('mouseenter', () => {
        menu.forEach(item => item.classList.add('show-sub')); //going through list
        console.log('they show up') //testing to see if firing
    });

    trigger.addEventListener('mouseleave', () => {
        menu.forEach(item => item.classList.remove('show-sub')); //going through list
        console.log('they go away') //testing to see if firing
    });
});

//This makes the drop down for  in header

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.nav-items2'); //grabs the li element
    const menu = document.querySelectorAll('.company-sub'); //grabs all sub-li elements

    trigger.addEventListener('mouseenter', () => {
        menu.forEach(item => item.classList.add('show-sub')); //going through list
        console.log('they show up') //testing to see if firing
    });

    trigger.addEventListener('mouseleave', () => {
        menu.forEach(item => item.classList.remove('show-sub')); //going through list
        console.log('they go away') //testing to see if firing
    });
});