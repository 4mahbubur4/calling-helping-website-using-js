const callHistoryData = []

document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        e.preventDefault();

        

        const coinCnt = parseInt(document.getElementById('coin-btn').innerText);

       if(coinCnt <= 19)
       {
        alert("You don't have enough Coin ! One call have 20 coin");
        return;
       }

        const coinCntTotal = coinCnt - 20;

        document.getElementById('coin-btn').innerText = coinCntTotal;

        const card = btn.closest('.card-container');
        const title = card.querySelector('h2')?.innerText;
        const number = card.querySelector('h1')?.innerText;

        const callInfo = {
            title: title,
            number: number,
            time: new Date().toLocaleTimeString(),
        }
        callHistoryData.push(callInfo);

        alert("📞 Calling " + callInfo.title + "  " + callInfo.number);

        if (callHistoryData.length > 0) {
            const divContainer = document.getElementById('call-container');
            const div = document.createElement('div');
            div.innerHTML = `
       
       <div class="flex justify-between items-center m-[24px] p-[12px] rounded-[8px] bg-[#FAFAFA] mt-[16px]">
                    <div>
                        <p class="font-semibold text-[18px]">${callInfo.title}</p>
                    <p>${callInfo.number}</p>
                    </div>
                    <div>
                        <p>${callInfo.time}</p>
                    </div>
                 </div>
       
       `
            divContainer.appendChild(div);
        }

        callHistoryData.pop();

    });
});


document.getElementById('clear-btn')
.addEventListener('click',function(e){

    const divContainer = document.getElementById('call-container');
            divContainer.innerHTML = "";
})