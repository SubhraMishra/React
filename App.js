const heading=React.createElement("h1",{id:"heading"},"Hello World from React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>hi i am tag</h1>
    </div>
</div> */}

// this is how we can create this in react

const heading2=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
[React.createElement("h1",{id:"heading2"},"I am h1 tag inside a nested code"),             //this is how we can create siblings by using []
React.createElement("h2",{id:"heading3"},"I am h2 tag inside a nested code")],
[React.createElement("h1",{id:"heading2"},"I am h1 tag inside a nested code"),             //this is how we can create siblings by using []
React.createElement("h2",{id:"heading3"},"I am h2 tag inside a nested code")]]));
root.render(heading2);