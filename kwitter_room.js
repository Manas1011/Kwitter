
var  firebaseConfig = {
      apiKey: "AIzaSyAQ4WfH8u6bOovhyQ_QM2zliQo1Dvy64wc",
      authDomain: "kwitter1-c95f2.firebaseapp.com",
      databaseURL:"https://kwitter1-c95f2-default-rtdb.firebaseio.com",
      projectId: "kwitter1-c95f2",
      storageBucket: "kwitter1-c95f2.appspot.com",
      messagingSenderId: "1024332994134",
      appId: "1:1024332994134:web:f76a4a4f7cefb43f3acdf7",
      measurementId: "G-LHWX25WJCS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    
    
    
    user_name=localStorage.getItem("name");
    document.getElementById("user_name").innerHTML="Welcome   "+user_name+"!";
  

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+Room_names)
        row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

