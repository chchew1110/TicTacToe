var player1 = 
[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var player2 = 
[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var currentPlayer = player1;
var turnCounter = 0;
var gameOver = false;

function chooseCell (id)
{
    console.log(id);
    if(gameOver === false)
    {
    switch(id)
    {
        case "top-left":
        currentPlayer[0][0] = 1;
        break;
        
        case "top-center":
        currentPlayer[0][1] = 1;
        break;
            
        case"top-right":
        currentPlayer[0][2] = 1;
        break;
        
        case"middle-left":
        currentPlayer[1][0] = 1;
        break;
            
        case"center":
        currentPlayer[1][1] = 1;
        break;
            
        case"middle-right":
        currentPlayer[1][2] = 1;
        break;
            
        case"bottom-left":
        currentPlayer[2][0] = 1;
        break;
            
        case"bottom-center":
        currentPlayer[2][1] = 1;
        break;
            
        case"bottom-right":
        currentPlayer[2][2] = 1;
        break;
    }
    var image = document.createElement("img");
    
    if(currentPlayer === player1)
    {
        image.setAttribute("src","imgs/player-x.png");
    }
    else
    {
        image.setAttribute("src","imgs/player-o.png")
    }
    document.getElementById(id).appendChild(image);
    document.getElementById(id).removeAttribute("onclick");
    
    var winner = checkWinner();
    //console.log(winner);
    //console.log(currentPlayer);
    }
    if(winner === false)
    {
        if(currentPlayer === player1)
        {
            currentPlayer = player2;
            document.getElementById('turnpanel').innerHTML = "<p>Player 2's Turn!</p>"
        }
        else
        {
            currentPlayer = player1;
            document.getElementById('turnpanel').innerHTML = "<p>Player 1's Turn!</p>"
        }
        turnCounter++;
        if(turnCounter === 9)
        {
            console.log("Draw");
            gameOver = true; document.getElementById('winpanel').innerHTML = "<p>It is a draw</p>";
        }
    }
    else
    {
        gameOver = true;
        if(currentPlayer === player1)
        {
            document.getElementById('winpanel').innerHTML = "<p>Player 1 Wins!</p>";        
        }
        else
        {
            document.getElementById('winpanel').innerHTML = "<p>Player 2 Wins!</p>";
        }
    }
        
}

function checkWinner()
{
    //Check Horizontals
    for(var i = 0; i < 3; i++)
    {
        var temp = 0;
        for(var j = 0; j < 3; j++)
        {
            if(currentPlayer[i][j] === 1)
            {
                temp++;
                if(temp === 3)
                {
                    return true;
                }
            }
        }
    }
    
    //Check verticals
    for(var i = 0; i < 3; i++)
    {
        var temp = 0;
        for(var j = 0; j < 3; j++)
        {
            if(currentPlayer[j][i] === 1)
            {
                temp++;
                if(temp === 3)
                {
                    return true;
                }
            }
        }
    }
    
    //Check Diagonals
    if((currentPlayer[0][0] && currentPlayer[1][1] && currentPlayer[2][2]) === 1)
    {
        return true;
    }
    if((currentPlayer[0][2] && currentPlayer[1][1] && currentPlayer[2][0]) === 1)
    {
        return true;
    }
    
    
    return false;
}