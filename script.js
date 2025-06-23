let count = document.getElementById('count');
let increase_btn = document.getElementById('increase_btn');
let decrease_btn = document.getElementById('decrease_btn');

increase_btn.addEventListener('click', () => {
    ++count.innerText
})
decrease_btn.addEventListener('click', () => {
    if (count.innerText > 0) {
        --count.innerText
    }
})