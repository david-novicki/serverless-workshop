# Serverless Workshop
Serverless framework workshop hosted in Sacramento, CA. This workshop is designed to gain a fundamental understanding of the basics of serverless architecture and how to get started using the Serverless framework to build low cost and 'always up' services. 


## Getting Started
To get started you will need to have [NodeJS v6.10.3 (or higher)](https://nodejs.org/download/release/v6.10.3/) installed and the [Serverless framework](https://serverless.com/). AWS is currently still supporting as high as NodeJS v6.10.3 and for example clarity we will not add Babel support. Because of this we will only be writing code that is compatible with this version of NodeJS.

### Installing NodeJS
For this workship we are using current LTS version of NodeJS. I recommend install NodeJS through [NVM](https://github.com/creationix/nvm) for Mac/Linux  and [NVM Windows](https://github.com/coreybutler/nvm-windows) but you are more than welcome to just install NodeJS standalone. Rather then C & P everything from the docs please follow the links to setting up the dependencies. I have added some additional commands for what I feel may save you some time.

#### NVM
If you install NVM through their 'Getting Started' docs you will need to then install NodeJS through NVM. This is pretty easy and straight forward.
To install NodeJS specific version
```
nvm install v6.10.3
```
To use this newly installed version
```
nvm use v6.10.03
```
To set a specific default NodeJS version
```
nvm alias default v.6.10.3
```
To check to make sure your NodeJS version installed correctly and is the correct version run to ensure your current version matches your desired version.
```
node -v
```

### Installing Serverless
In your terminal please run
```
npm i -g serverless
```
To verify we had a successful install please run version check
```
serverless -v
```