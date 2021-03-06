// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter password: ", function(input){
	tokens = input.split(' ');

    if(input.length < 10){
        console.log(`
        ███████  █████  ██ ██          ███    ███ ██    ██ ███████ ████████     ██████  ███████           
        ██      ██   ██ ██ ██          ████  ████ ██    ██ ██         ██        ██   ██ ██                
        █████   ███████ ██ ██          ██ ████ ██ ██    ██ ███████    ██        ██████  █████             
        ██      ██   ██ ██ ██          ██  ██  ██ ██    ██      ██    ██        ██   ██ ██                
        ██      ██   ██ ██ ███████     ██      ██  ██████  ███████    ██        ██████  ███████           
                                                                                                          
                                                                                                          
         ██  ██████       ██████ ██   ██  █████  ██████   █████   ██████ ████████ ███████ ██████  ███████ 
        ███ ██  ████     ██      ██   ██ ██   ██ ██   ██ ██   ██ ██         ██    ██      ██   ██ ██      
         ██ ██ ██ ██     ██      ███████ ███████ ██████  ███████ ██         ██    █████   ██████  ███████ 
         ██ ████  ██     ██      ██   ██ ██   ██ ██   ██ ██   ██ ██         ██    ██      ██   ██      ██ 
         ██  ██████       ██████ ██   ██ ██   ██ ██   ██ ██   ██  ██████    ██    ███████ ██   ██ ███████ 
         `);
    } else if(input.includes('~')){
        console.log('Password cannot include "~" please try again.')
    } else if(input.includes('`')){
        console.log('Password cannot include "`" please try again.')
    } else if(input.includes('|')){
        console.log('Password cannot include "|" please try again.') 
    } else {
        console.log(`
        ██     ██ ██ ███    ██ ███    ██ ███████ ██████  
        ██     ██ ██ ████   ██ ████   ██ ██      ██   ██ 
        ██  █  ██ ██ ██ ██  ██ ██ ██  ██ █████   ██████  
        ██ ███ ██ ██ ██  ██ ██ ██  ██ ██ ██      ██   ██ 
         ███ ███  ██ ██   ████ ██   ████ ███████ ██   ██ 
         `)};
	reader.close()
});