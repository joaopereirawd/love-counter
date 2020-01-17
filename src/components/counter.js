//https://reactjs.org/docs/state-and-lifecycle.html

import React from 'react';
import { Button } from "antd";
import "antd/dist/antd.css";
// A partir da raiz.
import '../scss/counter-obj.scss';
import Reward from 'react-rewards';

// Destructuring.
import { CounterObj } from '../components/counter-obj';

export default class Counter extends React.Component {

    /**
     * State.
     */

    state = {
        counter: 0,
        maxCount: 10,
        minCount: 0,
        resetBtn: false
    }

    /**
     * Handle reset.
     */

    handleReset = () => {
        this.setState(state => ({
            counter: state.minCount
        }));
    }

    /**
     * Animation in.
     */

    animationIn = () => {

        const num = document.querySelector('.counter-obj__num'),
            bg = document.querySelector('.counter-obj'),
            pinkHeart = document.querySelector('.counter-obj__heart--pink'),
            whiteHeart = document.querySelector('.counter-obj__heart--white');

        num.classList.add("show");
        bg.classList.add("animated-in");
        pinkHeart.classList.add('hide');
        whiteHeart.classList.add('show');
    }

    animationOut = () => {
        const num = document.querySelector('.counter-obj__num'),
            bg = document.querySelector('.counter-obj'),
            pinkHeart = document.querySelector('.counter-obj__heart--pink'),
            whiteHeart = document.querySelector('.counter-obj__heart--white');

        num.classList.add("show");
        pinkHeart.classList.remove('hide');
        whiteHeart.classList.remove('show');
        bg.classList.remove("animated-in");
    }

    handleIncrement = () => {
        // Destructuring
        const { counter, maxCount } = this.state;
        const counterNewVal = counter < maxCount ? counter + 1 : maxCount;

        this.animationIn();

        this.setState({
            counter: counterNewVal,
            resetBtn: true
        });

        console.log(this.state.counter);

        //confetti explosion
        if (this.state.counter === 9) {
            this.reward.rewardMe();
        }
    }

    handleDecrement = () => {

        this.setState(state => ({
            //counter: this.state.counter - 1, 
            counter: state.counter > state.minCount ? state.counter - 1 : state.minCount
        }));

        this.animationOut();

    }

    render() {
        return (
            <div className="counter-wrapper">

                <CounterObj counter={this.state.counter}>
                    <Reward
                        ref={(ref) => { this.reward = ref }}
                        type='confetti'
                    >
                    </Reward>
                </CounterObj>

                <div className="button-group">
                    <Button
                        className="button-group__btns add-btn"
                        type="primary"
                        onClick={this.handleIncrement}
                    >
                        <span>+</span>
                    </Button>

                    <Button
                        className="button-group__btns dec-btn"
                        type="primary"
                        onClick={this.handleDecrement}
                    >
                        <span>-</span>
                    </Button>

                    <div
                        className="reset-btn"
                        onClick={this.handleReset}
                        style={{ visibility: `${this.state.resetBtn !== false ? 'visible' : 'hidden'}` }}
                    >
                        <span>Reset</span>
                    </div>
                </div>
            </div>
        );
    }
}

