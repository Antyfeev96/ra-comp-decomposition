import './App.scss';
import Adv from './Components/Adv-Folder/Adv/Adv';
import Block from './Components/Block-Folder/Block/Block';
import Blocks from './Components/Block-Folder/Blocks/Blocks';
import BlockText from './Components/Block-Folder/BlockText/BlockText';
import BlockTextIcon from './Components/Block-Folder/BlockTextIcon/BlockTextIcon';
import BlockTimestamp from './Components/Block-Folder/BlockTimestamp/BlockTimestamp';
import BlockTitle from './Components/Block-Folder/BlockTitle/BlockTitle';
import BlockWeather from './Components/Block-Folder/BlockWeather/BlockWeather';
import Form from './Components/Form-Folder/Form/Form';
import News from './Components/News-Folder/News/News';
import Service from './Components/Service-Folder/Service/Service';

const LIVES = [
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

const POPULAR = [
  {
    name: 'Недвижимость',
    channel: 'о сталинках'
  },
  {
    name: 'Маркет',
    channel: 'люстры и светильники'
  },
  {
    name: 'Авто.ру',
    channel: 'привод 4х4 до 500000'
  }
]

const PROGRAMMS = [
  {
    timestamp: '02:00',
    name: 'Хоббит, или Туда и обратно',
    channel: 'Кино-ТВ'
  },
  {
    timestamp: '02:15',
    name: 'Челси - Манчестер Сити',
    channel: 'Матч-ТВ'
  },
  {
    timestamp: '02:30',
    name: 'Очумелые ручки',
    channel: 'ОРТ'
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
          <BlockTitle title="Посѣщаемое"></BlockTitle>
          {POPULAR.map((site, index) => <BlockText key={index + 10}><div><b>{site.name}</b> — {site.channel}</div></BlockText>)}
        </Block>
        <Block>
          <BlockTitle title="Карта Россіи"></BlockTitle>
          <BlockText><a href="https://goo.gl/maps/1GxxdN6HSX5kgqiM8">Ссылка на карту России</a></BlockText>
        </Block>
        <Block>
          <BlockTitle title="Телепрограмма"></BlockTitle>
          {PROGRAMMS.map((programm, index) => <BlockText key={index}><BlockTimestamp {...programm}></BlockTimestamp><span>{programm.name}</span><span>{programm.channel}</span></BlockText>)}
        </Block>
        <Block>
          <BlockTitle title="Эѳиръ" />
          {LIVES.map((show, index) => <BlockText key={index}><BlockTextIcon /><span>{show.name}</span><span>{show.channel}</span></BlockText>)}
        </Block>
      </Blocks>
    </div>
  );
}