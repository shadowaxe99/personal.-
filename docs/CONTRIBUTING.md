# Contributing to Michael Gruen's Website

We are thrilled that you are interested in contributing to Michael Gruen's website. This document will guide you through the process of contributing to this project.

## Table of Contents

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Getting Started](#getting-started)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Testing](#testing)
- [Questions](#questions)
- [License](LICENSE.md)

## Getting Started

Before you begin, please ensure you have read and understood our [Code of Conduct](CODE_OF_CONDUCT.md). To contribute to the project, follow these steps:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Install dependencies by running `npm install`.
5. Make your changes, adhering to the coding standards and guidelines provided below.
6. Write or update tests as necessary.
7. Ensure your code passes all tests and lint checks by running `npm test` and `npm run lint`.
8. Commit your changes with a clear and descriptive commit message.
9. Push your changes to your fork.
10. Submit a pull request to the main repository.

## Pull Request Process

1. Update the README.md with details of changes, including new environment variables, exposed ports, useful file locations, and container parameters.
2. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
3. Ensure that your code adheres to the existing style in the codebase.
4. You may merge the Pull Request once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Coding Standards

- Use TypeScript for all `.tsx` files and ensure types are defined.
- Follow the React component structure and lifecycle methods.
- Use CSS modules for styling to avoid conflicts and ensure maintainability.
- Write clean, readable, and well-documented code.
- Use meaningful variable and function names.
- Follow RESTful conventions for API endpoints in `server/routes/api.js`.

## Documentation

- Update the [README.md](README.md) with any significant changes.
- Provide detailed comments in your code when necessary.
- Update the [API.md](API.md) documentation if you add or change any API endpoints.
- Document any new components in the [ARCHITECTURE.md](ARCHITECTURE.md).

## Testing

- Write unit tests for new components using Jest and React Testing Library.
- Update existing tests if you are modifying functionality.
- Ensure that all tests pass before submitting a pull request.

## Questions

If you have any questions or need further clarification, please open an issue in the repository, and we will do our best to assist you.

## License

By contributing to this project, you agree that your contributions will be licensed under its [MIT License](LICENSE.md).