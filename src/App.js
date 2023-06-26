

import './App.css';
import {Profile} from "./components/Profile";
import {Separator} from "./components/Separator";
import {RecentWork} from './components/RecentWork';

function App() {
  return (
    <div className="">
      <Profile/>
      <Separator/>
      <RecentWork/>
      <h1 className="text-light"></h1>
    </div>
  );
}

export default App;
