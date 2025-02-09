## example of built in function where we can see the parameters
type(32) 
print(type(32)) # <class 'int'>

#creating a new function using the def keyword
def print_stuff():
    print("#######################")
    print('Using for comment block')
    print("#######################")

print(type(print_stuff)) # <class 'function'>
print_stuff() #here is where we are calling our print_stuff() function

# built in programs in python
# https://docs.python.org/3/library/functions.html


#To define a function a programmer has to create a name for it and define statement(s) that perform a task.

import math
print(math.sin(0)) # 0.0 0 sin of 0
print(math.pow(3,3)) # 27.0 3^3

# adding an argument
def print_stuff(comment):
    print("#######################")
    print(comment)
    print("#######################")

print_stuff("My comment section") #here is where we are calling our print_stuff() function

# variable as argument
def print_stuff(comment):
    print("#######################")
    print(comment)
    print("#######################")

myVar = "My comment section"
print_stuff(myVar)

# multiple arguments
def display_add_two_num(val1, val2):
    print(val1,"+",val2, "=", val1+val2)

display_add_two_num(2, 4)
display_add_two_num(3, 8)

##IMPLICIT VS EXPLICIT RETURN 
def print_stuff():
    print("#######################")
    print('Using for comment block')
    print("#######################")

something = print_stuff();
print(something)
print(type(something)) # <class 'NoneType'>

def return_one_hundred():
    return 100
    
something = return_one_hundred();
print(something)
print(type(something)) # <class 'int'> because we are returning a value


#exampe
def calculate_average(numbers):
  return sum(numbers)/len(numbers)

print(calculate_average([10, 20, 30, 40])) # 25.0

#return multiple values
def calculate_multiple(numbers):
  return sum(numbers), len(numbers), sum(numbers)/len(numbers) 

print(calculate_multiple([10, 20, 30, 40])) # (100, 4, 25.0) - separatede by commas, returned as tuple

#divmod, takes the first divided by the second, the first returned value is the quotient, the second is the remainder
print(divmod(21, 5)) # (4, 1) - returns a tuple
print(divmod(15, 5)) # (3, 0) - returns a tuple

# mutliple return values
def calculate_absolute(number):
  if number > 0:
    return number
  elif number < 0:
    return -number #this is taking a negative number and turning it into a positive number
  else:
    return 0

print(calculate_absolute(-5))
print(calculate_absolute(5))
print(calculate_absolute(0))

#nested functions

def outer_func():
  def inner_func():
    print("Outputting from the inner function")
  inner_func() #call to the inner function

outer_func() #call to the outer function

##recursive functions need to have a base case to know when to ext the program
def countdown(n):
  print(n)
  if n == 0: #this is our base case, when n is equal to 0
    return             
  else:
    countdown(n - 1)   

countdown(10) #this will count down from 10 to 0

#factorial example
def factorial(number):
  if not isinstance(number, int): #checking if the number is an integer
    raise TypeError("Sorry. number must be an integer.") #if it is not an integer, raise an error, allows programmer to force a specified exception to occur
  if number < 0:
     raise ValueError("Sorry. number must be zero or positive.")
  def inner_factorial(number): #nested function for calculation of factorial 
     if number <= 1:
        return 1
     return number * inner_factorial(number - 1)
  return inner_factorial(number)

print(factorial(4)) # 24

#debugging functions
##string literatls in python - uses the f string to format the string, the price is formatted to 2 decimal places with the :.2f
def priceInformation(qty, item, price):
    print(f'{qty} {item} cost ${price:.2f}')

priceInformation(12, 'strawberries', 5.99) # 12 strawberries cost $5.99 - if i swapped the location of the price and string it'd results in a valueerror

# variables and scope
#variables that are defined inside the body of a function have local scope, and those deined outside of a fucntion body have global scope

def outer1(i):
  j = i + 1
  def outer2():
    k = j + 1
    def inner1():
      m = k + 1
      def inner2():
        n = m + 1
        return n
      m = inner2()
      return m
    k = inner1()
    return k
  j = outer2()
  return j
  
print ("outer1(1) = ", outer1(1))
# inner2 scope
# n, m, k, j, i - The scope of inner2 extends to all nested function variables included in the outer1 function.




