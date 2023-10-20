window.addEventListener("DOMContentLoaded", function () {
  const url = document.location.href;
  let genderSwitched = false;
  let scriptRan = false;
  function getString(path) {
    return document
      .evaluate(path, document, null, XPathResult.STRING_TYPE, null)
      .stringValue.trim();
  }
  if (url) {
    if (
      url.includes("comments") &&
      url.includes("comment") &&
      url.includes("bedakid")
    ) {
      const videosMaisy = [
        "Today was all about Maisy Mouse 🐭! We watched an amazing video, talked about it, and answered fun questions. Great job!",
        "We had a video-filled day! We watched a Maisy Mouse cartoon 📺, chatted about it, and practiced comprehension. You're doing great!",
        "Maisy Mouse was our star today! We watched a cool video, answered interesting questions, and worked on your speaking skills. Well done!",
        "Our day was filled with Maisy Mouse and friends! We enjoyed a fun video, answered exciting questions, and learned new words. Keep it up!",
        "Today we dived into the world of Maisy Mouse! We watched an awesome video, talked about it, and learned cool new words. So proud of you!",
      ];
      const videosPeppa = [
        "Peppa was our guide today in the world of words and fun 🐷! We watched a cool video, chatted about it, and answered interesting questions. Good job!",
        "Today was all about Peppa Pig 🐷! We watched a super video, discussed it, and practiced comprehension. Keep going!",
        "We had a Peppa-filled class! We watched an exciting Peppa Pig video, answered questions about it, and worked on speaking skills. Well done!",
        "Our day was filled with Peppa and friends! We enjoyed a Peppa Pig video, discussed it, and learned new words. Keep it up!",
        "Today we took a trip to Peppa's world! We watched an amazing video, talked about it, and discovered cool new words. So proud of you!",
      ];

      const alphabet = [
        "Today was exciting! We discovered a new letter 🔤, learned cool words, made fun sentences, and enjoyed awesome games 🎮. You're doing great!",
        "Wow, what a day! We met a new letter 👀, found neat words, created our own sentences, and had so much fun playing games. Good job!",
        "We had an adventure today 🌟! We explored a new letter, gathered interesting words, crafted sentences, and played educational games. Keep it up!",
        "Today was all about learning and fun! We mastered a new letter 🔤, collected wonderful words, built our own sentences, and engaged in delightful games 🎲. So proud of you!",
        "On our learning journey today, we bumped into a new letter 🔤, encountered fantastic words, constructed sentences, and had a blast with games. Well done!",
        "Our day was filled with discoveries! We unveiled a new letter, trekked through words, formed sentences, and dived into enjoyable games. You rocked it today!",
      ];

      const colors = [
        "Wow! Today we met a new color 🌈, found cool color words, made sentences, and played color games. Great job!",
        "Today was all about colors! We learned a new color 🎨, talked about lots of color things, and played fun color games. Keep going!",
        "We had a colorful day! We met a new color, found lots of color words, made sentences, and had fun with color games. Well done!",
        "Colors took center stage today! We discovered a new color, learned neat words, made sentences, and played exciting color games. You rocked it!",
        "We splashed into a new color today! We learned cool color words, made sentences, and had lots of fun with color games. So proud of you!",
      ];

      const numbers = [
        "Today was all about numbers 🔢! We learned a new number, found number words, made sentences, and played counting games. Good job!",
        "We had a number-filled day! We learned a new number, met cool number words, made sentences, and enjoyed number games. Keep counting!",
        "Numbers were the stars today! We discovered a new number, learned lots of number words, made sentences, and had fun with number games. You're doing great!",
        "We counted our way through the day! We met a new number, found cool number words, made sentences, and played counting games. Keep it up!",
        "Today we explored numbers! We learned a new number, found neat number words, made sentences, and had fun with number games. Well done!",
      ];

      const shapes = [
        "Shapes were the focus today! We learned a new shape 🟪, found shape words, made sentences, and had fun with shape games. Great work!",
        "We had a shape-filled day! We discovered a new shape, learned cool shape words, made sentences, and played geometric games. Good job!",
        "Today was all about shapes! We learned a new shape, found lots of shape words, made sentences, and played fun shape games. Keep going!",
        "Shapes took center stage today! We met a new shape, found neat shape words, made sentences, and played shape games. Well done!",
        "We explored the world of shapes today! We learned a new shape, found cool shape words, made sentences, and had fun with shape games. You rocked it!",
      ];

      const reading = [
        "Today was all about words and sounds 🔊! We learned new words, worked on your pronunciation, and played some fun language games. Great job!",
        "We had a word-filled day! We discovered new English words 📚, used them in phrases, and engaged in games like 'pick the word'. You're doing great!",
        "Language was our game today! We found new words, practiced sounds, and enjoyed some simple games like connecting words to pictures. Well done!",
        "Our day was filled with words! We learned new English words, practiced your pronunciation, and played some engaging word games together. Keep it up!",
        "Today we dived into a sea of words! We discovered new English words, worked on making sounds, and played games like 'connect the word to the picture'. So proud of you!",
        "Today was an exploration in vocabulary! We learned and pronounced new words, formed phrases, and enjoyed language games. You did splendidly!",
        "What a wordy day we had! We discovered fresh English words, practiced your pronunciation, and had fun with games like 'pick the word'. Excellent work!",
        "Our session was all about diving into the language! We expanded your vocabulary, fine-tuned your pronunciation, and played interactive games. Keep up the good work!",
      ];

      const reRef = [
        "In today's lesson, we delved into thought-provoking concepts, refined sentence structure, and widened our vocabulary range.",
        "Our session served as a platform for sharing ideas, enhancing speaking skills, and fostering open discussion.",
        "The focus of today's class was to explore various themes, engage in interactive Q&A sessions, and boost understanding of the material.",
        "Today's class was centered around expressing opinions, refining speaking skills, and understanding diverse topics.",
        "Our session encompassed exploring interesting subjects, engaging in dynamic discussions, and expanding the vocabulary.",
        "The class today was designed to allow for a lively exchange of ideas, with emphasis on speaking skills and the exploration of various themes.",
        "Today's lesson involved traversing through a wide range of topics, engaging in stimulating discussions, and handling question-answer sessions.",
        "The focus of the class was to provide a platform for active dialogue, addressing interesting questions, and deepening the understanding of the subject matter.",
      ];

      const reviewedReRef = [
        "Today's lesson was a journey back through past topics. We revisited key words and practiced structuring comprehensive sentences.",
        "Our class served as a comprehensive recap, reviewing all the valuable lessons and concepts we've covered so far.",
        "During our session, we engaged in a lively review, challenging your memory and stimulating critical thinking skills.",
        "Today, we took a trip down memory lane, meticulously going over the course material from previous classes.",
        "Our class today was a refresh session, honing in on previously learned words and ideas while reinforcing sentence structure.",
        "This session was designed as a review, allowing us to revisit past lessons and refresh our understanding of them.",
        "Today, we embarked on a revision expedition, reminding ourselves of the wealth of knowledge we've accumulated.",
        "The class today served as a timely refresher, enabling us to strengthen our grasp of previously covered material.",
      ];

      const wordsAndSentencesAndDescribedPictures = [
        "In today's class, we expanded our vocabulary by learning a variety of new words and practiced using them to construct meaningful sentences.",
        "Today's focus was on discovering and incorporating new words into our own sentences, allowing us to express ourselves more fluently and accurately.",
        "During our session today, we explored a range of new words, actively engaging with them by incorporating them into our own sentences.",
        "We dedicated our class time today to learning new words and honing our language skills by utilizing them to form descriptive sentences and articulate our thoughts about various pictures.",
        "In our interactive class today, we not only answered thought-provoking questions but also integrated our newly acquired vocabulary into full sentences, allowing us to communicate more confidently and coherently.",
        "Today's fun-filled class was centered around expanding our vocabulary through the introduction of new words, enabling us to engage in conversations and discuss different pictures with more depth and precision.",
        "Throughout today's session, we devoted time to understanding new words and applying them in our own sentences, enhancing both our language skills and expressive abilities.",
        "Our main objective today was to learn new words and refine our speaking skills by incorporating them into complete sentences, enabling us to effectively communicate our thoughts and ideas.",
        "We had a highly productive lesson where we acquired new words and practiced expressing ourselves through constructing sentences and engaging in discussions about a variety of pictures.",
        "Today, we focused on developing our speaking skills by using our newly acquired words to describe different pictures, enhancing both our vocabulary and our ability to convey detailed descriptions.",
        "During our class, we dedicated time to practicing new words and strengthening our language proficiency by constructing personalized sentences that effectively captured our thoughts and ideas.",
      ];

      const storyAndQuestions = [
        "In today's class, we embarked on an adventure-filled story, answering questions to enhance our understanding and grasp its details more effectively.",
        "Today, we read an exciting story and engaged in discussions to ensure a comprehensive understanding of the text. By answering thought-provoking questions, we solidified our comprehension and practiced expressing our thoughts using complete sentences.",
        "During class, we immersed ourselves in an interesting story, carefully reading each page and answering all the questions to deepen our understanding. Additionally, we focused on the pronunciation of new words introduced in the story.",
        "Our class today centered around a captivating story. We actively engaged with the text by answering questions, which helped us gain a deeper insight into the story's plot, characters, and themes.",
        "Today's class was dedicated to understanding the story while practicing the use of full sentences in our responses. By answering questions and discussing the story's details, we honed our comprehension skills and improved our oral communication.",
        "In today's class, we employed the story as a tool to enhance our critical thinking skills, focusing particularly on the smaller details. Through answering questions and analyzing the text, we developed a deeper understanding of the story and its nuances.",
        "During class, we read a captivating story and completed exercises that reinforced our understanding of the text. By answering questions about the story, we improved our comprehension and strengthened our connection with the narrative.",
      ];

      const storyOnly = [
        "In today's class, we embarked on an adventure-filled story, answering questions to enhance our understanding and grasp its details more effectively.",
        "Today, we read an exciting story and engaged in discussions to ensure a comprehensive understanding of the text. By answering thought-provoking questions, we solidified our comprehension and practiced expressing our thoughts using complete sentences.",
        "During class, we immersed ourselves in an interesting story, carefully reading each page and answering all the questions to deepen our understanding. Additionally, we focused on the pronunciation of new words introduced in the story.",
        "Our class today centered around a captivating story. We actively engaged with the text by answering questions, which helped us gain a deeper insight into the story's plot, characters, and themes.",
        "Today's class was dedicated to understanding the story while practicing the use of full sentences in our responses. By answering questions and discussing the story's details, we honed our comprehension skills and improved our oral communication.",
        "In today's class, we employed the story as a tool to enhance our critical thinking skills, focusing particularly on the smaller details. Through answering questions and analyzing the text, we developed a deeper understanding of the story and its nuances.",
        "During class, we read a captivating story and completed exercises that reinforced our understanding of the text. By answering questions about the story, we improved our comprehension and strengthened our connection with the narrative.",
      ];

      const exercisesAndExpansion = [
        "We explored a variety of engaging exercises that helped us reinforce our understanding and expand our knowledge of the lesson.",
        "Through interactive exercises and discussions, we deepened our comprehension and practiced applying the lesson's content in practical ways.",
        "Our class focused on interactive exercises and activities that encouraged active participation and enhanced our language skills.",
        "By engaging in a range of exercises, including answering questions, completing sentence-related tasks, and analyzing the plot, we gained a deeper understanding of the lesson and improved our language proficiency.",
        "In today's class, we actively discussed the story and undertook exercises to reinforce our comprehension. Through answering questions, completing fill-in-the-blank activities, and analyzing the plot, we sharpened our critical thinking abilities and solidified our grasp of the lesson's content.",
        "During class, we immersed ourselves in a variety of exercises that challenged us to apply what we learned. By answering thought-provoking questions and participating in interactive activities, we expanded our understanding and gained confidence in using the lesson's concepts.",
        "Our class session involved engaging exercises designed to strengthen our understanding and application of the lesson's content. Through activities such as analyzing the plot, answering questions, and practicing sentence construction, we enhanced our language skills and deepened our comprehension.",
      ];

      const hey = ["Hello", "Hello dear", "Hey", "Hi", "Hello there"];
      const Level1 = [
        "We watched videos to improve our listening comprehension, then did exercises to practice what we learned.",
        "We had the opportunity to practice our listening skills by watching videos and completing related exercises.",
        "The class was interactive and engaging, using videos and exercises to improve our language skills.",
        "We watched videos and did exercises to practice grammar, sentence structure and pronunciation.",
      ];
      const general = [
        "And we practiced comprehension skills through questions and answers, as well as the use of full sentences in answers.",
        "We checked the vocabulary words of the lesson and practiced understanding and speaking with questions and answers. We also practiced the use of full phrases in speech.",
        "We completed many exercises today! And made some well-structured sentences!",
        "We had a nice conversation where you shared your opinions and interests and practiced your speaking skills at the same time.",
      ];
      const PMEnding = [
        "In today's session, we expanded on the main concepts we've learned and enriched our vocabulary with related words.",
        "Our lesson didn't end with the bell - we kept exploring, discussing related topics and diving deeper into the pool of new words connected to our lesson's theme.",
        "We gave our vocabulary a boost by introducing more words closely linked to the lesson's subject. We then put these words into action in our discussions and exercises, solidifying our understanding.",
        "Today, we went beyond the basics, broadening our understanding with new words related to the lesson's main subject.",
        "We pushed the boundaries of the lesson's theme, enriching our vocabulary with more words closely tied to the subject.",
        "Our learning journey didn't end with the lesson. We delved into related topics and expanded our vocabulary, bringing the subject matter to life.",
        "Our discussion branched out to cover a wider range of topics, using new words to expand our understanding of the lesson's core theme.",
        "Using exercises and discussions, we added more depth to our knowledge base with an expanded vocabulary focused on the main concepts of our lesson.",
        "We took a deep dive into our topic, learning new words and discussing related themes to reinforce our understanding.",
        "Our learning was super-charged today as we ventured beyond the lesson, introducing new words and discussing related topics to expand our grasp of the subject.",
      ];
      const intro = [
        "Hello, superstar!🌟 Today's English lesson was a blast, and your contributions were fantastic. Thanks for joining me!",
        "Bravo!👏 You did an amazing job in today's English lesson. Thank you for your enthusiasm and participation.",
        "Great to see you! You were a shining star in today's class!🌟 Thanks for making our lesson so lively.",
        "What a wonderful class with you! Your efforts in today's lesson were outstanding.✔️ Keep up the great work!",
        "I'm so proud of your progress in today's English lesson!🚀 Thank you for making the class so enjoyable.",
        "A big round of applause for you!👏 Your participation in today's class was extraordinary. Thank you for being an active learner!",
        "You lit up our English class today with your energy and enthusiasm!💡Thank you for making the learning experience delightful.",
        "Your determination and hard work shone brightly in today's class!✨Thank you for your commitment to learning.",
        "Hats off to you for your brilliant performance in today's English lesson!🎩 Thank you for your dedication and hard work.",
        "You were the star of our English class today!🌟 Your dedication and hard work are truly admirable. Thank you for making our class so enjoyable.",
      ];
      const ending = [
        "What a fantastic class we had! Hope you enjoyed as much as I did. 🎉",
        "Remember, practice makes perfect! Keep up the great work. Can't wait to see you in our next class. 🚀",
        "I'm sure you've learned a lot today! Keep revisiting the new words we learned.",
        "Great job today! Keep practicing and see you in our next fun-filled lesson. 👍",
        "You did so well today! Hope you had a good time. Looking forward to our next session. 🏆",
        "You were absolutely wonderful today! I hope our class was as exciting for you as it was for me. 🌟",
        "Fantastic effort today! I trust you had a great time and learned a lot. Keep the spirit high for our next class! 🎈",
        "Our class today was so much fun! Hope you enjoyed and learned something new. Can't wait for our next session! 🚀",
        "You are doing an amazing job! Hope you enjoyed today's lesson. Eagerly waiting for our next fun-filled session! 🎉",
      ];
      const goodbye = [
        "See you next time! 👋",
        "Best wishes! Bye-bye. 👋",
        "See you, bye-bye 👋",
        "Until our next class, take care! 👋",
        "Can't wait to see you in the next class. Bye! 👋",
        "Keep practicing until we meet again. Bye-bye! 👋",
        "Have a great day! See you next time. 👋",
      ];
      // const goodbye = [
      //   "Wishing you a happy and prosperous new year, filled with joy and success!",
      //   "May the new year bring you health, happiness, and good luck!",
      //   "Wishing you a new year full of happiness, love and prosperity!",
      // ];

      const endEmojis = ["❤️🔥🌞", "🏆🍀🌈", "🏅🎉💝", "✨💜💛", "⭐👏🎉"];

      let inCaseOf2L = "";
      let newLessonTitle;

      function rS(sentence) {
        if (Array.isArray(sentence)) {
          return sentence[Math.floor(Math.random() * sentence.length)];
        } else {
          return sentence;
        }
      }

      function cloneFemale(text) {
        return text
          .replaceAll("He ", "She ")
          .replaceAll(" He ", " She ")
          .replaceAll("He's ", "She's ")
          .replaceAll(" he ", " she ")
          .replaceAll(" he's ", " she's ")
          .replaceAll(" him ", " her ")
          .replaceAll("His ", "Her ")
          .replaceAll(" him.", " her.")
          .replaceAll(" him,", " her,")
          .replaceAll(" himself ", " herself ")
          .replaceAll(" himself. ", " herself. ")
          .replaceAll(" himself. ", " herself. ")
          .replaceAll(" his ", " her ")
          .replaceAll("he'll", "she'll")
          .replaceAll("boy", "girl");
      }
      function newStudentBool() {
        path = `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[3]/div/div/span/sup`;
        path2 = `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[2]/div/div[1]/div[1]/p/text()`;

        newBadge = document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        recommendTab = document.evaluate(
          path2,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue.nodeValue;
        if (recommendTab.includes("We recommend that you start from"))
          return true;

        return false;
      }
      function textarea1() {
        let path = newStudentBool()
          ? `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[4]/div/div[2]/textarea`
          : `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[3]/div/div[2]/textarea`;
        let textarea = document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
        return textarea;
      }
      function textarea2() {
        let path = newStudentBool()
          ? `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[5]/div/div[2]/textarea`
          : `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[4]/div/div[2]/textarea`;

        let textarea = document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
        return textarea;
      }

      function isCommentDone() {
        if (textarea1()?.value != "" || textarea2()?.value != "") {
          return true;
        }
        return false;
      }

      function typeFirstPartComment(comment) {
        textarea1().value = comment;
        var event = new Event("input");
        textarea1().dispatchEvent(event);
      }
      function getPageNum() {
        let path =
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[1]/div/div[2]/div[3]/div/div/div/div[2]/input';
        return document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue.value;
      }

      function clickRadio(path) {
        return document
          .evaluate(
            path,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          )
          .singleNodeValue.click();
      }
      let typeSecondComment = function () {};
      function lesson() {
        let path =
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div/span';
        let lesson = document
          .evaluate(
            path,
            document,
            null,
            XPathResult.ANY_UNORDERED_NODE_TYPE,
            null
          )
          .singleNodeValue.innerHTML.trim();
        if (lesson.at(-1) == ":") lesson = lesson.slice(0, -1);
        if (lesson.at(-1) == ".") lesson = lesson.slice(0, -1);
        return lesson;
      }

      function runScript() {
        clickRadio(
          `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[1]/div/div[2]/div/div/label[1]/span/input`
        );
        for (let i = 1; i < 4; i++) {
          clickRadio(
            `//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[${
              newStudentBool() ? 3 : 2
            }]/div/div[2]/div/div[${i}]/div[2]/div/label[1]/span/input`
          );
        }
        let studentName = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[4]/td[2]'
        )
          .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|\d)/g,
            ""
          )
          .trim();

        let pageNum = getPageNum();
        let book = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]'
        );
        let fullLessonName = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[2]'
        );
        let lessonName = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[2]'
        );
        if (lessonName.at(-1) == ":") lessonName = lessonName.slice(0, -1);
        if (lessonName.at(-1) == ".") lessonName = lessonName.slice(0, -1);
        lessonName = lessonName.split(":", 2).at(-1);

        let gender = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[6]/td[2]'
        );
        let lessonUnit = getString(
          '//*[@id="vue_app"]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[2]'
        ).split(":")[0];
        let hint = lesson().split(" ")[1];
        let progress = "discussed";
        let action = general;
        chrome.storage.local.get(["tName"], function (obj) {
          let teacherName = obj.tName;
          function setProgess(startedLimit) {
            if (pageNum >= totalLessonPages) {
              progress = "finished";
            } else if (pageNum <= startedLimit) {
              progress = "started";
            } else if (pageNum > startedLimit) {
              progress = "continued";
            }
          }
          function isItWs() {
            return hint == "Unit";
          }
          let vocabularyWords;
          let totalLessonPages;
          chrome.storage.local.get(["vocab"], function (obj) {
            function setVocab(bookName) {
              let LessonObjectArr = Object.values(obj.vocab[`${bookName}`]);
              lessonFound = false;
              //
              console.log(lessonName.slice(-3) + lesson().trim().slice(-3));
              if (
                lessonName.slice(-3) != lesson().trim().slice(-3) &&
                lesson().at(-2) != " "
              ) {
                //different lessons and is NOT a letter lesson// promeni da bude last 2 words jer
                console.log("1");
                LessonObjectArr.forEach((lessonObj) => {
                  let dbLessonLast2Words = lessonObj.Name.split(" ")
                    .slice(-2)
                    .join(" ")
                    .toLowerCase();
                  if (last2Words == dbLessonLast2Words) {
                    console.log("1");
                    console.log(2);
                    vocabularyWords = lessonObj.Vocabulary;
                    totalLessonPages = lessonObj.Pages;
                    lessonFound = true;
                    newLessonTitle = lessonObj.Name;
                    inCaseOf2L = `finished the lesson "${lessonName}" and `;
                  }
                });
                if (!lessonFound) {
                  console.log("1");
                  LessonObjectArr.forEach((lessonObj) => {
                    let dbLessonLastWord = lessonObj.Name.split(" ")
                      .slice(-1)
                      .join()
                      .toLowerCase();
                    console.log(lastWord + dbLessonLastWord);
                    if (lastWord == dbLessonLastWord) {
                      console.log(3);
                      vocabularyWords = lessonObj.Vocabulary;
                      totalLessonPages = lessonObj.Pages;
                      lessonFound = true;
                      newLessonTitle = lessonObj.Name;
                      inCaseOf2L = `finished the lesson "${lessonName}" and `;
                    }
                  });
                }
              } else if (
                lessonName.slice(-1) != lesson().slice(-1) &&
                lessonName.at(-2) == ":"
              ) {
                console.log("1");
                inCaseOf2L = `finished the lesson "${lessonName}" and `;
                //different lessons Letters
                vocabularyWords =
                  LessonObjectArr[`${lesson().slice(-1)}`].Vocabulary;
                totalLessonPages =
                  LessonObjectArr[`${lesson().slice(-1)}`].Pages;
                lessonFound = true;
              } else {
                console.log("1");
                // ITS ALL GOOD same lesson started and finished
                LessonObjectArr.forEach((lessonObj) => {
                  lessonName = lessonName.trim();
                  console.log(lessonName + lessonObj.Name);
                  let lessonNameLen = lessonName.length;
                  if (
                    lessonObj.Name.toLowerCase() == lessonName.toLowerCase() ||
                    lessonObj.Name.toLowerCase() ==
                      fullLessonName.toLowerCase() ||
                    (lessonObj.Name.toLowerCase().slice(-lessonNameLen) ==
                      lessonName.toLowerCase() &&
                      lessonNameLen > 2) ||
                    lessonObj.Name.toLowerCase().slice(-10) ==
                      lessonName.toLowerCase().slice(-10)
                  ) {
                    console.log("1");
                    totalLessonPages = lessonObj.Pages;
                    lessonFound = true;
                    vocabularyWords = lessonObj.Vocabulary;
                    totalLessonPages = lessonObj.Pages;
                    newLessonTitle = lessonName;
                  } else {
                    console.log("1");
                  }
                });
              }
              // if (!lessonFound) {
              //   console.log("no leeson found");
              //   //no lesson in this book, check if the last word mathces
              //   LessonObjectArr.forEach((lessonObj) => {
              //     if (
              //       lastWord == lessonObj.Name.split(" ").at(-1).toLowerCase()
              //     ) {
              //       lessonFound = true;
              //       vocabularyWords = lessonObj.Vocabulary;
              //       totalLessonPages = lessonObj.Pages;
              //       newLessonTitle = lessonName;
              //     } else {
              //       console.log("still lesson not found");
              //     }
              //   });
              // }
              if (!lessonFound) {
                console.log("1");
                // probably in a different book
                console.log(obj.vocab);
                for (const currentBook of Object.values(obj.vocab)) {
                  currentBook.forEach((currentLesson) => {
                    currentLessonLength = currentLesson.Name?.length;
                    if (
                      currentLesson.Name?.toLowerCase() ==
                        lesson().slice(-currentLessonLength).toLowerCase() &&
                      currentLessonLength > 5
                    ) {
                      lessonFound = true;
                      vocabularyWords = currentLesson.Vocabulary;
                      totalLessonPages = currentLesson.Pages;
                      newLessonTitle = currentLesson.Name;
                      inCaseOf2L = `finished the lesson "${lessonName}" and `;
                    }
                  });
                }
              }
            }

            let lastWord = lesson().trim().split(" ").at(-1).toLowerCase();
            if (lastWord.at(-1) == ":") lastWord = lastWord.slice(0, -1);
            let last2Words = lesson()
              .split(" ")
              .slice(-2)
              .join(" ")
              .toLowerCase();
            let last3Words = lesson().split(" ").slice(-3).join(" ");

            vocabBook = "";
            searching: if (book) {
              if (book == "Alphabet") {
                bookName = "HB";
                setVocab(bookName);
                setProgess(17);
                action = alphabet;
                break searching;
              } else if (book == "Colors") {
                bookName = "HB";
                setVocab(bookName);
                setProgess(17);
                action = colors;
                break searching;
              } else if (book == "Numbers") {
                bookName = "HB";
                action = numbers;
                setVocab(bookName);
                setProgess(17);
                break searching;
              } else if (book == "Shapes") {
                bookName = "HB";
                setVocab(bookName);
                setProgess(17);
                action = shapes;
                break searching;
              } else if (book == "Reading") {
                bookName = "HB";
                setVocab(bookName);
                action = reading;
                break searching;
              } else if (book == "Cartoon Maisy") {
                bookName = "Maisy";
                setVocab(bookName);
                setProgess(17);
                action = videosMaisy;
                break searching;
              } else if (book == "Level 1") {
                bookName = "Free talk";
                setVocab(bookName);
                setProgess(20);
                action = Level1;
                break searching;
              } else if (book == "Maisy") {
                bookName = "Maisy";
                setVocab(bookName);
                setProgess(17);
                action = videosMaisy;
                break searching;
              } else if (book == "Peppapig") {
                bookName = "Peppa";
                setVocab(bookName);
                setProgess(17);
                action = videosPeppa;
                break searching;
              } else if (book == "Starter1" && isItWs()) {
                bookName = "WS S1";
                setVocab(bookName);
                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                setProgess(20);
                break searching;
              } else if (book == "Starter2" && isItWs()) {
                bookName = "WS S2";

                setVocab(bookName);
                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                setProgess(20);
                break searching;
              } else if (book == "Starter3" && isItWs()) {
                bookName = "WS S3";

                setVocab(bookName);
                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                setProgess(20);
                break searching;
              } else if (book == "Basic1") {
                bookName = "WS B1";
                setVocab(bookName);
                setProgess(17);
                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Basic2") {
                bookName = "WS B2";
                setVocab(bookName);
                setProgess(17);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Basic3") {
                bookName = "WS B3";
                setVocab(bookName);
                setProgess(17);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Intermediate1") {
                bookName = "WS Int 1";
                setVocab(bookName);
                setProgess(17);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Intermediate2") {
                bookName = "WS Int 2";
                setVocab(bookName);
                setProgess(17);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Intermediate3") {
                bookName = "WS Int 3";
                setVocab(bookName);
                setProgess(17);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Advanced1") {
                bookName = "WS Adv 1";
                setVocab(bookName);
                setProgess(15);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Advanced2") {
                bookName = "WS Adv 2";
                setVocab(bookName);
                setProgess(15);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Advanced3") {
                bookName = "WS Adv 3";
                setVocab(bookName);
                setProgess(15);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Master1") {
                bookName = "WS M1";
                setVocab(bookName);
                setProgess(15);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Master2") {
                bookName = "WS M2";
                setVocab(bookName);
                setProgess(15);
                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;

                break searching;
              } else if (book == "Master3") {
                bookName = "WS M3";
                setVocab(bookName);
                setProgess(15);

                action =
                  pageNum * 1 < 22
                    ? wordsAndSentencesAndDescribedPictures
                    : storyOnly;
                action =
                  pageNum >= totalLessonPages ? exercisesAndExpansion : action;
                break searching;
              } else if (book == "Starter1") {
                //PM STARTER
                bookName = "PM S1";
                setVocab(bookName);
                setProgess(15);
                action =
                  pageNum < 15 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
              } else if (book == "Starter2") {
                //PM STARTER
                bookName = "PM S2";
                setVocab(bookName);
                setProgess(15);
                action =
                  pageNum < 15 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
              } else if (book == "Starter3") {
                //PM STARTER
                bookName = "PM S3";
                setVocab(bookName);
                setProgess(15);
                action =
                  pageNum < 15 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
              } else if (book == "Basic") {
                bookName = "PM B";

                setVocab(bookName);
                setProgess(14);
                action =
                  pageNum < 17 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
                break searching;
              } else if (
                book == "Intermediate" &&
                fullLessonName.includes("Unit") &&
                fullLessonName.includes("Lesson")
              ) {
                bookName = "Daily T (Int)";
                setVocab(bookName);
              } else if (book == "Intermediate") {
                bookName = "PM I";

                setVocab(bookName);
                setProgess(14);
                action =
                  pageNum < 20 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
                break searching;
              } else if (book == "Advanced") {
                bookName = "PM A";
                setVocab(bookName);
                setProgess(14);
                action =
                  pageNum < 20 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
                break searching;
              } else if (book == "Master") {
                bookName = "PM M";
                setVocab(bookName);
                setProgess(14);
                action =
                  pageNum < 20 ? storyAndQuestions : exercisesAndExpansion;
                action = pageNum >= totalLessonPages ? PMEnding : action;
                break searching;
              } else if (book == "Higher") {
                bookName = "BEH";
                setVocab(bookName);
                action = reRef;
                break searching;
              } else if (book.includes("Part 1")) {
                bookName = "IELTS SP";
                setVocab(bookName);
                break searching;
              } else if (book == "NOT YET DONE") {
                bookName = "BE";
                setVocab(bookName);
                break searching;
              } else if (book == "REF(第3版)" || book == "Level F") {
                bookName = "REF(第3版)";
                setVocab(bookName);
                action = reRef;
                if (lesson().includes("Review")) {
                  action = reviewedReRef;
                  progress = "reviewed";
                }
                break searching;
              } else if (book == "RE1(第3版)") {
                bookName = "RE1(第3版)";
                setVocab(bookName);
                action = reRef;
                break searching;
              } else if (book == "RE2(第3版)") {
                bookName = "RE2(第3版)";
                setVocab(bookName);
                action = reRef;
                if (lesson().includes("Review")) {
                  action = reviewedReRef;
                  progress = "reviewed";
                }

                break searching;
              } else if (book == "RE3(第3版)") {
                bookName = "RE3(第3版)";
                setVocab(bookName);
                if (lesson().includes("Review")) {
                  action = reviewedReRef;
                  progress = "reviewed";
                }
                action = reRef;
                setVocab(bookName);
                break searching;
              } else if (book == "RE4(第3版)") {
                bookName = "RE4(第3版)";
                if (lesson().includes("Review")) {
                  action = reviewedReRef;
                  setVocab(bookName);
                  progress = "reviewed";
                }
                action = reRef;
                setVocab(bookName);
                break searching;
              } else if (book == "RE5(第3版)") {
                console.log("ovde");
                bookName = "RE5";
                if (lesson().includes("Review")) {
                  action = reviewedReRef;
                  setVocab(bookName);
                  progress = "reviewed";
                }
                action = reRef;
                setVocab(bookName);
                break searching;
              } else if (book == "NOT SET YET") {
                bookName = "RE 2 Level F";
                setVocab(bookName);

                break searching;
              } else if (book == "NOT SET YET") {
                bookName = "RE 3rd PDF Level 2";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "REF(第3版)") {
                bookName = "REF";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "NOT SET YET") {
                bookName = "RE 2 Level 1";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "RE1(第2版)") {
                bookName = "RE1";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "RE2(第2版)") {
                bookName = "RE2";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "RE3(第2版)") {
                bookName = "RE3";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "RE4(第2版)") {
                bookName = "RE4";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else if (book == "Level 5") {
                bookName = "RE5";
                setVocab(bookName);
                action = reRef;

                break searching;
              } else {
                console.log("book not recognised");
              }
            }

            newLessonTitle =
              newLessonTitle.at(0).toUpperCase() + newLessonTitle.slice(1);
            newLessonTitle =
              newLessonTitle.length == 1
                ? "Letter " + newLessonTitle.toUpperCase()
                : newLessonTitle;
            vocabularyWords = vocabularyWords.replaceAll("*", "");
            vocabularyWords = vocabularyWords.trim();
            vocabularyWords =
              vocabularyWords.at(0).toUpperCase() + vocabularyWords.slice(1);
            const vocLen = vocabularyWords.length;
            while (
              vocabularyWords[vocLen - 1] == "." ||
              vocabularyWords[vocLen - 1] == ";" ||
              vocabularyWords[vocLen - 1] == ","
            ) {
              vocabularyWords = vocabularyWords.slice(0, -1);
            }

            let firstPartComment = `${rS(
              hey
            )} ${studentName}, teacher ${teacherName} here!👋 ${rS(
              intro
            )}\nToday we ${
              inCaseOf2L + progress
            } the lesson "${newLessonTitle}".\n${rS(
              action
            )}\nThe vocabulary words we covered today were:\n${vocabularyWords}.\n${rS(
              ending
            )} ${rS(goodbye)}${rS(endEmojis)}`;
            typeFirstPartComment(firstPartComment);
          });
        });
        typeSecondComment = function (comment) {
          let fixedComment = comment.replaceAll("SSS", studentName);
          textarea2().value = fixedComment;
          var event = new Event("input");
          textarea2().dispatchEvent(event);
        };
        // chrome.runtime.onMessage.addListener(function (
        //   message,
        //   sender,
        //   sendResponse
        // ) {
        //   if (message.action == "switch") {
        //     if (message.changeToGirl === true) {
        //       genderSwitched = true;
        //       typeSecondComment(cloneFemale(secondComment));
        //     } else {
        //       genderSwitched = false;
        //       typeSecondComment(secondComment);
        //     }
        //   }
        //   sendResponse();
        //   return true;
        // });
        chrome.storage.local.get(["secondComment"], function (obj) {
          secondComment = obj.secondComment;
          if (gender == "girl") {
            typeSecondComment(cloneFemale(secondComment));
            genderSwitched = true;
            chrome.runtime.sendMessage("changeSwitchToFemale");
          } else {
            chrome.runtime.sendMessage("changeSwitchToMale");
            typeSecondComment(secondComment);
            genderSwitched = false;
          }
        });
        scriptRan = true;
      } // runscript ends here
      chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
        if (message.question == "genderAndRunStatus") {
          if (genderSwitched == true) {
            sendResponse({
              gender: "girl",
              didItRun: scriptRan,
            });
          } else {
            sendResponse({
              gender: "boy",
              didItRun: scriptRan,
            });
          }
        }

        if (message.action == "go") {
          runScript();
        }
        if (message.question == "betakidName") {
          let teacherName = "";

          teacherName = getString(
            `//*[@id="vue_app"]/div/div[2]/div[1]/ul/li[4]/a/span[2]`
          );
          sendResponse({ tName: teacherName });
        }
        if (message.action == "switch") {
          chrome.storage.local.get(["secondComment"], function (obj) {
            secondComment = obj.secondComment;
            if (message.changeToGirl === true) {
              genderSwitched = true;
              typeSecondComment(cloneFemale(secondComment));
            } else {
              genderSwitched = false;
              typeSecondComment(secondComment);
            }
          });
        }
        sendResponse();
        return true;
      });
      chrome.storage.local.get(["auto"], function (action) {
        setTimeout(() => {
          if (action.auto && !isCommentDone()) {
            teacherName = getString(
              `//*[@id="vue_app"]/div/div[2]/div[1]/ul/li[4]/a/span[2]`
            );
            chrome.runtime.sendMessage(
              { question: "accStatus", tName: teacherName },
              function (res) {
                if (res) {
                  if (
                    res.userStatus == "verified user" &&
                    res.userVerified &&
                    res.msLeft > 1
                  ) {
                    runScript();
                  }
                }
              }
            );
          }
        }, 2200);
      });
    } else {
      chrome.runtime.onMessage.addListener(function (message, _, sendResponse) {
        if (message.question == "betakidName") {
          let teacherName = "";
          teacherName = getString(
            `//*[@id="vue_app"]/div/div[2]/div[1]/ul/li[4]/a/span[2]`
          );
          sendResponse({ tName: teacherName });
        }
      });
    }
  }
});
