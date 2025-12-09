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
});


//const trigger = document.getElementsByClassName('nav-items2');
//const content = document.getElementsByClassName('company-sub');

//trigger.addEventListener('mouseenter', function() {

//    this.content.classList.add('show-sub')
//});

//trigger.addEventListener('mouseleave', function() {
//    this.content.classList.remove('show-sub')
//});


