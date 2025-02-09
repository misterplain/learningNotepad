#the following code creates the board
board = [ ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"] ]
 
print(board[0])
print(board[1])
print(board[2])
 
#this is player X’s first move
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
board[row][col] = "X"
print(board[0])
print(board[1])
print(board[2])
 
#this is player O’s first move
col = int(input("O player, select a column 1-3: "))
row = int(input("O player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "O"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player X’s second move
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "X"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player O’s second move
col = int(input("O player, select a column 1-3: "))
row = int(input("O player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "O"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player X’s third move
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "X"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player O’s third move
col = int(input("O player, select a column 1-3: "))
row = int(input("O player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "O"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player X’s fourth move
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "X"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player O’s fourth move
col = int(input("O player, select a column 1-3: "))
row = int(input("O player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "O"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])
 
#this is player X’s fifth move
col = int(input("X player, select a column 1-3: "))
row = int(input("X player, select a row 1-3: "))
col -= 1
row -= 1
 
if board[row][col] == '-':
  board[row][col] = "X"
else:
  print("Oops, that spot was already taken. ")
print(board[0])
print(board[1])
print(board[2])


########REVICED VERSION 1 WITH FOR LOOP#########

board = [ ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"] ]
 
print(board[0])
print(board[1])
print(board[2])
col=0 #added on Change 2
row=0 #added on Change 2
playerTurn = "X" #added on Change 2

for counter in range(1,10): #updated on Change 3
    col = int(input(playerTurn + " player, select a column 1-3: ")) #updated on Change  5
    row = int(input(playerTurn + " player, select a row 1-3: ")) #updated on Change 5
    col -= 1
    row -= 1
 
    if board[row][col] == '-':
      board[row][col] = playerTurn #updated on Change 6
    else:
      print("Oops, that spot was already taken. ")
    print(board[0])
    print(board[1])
    print(board[2])

#following was added in Change 8
    if playerTurn =="X":
      playerTurn="O"
    else:
      playerTurn="X"

############ REVISED VERSION #############


board = [ ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"] ]
 
print(board[0])
print(board[1])
print(board[2])
col=0
row=0
playerTurn = "X"

for counter in range(1,10):

    validMove = False #setting the validMove variable to False
    while (validMove == False): #while loop checking the validMove variable
      col=0
      row=0
      while (col < 1 or col > 3):
        col = int(input(playerTurn + " player, select a column 1-3: "))
        if (col < 1 or col > 3):
          print("The column must be between 1 and 3.")
      while (row < 1 or row > 3):
        row = int(input(playerTurn + " player, select a row 1-3: "))
        if (row < 1 or row > 3):
          print("The row must be between 1 and 3.")
      col -= 1
      row -= 1
      if board[row][col] == '-':
        board[row][col] = playerTurn
        validMove=True; #setting validMove to True to exit loop
      else:
        print("Oops, that spot was already taken. Please select another spot.") #AS THIS HAS NOT BEEN UPDATED, IT WILL NOT PRINT THE MESSAGE, validMove will remain False and the loop will continue within the same player's turn
 
    print(board[0])
    print(board[1])
    print(board[2])
 
    if playerTurn =="X":
      playerTurn="O"
    else:
      playerTurn="X"

######### FINAL VERSION #########
board = [ ["-", "-", "-"],
          ["-", "-", "-"],
          ["-", "-", "-"] ]
 
#printing the board
def printBoard(board):
    print("\n")
    print("\t     |     |")
    print("\t  {}  |  {}  |  {}".format(board[0][0], board[0][1], board[0][2])) #takes these three values and inputs them into the curly braces, string literals allow for better formatting
    print('\t_____|_____|_____')
 
    print("\t     |     |")
    print("\t  {}  |  {}  |  {}".format(board[1][0], board[1][1], board[1][2]))
    print('\t_____|_____|_____')
 
    print("\t     |     |")
    print("\t  {}  |  {}  |  {}".format(board[2][0], board[2][1], board[2][2]))
    print("\t     |     |")
    print("\n")

col_or_row = 'column'
print("The {} must be between 1 and 3.".format(col_or_row)) #the f is not necessary before the string literal because the string literal is not being formatted


 
def checkWinner(currPlayer, board):
  #Checking for the winner in the row
  for row in range(0,3):
    if board[row][0]==board[row][1]==board[row][2] and board[row][0] != '-': #can chain the equality operators together to check if they are all equal
      if board[row][0]==currPlayer:
        print("{} is winner".format(currPlayer))
        return True
  #used to check the winner in column
  for col in range(0,3):
    if board[0][col]==board[1][col]==board[2][col] and board[0][col] != '-':
      if board[0][col]==currPlayer:
        print("{} is winner".format(currPlayer))
        return True
  #used to check winner in one diagonal
  if board[0][0]==board[1][1]==board[2][2] and board[0][0] !='-':
    if board[0][0]==currPlayer:
      print("{} is winner".format(currPlayer))
      return True
  #used to check winner in another diagonal
  if board[0][2]==board[1][1]==board[2][0] and board[0][2]!='-':
    if board[0][2]==currPlayer:
      print("{} is winner".format(currPlayer))
      return True
  return False
 
printBoard(board)
col=0
row=0
playerTurn = "X"
 
for counter in range(1,10):
    validMove = False
    while (validMove == False):
      col=0
      row=0
      while (col < 1 or col > 3):
        col = int(input(playerTurn + " player, select a column 1-3: "))
        if (col < 1 or col > 3):
          print("The column must be between 1 and 3.")
      while (row < 1 or row > 3):
        row = int(input(playerTurn + " player, select a row 1-3: "))
        if (row < 1 or row > 3):
          print("The row must be between 1 and 3.")
      col -= 1
      row -= 1
      if board[row][col] == '-':
        board[row][col] = playerTurn
        validMove=True;
      else:
        print("Oops, that spot was already taken. Please select another spot.")
        validMove=False
        row=0
        col=0
 
    printBoard(board)
    if (checkWinner(playerTurn,board)):
      break
 
    if playerTurn =="X":
      playerTurn="O"
    else:
      playerTurn="X"
 
# Here we are testing out a complete game:



#           |     |
#        -  |  -  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#           |     |
   
# X player, select a column 1-3:  1
# X player, select a row 1-3:  1

#           |     |
#        X  |  -  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#           |     |
   
# O player, select a column 1-3:  1
# O player, select a row 1-3:  2

#           |     |
#        X  |  -  |  -
#      _____|_____|_____
#           |     |
#        O  |  -  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#           |     |
   
   

# X player, select a column 1-3:  2
# X player, select a row 1-3:  2

#           |     |
#        X  |  -  |  -
#      _____|_____|_____
#           |     |
#        O  |  X  |  -
#      _____|_____|_____
#           |     |
#        -  |  -  |  -
#           |     |
   
# O player, select a column 1-3:  1
# O player, select a row 1-3:  3

#           |     |
#        X  |  -  |  -
#      _____|_____|_____
#           |     |
#        O  |  X  |  -
#      _____|_____|_____
#           |     |
#        O  |  -  |  -
#           |     |
   
# X player, select a column 1-3:  3
# X player, select a row 1-3:  3

#           |     |
#        X  |  -  |  -
#      _____|_____|_____
#           |     |
#        O  |  X  |  -
#      _____|_____|_____
#           |     |
#        O  |  -  |  X
#           |     |
   
# X is winner