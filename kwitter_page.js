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
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  }
  function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
   { document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot)
    { childKey = childSnapshot.key; childData = childSnapshot.val();
       if(childKey != "purpose") 
       { firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
       }});
      });
    }
    getData();

    function updatelike(message_id){
    console.log("clicked on like button-"+message_id);
    button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}


