import React, { useState } from 'react';

import './App.css';
import { Cockroaches } from './components/Cockroaches/Cockroaches';
import { cnCockroaches } from './components/Cockroaches/Cockroaches.classname';
import { ResultsTable } from './components/ResultsTable/ResultsTable';

function App() {
	const [isStart, setIsStart] = useState(false);
	const [startGameTime, setStartGameTime] = useState(0);
	const [resultsArray, setResultsArray] = useState<number[]>([]);

	const onGameStart = () => {
		setIsStart(true);
		setStartGameTime(new Date().getTime());
	}

	const onGameEnd = () => {
		setIsStart(false);

		const time = Math.floor((new Date().getTime() - startGameTime) / 1000);

		setStartGameTime(time);
		setResultsArray(prev => [...prev, time]);
	}

	return (
		<div className="App">
			{(!isStart && startGameTime) ? <div>Потрачено времени: {startGameTime} секунд</div> : undefined}
			{!isStart && <button className={cnCockroaches('Start')} onClick={onGameStart}>Начать игру</button>}
			{isStart && <Cockroaches onGameEnd={onGameEnd} />}
			{!isStart && <ResultsTable results={resultsArray} />}
		</div>
	);
}

export default App;
