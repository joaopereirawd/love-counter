
/**
 * Module dependencies.
 */

import '../scss/counter-obj.scss';
import "antd/dist/antd.css";
import { Button } from "antd";
import { CounterObj } from '../components/counter-obj';
import React, { Component } from 'react';
import Reward from 'react-rewards';

/**
 * Export `Counter`.
 */

export default class Counter extends Component {

    /**
     * State.
     */

    state = {
        animationIn: false,
        counter: 0,
        maxCount: 10,
        minCount: 0,
        resetBtn: false
    }

    /**
     * Handle reset.
     */

    handleReset = () => {
        const { minCount: counter } = this.state;
        this.setState({ counter });
    }

    /**
     * Handle increment.
     */

    handleIncrement = () => {
        // Destructuring.
        const { counter, maxCount } = this.state;
        const counterNewVal = counter < maxCount ? counter + 1 : maxCount;

        // Update state.
        this.setState({
            counter: counterNewVal,
            resetBtn: true,
            animationIn: true
        });
    }

    /**
     * Handle decrement.
     */

    handleDecrement = () => {
        const { counter, minCount } = this.state;
        const newMinVal = counter > minCount ? counter - 1 : minCount;

        this.setState({
            counter: newMinVal,
            animationIn: false
        });
    }

    /**
     * Render.
     */

    render() {
        const { animationIn, counter, resetBtn } = this.state;

        return (
            <div className={'counter-wrapper'}>
                <CounterObj
                    animationIn={animationIn}
                    counter={counter}
                />

                <div className={'button-group'}>
                    <Button
                        className={'button-group__btns add-btn'}
                        onClick={this.handleIncrement}
                        type={'primary'}
                    >
                        <span>{'+'}</span>
                    </Button>

                    <Button
                        className={'button-group__btns dec-btn'}
                        onClick={this.handleDecrement}
                        type={'primary'}
                    >
                        <span>{'-'}</span>
                    </Button>

                    <div
                        className={'reset-btn'}
                        onClick={this.handleReset}
                        style={{ visibility: `${resetBtn !== false ? 'visible' : 'hidden'}` }}
                    >
                        <span>{'Reset'}</span>
                    </div>
                </div>
            </div>
        );
    }

}

