const players = [];

function addToPlayers(element){ 
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pd = {
        pdName: pdName,
    }
    players.push(pd);

    if(players.length > 5){
        alert("You can't add more than 5 Players");
    }
    else{
        let totalPlayers = 0;
        const playersContainer = document.getElementById('players-cart');
        playersContainer.textContent = '';
        for(let i = 0; i < players.length; i++)
        {
            totalPlayers += players[i].pdName;

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${players[i].pdName}</td>
            `;
            playersContainer.appendChild(tr);
        }
    }
}




