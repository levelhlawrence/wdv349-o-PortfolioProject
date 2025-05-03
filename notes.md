# Note! ...🚀

Here are a few notes to help with the Beta in progress. Many TypeScript and ESLint errors were related to coding in progress (unfinished typing, unused vars, etc.) - to get around build errors, some updates were made to ignore code that's still needing updates. The front and backend successfully build now. As you further develop the app, keep an eye out for anything TypeScript or ESLint is flagging as you go!

A few things to remember, the `tsconfig.app.json` file was updated to all unused locals...

```
{
  "compilerOptions": {
    "noUnusedLocals": false,
    // other options...
  }
}
```

...So, that should be turned back on to true at some point. 

<br>

Comments were also removed from JSON files during testing. 

## Why Remove Comments from JSON Files?
JSON files do not support comments, as the format is designed to be lightweight and easy to parse. Including comments in JSON files can lead to syntax errors and prevent the file from being parsed correctly by tools and applications. To avoid this, comments should be removed or documented elsewhere (e.g., in a README or a separate config file) to ensure the JSON file remains valid.

## Why Include an .env.example File?
When working with others, it’s helpful to include an .env.example file in the project. This file serves as a template for all the environment variables needed for the project, without exposing sensitive information like API keys or database credentials. By providing an example .env, contributors can quickly set up their own .env file with the necessary configuration, ensuring consistency and preventing issues like missing or misconfigured variables.
