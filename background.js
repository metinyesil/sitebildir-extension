
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "checkIfSiteExists") {
    var siteUrl = request.url;
    checkIfSiteExists(siteUrl, sendResponse);
    return true;
  }
});


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ SiteBildirHatirlatici: '0' });
  chrome.storage.sync.set({ SiteBildirMessage: [
    "Google'da bir arama yaptığınızda tıkladığınız sitenin 'Reklam' olmadığına dikkat ediniz.",
    "Kredi kartı dolandırıcılığı sizlere her zaman ücretsiz vaatler sunacaktır.",
    "Çok yüksek fiyatlı indirimler olduğunu söyleyen reklamlara aldanmayın.",
    "SiteBildir'i Twitter'dan takip edebilirsin! https://x.com/sitebildir",
    "Kendini Sahibinden, Trendyol, Letgo, Dolap gibi sistemlerde Muhasebe danışmanı olarak adlandıran kişilerin söylemlerine kulak asmayın.",
    "Bir dolandırıcının tek amacı, sizden para almaktır. Miktarını önemsemeden.",
    "Kaçak Bahis Sitesi kullanımı, P*dofili iddiasıyla sizden para isteyen kişilere kulak asmayın.",
    "Bu programı indir para kazan, bu programı indir şu ürün ücretsiz gibi vaatlerle size sunulan uygulamaları indirmeyin..",
    "Sosyal medya hesaplarınıza tanımadığınız kişilerden gelen mesajlara dikkat ediniz.",
    "E-posta adresinize gelen şüpheli bağlantılara tıklamayın.",
    "Sosyal mühendislik saldırıları, genellikle acil durum ve baskı yaratma taktikleri kullanır.",
    "Telefon numaranızı bilinmeyen web sitelerine kaydetmeyin.",
    "Güvenilir olmayan kaynaklardan gelen yazılım indirme tekliflerini reddedin.",
    "Şüpheli bağlantılar içeren e-postaları açmadan önce kaynağını doğrulayın.",
    "Yüksek getirili yatırım tekliflerine temkinli yaklaşın, genellikle dolandırıcıdır.",
    "Kişisel bilgilerinizi asla sosyal medyada paylaşmayın.",
    "Bankanız sizden telefon veya e-posta yoluyla şifrenizi istemez.",
    "Kimlik bilgilerinizi bilinmeyen kişilere veya sitelere vermekten kaçının.",
    "Bedava hediye veya ödül vaat eden mesajlara itibar etmeyin.",
    "Güvenli olmayan Wi-Fi ağlarını kullanırken dikkatli olun, kişisel bilgilerinizi çalabilirler.",
    "Şüpheli uygulamalardan gelen bildirimlere dikkat edin ve doğruluğunu kontrol edin.",
    "Sadece güvenilir ve bilinen e-ticaret sitelerinden alışveriş yapın.",
    "Antivirüs yazılımınızı düzenli olarak güncelleyin ve taramalar yapın.",
    "Çok cazip görünen iş tekliflerine karşı dikkatli olun, genellikle tuzak olabilir.",
    "Tanımadığınız kişilerden gelen ödeme taleplerine dikkat edin.",
    "Şüpheli görünen SMS veya mesajları hemen silin ve yanıt vermeyin.",
    "Sosyal medya hesaplarınızda güçlü ve benzersiz şifreler kullanın.",
    "Çevrimiçi bankacılık işlemlerini güvenli ve özel cihazlar üzerinden gerçekleştirin.",
    "Kredi kartı bilgilerinizi asla güvenli olmayan veya şüpheli web sitelerinde paylaşmayın.",
    "Yasal olmayan faaliyetlerde bulunduğunu iddia eden kişilere karşı dikkatli olun.",
    "Güncellemeleri yalnızca resmi kaynaklardan indirin ve yükleyin.",
    "Şüpheli görünen web sitelerinden dosya indirmeyin.",
    "Kişisel bilgilerinizi telefon üzerinden paylaşmadan önce doğrulama yapın.",
    "Bilgisayarınıza şüpheli yazılımlar yüklemeyin.",
    "Güvenlik açıklarından korunmak için tarayıcınızı ve diğer yazılımlarınızı güncel tutun.",
    "Şüpheli sosyal medya profillerine ve bağlantı isteklerine dikkat edin.",
    "Online forumlarda kişisel bilgilerinizi paylaşmayın.",
    "Sahte müşteri hizmetleri numaralarına dikkat edin ve doğrulama yapmadan aramayın."

  ]});
});


function checkIfSiteExists(siteUrl, callback) {
  var usomUrl = "https://www.usom.gov.tr/url-list.txt";

  fetch(usomUrl)
    .then(response => response.text())
    .then(data => {
      callback(data.includes(siteUrl));
    })
    .catch(error => {
      console.error("URL listesi kontrol edilemedi:", error);
      callback(false);
    });
}

