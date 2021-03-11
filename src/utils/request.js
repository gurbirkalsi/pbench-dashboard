import { extend } from 'umi-request';

const errorHandler = error => {
  throw new Error(error);
};

const request = extend({
  errorHandler, // extend default error handler with custom actions
});

export default request;
