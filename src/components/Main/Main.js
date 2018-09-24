import React from 'react';

const Main = (props) => {
    return (
        <main className="flex flex-justify-between flex-align-center">
        	{props.children}
        </main>
    );
};

export default Main;
