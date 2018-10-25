# gas-clasp-boiler
Boilerplate for Google App Scripts projects using Clasp and TypeScript 

# Motivation

Writing Google App Scripts (GAS) it's fun and useful but it has limitations. Using Clasp and it's built in support for TypeScript is possible to leverage all of the tools used for more formal software project also for GAS projects. Some of the benefits are:

- code can be managed using version control tools such as Git
- code can be stored into a remote repository such as GitHub
- facilitates collaboration within distributed or co-located teams
- ES2015 featrues can be used, also, Typescript is supported out of the box - fun
- makes creation of re-usable modules easier
- enables developers to use their prefered workflow and tools, such as editor, libraries, package managers etc.
- makes creating libraries easier (more on this later)

# Get started

To get started make sure you've got the following installed in your system:

- yarn
- git

After you've installed the above correctly you can simply install clasp using yarn:

```
yarn global install @google/clasp
```

If you want you can also install clasp locally but it's easier to have it global.

Once clasp works make sure you authorize it. Run the following command:

```
clasp login
```

If you use multiple chrome users you might want to add the `--no-localhost` flag so that you can choose which google account you want to use to authorize clasp. The steps are a little different, you need to copy paste the link from terminal to chrome which will return a string (key) then you can paste that key to authorize clasp manually in the terminal.

That's it, you can now create, pull, push, clone (etc) local projects to your Google Scripts intstance and viceversa.

# Create a project and push it

```
mkdir foo
cd foo
clasp create 
```

This will create two files and a stand alone script (or project) named `foo`. You can now go to https://script.google.com and find that script there. If you notice the file created `.clasp.json` this is where the id to that script is specified.

This means that you can simply update `.clasp.json` to assign this clasp project to any exxisting script.

Now you can write TypeScript and push the code to the script `foo` in your drive. Also folders are possible so you can organize the code as you'd see fit.

For example, the script below written in TypeScript:

```
// test.ts

const names = [
  "John",
  "Kren",
  "Anders",
  "Kate",
];

function print() {
  names.forEach(name => Logger.log(`${name} ${name}sson`));
}

```

When you push this to the remote GAS project you'd see it gets transpiled. Try pushing:

```
clasp push 
```

You may also use the flag `--watch`, a watcher. Basically, when pushing watches for changes in the local files and pushes. This could be slow at times. Keep in mind that pushing means replacing everything in the remote project, yes I know. But you can look at it as pushing to prod, which means you don't mess with those files but work locally.

The transpiled code isn't hard to read which means debugging is still fine. For instance, the above file gets transpiled to:

```js
var exports = exports || {};
var module = module || { exports: exports };
var users = [
    "John",
    "Karen",
    "Anders",
    "Kate"
];
function print() {
    users.map(function (user) { return user + " " + user + "sson"; }).forEach(function (element) {
        Logger.log(element);
    });
}
```

In GAS everything is global, but, it's also possible to have modules ala commonjs style with `module` and `exports`.

### Pro tip:

Add a `.claspignore` file to yor project, for example, if you are planning to add dependencies via `yarn` you'd probably going to want to ignore the entire `node_modules` directory.

# Getting an actual project started

WIP

# Refs

- [Clasp](https://github.com/google/clasp)
- [GAS docs](https://developers.google.com/apps-script/guides/clasp)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
