FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install @babel/core
RUN npm install @babel/preset-env
RUN npm install babel-jest
RUN npm install chai
RUN npm install cucumber
RUN npm install cucumber-html-reporter
RUN npm install jest
RUN npm install jest-html-reporter
RUN npm jest-puppeteer
RUN npm mocha
RUN npm puppeteer

COPY . .

CMD ["npm", "test", "--"]