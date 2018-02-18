# Serverless Workshop
This project contains the code, notes, and slides for the Serverless framework workshop hosted in Sacramento, CA. This workshop is designed to gain a fundamental understanding of the basics of serverless architecture and how to get started using the Serverless framework to build low cost and 'always up' services. 


## Getting Started
To get started you will need to install [NodeJS v6.10.3 (or higher)](https://nodejs.org/download/release/v6.10.3/) and the [Serverless framework](https://serverless.com/). AWS is currently still supporting as high as NodeJS v6.10.3 and for code clarity we will not add Babel support. Because of this we will only be writing code that is compatible with v6.10.3 of NodeJS.

### Installing NodeJS
For this workship we are using current LTS version of NodeJS. I recommend install NodeJS through [NVM](https://github.com/creationix/nvm) for Mac/Linux  and [NVM Windows](https://github.com/coreybutler/nvm-windows) for Windows but you are more than welcome to just install NodeJS standalone. Rather then C & P everything from the docs please follow the links to setting up the dependencies. I have added some additional commands for what I feel may save you some time.

#### NVM
If you install NVM through their 'Getting Started' docs you will need to then install NodeJS through NVM. This is pretty easy and straight forward.
To install NodeJS specific version.
```
nvm install v6.10.3
```
To use this newly installed version.
```
nvm use v6.10.03
```
To set a specific default NodeJS version.
```
nvm alias default v.6.10.3
```
To check to make sure your NodeJS version installed correctly and is the correct version run command below.
```
node -v
```

### Installing Serverless
In your terminal please run command below.
```
npm i -g serverless
```
To verify we had a successful install please run version check below.
```
serverless -v
```

### Creating AWS account
For this workshop we will be using AWS Cloud Services and will need an account. Please follow [these directions](https://serverless.com/framework/docs/providers/aws/guide/credentials/) to sign up for an account and set your machine up with the correct credentials. This workshop falls under the 'free tier' of AWS but may force you to add a card. At the end of our workshop you can remove the entire project off of AWS and stop any possibility of charges by running the command below in the root directory of the project. Once you have the credentials you have the option to use [this helpful GUI](https://github.com/DavidWells/aws-profile-manager) if you do not want to do it through the aws-cli.
```
severless remove -v
```

## Questions
Please feel free to add an issue to this repository or shoot me a [tweet](https://twitter.com/novicki_david).