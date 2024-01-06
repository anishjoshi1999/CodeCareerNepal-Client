# CodeCareerNepal-Client

Welcome to the CodeCareerNepal-Client repository! This project is a React-based web application that serves as a centralized platform connecting job seekers with IT job opportunities in Nepal. The application fetches job listings from a local API and provides features such as infinite scrolling, search functionality, and detailed job information.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:

```bash
git clone https://github.com/anishjoshi1999/CodeCareerNepal-Client.git
```

2.  Install dependencies:

```bash
npm install
```

3.  Start the development server:

    `npm run dev`

## Project Structure

The project structure is organized as follows:

- `src/` - Contains the source code for the React application.
  - `Components/` - Individual React components for different pages.
  - `Partials/` - Reusable partial components like Navbar and Footer.
  - `store/` - Context and hooks for managing job data.
  - `App.jsx` - The main application component.
- `public/` - Public assets and HTML template.

## Usage

### React Components

- Home: Displays the latest job listings and provides a link to explore more.

- Jobs: Lists all job listings with an option to search by company name.

- JobDetails: Shows detailed information about job openings for a specific company.

- Contact: Provides a contact form and information for reaching out.

- About: Describes the mission, team, and functionality of CodeCareerNepal.

### Hooks and Context

- JobContext: Manages job data using React context and provides a hook (`useJobs`) for accessing job information.

- useSearch: Custom hook for searching within a list of items.

## How to Contribute

To contribute to this project, follow these steps:

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/anishjoshi1999/CodeCareerNepal-Client.git
   ```

3. Create a new branch for your contribution:

   ```bash
   git checkout -b feature/your-feature
   ```

4. Make your changes and test them thoroughly.

5. Commit your changes:

   ```bash
   git commit -m "Your meaningful commit message"
   ```

6. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature
   ```

7. Open a pull request on the original repository. Clearly describe your changes and reference any related issues.

## Code Style and Guidelines

Follow the established coding style and guidelines for this project. If there are specific conventions to adhere to, they will be mentioned here. Ensure that your code passes any existing tests.

## Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We aim to foster a welcoming and inclusive community.

## Licensing

By contributing to this project, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE.md).

Thank you for your contribution!
