



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
