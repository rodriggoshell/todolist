import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
	onEnter: (tasNake: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
	const [inputText, setinputText] = useState('');

	const handleKeyUp = (e:KeyboardEvent) => {
		if(e.code === 'Enter' && inputText !== '') {
			onEnter(inputText);
			setinputText('');
		}
	}

	return(
		<C.Container>
			<div className="image">+</div>
			<input type="text"
				placeholder="Add tarefa"
				value={inputText}
				onChange={e=>setinputText(e.target.value)}
				onKeyUp={handleKeyUp}
			/>
		</C.Container>
	);
}