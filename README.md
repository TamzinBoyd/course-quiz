PROBLEM

I wanted a quiz prompt programme to help me concrete the knowledge I've learnt so far. After a quick Google I didn't really find anything that suited my needs so I decided to build my own.

As this is more of a revision prompt I didn't want a set answer for each question, I wanted the opportunity to write lots of text to really explore my understanding of the question. Then I wanted the answer to be shown and have the option to grade myself.

I'd mainly be using it on my laptop so it's been designed desktop-first.

SOLUTION

1. Created a component tree so I could structure the site

   - Log in for user to log in (mainly for practise using Firebase and authentification)
   - Card to render Question, Answer and endQuiz
   - All components needed access to a button

2. Created a data file to hold the questions, later on I want to access these from Firestore
3. Created useStates for questions & answers. In order to increment questions/answers and render the correct one I decided to store the question numbers separately. I set the initial state to the first question, then updated based on question number position in the array. Also needed to hold score.
4. I created a Login/Welcome page with a button to start the quiz
5. Initially I wanted a card which would flip between question and answer but soon decided a modal looked better, which showed the answer, gave me an option to update my score and closed the modal
6. The quiz needed to reset at the end so I created an endQuiz modal which on button click resets the questions and score.

DESIGN
I prefer dark mode so opted for a dark star background...

FEATURES USED

useContext
Hooks - useState
SASS

TO DO
add authentification and link to userProvider. See if can have a screen before the homepage where you log in and it shows your name on each page?
Add progress bar
Take data from api/database

AUTHENTIFICATION
Used Firebase Auth
MUI to create log in form
useNavitage to navigate to start of quiz based on authorisation of log in
react - Toastify for managing log in errors

TO DO
I've added the log in functionality but need to re-arrange to suit quiz app
