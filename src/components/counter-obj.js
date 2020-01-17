import React from 'react';
import { CounterDial } from '../components/counter-dial';

export const CounterObj = function (props) {
    return (
        <div className="counter-obj">

            <div className="counter-obj__heart counter-obj__heart--pink">
                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9445 3.4901C26.3499 -0.919261 19.8934 -1.15023 15.9991 2.7953C12.1049 -1.15023 5.64843 -0.919261 2.05564 3.4901C-1.07746 7.33446 -0.514143 13.059 2.96373 16.5827L14.6672 28.4402C15.4038 29.1866 16.5964 29.1866 17.3311 28.4402L29.0346 16.5827C32.5143 13.059 33.0776 7.33446 29.9445 3.4901Z" fill="#EF8383" />
                </svg>
            </div>

            <div className="counter-obj__heart counter-obj__heart--white">
                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9445 3.4901C26.3499 -0.919261 19.8934 -1.15023 15.9991 2.7953C12.1049 -1.15023 5.64843 -0.919261 2.05564 3.4901C-1.07746 7.33446 -0.514143 13.059 2.96373 16.5827L14.6672 28.4402C15.4038 29.1866 16.5964 29.1866 17.3311 28.4402L29.0346 16.5827C32.5143 13.059 33.0776 7.33446 29.9445 3.4901Z" fill="#FFFFFF" />
                </svg>
            </div>

            <CounterDial>
                {props.counter}
            </CounterDial>

            {props.children}
        </div>
    );
};