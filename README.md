# Full Stack Applications Repository

This repository contains three applications:

1. **Node.js API** - Backend service providing RESTful APIs.
2. **Next.js Web Application** - Frontend web application.
3. **React Native Application** - Mobile application for both iOS and Android.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- Docker and Docker Compose
- Node.js (Preferably the latest LTS version)
- Expo CLI (Install via `npm install -g expo-cli`)

## Project Structure

```
/
├── api/               # Node.js API source files
├── web/               # Next.js web application source files
└── app/            # React Native source files
├── docker-compose.dev.yml  # Docker compose file for local development
```

## Running the Applications

### Node.js API and Next.js Web Application

To start the Node.js API and the Next.js web application, run the following command from the root of the repository:

```bash
docker-compose -f docker-compose.dev.yml up
```

This command will start both the API and web applications in development mode, exposing them on their respective ports as configured in `docker-compose.dev.yml`.

### React Native Mobile Application

To run the React Native application using Expo, navigate to the `mobile` directory and execute:

```bash
cd mobile
npx expo start
```

This will start the Expo CLI server, and you can then run the application on a physical device or using an iOS or Android simulator.

## API Endpoints

The Node.js API includes the following CRUD operations for apartment management:

- **GET /api/apartments**
  - Retrieve all apartments
- **GET /api/apartments/:id**
  - Retrieve a single apartment by its ID
- **POST /api/apartments**
  - Create a new apartment
  - Requires JSON body with apartment details
- **PUT /api/apartments/:id**
  - Update an existing apartment
  - Requires JSON body with updated details
- **DELETE /api/apartments/:id**
  - Delete an apartment by its ID

Each endpoint is designed to handle standard HTTP status codes and will return appropriate responses to indicate success or failure of the operations.

## Environment Variables

Ensure you create `.env` files for each project to configure necessary environment variables. Example `.env` files (`env.example`) are provided in each application's directory.

## Additional Commands

- **Building for production**:

  - API and Web: Use Docker commands to build images for production based on `docker-compose.yml`.
  - App: Run `expo build:android` or `expo build:ios` for building mobile app binaries.

- **Running tests**:
  - For Node.js API and Next.js Web: Run test commands specified in each project's `package.json`.
  - For React Native: Use `npm test` in the mobile directory.

## Contributing

We welcome contributions to any of the projects! Please read `CONTRIBUTING.md` for guidelines on how to make contributions.

## License

This project is licensed under the [MIT License](LICENSE).
