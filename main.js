/**
 * Created by raluca on 7/14/15.
 */

    // Code here

    //To ensure that their code runs after the browser finishes loading the document, many JavaScript programmers
    // wrap their code in an onload function
window.onload = function() {
    console.log("Welcome");
};

// To run code as soon as the document is ready to be manipulated, jQuery has a statement known as the ready event
$( document).ready(function() {
    // you can add a click handler to the link
    $( "a" ).click(function( event ) {
        event.preventDefault();
        alert( "As you can see, the link is no longer took you to jquery.com" );
    });
});

// add .addClass() call to the script
//$( 'a' ).addClass( "test" );

// Special Effects
$( "a" ).click(function( event ) {
    event.preventDefault();
    $( this ).hide( "slow" );
});

// Callbacks and functions
// Callback without Arguments
// $.get( "myhtmlpage.html", mycallBack );
// When $.get() finishes getting the page myhtmlpage.html, it executes the myCallBack() function.

/* Callback with Arguments
 * To defer executing myCallBack() with its parameters, you can use an anonymous function as a wrapper.
 * Note the use of function() {. The anonymous function does exactly one thing: calls myCallBack(),
 * with the values of param1 and param2.
 *When $.get() finishes getting the page myhtmlpage.html, it executes the anonymous function,
 * which executes myCallBack( param1, param2 ).
 * $.get( "myhtmlpage.html", function() {
 *   myCallBack( param1, param2 );
 * });
 */


