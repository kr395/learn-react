import "./App.css";
import "./UserGreeting.css";
import Header from "./Header.jsx";
import User from "./User.jsx";
import UserGreeting from "./UserGreeting.jsx"


export default function App() {
  return (
    <>
      <UserGreeting isLoggedIn ={false} username = "Gopal" />
      <Header />
      <User
        imgLink="https://i.pravatar.cc/150?img=54"
        name="Gopal"
        age={20}
        city="Kolkata"
        likeCount={520}
        dislikeCount={3}
      />
      <User
        imgLink="https://i.pravatar.cc/150?img=52"
        name="Sujay"
        age={26}
        city="Delhi"
        likeCount={50}
        dislikeCount={13}
      />
    </>
  );
}
