# Dark

> An opinionated, dark-themed Next.js & Chakra UI GitHub repository template.

> This is a fork from https://github.com/kahlil/dark with some changes to eslint and prettier from here
> https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js.
> All the credit goes to these two resources.

## Getting Started

1. Generate a repository with this template by clicking on the "Use this template" button on the top right or on
   [https://github.com/alveshelio/next-chakra-ui-starter-kit.git/generate](https://github.com/alveshelio/next-chakra-ui-starter-kit.git/generate)
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

Minimally configured, mostly using defaults provided by the community or the creators.

Please refer to the respective docs (linked above) in order to learn about these technologies.

## Warning

You could be tempted to use `const { colorMode, toggleColorMode } = useColorMode()` to toggle the theme color
directly within a page, don't do that if you do, `colorMode` will always return undefined.
You need to use `usetColorMode()` hook within a component and import this component to the page where you want to
use it.

## Notes

I recommend you use [n](https://github.com/tj/n) to manage your Node and Yarn versions.

If you use VS Code as an editor I recommend you you allow format on save through Prettier and turn off the built-in formatter.

## License

MIT
