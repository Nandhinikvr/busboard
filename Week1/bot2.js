class Bot {
    makeMove(gamestate) {
        let result='';
        let previousP1States =[]
        let previousP2States =[]
        let previousRCount = 0
        let previousPCount = 0
        let previousSCount = 0
        let previousDCount = 0
        let previousWCount = 0
        let Dcount = 0

        if (gamestate.rounds.length == 0)
            result = 'D'
        else{
            for (let i = 0; i<gamestate.rounds.length;i++){
                previousP2States.push(gamestate.rounds[i]['p2'])
                previousP1States.push(gamestate.rounds[i]['p1'])
                if(gamestate.rounds[i]['p2'] == 'R')
                    previousRCount +=1
                if(gamestate.rounds[i]['p2'] == 'P')
                    previousPCount +=1
                if(gamestate.rounds[i]['p2'] == 'S')
                    previousSCount +=1
                if(gamestate.rounds[i]['p2'] == 'D')
                    previousDCount +=1
                if(gamestate.rounds[i]['p2'] == 'W')
                    previousWCount +=1
                //Check how many times previously we have used D
                if(gamestate.rounds[i]['p1'] == 'D')
                    Dcount += 1

            }
            
            //If other player is playing 'R' most of the times, play 'P'
            if(previousRCount>previousPCount && previousRCount>previousSCount && previousRCount>previousDCount && previousRCount>previousWCount )
                if(Dcount<100)
                    result = 'PD'.charAt(Math.floor(Math.random() * 2))
                else
                    result = 'P'
            //If other player is playing 'P' most of the times, play 'S'
            if(previousPCount>previousRCount && previousPCount>previousSCount && previousPCount>previousDCount && previousPCount>previousWCount )
                if(Dcount<100)
                    result = 'SD'.charAt(Math.floor(Math.random() * 2))
                else
                    result = 'S'

            //If other player is playing 'S' most of the times, play 'R'
            if(previousSCount>previousPCount && previousSCount>previousRCount && previousSCount>previousDCount && previousSCount>previousWCount )
                if(Dcount<100)
                    result = 'RD'.charAt(Math.floor(Math.random() * 2))
                else
                    result = 'R'

            //If other player is playing 'D' most of the times, play 'W'
            if(previousDCount>previousPCount && previousDCount>previousSCount && previousDCount>previousRCount && previousDCount>previousWCount )
                result = 'W'

            //If other player is playing 'W' most of the times, play 'R'
            if(previousWCount>previousPCount && previousWCount>previousSCount && previousWCount>previousDCount && previousWCount>previousRCount )
                result = 'RPS'.charAt(Math.floor(Math.random() * 3))

                 
        }
        //console.log('D Count: ' + Dcount)
        return result
    }
}

module.exports = new Bot();
