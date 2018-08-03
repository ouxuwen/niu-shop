const DEPLOY = "debug";

const FETCH = {
  "production": {
    urlPrefix: 'http://eywen4.natappfree.cc/ionic-shop/index.php',
    imgPrefix: 'http://eywen4.natappfree.cc/ionic-shop/'
  },
  "debug": {
    urlPrefix: 'http://eywen4.natappfree.cc/ionic-shop/index.php',
    imgPrefix: 'http://eywen4.natappfree.cc/ionic-shop/'
  }
}

export const URL = FETCH[DEPLOY];
