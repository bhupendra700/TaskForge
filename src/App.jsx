import ToDo from "./Component/ToDo";
import ToDo1 from "./FireBaseComponent/ToDo";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./CSSComponent/main.css";
import "./CSSComponent/main-mediaQuery.css";
import { createContext, useEffect, useState } from "react";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Component/Firebase";

const Contest = createContext();
function App() {
  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const [random, setRandom] = useState(Math.floor(Math.random() * 10000000));

  let [user, setUser] = useState(null);

  const navigate = useNavigate();

  let [isConnected, setIsConnected] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsConnected(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.addEventListener("offline", updateOnlineStatus);
    };
  });

  useEffect(()=>{
    if(user){
      navigate("/" , {replace : true} );
    }
  },[user])
  return (
    <Contest.Provider value={{ random, setUser, isConnected }}>
        <Routes>
              <Route exact path={"/"} element={user ? <ToDo1 user={user} /> :  <ToDo />} />
              <Route exact path={"/login"} element={<Login />} />
              <Route exact path={"/signup"} element={<Signup />} />
        </Routes>
    </Contest.Provider>
  );
}

export default App;
export { Contest };
