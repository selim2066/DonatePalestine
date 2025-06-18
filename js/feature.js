//! toogle button
console.log("feature.js loaded");


document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('mainSection').classList.add('hidden')
    document.getElementById('historySection').classList.remove('hidden')
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
})

document.getElementById('donationBtn').addEventListener('click', function () {
    document.getElementById('mainSection').classList.remove('hidden')
    document.getElementById('historySection').classList.add('hidden')
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
})

document.getElementById('BlogBtn').addEventListener('click', function () {

    window.location.href = "blog.html"

})

//! its not working. i don't know why.
// document.getElementById('HomeBtn').addEventListener('click', function () {
//     window.location.href = "index.html";
// });

