import "./stylesheets/Variables.css";
import "./stylesheets/Custom.css";
import "./stylesheets/Reset.css";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <section className="main-container">
      <div className="semi-circle"></div>
      <div className="row main-container-shadow">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-5">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default App;
