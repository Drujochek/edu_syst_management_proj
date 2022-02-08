/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce04ac5a3f51133ab83aaf1627445987"
  },
  {
    "url": "assets/css/0.styles.fc783948.css",
    "revision": "56b97bb0697ea3c7acb0518572f4f102"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.978b8b3c.js",
    "revision": "7dbe0ca69cc591ebbefd7865ef130455"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.4025fda4.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
  },
  {
    "url": "assets/js/18.9e9d7f5c.js",
    "revision": "b8bff4cbe7f041462fd325b7b27197b6"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.96895072.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.b411da52.js",
    "revision": "37e9573c409c8ade0a6bf12d080e1005"
  },
  {
    "url": "assets/js/21.0c5a719e.js",
    "revision": "7ba28c865b708f4df664cfd7c93eb3b6"
  },
  {
    "url": "assets/js/22.8b253e7d.js",
    "revision": "298032fc3696719e46ec466570d63cb1"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.90c47b10.js",
    "revision": "9105e9171d46dd2fb339b40bdb38f645"
  },
  {
    "url": "conclusion/index.html",
    "revision": "169451aadfed7277036d5662600f32b0"
  },
  {
    "url": "design/index.html",
    "revision": "02628106fbb34ba4b8d75ba086ceaf8b"
  },
  {
    "url": "index.html",
    "revision": "743400630a28f11d29520f557ee0ce17"
  },
  {
    "url": "intro/index.html",
    "revision": "3cab55015e2a2ce430a6e98d6da302a5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f1b8b10527e46dd63734b40eaf79099d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "daa23d3af2f4b47da7ac6b7a063c1877"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ad97b21d772b7d877b73345acee3edef"
  },
  {
    "url": "software/index.html",
    "revision": "09fa22c1f71a8f56cc52db308a4dc43e"
  },
  {
    "url": "test/index.html",
    "revision": "fcfeafea1717c27b59bfe21becdbdc05"
  },
  {
    "url": "use cases/index.html",
    "revision": "ca3e21c9eb079ae3f2b284a7377a7847"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
