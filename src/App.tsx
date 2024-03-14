import React, { useState } from 'react';

import './App.css';
import { Cockroaches } from './components/Cockroaches/Cockroaches';
import { cnCockroaches } from './components/Cockroaches/Cockroaches.classname';
import { ResultsTable } from './components/ResultsTable/ResultsTable';

function App() {
	const [isStart, setIsStart] = useState(false);
	const [startGameTime, setStartGameTime] = useState(0);
	const [GameTime, setGameTime] = useState(0);
	const [resultsArray, setResultsArray] = useState<number[]>([]);

	const handleGameStart = () => {
		setIsStart(true);
		setStartGameTime(new Date().getTime());
	}

	const handleGameEnd = () => {
		setIsStart(false);

		const time = Math.floor((new Date().getTime() - startGameTime) / 1000);

		setGameTime(time);

		const newResult = [...resultsArray, time];
		
		setResultsArray(newResult.sort((a, b) => {return a - b}).slice(0, 3))
	}

	return (
		<div className="App">
			{(!isStart && startGameTime) ? <div>Потрачено времени: {GameTime} секунд</div> : undefined}
			{!isStart && <button className={cnCockroaches('Start')} onClick={handleGameStart}>Начать игру</button>}
			{isStart && <Cockroaches onGameEnd={handleGameEnd} />}
			{!isStart && <ResultsTable results={resultsArray} />}
		</div>
	);
}

export default App;
