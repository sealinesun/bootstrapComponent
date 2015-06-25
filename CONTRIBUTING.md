# Contributing

We welcome community support with both pull requests and reporting bugs. Please
don't hesitate to jump in.

## Review others work

Check out the list of outstanding pull requests if there is something you might
be interested in. Maybe somebody is trying to fix that stupid bug that bothers
you. Review the PR. Do you have any better ideas how to fix this problem? Let us
know...

## Issues

The issue tracker is the preferred channel for bug reports, features requests
and submitting pull requests, but please respect the following restrictions:

- Please do not use the issue tracker for personal support requests. Stack
  Overflow ([react-bootstrap](http://stackoverflow.com/questions/tagged/react-bootstrap)
  tag), [Slack](http://www.reactiflux.com/) or
  [gitter](https://gitter.im/react-bootstrap/react-bootstrap) are better places
  to get help.
- Please do not open issues or pull requests regarding the code in React or
  Bootstrap (open them in their respective repositories).

_Note: Occasionally issues are opened that are unclear, or we cannot verify them. When
the issue author has not responded to our questions for verification within 7
days then we will close the issue._

[![HuBoard][huboard-badge]][huboard] We use HuBoard to triage issues and
prioritize the backlog for the core dev team. Feel free to tackle any currently
open [issue][issues]. The issues tagged with "help wanted" and especially those
high in the backlog are fair game.

## Tests

All commits that fix bugs or add features need a test.

## Code Style

Please adhere to the current code styling. We have included an `.editorconfig`
at the repo's root to facilitate uniformity regardless of your editor. See the
[editor config site][editorconfig] for integration details.

We use [ESLint][eslint] for all JavaScript Linting. There should be no linting
errors and no new warnings for new work. You are welcome to configure your
editor to use ESLint or the `npm test` command will run unit tests and the
linter.

## Commit Subjects for Public API Changes

If your patch **changes the API or fixes a bug** please use one of the following
prefixes in your commit subject:

- `[fixed] ...`
- `[changed] ...`
- `[added] ...`
- `[removed] ...`

That ensures the subject line of your commit makes it into the auto-generated
changelog. Do not use these tags if your change doesn't fix a bug and doesn't
change the public API.

### When using `[changed]` or `[removed]`...

Please include an upgrade path with example code in the commit message.  If it
doesn't make sense to do this, then it doesn't make sense to use `[changed]` or
`[removed]` :). For further reading on writing a well formed commit message,
check out these [5 useful tips for a better commit message][commit-message]

## Docs

Please update the docs with any API changes, the code and docs should always be
in sync.

## Implement additional components and features

This project is seeking parity with the core Bootstrap library.
Component by component to the extent it is possible.

Also Bootstrap mentions http://getbootstrap.com/getting-started/#examples
as examples of things you can do, but they are not part of the core library,
therefore this project is the wrong place to implement them.

## Breaking changes

Breaking changes should be accompanied with deprecations of removed
functionality. Prior to the 1.0.0 release, we aim to follow React's example of
taking two Minor releases to break old functionality. As such, changes that
intend to remove or change public APIs should be be submitted against the
`vX-rc` branch, and should be accompanied with deprecation warnings on the old
APIs. The deprecated APIs themselves should not be removed until the Minor
release after that.


## Collaborators

Please see the [Maintaining](./MAINTAINING.md) documentation.

[huboard-badge]: https://img.shields.io/badge/Hu-Board-7965cc.svg
[huboard]: https://huboard.com/react-bootstrap/react-bootstrap

[issues]: https://github.com/react-bootstrap/react-bootstrap/issues

[editorconfig]: http://editorconfig.org
[eslint]: http://eslint.org
[commit-message]: http://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message
