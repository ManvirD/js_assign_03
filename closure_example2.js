function celebrityName(firstName) 
{
    var nameIntro = "This celebrity is ";  // this inner function has access to the outer function's variables, including the parameter
    function lastName (theLastName) 
    {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var skName = celebrityName ("Salman");  // At this juncture, the celebrityName outer function has returned.
                                        // The closure (lastName) is called here after the outer function has returned above
                                        // Yet, the closure still has access to the outer function's variables and parameter
console.log(skName ("Khan"));// This celebrity is Salman Khan