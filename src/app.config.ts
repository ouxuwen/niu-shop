const DEPLOY = "debug";

const FETCH = {
  "production": {
    urlPrefix: 'http://127.0.0.1:8080/ionic-shop/index.php',
    imgPrefix: 'http://127.0.0.1:8080/ionic-shop/'
  },
  "debug": {
    urlPrefix: 'http://127.0.0.1:8080/ionic-shop/index.php',
    imgPrefix: 'http://127.0.0.1:8080/ionic-shop/'
  }
}

export const URL = FETCH[DEPLOY];
