PROBLEM
I wanted a quiz prompt programme to help me concrete the knowledge I've learnt so far. Many offered 3 choices with definite answers whereas I wanted a free text box to note down information, before then viewing the answer. I could then self-select if I want happy with my answer or not, giving myself a score each time.

INITIAL RAMBLINGS
Home page with button to commence quiz
1st question is shown - taken from data file. Also shown input box and button to submit
On submit the answer is shown as well as a "correct" or "more work needed" button.

- correct increases score by 1
- more work needed doesn't effect score
- both take you to the next question

State to hold score.
State for question, state for answer.

Function to update state to data.question[0+1]??

On the last question there needs to be a "show me my score button"
Which loads an end of quiz component to show score and "restart wuiz" button.

All states are reset on clicking this and it reverts to the home page.

App is rendering home which renders question card - needs to be if statement, which renders button and question

ok so see question, enter text, button to show answer.

Decided to create answers and questions as a card which is flipped.

TO DO
fix restart quiz

add authentification and link to userProvider. See if can have a screen before the homepage where you log in and it shows your name on each page?

as rely on state to be updated before processing, try the following to instead update the state

const [userFavourites, setUserFavourites] = useState([]);

const addFavouriteHandler = (favouriteMeetup) => {
// takes previous state as parameter
setUserFavourites((previous) => {
// adds paramater of new meetUp to the existing state
return previous.concat(favouriteMeetup);
});
};

Initially wanted a card to flip then decided instead on an answer modal, which took the answer number from state
