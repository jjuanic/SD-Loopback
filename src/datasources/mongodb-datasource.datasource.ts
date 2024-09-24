import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DatasourceMongodb2',
  connector: 'mongodb',
  url: 'mongodb+srv://juanignacioch4:beto123@betodb.fkgv4zr.mongodb.net/?retryWrites=true&w=majority&appName=BetoDB',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'sistDistribuidos',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DatasourceMongodb2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DatasourceMongodb2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DatasourceMongodb2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
