FROM iojs

# pre-cache node_modules
RUN mkdir /opt/tmp
ADD package.json /opt/tmp/package.json
WORKDIR /opt/tmp
RUN npm install --silent

# add app files
ADD . /opt/application
WORKDIR /opt/application
RUN cp -R /opt/tmp/node_modules /opt/application/

# run
CMD ["npm", "start"]
