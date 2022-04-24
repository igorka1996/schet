const rand = document.querySelector('.rand');
const hone = document.querySelector('.hone');
const pisa = document.querySelector('.pisa');
const popa = document.querySelector('.popa');
const soset = document.querySelector('.soset');
rand.addEventListener('click', () => {
   let chislo = Math.floor(Math.random() * 14);
   if (chislo > 4 && chislo < 10) {
      popa.classList.add('active');
   } else if(chislo > 9){
      pisa.classList.add('active');
   } else {
      soset.classList.add('active');
   }
   setTimeout(() => {
      popa.classList.remove('active');
      pisa.classList.remove('active');
      soset.classList.remove('active');
   }, 4000)
});


