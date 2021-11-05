// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let overlay = document.querySelector('.overlay');
let modalPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(overlay.style.visibility = 'visible')
    }, 5000);
})

let closeButton = document.querySelector('.close1');
closeButton.addEventListener('click', ()=>{
    overlay.style.visibility = 'hidden'
})