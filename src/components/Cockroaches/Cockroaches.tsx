import React, { useState } from 'react';

import './Cockroaches.css';

import { cnCockroaches } from './Cockroaches.classname';

export interface ICockroachesProps {
    onGameEnd: () => void;
}

type Cockroache = {
    id: number,
    x: number,
    y: number
}

const initCockroaches = (): Cockroache[] => {
    const cockroaches: Cockroache[] = [];

    for (let i = 0; i < 10; i++) {
        let x;
        let y;

        x = Math.floor(Math.random() * 600);
        y = Math.floor(Math.random() * 600);

        cockroaches.push({
            id: i,
            x: x,
            y: y
        });
    }

    return cockroaches;
}

export const Cockroaches: React.FC<ICockroachesProps> = ({ onGameEnd }) => {
    const [cockroaches, setCockroaches] = useState<Cockroache[]>(initCockroaches);

    const getDeleteCockroacheHandler = (id: number) => {
        return () => {
            if (cockroaches.length - 1 === 0) {
                onGameEnd();
            }

            setCockroaches(cockroaches.filter(prev => prev.id !== id));
        }
    }
    return (
        <div className={cnCockroaches()}>
            {cockroaches.map(cockroache => 
                <span 
                    className={cnCockroaches('One')} 
                    onClick={getDeleteCockroacheHandler(cockroache.id)} 
                    key={cockroache.id} 
                    style={{top: cockroache.y, left: cockroache.x}}
                >🪳</span>
            )}
        </div>
    );
}
