const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

function selectRandom(obj) {
    const random = obj.docs[Math.floor(Math.random() * obj.docs.length)];
    return random;
}

async function generateQuote() {

    const config = {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer UdhbIH9B6zQFnECuwIeU',
            'Content-Type': 'application/JSON'
        })
    }

    let char = fetch(`https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0/quote`, config)

    await char
        .then(res => res.json())
        .then(data => {
            const quote = selectRandom(data).dialog;
            quoteEl.innerText = quote;
        })
}