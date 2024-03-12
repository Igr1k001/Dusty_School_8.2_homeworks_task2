import React from 'react';

import './ResultsTable.css';

import { cnResultsTable } from './ResultsTable.classname';

export interface IResultsTableProps {
    results: number[];
}

export const ResultsTable: React.FC<IResultsTableProps> = ({ results }) => {
    return (
        <div className={cnResultsTable()}>
            <div>Лучшие результаты:</div>
            {results.sort((a, b) => {return a - b}).slice(0, 3).map(item => (
                <div>{item}</div>
            ))}
        </div>
    );
}
