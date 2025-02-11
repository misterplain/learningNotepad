
#base class
import datetime 
 
class Member:
  expiry_days = 365
  def __init__(self, first, last):
    self.first_name = first
    self.last_name = last
 
    self.expiry_date = datetime.date.today() + datetime.timedelta(days = self.expiry_days)
 
#Subclass for us to use for administrators
class Admin(Member):
  pass # pass is a placeholder that does nothing, telling python that we are not adding any new methods or attributes to the class
 
#Subclass for us to use for normal users
class User(Member):
  pass
 
TestMember = Member('Sophia','Python')
print(TestMember.first_name) #Sophia
print(TestMember.last_name) #Python
print(TestMember.expiry_date) #today's date + 365 days
 
TestAdmin = Admin('root','admin') #root admin
print(TestAdmin.first_name) #root
print(TestAdmin.last_name) #admin
print(TestAdmin.expiry_date) #today's date + 365 days
 
TestUser = User('Artic','Smith') #Artic Smith
print(TestUser.first_name) #Artic
print(TestUser.last_name) #Smith
print(TestUser.expiry_date) #today's date + 365 days

#customizing the subclass

def __init__(self, first, last, secret): #adding a new attribute to the subclass
    super().__init__(first,last) #calling the superclass's __init__ method

#Subclass for us to use for administrators
class Admin(Member):
  expiry_days = 365 * 100
 
  def __init__(self, first, last, secret): #adding a new attribute to the subclass
    super().__init__(first,last) #calling the superclass's __init__ method
    self.secret_code = secret #setting the new attribute

## testing how we do this
import datetime 
 
class Member:
  expiry_days = 365
  def __init__(self, first, last):
    self.first_name = first
    self.last_name = last
 
    self.expiry_date = datetime.date.today() + datetime.timedelta(days = self.expiry_days)

    def show_expiry(self):
        return f'{self.first_name} {self.last_name} expires on {self.expiry_date}'
 
#Subclass for us to use for administrators
class Admin(Member):
  expiry_days = 365 * 100
 
  def __init__(self, first, last, secret):
    super().__init__(first,last)
    self.secret_code = secret
 
#Subclass for us to use for normal users
class User(Member):
  pass
 
TestAdmin = Admin('root','admin','ABRACADABRA')
print(TestAdmin.first_name) #root
print(TestAdmin.last_name) #admin
print(TestAdmin.secret_code) #ABRACADABRA
print(TestAdmin.expiry_date) #today's date + 36500 days
print(TestAdmin.show_expiry()) #root admin expires on todays date + 36500 days
 
print("--------")
 
TestUser = User('Artic','Smith') #Artic Smith
print(TestUser.first_name) #Artic
print(TestUser.last_name) #Smith
print(TestUser.expiry_date) #today's date + 365 days
print(TestUser.show_expiry()) #Artic Smith expires on todays date + 365 days

total = 0; 
 
def sum(arg1,arg2):
   total = arg1 + arg2; 
   print ("Local total: ",total)
   return total;
 
sum(10,20); #Local total:  30
print ("Global total : ", total) #Global total :  0

#changing a global variable
#global scope
first_name = 'Global'
 
def display_name():
  #local scope
  last_name = 'Local'
 
  #changing global name
  first_name = 'ChangeMe'
  return f'{first_name} is a global variable. {last_name} is a local variable.'
 
print(display_name()) #ChangeMe is a global variable. Local is a local variable.
print(first_name) #Global - the global variable was not changed

#using the global keyword
#global scope
first_name = 'Global'
 
def display_name():
  #local scope
  last_name = 'Local'
 
  #changing global name
  global first_name
  first_name = 'ChangeMe'
  return f'{first_name} is a global variable. {last_name} is a local variable.'
 
print(display_name()) #ChangeMe is a global variable. Local is a local variable.
print(first_name) #ChangeMe

#using the help() function

import datetime 
 
class Member:
  expiry_days = 365
  def __init__(self, first, last):
    self.first_name = first
    self.last_name = last
 
    self.expiry_date = datetime.date.today() + datetime.timedelta(days = self.expiry_days)
 
  def show_expiry(self):
    return f'{self.first_name} {self.last_name} expires on {self.expiry_date}'
 
  def show_status(self):
    return f'{self.first_name} {self.last_name} is a Member'
 
#Subclass for us to use for administrators
class Admin(Member):
  expiry_days = 365 * 100
 
  def __init__(self, first, last, secret):
    super().__init__(first,last)
    self.secret_code = secret
  def show_status(self):
    return f'{self.first_name} {self.last_name} is an Admin'
 
#Subclass for us to use for normal users
class User(Member):
  def show_status(self):
    return f'{self.first_name} {self.last_name} is a User'
  
help(Member) #displays help for the Member class
help(Admin) #displays help for the Admin class - There is a new section that we’ll see now called the “Method resolution order”. This section is quite important. If a class has a method that exists in multiple classes like our show_status() method, the method resolution order tells us which classes will be looked at first. In this case, the Admin class will be looked at first, then the Member class, and then the built-in object class.
##orderof operations |  
# Method resolution order:
#  |      Admin
#  |      Member
#  |      builtins.object
print(Admin.__dict__) #displays all the attributes and methods of the Admin class
# would return something like this
#{'__module__': '__main__', 'expiry_days': 36500, '__init__': <function Admin.__init__ at 0x7fc2e3ab1b80>, 'show_status': <function Admin.show_status at 0x7fc2e3ab1280>, '__doc__': None}