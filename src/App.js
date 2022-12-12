import store from "./Redux-store/store";
import { Provider } from "react-redux";
import "./styles.css";
import Counter from "./counter";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
