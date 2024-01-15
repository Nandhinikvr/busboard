function fizzbuzz(){
    console.log(" welcome to fizzbuzz ")
    let three= "Fizz",five="buzz",seven="bang",eleven="bong",thirteen="fezz";
    
    let i = 1;
    for (i=1;i<=256;i++)
    {
        let result=[];
        let elevenmultiple = false;
        if ( i%3 == 0){
            result.push(three);
        }
        if(i%13 ==0){
            result.push(thirteen);
            elevenmultiple = true;
        }
        if (i%5 == 0){
            result.push(five);
        }
        if (i%7 == 0){
            result.push(seven);
        }
        if (i%11 == 0){
            if (elevenmultiple){
                result.push(eleven);
            }
            else{
                result = [];
                result.push(eleven);
            }
           
        }
        if (i%17 == 0){
            result =result.reverse();
        }
        
        // if(i%3 ==0 && i%5 ==0 && i%13 ==0 )
        // console.log(three+thirteen+five)
        // if(i%3 ==0 && i%7 ==0 && i%13 ==0 )
        // console.log(three+thirteen+seven)
        // if(i%5 ==0 && i%7 ==0 && i%13 ==0 )
        // console.log(thirteen+five+seven)
        // if(i%13==0 && i%7==0)
        // console.log(thirteen+seven)
        // if(i%13==0 && i%3==0)
        // console.log(thirteen+three)
        // if(i%13==0 && i%5==0)
        // console.log(thirteen+five)
        // else if((i%7 ==0) && (i%3 ==0))
        // console.log(three+seven)
        // else if((i%7 ==0) && (i%5 ==0))
        // console.log(five+seven)
        // else if(i%3 ==0 && i%5 ==0)
        // console.log(three+five)
        // else if(i%3 == 0)
        //     console.log(three)
        // else if(i%5 == 0)
        //     console.log(five)
        // else if (i%7 ==0)
        //     console.log(seven)
        // else if(i%11 ==0)
        //     console.log(eleven)
        // else if(i%13 ==0)
        //     console.log(thirteen)
        // else 
        //      console.log(i)
        if (result == "")
        console.log(i)
    else
        console.log(result.join(''))
    }
    
}
fizzbuzz();