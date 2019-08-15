const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/P1"
);


const unitSeed = [
  {
    title: "Introduction",
    section1: "Greet the students as they enter the classroom and gesture for them to sit down. Greetings & names. When everyone has sat down and is ready say, `My name is...` and give your name. Then tell everyone to stand up. If there is room, have everyone form a circle. Take a ball and hold it and say your name. Then throw the ball to one student and they say their name. Students throw the ball around randomly, saying their name each time they catch the ball.hen, play the same throwing game, but instead of saying your name, say the name of the person who threw the ball to you - start by asking one student to throw the ball to you and as you catch it say their name. Then throw to another student and they should say your name as they catch it. If anyone gets a name wrong (or can't remember) they have to sit down for 3 throws. By the end of the activity everyone should have a good idea of everyone else's names!",
    section2: "Have your students draw a stick man / woman on a piece of paper with their name underneath, and write down their answers to the questions on the board - basically doing the same thing as you did on the board. Then put students in pairs and have them practice asking and answering the questions about themselves. As they do this circulate and monitor, helping out with mistakes and pronunciation, and always give lots of praise.",
    section3: "We will finish the lesson with a fun activity based around the vocab of classroom stationery. Before class, prepare a box of loads of different classroom stationery (pen, pencil, eraser, crayon, ruler, stapler, staples, glue, paper, folder, hole punch, pencil sharpener, white out, scotch tape, pencil case, marker, calculator, etc.).",
    date: new Date(Date.now())
  },
  {
    title: "Morning Routines",
    section1: "Start with a guessing game. Before class print out the flashcards for morning routines. Start with an easy one – `brush my teeth`– look at the card but don’t show it to anyone. Do the action for brushing your teeth and ask `What am I doing?`. It’s ok if the students answer in their first language – whoever answers first is the winner. Try and elicit the English or if not, teach `brush my teeth`. For the next card, the winner can look at the card and do the action. Again, elicit / teach the English. Continue until all the cards / actions have been guessed.",
    section2: "Put the cards back on the board, at a height that everyone can reach. Model the game first – select a student and say `Touch put on my shoes`. The student should go to the board and touch the correct card. Then get the student to do the same for you. When everyone has got the idea put them in pairs and get each pair to stand at the other end of the room. In pairs, each student says a verb phrase as their partner runs to the board and touches the right card.",
    section3: "To finish the class, get together the morning routines flashcards and also any other action verb flashcards you have used in previous lessons. Divide the class into 2 teams. One student comes to the front of the class and acts out the flashcard you show to him/her. The first person to shout out the correct answer wins a point for his/her team.",
    date: new Date(Date.now())
  }
];

db.Unit
  .remove({})
  .then(() => db.Unit.collection.insertMany(unitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    synopsis:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    synopsis:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    synopsis:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



