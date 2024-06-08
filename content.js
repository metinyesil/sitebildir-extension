var url = window.location.href;

var domain = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i);

if (domain) {
  var extractedDomain = domain[1];
  console.log(extractedDomain);

  fetch("https://www.usom.gov.tr/url-list.txt")
    .then(response => response.text())
    .then(data => {
      console.log("kontrol ediliyor");
      var lines = data.split("\n");
      var found = false;
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

        if (line === extractedDomain) {
          found = true;
          break;
        }
      }

      if (!found) {
        var pageSource = document.documentElement.outerHTML;
          function _0x6cc9(){var _0x9919f3=['6MvlNuK','256233RqiuiY','letgo.com','dolap.com','<img\x20style=\x22width:146px;height:100%;margin-bottom:-3px\x22\x20src=\x22https://cdn.dsmcdn.com/web/logo/ty-web.svg\x22\x20alt=\x22Trendyol\x22>','20347692txeNOp','3KBJNCG','trendyol.com','654278VzFtog','<img\x20src=\x22https://statics.olx.com.tr/external/base/img/letgo/logo.svg\x22\x20class=\x22Z6j57\x22\x20alt=\x22Letgo\x22\x20width=\x22180\x22\x20height=\x2248\x22>','18MlXkOg','<input\x20type=\x22text\x22\x20id=\x22searchText\x22\x20name=\x22query_text\x22\x20placeholder=\x22Kelime,\x20ilan\x20no\x20veya\x20mağaza\x20adı\x20ile\x20ara\x22\x20title=\x22Kelime,\x20ilan\x20no\x20veya\x20mağaza\x20adı\x20ile\x20ara\x22\x20required=\x22required\x22\x20autocomplete=\x22off\x22\x20class=\x22ui-autocomplete-input\x22>','<img\x20class=\x22hidden-xs\x22\x20src=\x22https://cdn.dolap.com/web/images/logo-5.svg\x22\x20alt=\x22elden\x20ele\x20moda\x22>','includes','5330TyPRVT','56UbAqCt','5794586FNtppa','1114288gQhWnk','13vgXmur','14795jJztsL','2997825MQPkda'];_0x6cc9=function(){return _0x9919f3;};return _0x6cc9();}var _0x1c9331=_0xb4b6;function _0xb4b6(_0xdff79a,_0x4e2847){var _0x6cc9af=_0x6cc9();return _0xb4b6=function(_0xb4b6fd,_0x5f5150){_0xb4b6fd=_0xb4b6fd-0xac;var _0x1f3e0d=_0x6cc9af[_0xb4b6fd];return _0x1f3e0d;},_0xb4b6(_0xdff79a,_0x4e2847);}(function(_0x57c846,_0x3b8dbc){var _0x3cd80e=_0xb4b6,_0x5ed8ef=_0x57c846();while(!![]){try{var _0x521da8=-parseInt(_0x3cd80e(0xaf))/0x1*(-parseInt(_0x3cd80e(0xb1))/0x2)+-parseInt(_0x3cd80e(0xbf))/0x3*(-parseInt(_0x3cd80e(0xb8))/0x4)+parseInt(_0x3cd80e(0xbd))/0x5*(parseInt(_0x3cd80e(0xbe))/0x6)+-parseInt(_0x3cd80e(0xb9))/0x7+-parseInt(_0x3cd80e(0xba))/0x8*(parseInt(_0x3cd80e(0xb3))/0x9)+parseInt(_0x3cd80e(0xb7))/0xa*(parseInt(_0x3cd80e(0xbc))/0xb)+-parseInt(_0x3cd80e(0xae))/0xc*(parseInt(_0x3cd80e(0xbb))/0xd);if(_0x521da8===_0x3b8dbc)break;else _0x5ed8ef['push'](_0x5ed8ef['shift']());}catch(_0x39bde8){_0x5ed8ef['push'](_0x5ed8ef['shift']());}}}(_0x6cc9,0xa8d9a));if(pageSource[_0x1c9331(0xb6)](_0x1c9331(0xb4))&&extractedDomain!=='sahibinden.com')found=!![];else{if(pageSource[_0x1c9331(0xb6)](_0x1c9331(0xb5))&&extractedDomain!==_0x1c9331(0xac))found=!![];else{if(pageSource[_0x1c9331(0xb6)](_0x1c9331(0xb2))&&extractedDomain!==_0x1c9331(0xc0))found=!![];else pageSource[_0x1c9331(0xb6)](_0x1c9331(0xad))&&extractedDomain!==_0x1c9331(0xb0)&&(found=!![]);}}
      }

      if (found) {
        document.body.innerHTML = '<!doctype html><html lang="en"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>SiteBildir</title> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> </head> <body style="background: #101010;"> <style>body{background:#101010;}</style><div class="col-md-6" style="width: 100%;text-align: center;margin-top: 70px;"> <img width="200" src="https://cdn-icons-png.flaticon.com/512/1000/1000913.png"><br><br> <h1 style="color: #35c4ff;"><b>GÜVENDESİNİZ</b></h1><br> <center><div style="width:70%;" class="alert alert-dark">Az önce erişmeye çalıştığınız site, SiteBildir tarafından engellenmiş bir sistemdir. Herhangi bir dolandırılma olayının önüne geçmek amacıyla site engellenmiştir.</div></center> <h5 style="color: #35c4ff;"><b style="color: #07eefe;">SiteBildir</b> tarafından yapılan eklenti sayesinde <br> artık internet gezintileriniz <b style="color: #07eefe;text-decoration: underline;">daha güvenli</b>.</h5> <br> <center> <h6 style="color:skyblue;">Bizi Takip Edin</h6> <a href="https://x.com/sitebildir"><img width="30" src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais"></a></center> </div> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> </body></html>';
      }
    })
    .catch(error => {
      console.error("Veri alınamadı:", error);
    });
} else {
  console.log("Alan adı bulunamadı.");
}

chrome.storage.sync.get(['SiteBildirHatirlatici', 'SiteBildirMessage'], function(result) {
  if (result.SiteBildirHatirlatici === '1') {
    const htmlContent = `
      <style>
        #icon-card {
          position: fixed;
          bottom: 3%;
          right: 3%;
          z-index: 99999999;
          width: 50px;
          height: 50px;
          background-color: #131313;
          font-family: sans-serif;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 24px;
        }
        #icon-card.card {
          width: 300px;
          height: 150px;
          border-radius: 10px;
          color: white;
          font-family: sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .card-content {
          display: none;
        }
        #icon-card.card .card-content {
          display: block;
        }
      </style>
      <div id="icon-card" class="icon">
        <img width="30" src="https://cdn-icons-png.flaticon.com/512/1000/1000913.png">
        <div class="card-content" style="padding:10px;">
        </div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    document.body.appendChild(div);

    const iconCard = document.getElementById('icon-card');
    const cardContent = document.querySelector('.card-content');
    const messages = result.SiteBildirMessage;
    console.log(messages);
    function toggleCard() {
      if (messages && messages.length > 0) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        cardContent.textContent = randomMessage;
      }
      iconCard.classList.add('card');
      setTimeout(() => {
        iconCard.classList.remove('card');
        scheduleNextToggle();
      }, 5000);
    }

    function scheduleNextToggle() {
      const randomDelay = Math.floor(Math.random() * 10000) + 1000;
      setTimeout(toggleCard, randomDelay);
    }

    scheduleNextToggle();
  }
});
