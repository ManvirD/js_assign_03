What is a closure?


Closure is a feature in javascript which is being able to reference a specific instance of local variables 
in an enclosing function—is called closure. A function that “closes over” some local variables is called a closure. 
This behavior not only frees you from having to worry about lifetimes of variables but also 
allows for some creative use of function values. ( According to Eloquent JavaScript Book)

For example:

function multiplier(factor) 
{
  		return function(number) 
{
    			return number * factor;
  		};
}
var twice = multiplier(2);
console.log(twice(5));

In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable.
The last line then calls the value in this variable, causing the frozen code (return number * factor;) 
to be activated. It still has access to the factor variable from the multiplier call that created it, 
and in addition it gets access to the argument passed when unfreezing it, 5, through its number parameter.

Another definition , “In JavaScript, a closure is a function to which the variables of the surrounding context are bound by reference.”

Another Definition, “Closures are functions that refer to independent (free) 
variables (variables that are used locally, but defined in an enclosing scope). 
In other words, these functions 'remember' the environment in which they were created.”


Closures’ Rules and Side Effects

1. Creating Closures: A closure is created when an inner function is made accessible from outside of the function that created it. 
    This typically occurs when an outer function returns an inner function.  When this happens, 
    the inner function maintains a reference to the environment in which it was created.  
    This means that it remembers all of the variables (and their values) that were in scope at the time. 
    The following example shows how a closure is created and used.

    function add(value1) 
    {
        return function doAdd(value2) 
        {
            return value1 + value2;
        };
    }
    var increment = add(1);
    var foo = increment(2);
    
2. When to Use Closures:Closures can be used to accomplish many things. They are very 
    useful for things like configuring callback functions with parameters.

3. Working With Timers:Closures are useful when used in conjunction with the setTimeout() and setInterval() functions. 
    To be more specific, closures allow you to pass arguments to the callback functions of setTimeout() and setInterval().

4. Emulating Private Data: Many object-oriented languages support the concept of private member data. 
    However, JavaScript is not a pure object-oriented language and does not support private data. 
    But, it is possible to emulate private data using closures.
5. When Not to Use Closures: It is important to understand how closures work and when to use them. 
    It is equally important to understand when they are not the right tool for the job at hand. 
    Overusing closures can cause scripts to execute slowly and consume unnecessary memory. 
    And because closures are so simple to create, it is possible to misuse them without even knowing it.

    a. Creating closures within loops can have misleading results.
    b. Constructor functions are another common source of closure misuse.
    
Things to Remember
1. Closures contain a function and a reference to the environment in which the function was created.
2. A closure is formed when an outer function exposes an inner function.
3. Closures can be used to easily pass parameters to callback functions.
4. Private data can be emulated by using closures.  This is common in object-oriented programming and namespace design.
5. Closures should be not overused in constructors.  Adding to the prototype is a better idea.


REFRENCES:
Javascript Closure tutorial ( Closures Explained ) YouTube video:
https://www.youtube.com/watch?v=71AtaJpJHw0

http://javascriptissexy.com/understand-javascript-closures-with-ease/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
http://www.w3schools.com/js/js_function_closures.asp
