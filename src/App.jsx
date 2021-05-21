import './App.scss';
import Adv from './Components/Adv-Folder/Adv/Adv';
import Block from './Components/Block-Folder/Block/Block';
import Blocks from './Components/Block-Folder/Blocks/Blocks';
import BlockText from './Components/Block-Folder/BlockText/BlockText';
import BlockTimestamp from './Components/Block-Folder/BlockTimestamp/BlockTimestamp';
import BlockTitle from './Components/Block-Folder/BlockTitle/BlockTitle';
import BlockWeather from './Components/Block-Folder/BlockWeather/BlockWeather';
import Form from './Components/Form-Folder/Form/Form';
import News from './Components/News-Folder/News/News';
import Service from './Components/Service-Folder/Service/Service';

const PROGRAMMS = [
  {
    name: 'Управление как искусство',
    channel: 'Успех'
  },
  {
    name: '8-16',
    channel: 'Матч-ТВ'
  },
  {
    name: 'Гарри Поттер',
    channel: 'Кино-ТВ'
  }
]

export default function App() {
  return (
    <div className="app">
      <News />
      <Service />
      <Form />
      <Adv />
      <Blocks>
        <Block>
          <BlockTitle title="Погода"></BlockTitle>
          <BlockWeather temperature={17} />
        </Block>
        <Block>
          <BlockTitle title="Карта Россіи"></BlockTitle>
          <BlockText><a href="https://goo.gl/maps/1GxxdN6HSX5kgqiM8">Ссылка на карту России</a></BlockText>
        </Block>
        <Block>
          <BlockTitle title="Эѳиръ" />
          {PROGRAMMS.map((programm) => <BlockText><span>{programm.name}</span><span>{programm.channel}</span></BlockText>)}
        </Block>
        <Block>
          <BlockTitle title="Посѣщаемое"></BlockTitle>
        </Block>
        <Block>
          <BlockTitle title="Телепрограмма"></BlockTitle>
        </Block>
      </Blocks>
    </div>
  );
}