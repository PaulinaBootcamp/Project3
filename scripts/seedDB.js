const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/P1"
);

const userSeed = [
  {
    name: "Erika",
    email: "erika@test.com",
    password: "123",
    isStudent: false,
    date: new Date(Date.now())
  },
  {
    name: "Paulina",
    email: "paulina@test.com",
    password: "123",
    isStudent: true,
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const flashcardSeed = [
  {
    flashcardName: "Apple",
    flashcardImage: "https://sc01.alicdn.com/kf/HTB1rd10aUrrK1RkSne1q6ArVVXaN/fresh-fruit-red-Fuji-apple-with-good.jpg_200x200.jpg",
  },
  {
    flashcardName: "Banana",
    flashcardImage: "https://fruits.nutriarena.com/PImg/Banana4Normal_200.jpg",
  },
  {
    flashcardName: "Pear",
    flashcardImage: "https://osmanthos.com/assets/public/images/ingredients/pear.jpg",
  },
  {
    flashcardName: "Cherry",
    flashcardImage: "https://static01.nyt.com/newsgraphics/2014/06/16/bittman-eat-cherry/ed5c4f4c098cd142650d7c00014e71abf85d2f86/eatopener_cherry.jpg",
  },
  {
    flashcardName: "Strawberry",
    flashcardImage: "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg",
  },
  {
    flashcardName: "Kiwi",
    flashcardImage: "https://secureservercdn.net/160.153.137.218/4b3.e44.myftpupload.com/wp-content/uploads/2007/01/Kiwi-fruit1.jpg?time=1566426384",
  },
  {
    flashcardName: "Orange",
    flashcardImage: "https://producemadesimple.ca/wp-content/uploads/2015/01/orange-web-600x450.jpg",
  },
  {
    flashcardName: "Watermelon",
    flashcardImage: "https://images-na.ssl-images-amazon.com/images/I/812c9h8-zuL._SY355_.jpg",
  },
  {
    flashcardName: "Peach",
    flashcardImage: "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg",
  },
  {
    flashcardName: "Pineapple",
    flashcardImage: "https://keelings.ie/wp-content/uploads/2016/04/pineapple-1.jpg",
  },
  {
    flashcardName: "Grapes",
    flashcardImage: "https://verduragroceries.co.ke/wp-content/uploads/2018/07/seedless-grapes.jpg",
  },
  {
    flashcardName: "Coconut",
    flashcardImage: "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg",
  },
  {
    flashcardName: "Goosenberry",
    flashcardImage: "https://gofreshusa.com/wp-content/uploads/2018/02/Depositphotos_118813434_original-1024x683.jpg",
  },
  {
    flashcardName: "Black Currant",
    flashcardImage: "https://www.znaturalfoods.com/710-large_default/black-currant-powder.jpg",
  },
  {
    flashcardName: "Mango",
    flashcardImage: "https://www.thegrowthop.com/wp-content/uploads/2019/02/GettyImages-484472040-e1549992026214.jpg",
  },
  {
    flashcardName: "Raspberry",
    flashcardImage: "https://milnefruit.com/images/products/raspberry.png",
  }
];


db.Flashcard
  .remove({})
  .then(() => db.Flashcard.collection.insertMany(flashcardSeed))
  .then(data => {
    console.log(data.result.n + " Fruit records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const essaySeed = [
  {
    essayImage: { type: String, required: false },
    essayInstructions: { type: String, required: true },
    essayAssigned: { type: Boolean, default: false },
    essayGraded: { type: Boolean, default: false },
    essayDue: { type: Date, required: false }
  },

];

db.Essay
  .remove({})
  .then(() => db.Essay.collection.insertMany(essaySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
    console.log(data.result.n + " Unit records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });







