import React from 'react';

// https://reactjs.org/docs/composition-vs-inheritance.html
// https://codepen.io/gaearon/pen/ozqNOV?editors=0010

export const CounterDial = ({ counter }) => {
    return (
        <span className="counter-obj__num">
            {counter}
        </span>
    );
};