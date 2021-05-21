import './App.scss';
import Form from './Components/Form-Folder/Form/Form';
import News from './Components/News-Folder/News/News';
import Service from './Components/Service-Folder/Service/Service';

export default function App() {
  return (
    <div className="app">
      <News />
      <Service />
      <Form />
    </div>
  );
}