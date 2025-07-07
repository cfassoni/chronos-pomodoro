import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        provident iusto error dolore pariatur voluptatum fuga consectetur harum
        quo nulla, nostrum accusantium tempora alias voluptate. Odio sequi aut
        deserunt rem.
      </p>
    </>
  );
}
