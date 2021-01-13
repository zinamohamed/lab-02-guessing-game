# GUESS-A-NUMBER


## HTML SETUP
  1) Number Input
  2) Submit Guess Button
  3) "Guesses remaining" <div> or <span>
  4) Results "Too high/Too low!" <div> or <span>

 ## JS SETUP

  1) Grab DOM Elements they need ID's (you can find this in HTML)
  2) Initialize State ('let')
      - Random number: n
      - Guesses remaining: 4
  3) Add event listener to button ('click')
      - onClick
        1) State changes: decrease remaining guess by 1 (--)
        2) Store user guess in a variable (Number(someInput.value)
        3) Compare user guess with random number
            a. If user guess is > random number return 'too high!' to results span
              - Check if there are any guesses left, if not, disable input and add losing message.
            b. If user guess is < random number return 'too low!' to results span
              -) Check if there are any guesses left, if not, disable input and add losing message.
            c. If user guess is = random number return 'Congrats!' to results span
                - disable input if they win and display congrats message!
  ## STRETCH GOAL
        4) Add another event listener 'reset' button
            1) Reset remaining guesses to 4
            2) Create a new random number 
            3) re-enable inputs if they are disabled and fix game text

## NEED TO KNOW

1) Random Number
  - Want a number between 0-20
    a. Math.random() * 20
  - Get rid of decimals by rounding up
    b. Math.ceil()
  - Wrap together
    c. Math.ceil(Math.random() * 20)

2) compareNumbers function