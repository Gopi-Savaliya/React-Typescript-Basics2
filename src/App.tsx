import './App.css';
import Profile from './components/auth/Profile';
import Private from './components/auth/Private';
import Counter from './components/class/Counter';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import MsgPosition from './components/templateLiterals/MsgPosition';
import Button from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <h1>class folder</h1>
      <Counter message='Count Value:' />
      <hr/>

      <h1>auth folder</h1>
      <Private isLoggedIn={true} component={ Profile } />
      <hr/>

      <h1>generics folder</h1>
      <List items={['XYZ', 'ABC']} onClick={(item) => console.log(item) } />
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item) } /> */}
      <hr/>
      
      <h1>restriction folder</h1>
      <RandomNumber value={100} isPositive />
      <hr/>

      <h1>templateliterals folder</h1>
      <MsgPosition position='center' />
      <hr/>

      <h1>html folder</h1>
      <Button variant='primary'>Click Me</Button>
      <CustomComponent name='XYZ' />
      <hr/>

      <h1>polymorphic filder</h1>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='ID' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
