// Code your solutions in this file
// Function to create thank you messages for a list of names and an event
function writeCards(names, event) {
    let thankYouMessages = []; // Create an empty array to hold the messages
    
    // Loop over each name and generate a thank you message
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message); // Add the message to the array
    }
    
    return thankYouMessages; // Return the array of messages
  }
  
  // Function to count down from a given number to 0
  function countDown(number) {
    // Loop to print each number from number down to 0
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number
    }
  }
  
  // Test the writeCards function
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  // Test the countDown function
  countDown(10); // This will log numbers from 10 down to 0
  