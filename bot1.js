class Bot {
    makeMove(gamestate) {
        let result;
        let previousStates =[]
        let previousP1state=[]
      
        if (gamestate.rounds.length == 0)
            result = 'D'
        else{
            for (let i = 0; i<gamestate.rounds.length;i++){
                previousStates.push(gamestate.rounds[i]['p2'])
                previousP1state.push(gamestate.rounds[i]['p1'])
            }

            if(previousStates[previousStates.length-1]==='R' && previousStates[previousStates.length-2] === 'R' )
            result = 'P'
            if(previousStates[previousStates.length-1]==='S'  && previousStates[previousStates.length-2] === 'S' )
            result = 'R'
            if(previousStates[previousStates.length-1]==='P' && previousStates[previousStates.length-2] === 'P' )
            result = 'S'
            if(previousStates[previousStates.length-1]==='D' && previousStates[previousStates.length-2] === 'D' )
            result = 'W'
            if(previousStates[previousStates.length-1]==='W' && previousStates[previousStates.length-2] === 'W' )
           result = 'R'
           if(previousStates[previousStates.length-1]==='P' || previousStates[previousStates.length-2] === 'P' )
           result = 'D'
           if(previousStates[previousStates.length-1]==='R' || previousStates[previousStates.length-2] === 'R' )
           result = 'P'
           if(previousStates[previousStates.length-1]==='S' || previousStates[previousStates.length-2] === 'S' )
           result = 'R'
           if(previousStates[previousStates.length-1]==='D' || previousStates[previousStates.length-2] === 'D' )
           result = 'W'
           if(previousStates[previousStates.length-1]==='W' || previousStates[previousStates.length-2] === 'W' )
           result='S'  
            if(previousP1state[previousP1state.length-1] === 'R')
            result = 'S'
            if(previousP1state[previousP1state.length-1] === 'S')
            result = 'P'
            if(previousP1state[previousP1state.length-1] === 'P')
            result = 'R'
            if(previousP1state[previousP1state.length-1] === 'D')
            result = 'P'
            if(previousP1state[previousP1state.length-1] === 'W')
            result = 'D'
           }
            return result
        }
       
        
    
}

module.exports = new Bot();
