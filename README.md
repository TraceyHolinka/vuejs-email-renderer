# Email Renderer

Create email friendly HTML using Vue.js, Vue Server Renderer(SSR) & MJML.

## Description

Vue.js is just plain awesome so let's use it to build HTML email and bring some joy into HTML email development.

Creating HTML email means coding for desktop and web based email clients that often don't support today's basic web standards. The solution is to code like it is 1999 and place everything in tables but unlike 1999 your emails also need to be responsive for mobile devices. Many developers turn to email frameworks like MJML to solve email client compatibility issues for them.

Let's make creating HTML emails even better by adding Vue.js to the mix. Vue.js brings data binding and easy component based development making creating HTML email painless.

## Videos

- [HTML Email with Vue.js @ Global Vue Meetup](https://youtu.be/QuEEF-QvfmU)
- [HTML Email with Vue.js @ VueDC Meetup](https://youtu.be/ZpanV5DQlbs)

## Requirements

- Node v14.15+
- npm v6.4+
- yarn 1.22+

## Project setup

``` bash
yarn install
```

## Create email using mock data

``` bash
# ouputs to dist/buildHtmlWithMockData.js
yarn dev
```

## Run unit test

``` bash
yarn test:unit
```

## Test the performance of the renderer

``` bash
node ./tests/performance/renderer.js
```

## VSCode

- Vetur
- Vue Inline Template
- Jest

## Documentation

- [Vue 2.6](https://vuejs.org/v2/guide/)
- [Vue SSR 2.6](https://ssr.vuejs.org/)
- [mjml](https://mjml.io/documentation/)
- [jest](https://jestjs.io/docs/en/api/)
