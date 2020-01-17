
/**
 * Module dependencies.
 */

import React from 'react';

/**
 * Export `CounterDial`.
 */

export const CounterDial = ({ counter, animationIn }) => (
    <span className={`counter-obj__num ${animationIn ? 'show' : ''}`}>
        {counter}
    </span>
);
