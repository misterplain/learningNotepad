
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