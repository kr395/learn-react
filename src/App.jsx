import "./App.css";
import Header from "./Header.jsx";
import User from "./User.jsx";


export default function App() {
  return (
    <>
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
