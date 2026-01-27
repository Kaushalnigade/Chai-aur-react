// // function customRender(reactElement, container) {
// //     /*
// //     const domElement = document.createElement(reactElement.type)
// //     domElement.innerHTML = reactElement.children
// //     domElement.setAttribute('href', reactElement.props.href)
// //     domElement.setAttribute('target', reactElement.props.target)

// //     container.appendChild(domElement)
// //     */

// //     const domElement = document.createElement(reactElement.type)
// //     domElement.innerHTML = reactElement.children
// //     for (const prop in reactElement.props) {
// //         if(prop === 'children') continue;
// //         domElement.setAttribute(prop, reactElement.props[prop])
// //     }
// //     container.appendChild(domElement) 
// // }

// // const reactElement = {
// //     type : 'a',
// //     props: {
// //         href: 'https://google.com',
// //         target: '_blank'
// //     },
// //     children: 'Click me to visit Google'
// // }

// const anotherElement = (
//     <a href = "https://google.com" target = '_blank'> 
//     Visit Google
//     </a>
// );

// // const mainContainer = document.querySelector('#root')

// // customRender(reactElement, mainContainer)


// ReactDOM.createRoot(document.getElementById("root")).render(
//   anotherElement
// );

function customRender(reactElement, container) {
  // Step 1: Create HTML element
  const domElement = document.createElement(reactElement.type);

  // Step 2: Add text inside element
  domElement.innerHTML = reactElement.children;

  // Step 3: Add all props (attributes)
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Step 4: Append element into container
  container.appendChild(domElement);
}

// Custom React-like object
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

// Select root container
const mainContainer = document.querySelector("#root");

// Render using custom function
customRender(reactElement, mainContainer);
