# CSV Importer TypeScript

A TypeScript-based CSV importer application that allows users to upload a CSV file, validate its format, and display the items in a shopping cart.

## Features

- **CSV Upload**: Upload CSV files to add items to the shopping cart.
- **Validation**: Ensures the CSV file contains the required columns and data types.
- **Dynamic UI**: Updates the shopping cart dynamically without a page refresh.
- **Error Handling**: Displays error messages for invalid CSV formats.

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/csv-importer-ts.git
   cd csv-importer-ts
   ```

2. **Install dependencies:**:

```bash
   npm install
```

3.**Development:**:

```bash
    npm run dev
```

4. **Previewing the Build:**:

```bash
   npm run preview
```

5. **Test:**:

```bash
   npm test
```

# Project Overview

## Project Structure

- **`/src`**: Contains the TypeScript source code.
  - **`/components`**: UI-related components.
  - **`/utils`**: Utility functions and helpers.
- **`/tests`**: Contains test files for the application.
- **`index.html`**: The HTML file for the application.

## Configuration

- **`tsconfig.json`**: TypeScript configuration.
- **`jest.config.js`**: Jest configuration for running tests.

## Dependencies

- **`vite`**: Build tool for fast development and production builds.
- **`typescript`**: TypeScript language support.
- **`jest`**: Testing framework.
- **`papaparse`**: CSV parsing library.

