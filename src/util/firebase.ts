import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCB2MuNmBItaFG1Lm1zOzo0QUF9UYGWtzE',
  authDomain: 'mindfulness-app-17ce5.firebaseapp.com',
  projectId: 'mindfulness-app-17ce5',
  storageBucket: 'mindfulness-app-17ce5.appspot.com',
  messagingSenderId: '849302436922',
  appId: '1:849302436922:web:9ad9cdadb21ea2b8430903',
  measurementId: 'G-F6LM5K9GEG'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
