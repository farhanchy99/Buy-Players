//Common Js File


const players = [];

function addToPlayers(element){ 
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const pd = {
        playerName: playerName,
    }
    players.push(pd);
//Error Section
    if(players.length > 5){
        alert("You can't add more than 5 Players");
    }
    else{
        let totalPlayers = 0;
        const playersCart = document.getElementById('players-cart');
        playersCart.textContent = '';
        for(let i = 0; i < players.length; i++)
        {
            totalPlayers += players[i].playerName;

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${players[i].playerName}</td>
            `;
            playersCart.appendChild(tr);
        }
    }
}




