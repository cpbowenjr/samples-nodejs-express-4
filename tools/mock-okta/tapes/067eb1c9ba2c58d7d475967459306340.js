var path = require("path");

/**
 * GET /login/sessionCookieRedirect?checkAccountSetupComplete=true&token=20111zO2VuqTNFvwuSemIvp4t2gqgP0sv2Z3eDG-NFVLMtRiK7N2trl&redirectUrl=http://127.0.0.1:7777/oauth2/v1/authorize/redirect?okta_key=6yTWQmzYYxolhCEbdQfEVwnaCw6rANreWBl02jEqAo4
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: JSESSIONID=C141C2CF71A668DE453376F0F5170AC7; DT=DI0-WauJNNORVyn1GAbWPTiWA
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqIqgEJOqFRc6ra7MuhaAL1Q");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=102RtklG-woSTeZXbXkW1DJjQ;Version=1;Path=/;HttpOnly","proximity_f6a75e9d0f383e46ca776024464537b6=\"AOPvYRM59+6Y3H13no7dYD2c9oh0cExfNKHH4tFeqZpciy45pYNiu3c/gJ+v5LLKa2/cV4QLW+O2l2cbV+QiaDuqMTUmm2WyCYh4TQPXjFa94dqRpIqTo3QxFfflFyxfnNY2F12G83FJdZmJagX8OiurGjsqLbLZ5xCvUCXKncXUSFtj5NINqdktmyGha/HR\"; Version=1; Max-Age=31536000; Expires=Fri, 10-Aug-2018 22:13:29 GMT; Path=/","JSESSIONID=C141C2CF71A668DE453376F0F5170AC7; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9997");
  res.setHeader("x-rate-limit-reset", "1502403262");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("location", "http://127.0.0.1:7777/oauth2/v1/authorize/redirect?okta_key=6yTWQmzYYxolhCEbdQfEVwnaCw6rANreWBl02jEqAo4");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 10 Aug 2017 22:13:29 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
