const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter a password of atleast 10 characters ", function(input){
	const tokens = input.split(' ');
	
	 const password = tokens[0];
	

 if (password.length < 10) {
     console.log('Password must be at least 10 Characters or contain a number')
 }
  else 
  {console.log('Password meets requirements')
 }

	reader.close()

});
