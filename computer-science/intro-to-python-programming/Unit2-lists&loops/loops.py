# while loop
while <expression>:
  <statement(s)>
#example
x = 0
while x < 5:
  print(x)
  x += 1
#example 2
myNum = 5 
while myNum > 0:
     myNum = myNum - 1
     print(myNum)
print("Our loop is done")

  #for loop
for <variable> in <iterable>:
    <statement(s)>
#example
for i in range(5):
  print(i)
#example 2
productList = ("card", "paper", "glue", "pencil")
for product in productList:
  print(product)

  #range, range(start, stop, step)
for counter in range(0,5): #= 0,1,2,3,4
    print("Counter is set to:",counter)

for counter in range(5): # default start is 0
   print("Counter is set to:",counter) #= 0,1,2,3,4 (does not include 5 as this is the stopping point)

for counter in range(1,5):
   print("Counter is set to:",counter) #= 1,2,3,4

for counter in range(-2,3):
   print("Counter is set to:",counter) #= -2,-1,0,1,2

for counter in range(10,1,-2):
    print("Counter is set to:",counter) #= 10,8,6,4,2

#iterate through a string
for char in "Python":
   print(char)

  ##WHILE

textEntered = ""
stringBuilder = ""
while textEntered != "quit":
  textEntered = input("Enter in a string, enter quit to exit the loop:")
  if textEntered != "quit":
    stringBuilder += textEntered + " "
print(stringBuilder)  #prints out all the strings entered

#break - immediately terminate a loop entirely and disregard the further execution of the loop, program then goes to the first line after the loop
myNumber = 6
while myNumber > 0:
    myNumber = myNumber - 1
    if myNumber == 2:
        break
    print(myNumber)
print('Blastoff!') #prints 5,4,3,Blastoff!

#continue - immediately terminate the current iteration of a loop and proceed to the next iteration of the loop
myNumber = 6
while myNumber > 0:
    myNumber = myNumber - 1
    if myNumber == 2:
        continue
    print(myNumber)
print('Blastoff!') #prints 5,4,3,1,0,Blastoff!

# whilte else - The <additional statements> that we have in the else statement will execute when the while loop terminates as long as it finishes when the expression’s condition becomes False. - COMPARED TO WHEN THE LOOP IS BROKEN OUT OF USING A BREAK STATEMENT
while <expression>:
  <statement(s)>
else:
  <additional statements>

#example
myNumber = 6
while myNumber > 0:
   myNumber = myNumber - 1
   if myNumber == 2:
       break
   print(myNumber)
else:
 print('Blastoff!') #prints 5,4,3, BUT NOT Blastoff! as the loop was broken out of using a break statement

 ### for loop and it's purposes

 # counting loop - used to iterate a specific number of times
countItems = 0
for itervar in [3, 41, 12, 9, 74, 15]:
    countItems = countItems + 1
print('Count: ', countItems) #prints 6

# computer totals
totalItems = 0
for itervar in [3, 41, 12, 9, 74, 15]:
    totalItems = totalItems + itervar
print('Total: ', totalItems) #prints 154

# find largest value
largestValue = None #special constant we can use to indicate that the variable is empty, 
print('Before:', largestValue)
for itervar in [3, 41, 12, 9, 74, 15]:
    if largestValue is None or itervar > largestValue :
        largestValue = itervar
    print('Loop:', itervar, largestValue)
print('Largest:', largestValue)

#find the smallest value
smallestValue = None
print('Before:', smallestValue)
for itervar in [3, 41, 12, 9, 74, 15]:
    if smallestValue is None or itervar < smallestValue:
        smallestValue = itervar
    print('Loop:', itervar, smallestValue)
print('Smallest:', smallestValue)

#finding a number
numberToFind = 12
for itervar in [3, 41, 12, 9, 74, 15]:
   if itervar == numberToFind:
       print('Number found!')
       break
else:
 print('Number not found.')

 #nxted loops 
 for <variable> in <iterable>:
  for <variable> in <iterable>:
    <statement(s)>
  <statement(s)>
 
 #example, multiples
 multiples = []
for outer in range(1,5):
  multiples.append([])
  for inner in range(1,6):
    multiples[outer-1].append( outer * inner)
print(multiples) #prints [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20]]

#end is a fucntion of the print statement that allows us to specify what we want to print at the end of the print statement
multiples = []
for outer in range(1,5):
  multiples.append([])
  for inner in range(1,6):
    multiples[outer-1].append( outer * inner)
print(multiples)

for outerList in multiples:
  for innerValue in outerList:
    print (innerValue," ",end ='') #changes default end of line to a space instead of a new line
  print() #prints the multiples in a grid formatn, this will add a new line after each row of multiples

## INFINITE LOOPS

n = 10
while n < 20:
    print(n, end=' ')
    n = n - 1
print('Done!') #WILL RUN FOREVER AS THE CONDITION WILL ALWAYS BE TRUE

while True:
    line = input('Enter input or type done when finished > ')
    if line == 'done':
        break
    print(line)
print('Done!') #WILL RUN FOREVER AS THE CONDITION WILL ALWAYS BE TRUE, until user types done 

#example3
while True:
    line = input('Enter input (# tag will not print). Type done when finished > ')
    if line[0] == '#':
        continue
    if line == 'done':
        break
    print(line)
print('Done!')