import './App.scss';
import News from './Components/News-Folder/News/News';
import Service from './Components/Service-Folder/Service/Service';

export default function App() {
  return (
    <div className="app">
      <News />
      <Service />
    </div>
  );
}