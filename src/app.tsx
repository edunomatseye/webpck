import React from "react";

const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <h5>Homepage</h5>
            <h3>This is suppose to be the web-app</h3>
            <span>{count}</span>
        </>
    )
}

export default App;