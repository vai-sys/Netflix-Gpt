
import React from 'react';
import ReactDOM from 'react-dom';


const heading = React.createElement("h1", {id: "heading"}, "React js from React world");


const rootContainer = document.getElementById('root');


const root = ReactDOM.createRoot(rootContainer);
root.render(heading);
