# React App Deployment to Vercel with Pulumi

This GitHub repository contains a sample React application and Pulumi TypeScript code for deploying the app to Vercel. The project is organized into two main directories:

1. `./frontend`: This directory contains the source code for your React application. You can develop and test your app in this folder.

2. `./infra`: The `infra` directory contains the Pulumi TypeScript code for infrastructure as code (IaC). It's responsible for deploying your React app to Vercel using Pulumi.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Running the React App Locally](#running-the-react-app-locally)
  - [Deploying the React App to Vercel with Pulumi](#deploying-the-react-app-to-vercel-with-pulumi)
- [Project Structure](#project-structure)
- [Additional Notes](#additional-notes)

## Getting Started

To get started, follow these steps:

### Cloning the Repository

1. Clone this GitHub repository to your local machine:

   ```bash
   git clone https://github.com/AdoraNwodo/pulumi-vercel.git
   ```
2. Navigate to the project directory:
    ```bash
    cd pulumi-vercel
    ```

### Running the React App Locally
1.  Navigate to the `./frontend` directory:
```bash
cd frontend
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
This will launch your React app locally, and you can access it in your web browser at http://localhost:3000.

### Deploying the React App to Vercel with Pulumi
1. Navigate to the `./infra` directory:
```bash
cd infra
```

2. Install the required Pulumi packages:
```bash
npm install
```

3. Login to Pulumi Cloud and initialize stack
Next, let’s setup our state and secrets store in Pulumi Cloud.
```bash
# You can store Pulumi state in multiple ways, here we use Pulumi Cloud
# Other state backends include Azure storage, Amazon S3, local file, and more
pulumi login 

# Initialize your stack
# Here we name the stack "dev"
pulumi stack init --stack dev
```

4. Configure deployment credentials
Before the deployment, you will need to set the config values for your Vercel token (you should get this from your Vercel account), the repository name, and the repository type. The Vercel token is supposed to be set as a secret. If you open the Pulumi.${stackName}.yaml file, you can see the encrypted secret in this plain text YAML configuration.

```bash
# The name of the git repository. It should have this format {account-name}/{repository-name}
pulumi config set repoName <repo_name>

# The git provider of the repository. Must be either `github`, `gitlab`, or `bitbucket`.
pulumi config set repoType <github|gitlab|bitbucket>

# Configure vercel token as secret
pulumi config set --secret vercelToken <vcl_token>
```

5. Deploy to Vercel
Now, you’re set up to deploy your React app to Vercel.
```bash
# Finally, run `pulumi up` to deploy!
pulumi up
```

### Project Structure
The project is organized as follows:

- `/frontend` - React application source code.
- `/infra` - Pulumi TypeScript code for deploying the React app to Vercel.

### Additional Notes
- Make sure you have Node.js and npm installed for both the React app and Pulumi.
- Configure your Vercel credentials in your Pulumi project to enable deployment to Vercel.
- Customize the React app in the `./frontend` folder to meet your project requirements.

Happy coding!