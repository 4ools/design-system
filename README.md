# This is a design system made for fun to play with some things

Obviously it can be used and is open source but is more of a learning resource and should be treated as such.

## The idea

Is to have:

- Figma for things like colours and text scale etc. file is [here](https://www.figma.com/file/DQecaoa4zeziTcc095puIq/Design-System?node-id=6%3A6)
- Story Book, to place all the docs for the technical implementation of the components and knobs for things like variations etc. Also serves as just a "style guide" for designers and developers. Link to come soon once it is hosting on netlify in a bit
- [Braid Playroom](https://seek-oss.github.io/braid-design-system/playroom/) (link also to come) to have a place to play with and compose the components.

I have taken some design concepts and used some standard practices like

- Grid
- Text Scale
- Colors
- Themes

Some of these are to come but it will all be supported much like most design systems. There will be components as one part, then themes for the site using ThemeProviders and the components should respond to the themes they are in.

For now I will focus on the basics so

- Cards
- Forms
- Buttons
- Iconography
- Typography

maybe more 'composed' components will come later like 'Modals' and 'Accordions' but focusing on the basics is going to take me long enough.

You will be able to hopefully just override your font, theme colors and text scale and that should be you all set for your own version of the design theme later on. I would like it to be a case of doing something like

`import { Button } from 'design-system'`

and so on, without much real concern about how it works.

## Built using

- React
- StoryBook
- Styled Components
- Polished JS
- ... more to come soon 😇

## Feedback welcome

Any feedback would be welcome 💕
