const searchNode = document.querySelector('.search');
const buttonNode = document.querySelector('.btn');
const inputNode = document.querySelector('.input')

buttonNode.addEventListener('click', () => {
    if (searchNode.classList.contains('active')) {
        searchNode.classList.remove('active');
    } else {
        searchNode.classList.add('active');
    }
})