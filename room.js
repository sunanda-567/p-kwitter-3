// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBd5y7hcnaAKoEYXLfl1ry6QTgxLYNag60",
  authDomain: "p-kwitter-d7ffc.firebaseapp.com",
  projectId: "p-kwitter-d7ffc",
  storageBucket: "p-kwitter-d7ffc.appspot.com",
  messagingSenderId: "190350354589",
  appId: "1:190350354589:web:a0a29943c6b39e1ff74c74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
  });

  localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
 
{
  document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function log_out()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}