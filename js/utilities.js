function calculation(id1, id2, id3, string) {

    const totalDonation = parseFloat(document.getElementById(id1).innerText)
    const amount = parseFloat(document.getElementById(id2).value)
    const balance = parseFloat(document.getElementById(id3).innerText)

    if (!isNaN(amount) && amount > 0) {
        const updatedTotal = totalDonation + amount;
        const updatedBalance = balance - amount;

        // Optional: Prevent donation if balance not enough
        if (updatedBalance < 0) {

            document.getElementById('my_modal_1').showModal();
            return;
        }

        // Update values on the page
        document.getElementById(id1).innerText = updatedTotal;
        document.getElementById(id3).innerText = updatedBalance;

        // Clear input
        document.getElementById(id2).value = "";


        // adding transaction in history

        const history = document.getElementById('addHistory')
        const div = document.createElement('div')

        div.innerHTML = `
    <h1 class="font-bold text-green-800 text-2xl">Alhamdulillah, ${amount} tk Donated to ${string}, new balance is ${updatedBalance}</h1>
    <p class='text-xl'>${new Date().toLocaleString()}</p>
`;

        history.appendChild(div)

    } else {
        document.getElementById('my_modal_2').showModal();
            return;
    }



}