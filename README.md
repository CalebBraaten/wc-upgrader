# WC-Upgrader

WC-Upgrader is a JS Utility that 'upgrades' elements to the specified custom element when they are defined. 

![Example gif](./example.gif)
1. **Basic Header:** This is just an h1 element
2. **Flash Header:** This is using the custom element directly. There is just a text node until the custom element is defined so it renders with no styles or semantic meaning. 
3. **Basic Header Upgraded (Delay):** This is an h1 element that gets upgraded to the custom element when it is defined in the browser. In the demo there is a setTimeout to demonstrate how it is less disruptive to upgrade an element rather than have a text node to start. 

## Installation

```
npm install wc-upgrader
```

## Usage

```javascript
import wcUpgrader from 'node_modules/wc-upgrader/wc-upgrader.mjs'

const Upgrader = new wcUpgrader();

Upgrader.upgradeOnDefined('custom-element', 'CSSSelector');
```
*Technically speaking, this just makes a new element and moves the children from the old tree under it. You could use this to change an arbitrary element into another one and retain it's children.

\**The custom element does not need to be defined immediately but it will need to be at some point or there will just be a hanging async task

## Demo
To try the demo file yourself do the following steps.
1. Clone the Repo
2. Run ```npm install``` to get the sample web component *Flashy-Header*
3. Use something like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to view demo.html (wc-upgrader is a module so you'll get a CORS error if you don't)

## Contributing
Feedback and pull requests are welcome! Please open issues so we can discuss any feature ideas or bugs found. 

## License
[MIT](https://choosealicense.com/licenses/mit/)