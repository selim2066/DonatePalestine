document.getElementById('donateNowBtn').addEventListener('click', function () {
        const totalDonation = parseFloat(document.getElementById('totalDonation').innerText)
        const amount = parseFloat(document.getElementById('amount').value)
        const balance = parseFloat(document.getElementById('balance').innerText)

        if (!isNaN(amount) && amount > 0) {
            const updatedTotal = totalDonation + amount;
            const updatedBalance = balance - amount;

            // Optional: Prevent donation if balance not enough
            if (updatedBalance < 0) {
                alert("Insufficient balance!");
                return;
            }

            // Update values on the page
            document.getElementById('totalDonation').innerText = updatedTotal;
            document.getElementById('balance').innerText = updatedBalance;

            // Clear input
            document.getElementById('amount').value = "";


            // adding transaction in history

            const history = document.getElementById('addHistory')
            const div =document.createElement('div')
           
            div.innerHTML = `
    <h1 class="font-bold text-green-800 text-2xl">Alhamdulillah, ${amount} tk Donated to Gaza, new balance is ${updatedBalance}</h1>
    <p class='text-xl'>${new Date().toLocaleString()}</p>
`;

            history.appendChild(div)

        } else {
            alert('wrong input')
        }
    })
