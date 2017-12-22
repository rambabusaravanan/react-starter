Demo :  [https://rambabusaravanan.github.io/react-starter](https://rambabusaravanan.github.io/react-starter)

#### Developer Addons
- Copy `.env.example` to `.env` and configure your environment variables in `.env` file. Never commit your env files in your git, instead always place a example config in .env.example file and commit.
- Install "_Debugger for Chrome_" and "_ESLint_" extension (recommended by react) in your VSCode. Configurations for those plugins has been added in `.vscode/launch.json` and `.eslintrc` files respectively.
- Packages "husky", "lint-staged", "prettier" has been added, so that staged files will be auto formatted before git commit. This is configured in 'package.json'. You can achive the same via running `yarn run pretty` at anytime