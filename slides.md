---
theme: bricks
layout: intro
---

<style>
.two-cols {
  display: grid;
  grid-template-columns: minmax(auto, 1fr) 1fr;
  gap: 4rem;
  height: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

.pseudolist {
  line-height: 2rem;
}

.center {
  display: flex;
  justify-content: center;
}

h2 {
  font-size: 1.4rem !important; /* Ain't nobody got time to figure out selectors in a slideshow */
  opacity: 0.7;
}

.fact-image-container img {
  max-height: 50%;
}
</style>

# Interaction Testing with Storybook

---
layout: default
---

# Storybook in a Nutshell 🌰

A library of your app's components.

<div class="two-cols">
<div class="col">
<div class="pseudolist">

🧱 Build components in isolation  
🔍 Discover existing components  
💃 Serves as a style guide and documentation  
👀 Visually test edge-cases

</div>
</div>
<div class="col">

![Storybook intro](/docs/assets/storybook_intro.png)

<p class="text-center">storybook.js.org</p>

</div>
</div>


---
layout: fact
---

# Where else do we isolate components?

<!-- Turns out we also isolate components when writing tests ➡️ -->


---
layout: quote
---

<div class="center">

![Storybook and testing go hand in hand](/docs/assets/storybook_testing_meme.png)

</div>


---
layout: default
clicks: 1
---

# Storybook ❤️ Jest Benefits

<div class="two-cols">
<div class="col">
<div class="pseudolist">

## 🧱 Arrange Tests with Stories

- Reuse your Stories to arrange tests.
- Check out the code repo at the end to learn more!

<div class="mt-5" v-click="1" >

## 🥸 Test Interactions with Stories

- Useful for more complex components.
- Test entire pages!
- Visually 👀 see what is happening, step-by-step.
- Helps debug errors.

</div>
</div>
</div>

<div class="col" v-click="1">

![Interaction testing](/docs/assets/interaction_testing_01.png)

</div>
</div>

<!-- **Helps debug errors:** See the component instead of looking at Jest's printed DOM tree -->


---
layout: default
---

# Just write a `play` function

```ts
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');
  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}
```

---
layout: default
---

# Just write a `play` function

```ts {1}
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');
  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}
```

---
layout: default
---

# Just write a `play` function

```ts {5,6,7}
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');
  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}
```

---
layout: default
---

# Just write a `play` function

```ts {9,10}
FilledForm.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with `user-event`
  await userEvent.type(canvas.getByRole('textbox'), 'email@domain.test');
  await userEvent.click(canvas.getByRole('button'));

  // Assert that our success message is displayed
  expect(canvas.getByText('Thank you for signing up!')).toBeInTheDocument();
}
```

---
layout: default
---

# See it in Storybook

`localhost:6006` by default


<div class="two-cols prefer-right">
<div class="col">

![Interaction testing](/docs/assets/interaction_testing_01.png)

</div>
<div class="col">

Click on each step to see what happened!

</div>
</div>

---
layout: fact
---

# But that's not all!

---
layout: default
---

# Run `play` functions as tests

<div class="two-cols prefer-right">
<div class="col">

- When you develop.
- In your CI pipeline.

## `npm run test-storybook`

</div>
<div class="col">

![npm run test-storybook](/docs/assets/npm_run_test-storybook.png)

</div>
</div>


---
layout: fact
---

# Try it yourself!

<div class="mt-5">

[Check out this repo I made for you](https://github.com/KnowitJSTSGuild/storybook-interaction-testing)

I'll post the link in the chat and Slack.

</div>


---
layout: quote
---

# Thanks!