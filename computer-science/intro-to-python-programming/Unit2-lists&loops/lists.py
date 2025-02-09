# ordered, mutable, can contain different data types, accessed by index, are iteratable
petsList = ['dog', 'cat', 'fish']
petsList[1] = 'kitten'

#can access via end of list
print(petsList[-1]) #= fish

#manipulating lists
#in operator
print('dog' in petsList) #= True

# = operator
petsList2 = petsList
petsList2[1] = 'puppy'
print(petsList) #= ['dog', 'puppy', 'fish']

# + operator
petsList3 = petsList + ['parrot']
print(petsList3) #= ['dog', 'puppy', 'fish', 'parrot']

# * operator
petsList4 = petsList * 2
print(petsList4) #= ['dog', 'puppy', 'fish', 'dog', 'puppy', 'fish']

# slice operator - listname[a:b] where a is the starting index and b is the ending index (but will not include b, so really it ends at b-1 (inclusive)
# if a is not provided, it will start at the beginning of the list)
# if b is not provided, it will go to the end of the list
# if neither a nor b are provided, it will return the entire list as a copy 
print(petsList[0:2]) #= ['dog', 'puppy']
print(petsList[:2]) #= ['dog', 'puppy']
print(petsList[1:]) #= ['puppy', 'fish']
print(petsList[:]) #= ['dog', 'puppy', 'fish']
# use to update and replace multiple values at once
petsList[0:2] = ['parrot', 'parrot']
print(petsList) #= ['parrot', 'parrot', 'fish']

#append method
petsList.append('parrot')
print(petsList) #= ['dog', 'puppy', 'fish', 'parrot']

# insert method - first argument relates to index where we'll inseert
petsList.insert(1, 'parrot')
print(petsList) #= ['dog', 'parrot', 'puppy', 'fish', 'parrot']

#extend method
petsList.extend(['parrot', 'parrot'])
print(petsList) #= ['dog', 'parrot', 'puppy', 'fish', 'parrot', 'parrot', 'parrot']
# another example
firstPetsList = ['dog', 'cat', 'fish']
secondPetsList = ['rabbit','hamster']
firstPetsList.extend(secondPetsList)
print(firstPetsList) #= ['dog', 'cat', 'fish', 'rabbit', 'hamster']

# sort method
petsList.sort()
print(petsList) #= ['dog', 'fish', 'parrot', 'parrot', 'parrot', 'puppy']

# pop method
print(petsList.pop()) #= puppy
print(petsList) #= ['dog', 'fish', 'parrot', 'parrot', 'parrot']
#remove a specific index
petsList = ['dog', 'cat', 'fish', 'rabbit','hamster','bird']
removedPet = petsList.pop(3)
print("Remaining: ", petsList)
print("Removed: ", removedPet)

# del method - know the index
del petsList[1]
print(petsList) #= ['dog', 'parrot', 'parrot', 'parrot']

# remove method - know the element but not necessarily the index
petsList.remove('parrot')
print(petsList) #= ['dog', 'parrot', 'parrot']

###################Sets Tuples and Dictionaries###################

# lists
myList = [1, 2, 3, 4, 5] # mutable yes, ordered yes, can contain different data types yes, accessed by index yes, iterable yes

# sets - Sets do not allow duplicates and are the fastest for checking if an element is included. If you need duplicates, use lists or tuples. 
# Because there is not a defined order, those set elements can appear in a different order every time we use them and cannot be referenced by an index as we did with a list. 
# We cannot change the items in the set, however we can add new elements to the set, duplicate values not allowed. 
# can be a mix of different data types 
mySet = {1, 2, 3, 4, 5} # mutable no, elemets within a set are immutable however we can add and remove elements from a set, ordered no
#add method with sets
mySet.add(6) #= {1, 2, 3, 4, 5, 6}
#update method
mySet.update([7, 8, 9]) #= {1, 2, 3, 4, 5, 6, 7, 8, 9}
myPets = {"dog","cat","rabbit"}
yourPets = {"lion","tiger","bear"}
myPets.update(yourPets)
print(myPets)
#remove
mySet.remove(1) #= {2, 3, 4, 5, 6, 7, 8, 9} - removing something not in list would results in KeyError
#discard
mySet.discard(2) #= {3, 4, 5, 6, 7, 8, 9} - this will not throw an error if the element is not in the set


