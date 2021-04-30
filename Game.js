class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
       form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
           players[index -1].x = x;
         players[index - 1].y = y;

            if(index===player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name,x-25,y+25)
            }

            // Differentiate the main player by printing
            // the name of the player on the basket. 
        

        }


        // Give movements for the players using arrow keys


        // Create and spawn fruits randomly

        if(player.index != null){
            for(var i =0; i< fruitGroup.length; i++){
              if(fruitGroup.get(i).isTouching(players)){
                fruitGroup.get(i).destroy();
                player.score=player.score+1;
                player.update();
                textSize(25)
                fill("white");
                text("Player1 :"+ allPlayers.player1.score,50,50);
                text("player2:"+ allPlayers.player2.score,50,100);
              }}}

                if(player.score>=10){
                    this.end();
                  }

    
            }
        
        end(){
            game.update(2);
            clear();
            fill("blue");
            textSize(40);
            text("Game Over",350,300)
        }
        
        
        }
        
      
        
     