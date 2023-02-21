import logo from './logo.svg';
import './App.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div className="App">
    <AppRouter/>
    </div>
  );
}

export default App;
