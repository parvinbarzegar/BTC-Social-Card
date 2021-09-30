import UsersProfile from './pages/UsersProfile';
import './App.css';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer/>
      <UsersProfile/>
      </header>
      
    </div>
  );
}

export default App;
