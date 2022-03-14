# azure-dash

Fun project to show auth in Azure. It has a API written in Node Express, connected to a MongoDB database. Auth is through Microsoft Azure from Active Directory using a npm package from Azure called msal-browser.

The project is set up with both the server and the client.
### Server
This folder holds the server code. Notice that the package.json file for the server is not in the server folder but rather in the root of the whole package. This package.json includes a npm package called concurrently with allows both the backend and the frontend to run from one command.

You will need a .env file placed in the root of this entire package that includes the MongoDB database connection uri for the server to work. So **not** in the -*server or client*- folder but in the main root for this environment file.

### Client
I set up my own Azure account for testing this. Created a few users and registered this app. You will need an .env file placed at the root of the client folder that includes the AZURE_CLIENT_ID and the AZURE_TENANT_ID for the auth connection to work. The config file for msal-browser uses this info to pass onto AD for auth.

This package presents two components you can wrap your code in. One for <authenticated> and one for <unauthenticated>. Depending on the auth state, one will be presented.

### General
The auth tutorial:
https://www.daryllukas.me/azure-ad-authentication-using-msal-and-nextjs-react/

Dashboard template:
https://github.com/devias-io/material-kit-react

Microsoft Azure:
https://azure.microsoft.com/en-us/

MongoDB:
https://www.mongodb.com