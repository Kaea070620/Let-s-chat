//ADD YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "let's chat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; //kingsroom
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; //dg(o).in +row
    });
  });

}

getData();

function redirectToRoomName(name) // 
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "let's chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "let's chat.html"

}