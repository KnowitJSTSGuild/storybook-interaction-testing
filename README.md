# Interaction Testing with Storybook

Storybook `^6.5` supports interaction testing in stories. The code in this repository demonstrates that behavior and is
intended to be tried for yourself!

## Prerequisites

The Storybook portion of this project has been tested to work on Node version `16.17.0`. More recent Node versions
like `^18.0.0` may not be supported.

Check your Node version with `node --version`.

## Get Started

Clone this repo, then run `npm install`.

There are two things to learn here:

1. Arranging tests with stories
2. Interaction testing with stories

### 1. Arranging Tests With Stories

Are you getting tired of arranging your components' tests by passing in the same set of props to each individual test,
only with slight variations? Consider arranging your tests from your components' stories instead!

Check out the `SignupForm.test.tsx` file. It demonstrates a set of tests arranged in a "classic" way. It also
demonstrates how you could set up those same tests using Storybook's `composeStories` function.

This example is quite simple, but can you imagine the possibilities with a larger component with more props? Stories and
tests can now go hand in hand.

To actually run these test, use the command

```
npm run test
```

### 2. Interaction Testing With Stories

Wouldn't it be nice to test interactions with your component and actually _see_ what's going on when something goes
wrong? Consider writing `play` functions for your component stories!

Open the `SignupForm.stories.tsx` file. You'll find two `play` functions within. These might seem familiar if you've
ever worked on integration tests with the `userEvent` package.

A `play` function essentially describes a set of interactions a supposed user would have with your component. One of the
cases here describes a user entering their email address and submitting the form. It is expected that a "thank you"
message appears.

You can view this interaction step-by-step in Storybook! Do the following:

1. Start Storybook `npm run storybook`
2. Head over to [localhost:6006](http://localhost:6006/?path=/story/components-signupform--filled-form)
3. Check out the **Interactions** tab.

You can see exactly what the `play` function did and whether it passed or failed.

**But that's not all!**

You can run these tests automatically from the CLI. Yes, you can even integrate these into your CI pipeline. Give it a
go!

```npm run test-storybook```

If your test failed, don't worry. That was intentional. You'll get a link to that particular test, meaning you'll be
able to actually **see what went wrong** instead of having to guess based on the DOM tree text output.

## Resources

- YouTube: [Norbert de Langen - Testing design systems using storybook + Storybook 7.0 sneak peeks (React Finland 2022)](https://www.youtube.com/watch?v=8ACxWOjrTfs)
- Storybook docs: [Interaction Tests](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- Presentation slides: See the `/docs` folder or run `npm run slides`.