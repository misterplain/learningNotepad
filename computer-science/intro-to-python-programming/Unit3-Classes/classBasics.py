# Sequential code - a fancy way to state lines of code that do something in sequence.
# Conditional code - using if, else, and elif statements to check for certain conditions and act on those conditions when found (or not found).
# Repetitive code - Using for and while loops to repeat a process or move through a data collection type.
# Reusable code - Using either built-in or user-created functions to perform tasks that can be utilized either once or multiple times once they are created.

# Why use OOP?

# The structure and organization of the object-oriented programming model make code more reusable, more scalable, and more efficient. To do this, OOP structures programming into reusable pieces of code (classes) that we can create individual instances of objects from. The key to this challenge is to have a basic understanding of how objects are constructed and how they function, and most importantly, how we make use of the capabilities of objects that are provided to us by Python. This is an entry-level course in Python so we will touch on the basics of OOP, but know that there is much more capability to it.

#exampple of a class
class Dog:
  def __init__(self,name,breed,age,color):
    # init method is a special method in Python classes that is used to initialize the object. It is similar to a constructor in other programming languages
    # def __init__(self, <otherParameters>):
    self.name = name
    self.breed = breed
    self.age = age
    self.color = color

  def bark(self):
    print("Woof")

  def fetch(self):
    print(self.name," went to fetch.")

#instance of dog
# an instance of theSnipping Dog class
my_dog = Dog("Fluffy","Beagle",2,"Brown")

print(my_dog.name)  #Fluffy
print(my_dog.breed) #Beagle
print(my_dog.age)  #2
print(my_dog.color) #Brown

class PeopleCounter:
   x = 0
 
   def anotherOne(self) :
     self.x = self.x + 1
     print("So far",self.x) 

#self is basically a variable that represents the instance of the class (the current object using it). By convention, we use the word self only because it is almost an industry standard.

#instance of PeopleCounter
counter = PeopleCounter()
counter.anotherOne() #So far 1
counter.anotherOne() #So far 2
counter.anotherOne() #So far 3

#Having a class with attributes with default value(s) is only unique to that class. So for our example PeopleCounter class, the variable x is only unique to the PeopleCounter class. Let’s create a new class called User that we can use for an application/program that creates user login information. class names should be capitalized

class User:
  def __init__(self, uname, pword):
    self.username = uname
    self.password = pword

account = User('sophia','mypass') #creating an instance of the User class
print(account) #<__main__.User object at 0x7f8b1b3b3b50>
print(account.username) #sophia
print(account.password) #mypass
print(type(account)) #<class '__main__.User'>
del account #deleting the instance of the User class
print(account.password) #NameError: name 'account' is not defined
print(type(account)) #NameError: name 'account' is not defined

#expanding with imports

import datetime 
 
class User:
  def __init__(self, uname, pword):
    self.username = uname
    self.password = pword
 
    self.activeUser = True #new variable with True as default value
    self.numOfLogins = 0 #new variable with 0 as default value 
    self.dateJoined = datetime.date.today() #new variable using the datetime module
    #display number of logins
  def show_num_logins(self):
    return self.username + " logged in " + str(self.numOfLogins) + " times."
    #increase number of logins
  def logged_in(self):
    self.numOfLogins = self.numOfLogins + 1
  #logging into the user account
  def login(self, uname, pword):
    if (self.username == uname and self.password == pword):
      print("Login successful")
      self.logged_in()
    else:
      print("Incorrect username and password combination.")

account = User('sophia','mypass')
account.logged_in()
account.logged_in()
print(account.show_num_logins())
account.logged_in()
print(account.show_num_logins()) #sophia logged in 3 times.

##exmaple class to keep track of employee
import datetime 
class Employee:
  def __init__(self, fname, lname, empid, title, sal):
    self.firstname = fname
    self.lastname = lname
    self.employeeid = empid
    self.jobtitle = title
    self.salary = sal
 
    self.hiredate = datetime.date.today()
  
  #returns first name
  def get_firstname(self):
    return self.firstname
  
  #sets firstname if fname isn't an empty string
  def set_firstname(self,fname):
    if len(fname) > 0:
      self.firstname = fname
 
  #returns last name
  def get_lastname(self):
    return self.lastname
  
  #sets lastname if lname isn't an empty string
  def set_lastname(self,lname):
    if len(lname) > 0:
      self.lastname = lname
 
  #returns job title
  def get_jobtitle(self):
    return self.jobtitle
  
  #sets job title if job title isn't an empty string
  def set_jobtitle(self,title):
    if len(title) > 0:
      self.jobtitle = title
 
  #return employee id
  def get_employeeid(self):
    return "Employee ID: " + str(self.employeeid)
 
  #returns salary
  def get_salary(self):
    return "${:,.2f}".format(self.salary)
  
  #sets salary if salary isn't an empty string
  def set_salary(self,sal):
    if sal > 0:
      self.salary = sal
 
  #increase salary
  def increase_salary(self,percent):
    if percent > 0:
      self.set_salary(self.salary + self.salary * percent)
    else:
      print("Increase of salary must be greater than 0.")
 
sophia = Employee("Jack","Krichen", 1000, "Manager", 50000)
print(sophia.get_firstname()) #Jack
print(sophia.get_lastname()) #Krichen
print(sophia.get_employeeid()) #Employee ID: 1000
print(sophia.get_jobtitle()) #Manager
print(sophia.get_salary()) #$50,000.00
 
#increase of salary
sophia.increase_salary(-0.02)
print("After increase: " + sophia.get_salary()) #increase of salary must be greater than 0. $50,000.00