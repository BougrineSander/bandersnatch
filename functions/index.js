const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.incrementAnswerCount = functions.firestore
    .document('performances/demo/scenarios/{scenarioId}/selected/{userId}')
    .onWrite(async (change, context) => {
        // Retrieve the current and previous value
      const data = change.after.data();
      const previousData = change.before.data();

      // We'll only update if the name has changed.
      // This is crucial to prevent infinite loops.
      if (previousData && data.answer == previousData.answer) return null;

      const questionId = context.params.scenarioId
      const answerId = data.answer;
      console.log("questionId", questionId)
      console.log("answerId", answerId);
    
      // current
      const answerRef = db.doc(`performances/demo/scenarios/${questionId}/answers/${answerId}`)
      let count = await countAnswers(questionId, answerId)
      answerRef.set({
          count: count,
      }, {merge: true})
      
      console.log('prvious data', previousData)

      if(previousData) {
        // recount previous
        const previousAnswerId = previousData.answer;
      const answerRefPrevious = db.doc(`performances/demo/scenarios/${questionId}/answers/${previousAnswerId}`)
      let countPrevious = await countAnswers(questionId, previousAnswerId)
      answerRefPrevious.set({
          count: countPrevious,
      }, {merge: true})
      }
      
    });

    const countAnswers = async (questionId, answerId) => {
        const snap = await db
            .collection(`performances/demo/scenarios/${questionId}/selected`)
            .get()
        let count = 0;
        snap.forEach(doc => {
            if(doc.data().answer == answerId) {
                count++;
            }
        })
        return count;

    }