# Contributing Guidelines

- [Contributing Guidelines](#contributing-guidelines)
  - [Documentation](#documentation)
  - [Naming Convention](#naming-convention)
  - [Branch name](#branch-name)
  - [Pull request](#pull-request)
  - [Conventional Commits](#conventional-commits)
    - [Commit Message Format](#commit-message-format)
    - [Commit Message Example](#commit-message-example)
  - [Code style](#code-style)
    - [Some code style guidelines](#code-style-check)
  - [Testing](#testing)
  - [Dependencies](#dependencies)
    - [Dependabot tool](#dependabot-tool)
  - [HTML and style sheets](#html-and-style-sheets)
    - [HTML](#html)
    - [CSS](#css)

## Documentation

- Keep `README.md` updated as a project evolves.
- Comment your code. Try to make it as clear as possible what you are intending with each major section.
- If there is an open discussion on github or stackoverflow about the code or approach you're using, include the link in your comment.
- Do not use comments as an excuse for a bad code. Keep your code clean.
- Do not use clean code as an excuse to not comment at all.
- Keep comments relevant as your code evolves.
- Consider to add .md files in the /documentation folder to detail what you have done in a PR.
- Every breaking change should include a documentation file.

## Naming convention

Whenever you are creating a new folder or file, please use the following conventions:

- For folders use the `lowerCamelCase` convention (e.g. '`newFolder`')
- For files (Components/Services) use the `UpperCamelCase` convention (e.g. '`NewFile`')
- For third-party libraries use the `lowerCamelCase` convention for both files and folders (e.g. '`newFile.config.js`')
- For config files use the `lowerCamelCase` convention (e.g. '`newFile.config.js`')

## Branch name

We use [GitHub Flow](https://guides.github.com/introduction/flow/), so feature branching is mandatory.

Branches should follow the following naming convention: `<name>-<type>-<short description>`

- **name:** authors short name (e.g. John Doe's branch name will be `jdoe`)
- **type:** the type of the task you are working on. It can be a `fix`, a `feature`, a `refactor`, or just `documentation` update
- **short description:** task / bug / story short description (e.g. _Add README file to the repository_ short description will be `add-readme`)

## Pull request

All proposed changes should be reviewed by opening a pull request.
Please try to keep pull requests small to decrease the time required to review and merge.
Pull requests will be merged as linear history, so please **rebase your local branch before creating a pull request**.
After a branch is merged, it **must be deleted**.

### How to use rebase

A brief summary of how to apply `git rebase`:

- Commit all your changes into your current branch
- Checkout the master branch and update it
- Checkout the feature branch
- Execute: `git rebase master`
- Solve conflicts if needed

### How to share code

If you need to use code that is not on the master branch, you must avoid merge branches or starting from features branches. In order to achive sharing code, you can use `git cherry-pick`, with this command you are able to reproduce a single commit into another branch. If you need more than one commit you can repeat the process more than once.

A brief summary of how to apply `git cherry-pick`:

- Checkout the feauture branch
- Execute: `git cherry-pick commitSha​` where _commitSha_ is the commit hash of the desire commit

## Conventional Commits

This project implements the Conventional Commits 1.0.0 specification. We describe the most relevant points in this document. For further details, please refer to the [official documentation](https://www.conventionalcommits.org/en/v1.0.0/).

### Commit types

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- docs: a commit of the type docs is for documentation only changes
- refactor: a commit of the type refactor is for a code change that neither fixes a bug nor adds a feature

### Commit footer

- BREAKING CHANGE: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

### Commit Message Format

Always write a clear log message for your commits, otherwise the pull request will not pass. One-line messages are fine for small changes, but bigger changes should look like this:

The commit message should be structured as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.
Just as in the **summary**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Commit Message Example

- Commit message with description and breaking change footer

  ```text
  feat: allow provided config object to extend other configs

  BREAKING CHANGE: `extends` key in config file is now used for extending other config files
  ```

- Commit message with ! to draw attention to breaking change

  ```text
  refactor!: drop support for Node 6
  ```

- Commit message with scope

  ```text
  feat(lang): add polish language
  ```

- Commit message with no body

  ```text
  docs: correct spelling of CHANGELOG
  ```

## Code style

### Some code style guidelines

- Use stage-2 and higher JavaScript (modern) syntax for new projects. For old project stay consistent with existing syntax unless you intend to modernise the project.

- Use [ESLint - Pluggable JavaScript linter](http://eslint.org/) to enforce code style.

- Remove commented blocks of code.

- Make your names search-able with meaningful distinctions avoid shortened names. For functions use long, descriptive names. A function name should be a verb or a verb phrase, and it needs to communicate its intention.

- Organize your functions in a file according to the step-down rule. Higher level functions should be on top and lower levels below.

## Testing

- Write testable code, avoid side effects, extract side effects, write pure functions. Try to avoid implicit dependencies

- Every module should have their own unit tests. Also, every PR should mantain or increase the code coverage value.

- Place your test files inside a /test folder and name the file according to the module you are testing. Use `*.test.js` or `*.spec.js` naming convention, like `moduleName.spec.js`.

- Run tests locally before making any pull requests to `main`.

## Dependencies

### Dependabot tool

This repository counts with a dependency updater tool that will generate pull requests automatically when finds newer versions in the dependencies declared in the package.json file.

This PRs' name will be like:

```text
Bump eslint-plugin-import from 2.20.2 to 2.21.1 in /source/hello-world
```

Note: every location of package.json file must be added in the .github/dependabot.yml file

```code
directory: "/source/hello-world" # Location of package manifests
```

## HTML and style sheets

### HTML

- Classes should be written lowercase, and words hyphen-separated. When possible, consider this for IDs too
  ```html
  <div id="some-id" class="everything-is-lowercase"><div>
  ```
- When using classes from frameworks/libraries and custom classes in the same element, write first the framework classes, and then the custom ones. For instance:
  ```html
  <div class="btn btn-warning my-custom-class"><div>
  ```
- Always try to respect a good order regarding the "specificity" of the classes. For example, "btn" is more general than "btn-warning", "col-xs-xx" is more general than "col-sm-xx":
  ```html
  <div class="btn btn-warning btn-border"><div>
  <div class="col-xs-12 col-sm-6 col-lg-3"><div>
  ```
- When dealing with column classes, use them in ascending order (e.g. "xs", "sm", "md", "lg"). Take into account the fact that (generally) they work for that resolution **onwards**. So, this...
  ```html
  <div class="col-xs-12 col-md-4"><div>
  ```
  ...is exactly the same as this:

  ```html
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"><div>
  ```
  Always choose the short option. If, for example, you have a "sm" and a "md" with the same number, omit the "md" class.

### CSS

#### **Media queries**
- For media queries, we rely on the breakpoints Bootstrap proposes (among many other libraries on the Internet), which are:
  - \>= 768px
  - \>= 992px
  - \>= 1200px

  So, you should use media queries like these:
  ```css
  @media (min-width: 768px) { ... }

  @media (min-width: 992px) { ... }

  @media (min-width: 1200px) { ... }
  ```
- You can write separated media queries which are the same if there's a good reason to do that.
- As we are working "mobile first", try to avoid media queries with max-width. Leave the code for mobile outside any media query if possible.
  ```css
  .my-div {
    /* mobile styles */
  }

  @media (min-width: 768px) {
    .my-div {
      /* styles for viewport >= 768px */
    }
  }

  @media (min-width: 992px) {
    .my-div {
      /* styles for viewport >= 992px */
    }
  }

  @media (min-width: 1200px) {
    .my-div {
      /* styles for viewport >= 1200px */
    }
  }
  ```
- Only for landscape orientation cases, we use a max-width media query combined with the orientation feature. Even though we recommend sticking to mobile landscape cases (using max-width: 767px and landscape), it's not strictly prohibited to use another max-width. This is valid:
  ```css
  @media (max-width: 767px) and (orientation: landscape) { ... }

  @media (min-width: 768px) { ... }

  @media (min-width: 992px) { ... }

  @media (min-width: 1200px) { ... }
  ```
  This is valid too:
  ```css
  @media (min-width: 768px) { ... }

  @media (max-width: 991px) and (orientation: landscape) { ... }

  @media (min-width: 992px) { ... }

  @media (min-width: 1200px) { ... }
  ```
  And this, again, is valid:
  ```css
  @media (max-width: 767px) and (orientation: landscape) { ... }

  @media (min-width: 768px) { ... }

  @media (max-width: 991px) and (orientation: landscape) { ... }

  @media (min-width: 992px) { ... }

  @media (min-width: 1200px) { ... }
  ```
  But it's very important to note that adding more and more complexity to the stylesheet is something we **strongly** disencourage. For most cases, relying on min-width: 767px and landscape is enough, as mobile phones on landscape are a generally considered scenario.

#### **Code styling**
- Leave two line breaks between rulesets:
  ```css
  #an-element { ... }

  .something { ... }

  .something .child { ... }
  ```
- Regarding spaces, indentation and line breaks, follow this general code styling for a CSS ruleset:
  ```css
  /* Space between operators like ">" */
  .an-element > .another + .others { /* Space before opening curly bracket */
  /* Tab inside ruleset */
    width: 100px; /* Space after colon */
    height: 100px;
  }
  ```
- Avoid specifying measuring units next to zero values
  ```css
  span {
    margin: 0px; /* This is wrong */
    border-width: 0px 1px 0px 2px; /* This is wrong */
    padding: 0 10px 0 5px; /* This is OK */
    font-size: 0; /* This is OK */
  }
  ```

#### **Styles order**
- Always try to order your selectors by specificity:
  ```css
  input { ... }

  input:active { ... }

  .a-div { ... }
  
  .a-div .another-div { ... }
  
  .a-div .another-div span { ... }

  .a-div .another-div span:hover { ... }
  
  .a-div .another-div .element-with-class { ... }
  ```