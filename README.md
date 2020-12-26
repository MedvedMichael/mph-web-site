# MPH's WEB SITE
## Welcome!
My name is Medvediev Michael, and it is [my own website portfolio with integrated blog](https://mph-web-site.vercel.app/)

# Getting Started

First, install dependencies and run the development server:

```bash
npm install && npm run dev
# or
yarn install && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Technologies
- [React](https://ru.reactjs.org/) + [Next.js](https://nextjs.org/) 
- [styled-components](https://styled-components.com/) for styling
- [TypeScript](https://www.typescriptlang.org/)
- [`react-visibility-sensor`](https://www.npmjs.com/package/react-visibility-sensor)
- [`react-spring`](https://www.react-spring.io/) for animations
- [Google Firebase](https://firebase.google.com/?hl=ru) for storing data
- [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/)/[react-test-renderer](https://ru.reactjs.org/docs/test-renderer.html)


## Features added
- Dark Mode feature using `styled-components`
- Blog (data stores on Firebase, images are hosting on [imgbb.com](https://imgbb.com/))
- Animations that trigger on first appear on the screen (see [`VisibilityContainer`](https://github.com/MedvedMichael/mph-web-site/blob/master/components/visibility-container/visibility-container.tsx))
- The important part of the code is covered by tests on Jest + Enzyme/react-test-renderer
- Parallax animation using only CSS


## `VisibilityContainer`
This module is fully reusable for all animations that should trigger on first appear.
It is based on `react-spring` and `react-visibility-sensor` libraries so in order to use this module you should install them as dependencies.
```bash
npm install react-spring react-visibility-sensor
# or
yarn add react-spring react-visibility-sensor
```

Then, `VisibilityContainer` component can be used in React code anywhere.
```js
const config = {
    from: { transform: 'translate3d(-1rem, 0, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 }
}
return <VisibilityContainer {...config}>{/*some children*/}</VisibilityContainer>
```

To learn more about which CSS attributes it can animate, follow the [link](https://www.react-spring.io/docs/hooks/api).


# Deployment
This site was successfully deployed on the platform [Vercel](https://vercel.com/) with all necessary attachments and configs.


Rate [my website]((https://mph-web-site.vercel.app/)) and have fun!