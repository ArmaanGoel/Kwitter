// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDff_vdJ1EUFG3zOyhFocZFm6QRiszJylo",
      authDomain: "practice-9fc93.firebaseapp.com",
      databaseURL: "https://practice-9fc93-default-rtdb.firebaseio.com",
      projectId: "practice-9fc93",
      storageBucket: "practice-9fc93.appspot.com",
      messagingSenderId: "191175548057",
      appId: "1:191175548057:web:6542f4a26a609e5731ec08"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome: "+ user_name + "!";
function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room"
})
localStorage.setItem("room_name" , room_name)
window.location = "kwitter_page.html"


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name" , name)
window.location="kwitter_page.html"
}
function logout() {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}

