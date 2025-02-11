# We imported the random module in Unit 1 to use the random() function for number generation.
# We imported and used the math module in Unit 2 to utilize the sin() function.
# And recently in Unit 3, we imported the datetime module to get the date.today() function in our Employee Class program.

# There is a digital library that is distributed with Python. The Python Standard Library is composed of collections of built-in modules that provide access to system functionality and standardized solutions that Python programmers can utilize when developing programs. We will discuss more about the Python Standard Library, or just standard library (in reference to Python) later.

import math 

#dir to get more info about the module
print(dir(math)) #['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'lcm', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'nextafter', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc', 'ulp']

help(math) # Help on built-in module math:

# NAME
#     math

# DESCRIPTION
#     This module provides access to the mathematical functions
#     defined by the C standard.

# FUNCTIONS
#     acos(x, /)
#         Return the arc cosine (measured in radians) of x.
        
#         The result is between 0 and pi.
    
#     acosh(x, /)
#         Return the inverse hyperbolic cosine of x.
    
#     asin(x, /)
#         Return the arc sine (measured in radians) of x.
        
#         The result is between -pi/2 and pi/2.
    
#     asinh(x, /)
#         Return the inverse hyperbolic sine of x.
    
#     atan(x, /)
#         Return the arc tangent (measured in radians) of x.
        
#         The result is between -pi/2 and pi/2.

#importing parts of a module
from math import pi
print(pi) 

#using a prefix
import math
print(math.pi)

#renaming a module
import math as m
print("The value of pi is", m.pi)

# import multiple items
from math import pi, sqrt
print(pi)

#import all and use the names directly
from math import *
print(pi)

##testing out the randrange
#We are importing the random module that we need to be able to generate random numbers
import random            

#randint and randrange
import random
# the use of the randint() function
number1 = random.randint(1, 100)        # an int from 1 to 100
print(number1)
number2 = random.randint(101, 200) 	# an int from 101 to 200 
print(number2)
number3 = random.randint(0, 7) 		# an int from 0 to 7
print(number3)

#We are creating a random even number between 2 and 10 by 
#first randomizing a number between 1 and 5. This will be our
#final number. The number to add will take that and multiply it by 2.
numberToGuess = random.randrange(1, 5)
print(“The random number generated is: “, numberToGuess) 
numberToAdd = numberToGuess * 2

#Asking the user to enter in their name
name = input("Hello! What is your name? ")

#Script to walk through each of the steps
print("Welcome " +name +", we’ll perform some mind reading on you.")

enteredNumber = int(input("Enter in a number between 1 and 10: "))

print("Multiply the result by 2.")

#userNumber = enteredNumber * 2
#print(">> userNumber at this step = " + str(userNumber))

answer = input("Ready for the next step? ")
print("Now, add...let's see...")
print(“The number to add is: “, numberToAdd)

#userNumber = userNumber + numberToAdd
#print(">> userNumber at this step = " + str(userNumber))

answer = input("Ready for the next step? ")
print("Now, divide the number have by 2.")

answer = input("Ready for the next step? ")

#userNumber = userNumber / 2
#print(">> userNumber at this step = " + str(userNumber))

print("Now, subtract the original number that you thought about.")
answer = input("Ready for the last step? ")

#Guessing the number
print("Well " +name +", let me read your mind...The number that you have right now a....")
print(numberToGuess)

#userNumber = userNumber - enteredNumber
#print(">> userNumber at this step = " + str(userNumber)

#numberToGuess = random.randrange(5, 50, 5)  
#between 5 and 50 but multiples of 5

##added into temperature module - temperature.py So, both the temperature.py and main.py are in the same directory/location and can use each other.
def to_celsius(fahrenheit):
  celsius = (fahrenheit - 32) * 5/9 
  return celsius
  
def to_fahrenheit(celsius): 
  fahrenheit = celsius * 9/5 + 32 
  return fahrenheit

##within main.py - as it's within the same directory, we don't need to import it from a specific file path 
import temperature

temp = 20
print(temp, "Celsius =", round(temperature.to_fahrenheit(temp)), "Fahrenheit")
print(temp, "Fahrenheit =", round(temperature.to_celsius(temp)), "Celsius")

##docstrings to document the code
"""
This module contains functions for converting temperature between degrees Fahrenheit
and degrees Celsius 
"""

def to_celsius(fahrenheit):
  """
  Accepts degrees Fahrenheit (fahrenheit argument)
  Returns degrees Celsius 
  """
  celsius = (fahrenheit - 32) * 5/9 
  return celsius
  
def to_fahrenheit(celsius): 
  """
  Accepts degrees Celsius (celsius argument)
  Returns degrees Fahrenheit 
  """
  fahrenheit = celsius * 9/5 + 32 
  return fahrenheit

#importing from other files, say we have a poem.txt in another file
fhandler = open('poem.txt')
print(fhandler) #<_io.TextIOWrapper name='poem.txt' mode='r' encoding='UTF-8'>

count = 0
for line in fhandler:
    count = count + 1
print('Line Count:', count) #The newline character is a whitespace character similar to the space and tab character; it is not shown as a ‘\ ‘ (space) or a ‘\t’ (tab). Even though the newline character is stored as a ‘\n’ (newline), we do not see that character as a ‘\n’ but rather we see the text moving to the next line.

#read function to read the text
text = fhander.read()
print(text)

#open and read a file 
fout = open('output.txt', 'r')
#write a file
fout = open('output.txt', 'w')
#emample
fout = open('output.txt', 'w')
line1 = "Putting in a line of text,\n"
fout.write(line1)

#closing files so that they can be saved
fout = open('output.txt', 'w')
line1 = "Putting in a line of text,\n"
fout.write(line1)
fout.close()

