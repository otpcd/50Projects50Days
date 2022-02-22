const faqNode = document.querySelectorAll('.faq'); //not needed
const btnNode = document.querySelectorAll('.faq-toggle');

// First attempt.

btnNode.forEach((res, index) => {
    res.addEventListener('click', () => {
        faqNode[index].classList.toggle('active');
    })
})

/*

Optimized Solution: use .parentNode instead of looping with index.

btnNode.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})

*/