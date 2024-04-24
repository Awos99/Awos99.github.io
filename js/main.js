document.addEventListener('DOMContentLoaded', (event) => {
    let currentFactIndex = 0;
    const facts = document.querySelectorAll('.fact');
    facts[currentFactIndex].classList.add('active');

    function nextFact() {
        
        
        setTimeout(() => {
            facts[currentFactIndex].classList.replace('active', 'exit');
        }, 7000);
        

        setTimeout(() => {
            facts[currentFactIndex].classList.remove('exit');
            currentFactIndex = (currentFactIndex + 1) % facts.length;
            facts[currentFactIndex].classList.add('active');
        }, 7500);

    }

    setInterval(nextFact, 7510); // Change facts every 10 seconds
});


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop - 80, // 80 is the height of your header
            behavior: "smooth"
        });
    });
});
