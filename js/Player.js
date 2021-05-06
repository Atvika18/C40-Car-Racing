class Player{
    constructor()
    {
        this.distance = 0
        this.name = null
        this.index = null
    }


    getCount()
    {
        var playerCountRef = db.ref('playerCount')
        playerCountRef.on("value", function(value)
    {
         playerCount = value.val()
    })
    }


    updateCount(count)
    {
        db.ref("/").update({playerCount:count})
    }


    updatePlayer()
    {
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).set(
            {
                name:this.name, 
                distance:this.distance,
            })
    }

   static allPlayerInfo()
    {
        var playerInfoRef = db.ref("players")
        playerInfoRef.on("value", (data)=> {
            allPlayers = data.val()
        }) 
    } 
}