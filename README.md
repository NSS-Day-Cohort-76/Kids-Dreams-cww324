# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > the module Kids.js contains the code.  The Kids() function loops through the children database and prints them out on the webpage and adds HTML elements to organize data for the event listener.  

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The findCelebrityMatch() function being inside of the for loop makes sure that the function is invoked for each individual kid so you can determine the correct pairing for the kids celebrityID with the celebritys ID, since kids could have different celebrity pairings, calling the function inside of the loop makes sure that each kids unique celebrityId is compared to the celebrity list.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > because we are using the HTML elements to grab the data from data-sport, so when we click the event listener it saves where we click and the data there which we access with itemClicked.dataset.sport
  
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here
in this module, we import the functions from other modules and then we use the DOM to select our container element, and we print out the basic HTML template with 3 function calls that will generate HTML in their respected areas where they have been called. and then we render the dom with mainContainer.innerHTML = applicationHTML.