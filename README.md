# Dark

> An opinionated, light-dark-themed Next.js & Chakra UI GitHub repository template.

> This is a NextJS with Chakra-ui starter kit
>
> Thank you to [Kahlil](https://github.com/kahlil/dark) for the inspiration. I've started by forking the repo and
> ended up making quite some changes.
>
> I've added eslint and prettier from
> [paulintrognon.fr](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js).
> I've also added [Cypress](https://cypress.io) for **E2E** tests and code coverage with **Istanbul** and **NYC**.

## Getting Started

1. Generate a repository with this template by clicking on the "Use this template" button on the top right or on
   [https://github.com/alveshelio/next-chakra-ui-starter-kit/generate]https://github.com/alveshelio/next-chakra-ui-starter-kit/generate)
2. Clone your new repository
3. Install dependencies `yarn`
4. Start the server `yarn dev`
5. Hit the ground running with Next.js, TypeScript & Chakra UI with the dark theme as the default

## Documentation

The tech stack of this template includes

- [Next.js](https://nextjs.org)
- [Chakra UI](https://chakra-ui.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [pretty-quick](https://github.com/azz/pretty-quick)
- [Husky](https://typicode.github.io/husky)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Cypress](https://cypress.io)

Please refer to the respective docs (linked above) in order to learn about these technologies.

## Warning

You could be tempted to use `const { colorMode, toggleColorMode } = useColorMode()` to toggle the theme color
directly within a page, don't do that. `colorMode` will always return undefined.
You need to use `usetColorMode()` hook within a component and import this component in the page where you want to use it.

## Notes

I recommend you use [n](https://github.com/tj/n) to manage your Node and Yarn versions.

## License

MIT
