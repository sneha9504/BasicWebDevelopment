
let list_item = ['Rock', 'Paper', 'Scissor'];
let game_mode = true
let play
let uc = 0; 
let cc = 0; 
let tc = 0

do {
    
    play = prompt("Do you want to play Y(Yes) or N(No) :").toLowerCase()
    if (play == 'n') {
        console.log("Game Exit....\n please visit again")
        game_mode = false
    } else if (play == 'y') {

        let round = parseInt(prompt("How many rounds you want play : "))
        if(isNaN(round) || parseInt(round) <= 0){
            console.log("Invalid Input");
        }else{
            let count = round
            while (count!= 0) {
                let random_choice = Math.floor(Math.random() * 3)
                let computer_choice = list_item[random_choice].toLowerCase()
                let user_choice = prompt("\nRock,Paper,Scissor : ").toLowerCase()
    
                winner_func(computer_choice, user_choice)
                count--;
                console.log("****************************************");
            }
        }
        console.log(`Total round : ${round}`);
        console.log(`User Won: ${uc} \nComputer Won: ${cc}\nMatch Tie: ${tc} `);
        if(uc==cc){
            console.log("\nMatch tie....");
        }else if(uc>cc){
            console.log("\nUser Won Match...");
        }else{
            console.log("\nComputer Won Match..");
        }
              
        uc = 0; 
        cc = 0; 
        tc = 0;
    }
    else{
        console.log("Invalid Input. Please type Y or N.")
    }
console.log("\n---------------------------------------------------------");
} while (play != 'n')

function winner_func(computer_choice, user_choice) {
    
    
    if (user_choice == 'rock' || user_choice == 'paper' || user_choice == 'scissor') {

        console.log(`Computer Choice: ${computer_choice} , User Choice: ${user_choice}`)
        
        if(user_choice == computer_choice){
            // tie_score++;
            console.log("It's a tie ")
            tc++;
        }else if(
            user_choice=='rock' && computer_choice=='scissor'||
            user_choice=='paper' && computer_choice=='rock'||
            user_choice=='scissor' && computer_choice=='paper' ){
        console.log("user_won")
           uc++;
           
        }else{
            console.log("computer_won ")
            cc++;
        }
        
    }else{
        console.log("Wrong input")
    } 
}






