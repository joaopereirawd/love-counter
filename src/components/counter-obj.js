
/**
 * Module dependencies.
 */

import { CounterDial } from '../components/counter-dial';
import pinkHeart from '../img/heart-pink.svg';
import React from 'react';
import Reward from 'react-rewards';
import whiteHeart from '../img/heart-white.svg';

/**
 * Export `CounterObj`.
 */

export const CounterObj = ({ counter, animationIn }) => {
    const explosion = ref => {
        const reward = ref;

        if (reward && counter === 10) {
            const { rewardMe } = reward;

            rewardMe();
        }
    }

    return (
        <div className={`counter-obj ${animationIn ? 'animated-in' : ''}`}>
            <div className={`counter-obj__heart counter-obj__heart--pink ${animationIn ? 'hide' : ''}`}>
                <img src={pinkHeart} alt="" />
            </div>

            <div className={`counter-obj__heart counter-obj__heart--white ${animationIn ? 'show' : ''}`}>
                <img src={whiteHeart} alt="" />
            </div>

            <CounterDial
                counter={counter}
                animationIn={animationIn}
            />

            <Reward
                ref={explosion}
                type={'confetti'}
            />
        </div>
    )
};