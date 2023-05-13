# 🚀📦 @spacejunk/airlock ✨

Spacetraders.io API client built with TypeScript, generated via openapi-generator-cli. See options for generator type [`typescript-fetch`](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-fetch.md)

🌐 [Spacetraders Homepage](https://spacetraders.io/) | 📚 [Getting Started Guide](https://docs.spacetraders.io/) | 🔧 [API Playground](https://spacetraders.stoplight.io/docs/spacetraders/8e768e6831f6c-getting-started)

## Installation

```sh
npm install @spacejunk/airlock
```

## Features

- TypeScript support
- Fetch-based HTTP requests
- Generates both ESM and CJS clients
- Autogenerated by openapi-generator-cli


## Prerequisites

If you're using this in the Browser, you don't need to setup anything!

However, if you're using it serverside with Node.js, this package requires Node.js v18 or higher. Node 18 is the first version to support native fetch. To install Node.js v18, we recommend using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm). Follow the instructions below based on your operating system:

### macOS

To install nvm on macOS, run the following command in your terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Restart your terminal and run the following command to install Node.js v18:

```sh
nvm install 18
# then, set your version to Node 18 via use
nvm use 18
```

### Windows

To install nvm on Windows, download and run the installer from the [nvm-windows GitHub repository](https://github.com/coreybutler/nvm-windows/releases).

Once installed, open a new Command Prompt or PowerShell window and run the following command to install Node.js v18:

```sh
nvm install 18
# then, set your version to Node 18 via use
nvm use 18
```
## Getting Started

To use the `@spacejunk/airlock` package in your project, follow this example:

```javascript
import {
  Configuration,
  FleetApi,
} from '@spacejunk/airlock';

// Set up a configuration with your access token
export const config = new Configuration({
  accessToken: 'your agent token'
});

// create and configure an api client
const fleet = new FleetApi(config);
// List your agent's ships
export const getShips = async () => {
  try {
    const { data } = await fleet.getMyShips();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Navigate to a target destination
export const navigateShip = async ({
  shipSymbol,
  waypointSymbol,
}: {
  shipSymbol: string;
  waypointSymbol: string;
}) => {
  const { data } = await fleet.navigateShip(shipSymbol, { waypointSymbol });
  return data;
};
```

## Building the package

To build the package and automatically pull the latest OpenAPI schema from https://github.com/SpaceTradersAPI/api-docs, run the following command:

```sh
npm run build
```

This command generates the API client in both ESM and CJS formats.

To watch for changes and rebuild automatically, use:

```sh
npm run watch
```
