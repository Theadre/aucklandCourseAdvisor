import 'reflect-metadata';
import { createExpressServer, useContainer, RoutingControllersOptions } from 'routing-controllers';
import { Container } from 'typedi';
import { createConnection, ConnectionOptions } from 'typeorm';
import { Application } from 'express';
import * as express from 'express';
import { FakeData } from './api/model/fake.data';

import { config } from './api/config';
import { join } from 'path';
import { CourseCode, Course } from './api/model/models';
import { CourseCodesController } from './api/controllers/course.codes.controller';

useContainer(Container);

class MyApp {

  constructor() { }

  dbConfig() {
    const opts: ConnectionOptions = {
      type: 'sqlite',
      name: 'default',
      database: `${__dirname}/api/data/db.sqlite`,
      // entities: [`${__dirname}/api/model/*{.js,.ts}`],
      entities: [
        CourseCode,
        // Course,
      ],
      synchronize: true,
      logging: [
        'error',
      ],
    }

    createConnection(opts)
      .then(() => console.log('Create connection with database has done successfully'))
      // .then(async () => await new FakeData().insertSomeFakeData())
      .catch(e => console.log(e))
      ;

    return this;
  }

  start(): Application {

    const opts: RoutingControllersOptions = {
      routePrefix: '/api',
      cors: true,
      classTransformer: true,
      // controllers: [CourseCodesController],
      controllers: [`${__dirname}/api/controllers/*.ts`, `${__dirname}/api/controllers/*.js`],
      // middlewares: [`${__dirname}/api/middlewares/*.ts`, `${__dirname}/api/middlewares/*.js`],
    }


    return createExpressServer(opts);
  }
}


const PORT = process.env.PORT || 4000;
const myApp = new MyApp();

myApp
  .dbConfig()
  .start()
  .use(express.static(join(__dirname, '/api/public')))
  // .use((req, res) => res.sendFile(join(__dirname, '/api/public', 'index.html')))
  .get('*', (req, res, next) => {
    console.log(`express:req from ${req.originalUrl}`);
    console.log(`express:req type ${req.method}`);
    next();
  })
  .listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`)
  } )
  ;


