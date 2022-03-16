## Pumpkin health and metrics exercise

Extend this ExpressJS application with a `/healthz` or `/status` and `/metrics` endpoints, considering the following requirements:

-   Both endpoints should return an HTTP 200 status code
-   Both endpoints should return a JSON response e.g. `{ "user": "admin" }`. (Note: the JSON response can be hardcoded at this stage)
-   The `/healthz` or `/status` endpoint should return a response similar to this example: `{ result: OK - healthy }`
-   The `/metrics` endpoint should return a response similar to this example: `data: { UserCount: 40, UserCountActive: 5 }`

### Tech stack

-   [NodeJS](https://nodejs.org/en/)
-   [ExpressJS](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Nodemon](https://www.npmjs.com/package/nodemon)

### Getting Started

Make sure you have **nodejs** and **ts-node** globally installed on your machine.

Use the following command to install ts-node

```
npm install -g ts-node
```

Install the necessary dependancies

```
npm i
```

Run your dev server

```
npm run dev
```

You should be able to see a success message (`Server is running on port 8080`) in your terminal and can now access the application on `loclhost:8080`
