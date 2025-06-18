document.getElementById('donateNowBtn').addEventListener('click', function () {
//         const totalDonation = parseFloat(document.getElementById('totalDonation').innerText)
//         const amount = parseFloat(document.getElementById('amount').value)
//         const balance = parseFloat(document.getElementById('balance').innerText)

//         if (!isNaN(amount) && amount > 0) {
//             const updatedTotal = totalDonation + amount;
//             const updatedBalance = balance - amount;

//             // Optional: Prevent donation if balance not enough
//             if (updatedBalance < 0) {
//                 alert("Insufficient balance!");
//                 return;
//             }

//             // Update values on the page
//             document.getElementById('totalDonation').innerText = updatedTotal;
//             document.getElementById('balance').innerText = updatedBalance;

//             // Clear input
//             document.getElementById('amount').value = "";


//             // adding transaction in history

//             const history = document.getElementById('addHistory')
//             const div =document.createElement('div')
           
//             div.innerHTML = `
//     <h1 class="font-bold text-green-800 text-2xl">Alhamdulillah, ${amount} tk Donated to Gaza, new balance is ${updatedBalance}</h1>
//     <p class='text-xl'>${new Date().toLocaleString()}</p>
// `;

//             history.appendChild(div)

//         } else {
//             alert('wrong input')
//         }

        calculation('totalDonation', 'amount', 'balance', 'GazaCity');
    })


    //! for rafah

    document.getElementById('donateNowBtn-R').addEventListener('click', function () {

        calculation('totalDonation-R','amountR','balance', 'Rafah')
//         const totalDonation = parseFloat(document.getElementById('totalDonation-R').innerText)
//         const amount = parseFloat(document.getElementById('amountR').value)
//         const balance = parseFloat(document.getElementById('balance').innerText)

        
//         if (!isNaN(amount) && amount > 0) {
//             const updatedTotal = totalDonation + amount;
//             const updatedBalance = balance - amount;

//             // Optional: Prevent donation if balance not enough
//             if (updatedBalance < 0) {
//                 alert("Insufficient balance!");
//                 return;
//             }

//             // Update values on the page
//             document.getElementById('totalDonation-R').innerText = updatedTotal;
//             document.getElementById('balance').innerText = updatedBalance;

//             // Clear input
//             document.getElementById('amountR').value = "";


//             // adding transaction in history

//             const history = document.getElementById('addHistory')
//             const div =document.createElement('div')
           
//             div.innerHTML = `
//     <h1 class="font-bold text-green-800 text-2xl">Alhamdulillah, ${amount} tk Donated to Rafa, new balance is ${updatedBalance}</h1>
//     <p class='text-xl'>${new Date().toLocaleString()}</p>
// `;

//             history.appendChild(div)

//         } else {
//             alert('wrong input')
//         }
    })

    // ! for khan younis

    document.getElementById('donateNowBtn-K').addEventListener('click', function(){

         calculation('totalDonation-K','amountK','balance','Khan Younis')

    })