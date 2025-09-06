
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();


        const card = btn.closest('.card-container');


        const textElement = card.querySelector('.card-text');
        const textToCopy = textElement.innerText.trim();

        alert("Number Copy : " + textToCopy)
        await navigator.clipboard.writeText(textToCopy);

        const copyCnt = parseInt(document.getElementById('copy-cnt').innerText);
        const copyCntTotal = copyCnt + 1;

        document.getElementById('copy-cnt').innerText = copyCntTotal;

   
    });
});

