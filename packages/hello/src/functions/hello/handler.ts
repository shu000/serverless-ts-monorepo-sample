import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from 'my-libs';
import { formatJSONResponse } from 'my-libs';
import { middyfy } from 'my-libs';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = middyfy(hello);
