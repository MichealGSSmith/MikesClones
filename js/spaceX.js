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

/*document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.nav-items'); //grabs the li element
    const menu = document.querySelectorAll('.vehicles-sub'); //grabs all sub-li elements

    trigger.addEventListener('click', () => {
        menu.forEach(item => item.classList.add('show-sub')); //going through list
        console.log('they show up') //testing to see if firing
    });

    trigger.addEventListener('click', () => {
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
       console.log('they go away'); //testing to see if firing
    });
});*/

//this is the refactored code for my nav menu e is the computers idea of the human action i.e click, etc
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav').addEventListener('click', (e) => {

        const vehiclesTrigger = e.target.closest('.nav-items');
        const companyTrigger  = e.target.closest('.nav-items2');

        if (vehiclesTrigger) {
            e.preventDefault(); // REQUIRED for mobile
            vehiclesTrigger
                .querySelectorAll('.vehicles-sub')
                .forEach(item => item.classList.toggle('show-sub'));
        }

        if (companyTrigger) {
            e.preventDefault(); // REQUIRED for mobile
            companyTrigger
                .querySelectorAll('.company-sub')
                .forEach(item => item.classList.toggle('show-sub'));
        }
    });
});

//This is the dropdown for the upcoming missions.

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.upcoming-events'); //grabs the li element
    const menu = document.querySelectorAll('.dropdown-card '); //grabs all sub-li elements

    trigger.addEventListener('mouseenter', () => {
        menu.forEach(item => item.classList.add('show-card')); //going through list
        console.log('here are launches') //testing to see if firing
    });

    trigger.addEventListener('mouseleave', () => {
        menu.forEach(item => item.classList.remove('show-card')); //going through list
        console.log('bye launches') //testing to see if firing
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    const button = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');

    button.addEventListener('click', function(){
        menu.classList.toggle('show-sub');
        console.log('this is the mobile menu');
    })

});
