firebaseConfig = {
  apiKey: "AIzaSyAZYFROHn2i6N178CTME4q_kYk8CFMQHgE",
  authDomain: "social-media-b108e.firebaseapp.com",
  databaseURL: "https://social-media-b108e-default-rtdb.firebaseio.com",
  projectId: "social-media-b108e",
  storageBucket: "social-media-b108e.appspot.com",
  messagingSenderId: "468892590599",
  appId: "1:468892590599:web:e55bfc159a1907c71c80a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  
    window.location = "let's chat_room.html";
}

