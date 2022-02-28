const tagsNode = document.getElementById('tags');
const textNode = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
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