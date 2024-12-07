// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe85RnbnL1E1VAKMgzh-cIt6U0BVT9tGc",
    authDomain: "veridedektifi-83cb4.firebaseapp.com",
    projectId: "veridedektifi-83cb4",
    storageBucket: "veridedektifi-83cb4.firebasestorage.app",
    messagingSenderId: "123620222243",
    appId: "1:123620222243:web:abacd1c61297a365db5896",
    measurementId: "G-6FWH0PM28C"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Tab Management
function openForm(evt, formName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tabbuttons = document.getElementsByClassName("tab-button");
  
    // Tüm içerikleri gizle
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
  
    // Tüm sekme butonlarından "active" sınıfını kaldır
    for (let i = 0; i < tabbuttons.length; i++) {
      tabbuttons[i].classList.remove("active");
    }
  
    // Tıklanan sekme ve içeriği aktif yap
    document.getElementById(formName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  

document.getElementById("defaultOpen").click();

// Login Functionality
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Giriş başarılı!");
      console.log("Kullanıcı:", userCredential.user);
      // Redirect to welcome page
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      alert("Giriş başarısız: " + error.message);
      console.error(error);
    });
});

// Signup Functionality
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Kayıt başarılı!");
      console.log("Yeni kullanıcı:", userCredential.user);
      // Redirect to welcome page
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      alert("Kayıt başarısız: " + error.message);
      console.error(error);
    });
});
  