# react-discern-top-navbar

## Installation

```
npm install react-discern-top-navbar
```

## Basic Usage

```js
import TopDiscerningNavbar from "react-discern-top-navbar"

function App() {
  return <TopDiscerningNavbar><TopDiscerningNavbar/>
};
```

## Default Styles

The TopDiscerningNavbar may be passed a style object or a base className and topClassName so you can style this component as you would like. **_I hight recommend using the style object or className and topClassName_**. However, if you choose not to pass a style object or className and topClassName, these are your default styles for the component.

```js
const defaultStyle = {
  height: "66px",
  width: "100vw",
  backgroundColor: "grey",
  position: "fixed"
};

const defaultTopStyle = {
  height: "66px",
  width: "100vw",
  backgroundColor: "white",
  position: "fixed"
};
```

The default styles are really just intended to give you a reference point for when uou first start woking with the package.

## Passing Props

These styles can be overwritten if you pass in props! TopDiscerningNavbar accepts six (6) different options as props:

| Prop                   | Prop Type | Purpose                                                                               |
| ---------------------- | --------- | ------------------------------------------------------------------------------------- |
| **className**          | String    | Assign a className to the navbar                                                      |
| **topClassName**       | String    | Assign a className to the navbar when it is at the top of the page                    |
| **height**             | Number    | Assign a height to style of the the navbar in px                                      |
| **width**              | Number    | Assign a width to style of the the navbar in vw                                       |
| **backgroundColor**    | String    | Assign a backgruondColor to the style of the navbar                                   |
| **topBackgroundColor** | String    | Assign a backgruondColor to the style of the navbar when it is at the top of the page |

---

Note: If you are declaring a topClassName, you need to declare a className as well

## Advanced Usage/Passing Props

- If you pass in a style object or className/topClassName, `height`, `width`, `backgroundColor` and `topBackgroundColor` will be ignored.
- Passing in a className with no topClassName will give the component the className that you pass it.
- If you have a passed a className and a topClassName, the component at the top of the page will receive a className of both, (e.g., `className="hello" topClassName="world"` the component will receive a className of `"hello world"`) if you are not at the top of the page, it will only receive the className of `"hello"`.
- Passing in a style object and className will behave the way you would expect with any other element (i.e., the className will be over-written by any styles that )

---
### Passing in classNames

```js
import TopDetectingNavbar from "react-discern-top-navbar";

function App() {
  return (
    <TopDiscerningNavbar className="hello" topClassName="world">
      <h1>Your content here</h1>
    </TopDiscerningNavbar>
  );
}
```

className at the top of the page will be `"hello world"`

className anywhere else on the page will be `"hello"`

---

### Passing in style object

```js
import TopDiscerningNavbar from "react-discern-top-navbar";

function App() {
  return (
    <TopDiscerningNavbar
      style={{ backgroundColor: "red", height: "70px", width: "100vw" }}
    >
      <h1>Your content here</h1>
    </TopDiscerningNavbar>
  );
}
```

---

### Passing in style props

```js
import TopDiscerningNavbar from "react-discern-top-navbar";

function App() {
  return (
    <TopDiscerningNavbar
      height={66}
      width={100}
      backgroundColor="red"
      topBackgroundColor="blue"
    >
      <h1>Your content here</h1>
    </TopDiscerningNavbar>
  );
}
```

---

### Template

Template for react npm packages provided by [flexdinesh](https://github.com/flexdinesh/react-npm-package-boilerplate) on github.

## License

react-discern-top-navbar is MIT licensed