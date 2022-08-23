document.getElementById('btn-1').addEventListener('click', function () {
    document.getElementById('btn-1').disabled = true;
    document.getElementById('btn-1').style.backgroundColor = '#717170';
})

document.getElementById('btn-2').addEventListener('click', function () {
    document.getElementById('btn-2').disabled = true;
    document.getElementById('btn-2').style.backgroundColor = '#717170';
})
document.getElementById('btn-3').addEventListener('click', function () {
    document.getElementById('btn-3').disabled = true;
    document.getElementById('btn-3').style.backgroundColor = '#717170';
})

document.getElementById('btn-4').addEventListener('click', function () {
    document.getElementById('btn-4').disabled = true;
    document.getElementById('btn-4').style.backgroundColor = '#717170';
})

document.getElementById('btn-5').addEventListener('click', function () {
    document.getElementById('btn-5').disabled = true;
    document.getElementById('btn-5').style.backgroundColor = '#717170';
})

document.getElementById('btn-6').addEventListener('click', function () {
    document.getElementById('btn-6').disabled = true;
    document.getElementById('btn-6').style.backgroundColor = '#717170';
})

document.getElementById('btn-7').addEventListener('click', function () {
    document.getElementById('btn-7').disabled = true;
    document.getElementById('btn-7').style.backgroundColor = '#717170';
})

document.getElementById('btn-8').addEventListener('click', function () {
    document.getElementById('btn-8').disabled = true;
    document.getElementById('btn-8').style.backgroundColor = '#717170';
})

document.getElementById('btn-9').addEventListener('click', function () {
    document.getElementById('btn-9').disabled = true;
    document.getElementById('btn-9').style.backgroundColor = '#717170';
})



document.getElementById('btn-buy').addEventListener('click', function(){
    const inputPlayers = document.getElementsByTagName("tr").length;
    const inputAmount = parseInt(document.getElementById('players-input-field').value);
    document.getElementById('playerexpense').innerText = inputPlayers * inputAmount;
})

document.getElementById('btn-total').addEventListener('click', function(){
    const coach = parseInt(document.getElementById('coach').value);
    const manager = parseInt(document.getElementById('manager').value);
    const playerExpense = parseInt(document.getElementById('playerexpense').innerText);
    const total = coach + manager + playerExpense
    document.getElementById('total').innerText = total; 

})
