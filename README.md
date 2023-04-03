# commits-history

This is a Monorepo that has all the applications (API and UI) that form part of the commit-history system. This project was created as a take-home-test for Full Time Force company.

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

---

## Installing nx command globally

```sh
    npm install -g @nrwl/cli
```

---

## Node Version

Ensure you are using the version of Node specified in the .nvmrc file

---

## Installing dependencies

```sh
    npm i
```

---

## Environment Variables

Environment variables in this project use a .env file in your local as usual. 
Create a .env file in the root of the project with this information.
``` 
GITHUB_APIKEY=<GITHUB_API_TOKEN>
```

To create your `GITHUB_API_TOKEN` follow the instructions from the [GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

Note: You can avoid this step, but you will have a request rate limit, so after 60 requests to the Github API you'll have to wait 1 hour.

---

## Development server

Start the project by running the following command

```sh
    npm run start
```

or separately

```sh
    npm run start:api
    npm run start:ui
```

Then go to [http://localhost:4200/](http://localhost:4200/) on your browser
