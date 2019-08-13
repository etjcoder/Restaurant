## Initial Instructions
Today you will be building a Node / Express based web applications for handling reservation requests.
Your application will be made up of two parts: 
1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 
2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.
Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:
* Servers
* Routing
* APIs
* AJAX (GET and POST Requests)
You should be referencing the code from the previous Star Wars application.
Feel encouraged to use the following application as a reference: <http://hot-restaurant-fsf.herokuapp.com/>
Note: We know this is a hard activity. We know you aren't yet comfortable with Node or Express. But push yourself. The best way to learn is to push through the discomfort and BUILD! Ask for help when you need it. We're here to help you through the process.
---------------------


Main Page

Server handles requests, front end makes request
    -Reference OMDB code where we're searching movie API's, but make that our own API


Front end
    First page
        Have a Jumbotron with "Hot restaurant" and 2 buttons in cards
            -First card is to reserve a seat
            -Second card is to view current reservations/waiting lists
        There will also be two links in the bottom left L Table API and Wait List
    Second page
        *Reservation Page*
            -This will have a jumbotron that tells you its the reservation page
            -Then there will also be a big card with the form data to put in this will include: 
                -Name of the Customer
                -Times desired
                -Number of people in reservation
                -Code Name
                -Special Notes
            -Then there will also be two links in the bottom left: Table API / Wait List
    Third page
        *View reservation page*
            -This will have a jumbotron that tells you its the show list page
            -Then there will be a card below that that is filled out using API data that will show the users who are reserved (5 max)
            -Then there will be a card below that which will show the waiting list available, These will be for anyone further down in the array
            -Then there will be the Table API and wait List

Back End 
    Store, update and relay reservation data
    * Servers
    * Routing
    * APIs
    * AJAX (GET and POST Requests)

    Apparently we'll have to build our own API so the first thing I have to do is find examples in the past where we've done that.
    
    When the user submits a certain bit of data we're going to use a .POST request to send that data into an array of objects. (Possibly a constructor?) This array will take the place of our server.

    This array of objects needs to be tracking the index and if the length ever gets over 4 it needs to not append to itself but rather post that information to the wait list array. 

    Then we will have a function that will take data from this array of objects and then send that over to our html to show up on the screen the cards showing the names of the people who have reservations or are on the wait list (I wonder if we need to link the two API's so that when there isn't a count of 5 in the reservation array, it pops the first person in the waiting list array into the reservation array. This would be possible with mySQL possibly)

    *Optional features
        *Removing someone from the reservation list
        *Setting certain days that track different counts
        *Clearing to test

    