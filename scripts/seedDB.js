const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
"mongodb://heroku_l65p9lfx:7rjllpsh1qf40dcpermnc4lq27@ds311968.mlab.com:11968/heroku_l65p9lfx");

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
   flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Banana",
    flashcardImage: "https://fruits.nutriarena.com/PImg/Banana4Normal_200.jpg",
   flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Pear",
    flashcardImage: "https://osmanthos.com/assets/public/images/ingredients/pear.jpg",
   flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Cherry",
    flashcardImage: "https://static01.nyt.com/newsgraphics/2014/06/16/bittman-eat-cherry/ed5c4f4c098cd142650d7c00014e71abf85d2f86/eatopener_cherry.jpg",
  flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Strawberry",
    flashcardImage: "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg",
   flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Kiwi",
    flashcardImage: "https://secureservercdn.net/160.153.137.218/4b3.e44.myftpupload.com/wp-content/uploads/2007/01/Kiwi-fruit1.jpg?time=1566426384",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Orange",
    flashcardImage: "https://producemadesimple.ca/wp-content/uploads/2015/01/orange-web-600x450.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Watermelon",
    flashcardImage: "https://images-na.ssl-images-amazon.com/images/I/812c9h8-zuL._SY355_.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Peach",
    flashcardImage: "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Pineapple",
    flashcardImage: "https://keelings.ie/wp-content/uploads/2016/04/pineapple-1.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Grapes",
    flashcardImage: "https://verduragroceries.co.ke/wp-content/uploads/2018/07/seedless-grapes.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Coconut",
    flashcardImage: "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg",
   flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Goosenberry",
    flashcardImage: "https://gofreshusa.com/wp-content/uploads/2018/02/Depositphotos_118813434_original-1024x683.jpg",
     flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Black Currant",
    flashcardImage: "https://www.znaturalfoods.com/710-large_default/black-currant-powder.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Mango",
    flashcardImage: "https://www.thegrowthop.com/wp-content/uploads/2019/02/GettyImages-484472040-e1549992026214.jpg",
    flashcardCategory: "Fruits"
  },
  {
    flashcardName: "Raspberry",
    flashcardImage: "https://milnefruit.com/images/products/raspberry.png",
    flashcardCategory: "Fruits"
  },
 {
    flashcardName: "Bell Pepper",
    flashcardImage: "https://images.heb.com/is/image/HEBGrocery/prd-small/fresh-red-bell-peppers-000325164.jpg",
    flashcardCategory: "Vegetables"
  },
   {
    flashcardName: "Broccoli",
    flashcardImage: "http://www.allwhitebackground.com/images/2/2385-190x190.png",
    flashcardCategory: "Vegetables"
  },

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
  },
    {
    title: "Fruit",
    section1: "If you can, get small plastic fruit (can be bought quite cheaply from children’s stores, such as Toys ‘R’ Us). Put the 8 fruit into a small box before the class. Now take out the box and shake it – the rattling sound will instantly alert your students. Open the box and pull out a fruit. Ask What’s this? Elicit / Teach the name and chorus x3. Now mime biting the fruit and chewing, and then say Yummy!. Then hold the fruit in front of each student to let them take an imaginary bite. Encourage them to say yummy! or even yuk!. Repeat with the other fruit.",
    section2: "Try and take enough plastic fruit pieces for each student (e.g. if you have 16 students you need two of each plastic fruit – if you don’t have enough plastic fruit use our fruit flashcards instead). Throw the fruit around the classroom. Model the activity: say (Your name) give me a/an (apple). Get up, find the fruit and put it into the box. Now hold the box and instruct a student to pick up a fruit, bring it back to you and put it in the box. Do for each student in the class.",
    section3: "Play Fruit Rope Jump game Play 'Fruit Rope Jump' gameTake a length of rope, and lay it across the floor at one end of the classroom. On one side place the 8 plastic fruit and the box. Have your students line up on the other side of the rope. Model: '(Your name), put the (apple) in the box'. Run up to the rope, jump over the rope (say 'Jump!') select the correct fruit and put it in the box. Now instruct each student to do the activity.",
    date: new Date(Date.now())
  },
    {
    title: "Emotion",
    section1: "On the board draw a large circle. Then draw two eyes, ears, nose and a smiley mouth. Do the same facial gesture and say ‘I’m happy! Happy, happy, happy’. Get everyone to chorus ‘happy’ and do the facial expression. Then erase the mouth and draw a sad mouth (and maybe a tear under one eye) and teach ‘sad’. Do the same for the rest of the vocab (hungry, angry, scared, sleepy - use the flashcards as reference).",
    section2: "Invite a student up to the front of the class and give him/her the chalk/marker. Whisper a feelings word (e.g. ‘angry’) and get him/her to draw the face in the circle. If he/she is having difficulty, show him a picture or flashcard. Invite the class to shout out the answers – the first student with the correct answer can draw the next picture.",
    section3: "Put students in pairs and give each pair a large, blanksheet of paper. Have each pair draw circles on the paper. Then have them in turns draw faces with different emotions for their partners to guess. At the end of the activity invite some students to show the rest of the class their pictures and say what the feeling words are (or get the others to guess).",
    date: new Date(Date.now())
  },
    {
    title: "World",
    section1: "Walk around the room and stick the pieces of colored paper to the walls as you walk around. Say each color word as you stick them onto the walls and make sure they are at a level your students can reach.Now model the game: say ‘Touch green!’ and show everyone how you look around the walls for the green paper, then run and touch it. Encourage your students to do the same. Now have everyone stand up in the middle of the room. Say different colors as your students run around touching the colors.",
    section2: "Get a big piece of blank paper (A3 or bigger if possible). Have everyone sit in a circle around the paper with their crayons. Say, ‘Everyone draw a (blue) line’, and model taking out a blue crayon, drawing a nice blue line on the paper and then putting the crayon back into your pencil case. Get everyone to follow suit. Continue with all the colors. In the end you will have a nice abstract piece of artwork!",
    section3: "Now we have two defined categories (sky and land) we are going to provide some new words for those categories. Before class, prepare two large A4 envelopes (color one green for land and one blue for sky) and flashcards for sun, moon, stars, mountain, sea, river, cloud, rainbow, lakes, fields, forest. Pin both of the envelopes to the wall, opened, with the green one low down on the wall (to represent land) and the blue one higher up (to represent sky).",
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







