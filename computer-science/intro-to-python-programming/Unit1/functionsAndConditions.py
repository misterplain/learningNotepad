#first we define the function definition by using the reserved keyword “def” to define it
#then set up the function myFunction with three parameters firstName, middleInitial, and lastName.
#to end a function, we place a colon at the end

def myFunction(firstName, middleInitial, lastName):

#finally we will print to screen so we can see it work
  print(firstName, middleInitial, lastName)

#here is where we call myFunction and pass it the actual values as arguments
myFunction("John", "R", "Doe")

#length of a string
myString = 'Python is fun!'
print(len(myString)) #= 14

#int() - converts a string to an integer
print(int(100))
print(int(2.95))
print(int("200")) #= 200

#float() - converts a string to a float
print(float(100))
print(float(2.95))
print(float("200")) #= 200.0

#str() - converts a number to a string
print(str(100))
print(str(2.95))
print(str("200")) #= 200

## string methods

#index() - returns the index of the first occurrence of a substring
myString = 'Python is fun!'
print(myString.index('is')) #= 7
#capitalize()
outputString = 'I AM YELLING!'
print(outputString.capitalize()) #= I am yelling!
#upper()
outputString = 'ThIs Is My TeSt StRiNg!'
print(outputString.upper()) #= THIS IS MY TEST STRING!
#lower()
outputString = 'ThIs Is My TeSt StRiNg!'
print(outputString.lower()) #= this is my test string!
#swapcase()
outputString = 'ThIs Is My TeSt StRiNg!'
print(outputString.swapcase()) #= tHiS iS mY tEsT sTrInG!
#title() - first letter of word to upper, rest are lower
outputString = 'ThIs Is My TeSt StRiNg!'
print(outputString.title()) #= This Is My Test String!

#Boolean
#this is assigning variable temperature the integer 82
temperature = 82

#below is the if statement - indentation is very important
if temperature > 0 : #this is the header line that ends with a “:”
  print('temperature is positive')  #this is the indented block

#else if in python
grade = 85
if grade > 90:
  print("You got an A")
elif grade > 80:
  print("You got a B")
elif grade > 70:
  print("You got a C")
elif grade > 60:
  print("You got a D")
elif grade <= 60:
  print("You got a F")

#else in python
  grade = 15
if grade > 90:
  print("You got an A")
elif grade > 80:
  print("You got a B")
elif grade > 70:
  print("You got a C")
elif grade > 60:
  print("You got a D")
else:
  print("You got a F")

#not operator (!true)
num=1
if not (num == 1):
  print('True')
else:
  print('False')

# and and or syntax
if num1 == 0 and num2 == 0:
    print('A is False, B is False: True')
else:
    print('A is False, B is False: False')
 
if num1 == 0 and num2 == 2:
    print('A is False, B is True: True')
else:
    print('A is False, B is True: False')
 
if num1 == 1 and num2 == 0:
    print('A is True, B is False: True')
else:
    print('A is True, B is False: False')
 
if num1 == 1 and num2 == 2:
    print('A is True, B is True: True')
else:
    print('A is True, B is True: False')

#try except blocks to handle exceptions / errors in python
inp = input('Enter Fahrenheit Temperature:')
try:
  fahr = float(inp)
  cel = (fahr - 32.0) * 5.0 / 9.0
  print(cel)
except:
  print('Oops, you did not enter in a number. Please enter a number next time')

  #above will result in value error, which you are able to specify in your try except block
inp = input('Enter Fahrenheit Temperature:')
try:
  fahr = float(inp)
  cel = (fahr - 32.0) * 5.0 / 9.0
  print(cel)
except ValueError:
  print('Oops, you did not enter in a number. Please enter a number next time.')

  #setting a variable as an error
inp = input('Enter Fahrenheit Temperature:')
try:
  fahr = float(inp)
  cel = (fahr - 32.0) * 5.0 / 9.0
  print(cel)
except ValueError as error:
  print(error)
  print('Oops, you did not enter in a number. Please enter a number next time.')