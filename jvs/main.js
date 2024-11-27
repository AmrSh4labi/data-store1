const countDown = ()=>{

    const countDownDate = new Date("2025-11-26T00:00:00").getTime();
    const now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000*24*60*60));

    distance = distance%(1000*24*60*60);
    let hours = Math.floor(distance / (1000*60*60));

    distance = distance%(1000*60*60);
    let minutes = Math.floor(distance / (1000*60));

    distance = distance%(1000*60);
    let seconds = Math.floor(distance / (1000));

    document.getElementById('days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;
}
setInterval(()=>{
  countDown();
},1000);

//sec4
const productCards = document.querySelectorAll('.product-card');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
});

productCards.forEach(card => {
    observer.observe(card);
});