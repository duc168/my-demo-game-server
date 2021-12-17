FROM node:14.18.2 as build-stage
WORKDIR /source
COPY . .
RUN npm install
RUN npm run build

FROM node:14.18.2
WORKDIR /game-server
COPY --from=build-stage /source/build/ .
ENV PORT=8080
EXPOSE 8080
CMD ["node", "index.js"]