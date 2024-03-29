import React from 'react';
import '../styles/base.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1.5,
            border: "none"
        }}
    />
);

const LineSpacer = () => {
    return (
        <div>
            <ColoredLine color="black" />
        </div>
    );
};

export default LineSpacer;
