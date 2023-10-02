import { FC, createContext } from 'react';
import { Person } from './components/Person';
import {AppContextInterface} from './Interfaces';
import {HairColor} from './Enums';



const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: 'name',
    age: 24,
    isOld: true,
  }

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Person name='Name' age={24} hairColor={HairColor.Black} />
        <Person name='Name' age={24} isOld={true} hairColor={HairColor.Brown} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
