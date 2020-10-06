FROM arm32v7/node:current

WORKDIR /app

COPY package.json .

RUN yarn install --network-timeout 1000000000
COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve", "-n", "build"]

