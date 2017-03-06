[![Build Status](https://travis-ci.org/nodemolar/handsome-react.svg?branch=master)](https://travis-ci.org/nodemolar/handsome-react)

#Installation

### NPM
```
npm install handsome-react --global
```
### Yarn
```
yarn global add handsome-react
```

#Component
## Proposal
- [x] If
- [ ] Switch Case
- [ ] Try Catch

##If
Make condition syntax in React Component read easier

### Example

From

```jsx
const Example = ({condition})=>
  <div>
    {(condition)?
      <div>True</div>:
      <div>False</div>
    }
  </div>
```

Into
```jsx
import {If,Else} from 'handsome-react';
const Example = ({condition}) =>
  <If condition={condition}>
    <Then> <span>True</span> </Then>
    <Else> <span>False</span> </Else>
  </If>
```

This feature supports else if as well

```jsx
const Example = ({value}) =>
  <If condition={value==1}>
    <Then> <span>True</span> </Then>
    <Elif condition={value==2}></Elif>
    <Elif condition={value==3}></Elif>
    <Else> <span>False</span> </Else>
  </If>
```

You can also use only if without then and else, The component will render when condition is true

```jsx
const Example = ({condition}) =>
  <If condition={condition} >
    <span>True</span>
  </If>
```