# tuples - Tuples do not allow any change to elements, so if you believe you have a program that will never, ever need elements to change, a tuple may be the way to go.
#unchangable but ordered
# can use different data types
#can access values via their index
myTuple = (1, 2, 3, 4, 5) # mutable no, ordered yes
myTuple = ("apple", "banana", "cherry")
myTuple[1] = "blackcurrant" #= TypeError: 'tuple' object does not support item assignment
# one element tuple
myTuple = ("apple",) #= ('apple',) - note the comma, otherwise python won't recognize it as a tuple, error will results as <class 'str'>, if the comma is included the type will result as <class 'tuple'>

#workaround to change a tuple to a list to add something and convert it back to a list
myTuple = ("ice cream","frozen yogurt","sorbet")
myList = list(myTuple)
myList[1] = "gelato"
myTuple = tuple(myList)
print(myTuple)

# dictionaries
#Instead of index position, dictionaries use keys so the key canine’s value is dog, the key feline’s value is cat, and the key primate’s value is monkey.
myDict = {'apple': 'red', 'pear': 'green', 'banana': 'yellow'} # mutable yes, ordered no, can contain different data types yes, accessed by key yes, iterable yes
eng2span = dict()
print(eng2span)
eng2span['one'] = 'uno' #= {'one': 'uno’}
#lookup values
eng2span = {'one': 'uno', 'two': 'dos', 'three': 'tres'}
print(eng2span['two']) #= dos
print(eng2span['four']) #= KeyError: 'four'
#len function
myPets = {'caine': 'dog', 'feline': 'cat', 'primate' : 'monkey'}
print (len(myPets)) #= 3
# using the in function to turn a dictionary into a list, otherwise the in function only looks at the key values
eng2span = {'one': 'uno', 'two': 'dos', 'three': 'tres'}
myVals = list(eng2span.values())
print ('uno' in myVals) # true


# two dimensional lists
multiplesList = [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20]]
print(multiplesList) # this is a 4 x 5 matrix, first is number of lists, second is number of elements in each list

# double square bracket notation
multiplesList = [[1, 2, 3, 4, 5], 
[2, 4, 6, 8, 10], 
[3, 6, 9, 12, 15], 
[4, 8, 12, 16, 20]]
print(multiplesList[0][2])

######### DEBUGGING LISTS #########

#  a copy of a list is not a copy of the list, it is a reference to the list, so any action done on that list will also be done on the original list
# list methods returns None, so if you try to assign a list method to a variable, it will return None, but string methods will return the modified string, so you cannot use list method WITH operators
myList = ["ice cream","frozen yogurt","sorbet"]
myList = myList.sort()
print(myList) #= None

myList = ["ice cream","frozen yogurt","sorbet"]
myList.sort()
print(myList) #= ['frozen yogurt', 'ice cream', 'sorbet']

#make a copy so that the original list is not changed
myList = ["ice cream","frozen yogurt","sorbet"]
newList = myList[:]
newList.sort()
print(myList) #= ['ice cream', 'frozen yogurt', 'sorbet']
print(newList) #= ['frozen yogurt', 'ice cream', 'sorbet']

# tic tac toe
board = [ ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"] ]
 
print(board[0])
print(board[1])
print(board[2])
 
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
board[row][col] = "X"
print(board[0])
print(board[1])
print(board[2])

# check
if board[row][col] == '-':
  board[row][col] = "O"
else:
  print("Oops, that spot was already taken. ")
  