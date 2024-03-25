/*
**  <div id="parent">
**  
**      <div id="children">
**         <h1>I am h1</h1>
           <h2>I am h2</h2>
**      </div>

        <div id="children2">
           <h1>I am h1</h1>
           <h2>I am h2</h2>
      </div>
     
** </div>
** ReactElement(obj)=>HTML (Browser understands);
*/

const parent=React.createElement
(
   "div",
   {id:"parent"},
   [React.createElement("div",{id:"children"},[
    React.createElement("h1",{},"I am h1 tag of react"),
    React.createElement("h2",{},"I am h2 tag")]
    
  ),React.createElement("div",{id:"children2"},[
    React.createElement("h1",{},"I am h1 tag of react"),
    React.createElement("h2",{},"I am h2 tag")]
  )]
);
    
    
    
    
    
// const heading = React.createElement
// ("h1",
// {id:"heading",xyz:"abc"},
// "hello world from react!"
// );
console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


