print(type("Hello World")) #= <class 'str'>
#Unlike many other languages, you do not need to define the data type when you assign a value to your variable. This is unique to Python, but it also forces you to think about the data types and the variables if you want to make use of them later on, because the results may not be what you intended them to be.

# rules
#Must start with a letter or an underscore character.
#Cannot start with a number.
#Can only contain letters, numbers, and the underscore #character.
#Variable names are case sensitive.

#Pascal case, similar to camel case but starts with capital as well - ThisIsPascalCase
#snake case - this_is_snake_case

#numeric type have int float and complex all built in, no need to define
#A complex number is the sum of a real number and an imaginary number. This is one that we won’t get into. They are written with the character j, which is the imaginary part:

#operators and precedence
# ** - exponentiation
# % - modulus
# / - division
# * - multiplication
# - - subtraction
# + - addition
# += - addition assignment
# -= - subtraction assignment
# *= - multiplication assignment
# /= - division assignment
# 4*2**3 = 32 (exponent first)

# order of operations
# Parentheses
# Exponents
# Multiplication and Division
# Addition and Subtraction

## escape characters in a string = \n \t \b \r \f \\ \' \"
# \n - new line
# \t - tab
# \b - backspace
# \r - carriage return
# \f - form feed
# \\ - backslash
# \' - single quote
# \" - double quote

# multiple variables, one line - 
myString1, myString2, myString3 = "Python", "is", "Fun"

#multiple variables to single variable
myString1 = myString2 = myString3 = "We're the same"

# concatenation - adding two strings will combine, adding two numbers will add
myString = "Hello"
result = myString * 5
print(result) #= HelloHelloHelloHelloHello

# the 'in' operator to find a string within a string
stringToFind = 'some'
sentence = 'Python is quite a fun language to learn. There can be some great string functions to use.'
result = stringToFind in sentence
print(result) # results in a boolean

#multiline strings by using three quotes or three single quotes
outputString = """This is my first line
and now my second line
and lastly my last line."""
print(outputString)

# converting numbers to strings
myVar1 = 111
myVar2 = 222
result = str(myVar1) + str(myVar2)
print(result) #= 111222

#converting strings to numbers
myVar1 = '111'
myVar2 = '222'
result = int(myVar1) + int(myVar2)
print(result) #= 333

