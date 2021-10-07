import React from 'react';
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

function App() {
	const [list, setList] = useState<Item[]>([
		{
			id: 1,
			name: 'Blablablablabla',
			done: false
		},

		{
			id: 2,
			name: 'Lalalalalalalala',
			done: true
		}
	]);
  return (
    <div>
      < C.Container>
      	<C.Area>
      		<C.Header>Lista de Tarefa</C.Header>
      		{list.map((item, index)=>(

      			<ListItem key={index} item={item} />
      		))}
      	</C.Area>
      </C.Container>
    </div>
  );
}

export default App;
