import * as pulumi from "@pulumi/pulumi";
import * as vercel from "@pulumiverse/vercel";

const config = new pulumi.Config();
const repoName = config.require("repoName");
const repoType = config.require("repoType");
const token = config.require("vercelToken");

const provider = new vercel.Provider("vercel-provider", {
    apiToken: token
});

const project = new vercel.Project("pulumi-vercel", {
    name: "pulumi-vercel",
    framework: "create-react-app",
    gitRepository: {
        repo: repoName,
        type: repoType
    },
    rootDirectory: "src"
},
{
    provider: provider
});

const deployment = new vercel.Deployment("deployment", {
    projectId: project.id,
    production: true,
    ref: "main",
},
{
    provider: provider
});