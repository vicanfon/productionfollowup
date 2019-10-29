FROM node:alpine
ENV ASSET_NAME="productionfollowup"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache bash
RUN npm run boot
EXPOSE 4201
LABEL vf-OS=true
LABEL vf-OS.icon=img/2.png
LABEL vf-OS.urlprefixReplace=true6
LABEL vf-OS.frontendUri="/productionfollowup/"
LABEL vf-OS.name=productionfollowup
LABEL vf-OS.market.product=9
LABEL vf-OS.version.major=1
LABEL vf-OS.market.price=1
LABEL vf-OS.version.version=4.3
CMD ["npm", "start"]
