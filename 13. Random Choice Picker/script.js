const tagsNode = document.getElementById('tags');
const textNode = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());

    tagsNode.innerHTML = '';

    tags.forEach(tag => {
        const tagNode = document.createElement('span');
        tagNode.classList.add('tag');
        tagNode.innerText = tag;
        tagsNode.appendChild(tagNode);
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}