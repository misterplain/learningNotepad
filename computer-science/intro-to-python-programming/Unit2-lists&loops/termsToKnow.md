Data Collection Type
A data collection type is a collection of related values that are organized in a specific way so that they can be used effectively.

Element
An element is one of the values in a list (or other data collection type); elements can also be called items.

Index
The index (also known as position) is an integer value that indicates an element in a data collection type like a list.

List
The list is the simplest data collection type in Python and it can store multiple values in a single variable.

Mutable
Mutable means that we’re able to change items, add items, or delete items from a data collection type after it has been created.

.add()
Once a set is created, if we wanted to add an element to a set, we would use the .add() method. If the element already exists, the .add() method will not add the element to the set.

.discard()
The .discard() method removes a specified element from the data collection type object. The .discard() method will not raise an error if the element does not exist in the object.

.update()
Use the .update() method to add elements from another iterable object (data collection type) into the current iterable object. If an element exists in both objects, only one element will be updated to the combined data collection type.

.values()
The .values() method returns an object that contains the values of the dictionary as a list.

Dictionary
A dictionary is like a list, but more generalized. Dictionaries store data values in key:value pairs that are changeable, meaning that we can change, add, or remove elements after the dictionary has been created. Dictionaries cannot have two elements of the same key.

Sets
Sets are a data collection type that is used to store multiple elements in a single variable similar to the other data collection types. Set elements are unordered and unchangeable.

Tuple
A tuple is a data collection type that is ordered and unchangeable. This means that a tuple uses an indexing structure for its order and its elements can’t be changed after it has been defined.

dict()
The dict() function creates a new dictionary with no elements.

key:value pair
A key:value pair is used with the dictionary data collection type. Think of a dictionary as a mapping between the index positions (which are called the keys) and a set of values (elements). Each key maps to a value. The association of a key and a value (element) is called a key:value pair.

2D (Two Dimensions)
A nested list or other data collection type (iterable objects like lists, set, tuple, or dictionary) inside another iterable object is called two dimension or 2D for short. Any data collection type can contain other nested collection types as well in multiple dimensions.

.strip()
The .strip() method is a string method that removes any spaces before the first character or after the last character.

None
The type None is a return type that simply means that there is no data that’s returned.

for
In Python, definite iteration loops are generally called for loops. Python’s for loop is a data collection-based iteration (loops through iterable objects such lists, sets, tuples, dictionaries, and even strings).

range()
The range() function takes multiple parameters, the starting number (0 by default), and the ending number. This function will increment by 1 (by default) and then stop before a designated number. The function can take an optional third parameter to change the step value (increment or decrement by a specific value other than the default of 1).

Indefinite Iteration
A loop that is not specified in advance on how many times to be run; it repeats as long as a condition is met. In Python, indefinite loops are typically created using the while loop.

Definite Iteration
With definite iteration, the number of times the block of code runs should be explicitly defined when the loop actually starts. Typically, this is implemented using the for loop. The for loop has a specific start and endpoint.

while
The while loop is one of the most commonly used loops. It keeps going as long as some condition is true.

Body of the Loop
The body of the loop represents the indented block of code that should be executed repeatedly within the loop during each loop iteration.

Iteration Variable
The variable that changes each time the loop executes and controls when the loop finishes.

Infinite Loop
An infinite loop is a loop in which the terminating condition is never satisfied or for which there is no terminating condition.

break
This is a reserved keyword that creates a break statement for loops. The break statement can immediately terminate a loop’s execution. When this occurs, the program goes to the first statement/line of code after the loop.

continue
This is a reserved keyword that creates a continue statement for loops. The continue statement will end the current loop iteration, meaning that the execution jumps back to the top of the loop. The expression is then evaluated to determine if the loop will execute again or end there.

end
The end parameter is a function of the print() function. Using the end parameter, we are able to change the default operation of the print() function, namely to prevent the print() function from creating a new line.

Debugging by Bisection
Debugging by bisection is the practice of breaking your program code into “sections” for debugging and validation purposes. This will help speed up the debugging process since you may be able to find issues within a section rather than the full program.

Function Definition
A function definition specifies the name of a new function and the sequence of statements that execute when the function is called.

def
The reserved keyword def indicates that you are defining a function.

Return Statement
The return statement is an important part of functions and methods as it allows the functions and methods to return Python objects back to the code that called them. The return statement is the actual line that starts with the word "return".

Return Value
These objects that are being returned from the return statement are called the function or method’s return value.

divmod()
The divmod() function takes in two numbers as arguments and returns two numbers in a tuple.

return
The reserved keyword return is used to exit a function and return a value, either an optional return value we specify or None if no value is specified.

Encapsulation
Encapsulation is an important part of programming where we try to bundle data and functions that belong to a specific topic into a single unit. We do this to restrict direct access to some parts of the function.

Recursion
With recursion, we have a function call itself with a base case to exit the recursive cycle.

Base Case
The base case is where the program no longer calls itself recursively and allows a recursive function to end.

isinstance()
The isinstance() function takes in a variable and the data type as parameters and returns if that variable is of that datatype or not.

raise
The raise statement allows the programmer to force a specified exception to occur when it is called.

Flow of Execution
The order in which statements are executed is called the flow of execution. Execution always begins at the first statement of the program. Statements are executed one at a time, in order from top to bottom.

.format() method
With the .format() method, any character value(s) within curly brackets are replaced with the objects that are passed to the .format() method.

