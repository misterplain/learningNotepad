#We are importing a module that we need to be able to generate random numbers
import random

#We are creating a random number between 1 and 100
#and assigning it to randomNumber
randomNumber = random.randrange(1, 100)

#We are creating the variable numberOfGuesses and
#assigning it to 1 for the first guess.
numberOfGuesses = 1

#We are asking the user to enter in a value
#between 1 and 100 and store it in guess
guess = int(input("Guess a number between 1 to 100: "))

#Here is the start to our loop that will keep
#running as long as the guess is
#not the same as the randomNumber
while guess != randomNumber:
    numberOfGuesses += 1 #We increment the numberOfGuesses by 1 each time the loop runs
    if guess > randomNumber: #If the guess is larger than the random number
        print(guess, "is too high.")
        guess = int(input("Guess a lower number: "))
    elif guess < randomNumber: #If the guess is lesser than the random number
        print(guess, "is too low.")
        guess = int(input("Guess a higher number: "))
    else: #If the guess is the same (since we've checked both ranges already)
        print("You got it! ")

#Once the guess is equal to the randomNumber, we can output this line
print("You guessed correctly", numberOfGuesses, "guesses!")

#### the same thing but now automatically update so the program chooses a new guess
#We are importing a module that we need to be able to generate random numbers
import random

#We are creating a random number between 1 and 100
#and assigning it to randomNumber
randomNumber = random.randrange(1, 100)

#We are creating the variable numberOfGuesses and
#assigning it to 1 for the first guess.
numberOfGuesses = 1

#We are setting the lowerLimit of the guesses to 1
#and the upperLimit to 100
lowerLimit = 1
upperLimit = 100

#We are setting the AI to guess the middle number between the lower and upper limit
guess = int((lowerLimit + upperLimit)/2)
print("AI guesses ", guess)

#Here is the start to our loop that will keep
#running as long as the guess is
#not the same as the randomNumber
while guess != randomNumber:
    numberOfGuesses += 1 #We increment the numberOfGuesses by 1 each time the loop runs
    if guess > randomNumber: #If the guess is larger than the random number
        print(guess, "is too high.")
        upperLimit = guess # Since the guess is too high, we reset the upperLimit to the guess
        guess = int((lowerLimit + upperLimit)/2) # Our new guess is between the lower and new upper limit
        print("AI guesses ", guess)
    elif guess < randomNumber: #If the guess is larger than the random number
        print(guess, "is too low.")
        lowerLimit = guess #Since the guess is too low, we reset the lowerLimit to the guess
        guess = int((lowerLimit + upperLimit)/2) #Our new guess is between the new lower and upper limit
        print("AI guesses ", guess)
    else: #If the guess is the same (since we've checked both ranges already)
        print("AI got it! ")
#Once the guess is equal to the randomNumber, we can output this line
print("AI guessed correctly ", numberOfGuesses, "guesses!")