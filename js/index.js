



//let lastScrollTop = 0; //initial position of the header
//const header = document.querySelector('.header'); 

//window.addEventListener('scroll', function(){
 //   let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
 //   if(scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
  //      header.classList.add('hidden');
  ///  } else {
   //     header.classList.remove('hidden');
  //  }
   // lastScrollTop = scrollTop;
   // console.log('it happened')
//});
let lastScrollTop = 0;
const header = document.querySelector('.header');  // This is fine since you have class="header"

function handleScroll() {
    let scrollTop = document.documentElement.scrollTop;

    // scrolling down
    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        header.classList.add('hidden');
    } 
    // scrolling up
    else {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('touchmove', handleScroll, { passive: true });