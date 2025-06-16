//! toogle button

document.getElementById('historyBtn').addEventListener('click',function(){
    document.getElementById('mainSection').classList.add('hidden')
    document.getElementById('historySection').classList.remove('hidden')
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
})

document.getElementById('donationBtn').addEventListener('click',function(){
    document.getElementById('mainSection').classList.remove('hidden')
    document.getElementById('historySection').classList.add('hidden')
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
})
