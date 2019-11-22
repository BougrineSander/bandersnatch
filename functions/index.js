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
    .onWrite((change, context) => {
        // Retrieve the current and previous value
      const data = change.after.data();
      const previousData = change.before.data();

      // We'll only update if the name has changed.
      // This is crucial to prevent infinite loops.
      if (previousData && data.answer == previousData.answer) return null;

      const questionId = context.params.scenarioId
      const answerId = data.answer;
    
      const answer = db.doc(`performances/demo/scenarios/${questionId}/answers/${answerId}`)
      const answerData = answer.data();
      let count = answerData.count
      if (!count) {
        count = 0;
      }
      answer.set({
          count: count + 1,
      }, {merge: true})
    });