(function () {
  function inject() {
    var el = document.getElementById("shared-content");
    if (!el) return;
    el.innerHTML = `
<div class="container">
 <h1>プライバシーポリシー</h1>
 <p class="intro">株式会社3S（以下「当社」といいます。）は、...当社の提供するサービス（以下「当社サービス」といいます。）における、お客様の個人情報の取り扱いについて、以下のとおり、プライバシーポリシー（以下「本プライバシーポリシー」といいます。）を定めます。</p>

<div class="article">
  <h2><span class="article-num">1.</span><span class="article-title">個人情報の定義</span></h2>
  <p class="no-indent">本プライバシーポリシーにおける個人情報とは、個人情報保護法第2条第1項により定義された個人情報を意味するものとします。</p>
</div>

<div class="article">
  <h2><span class="article-num">2.</span><span class="article-title">個人情報の取得と利用目的</span></h2>
  <p class="no-indent">当社が個人情報を取得し、利用する目的は以下のとおりです。</p>
  <ul>
    <li><span class="li-body">当社サービスの提供のため</span></li>
    <li><span class="li-body">当社サービスに関するご案内、お問い合わせ等への対応のため</span></li>
    <li><span class="li-body">当社サービスに関する規約等の変更などを通知するため</span></li>
    <li><span class="li-body">その他、上記利用目的に付随する目的のため</span></li>
  </ul>
</div>

<div class="article">
  <h2><span class="article-num">3.</span><span class="article-title">個人情報利用目的の変更</span></h2>
  <p class="no-indent">当社は、個人情報の利用目的を相当の関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合にはお客様に通知又は公表します。</p>
</div>

<div class="article">
  <h2><span class="article-num">4.</span><span class="article-title">個人情報の安全管理</span></h2>
  <p class="no-indent">当社は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、当社の従業員に対し、必要かつ適切な監督を行います。また、当社は、個人情報の取扱いの全部又は一部を委託する場合は、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。</p>
</div>

<div class="article">
  <h2><span class="article-num">5.</span><span class="article-title">個人情報の第三者提供</span></h2>
  <p class="no-indent">当社は、個人情報保護法その他の法令により許容される場合を除き、お客様の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱いません。但し、次の場合はこの限りではありません。</p>
  <ul>
    <li><span class="li-body">法令に基づく場合</span></li>
    <li><span class="li-body">人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</span></li>
    <li><span class="li-body">公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</span></li>
    <li><span class="li-body">国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</span></li>
  </ul>
  <p class="no-indent">前項の定めにかかわらず、次に掲げる場合は第三者に該当しないものとします。</p>
  <ul>
    <li><span class="li-body">当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</span></li>
    <li><span class="li-body">合併その他の事由による事業の承継に伴って個人情報が提供される場合</span></li>
    <li><span class="li-body">個人情報保護法の定めに基づき共同利用する場合</span></li>
  </ul>
</div>

<div class="article">
  <h2><span class="article-num">6.</span><span class="article-title">個人情報の開示</span></h2>
  <p class="no-indent">当社は、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ご本人からのご請求であることを確認の上で、ご本人に対し、遅滞なく開示を行います。（当該個人情報が存在しないときにはその旨を通知いたします。）但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。</p>
</div>

<div class="article">
  <h2><span class="article-num">7.</span><span class="article-title">個人情報の訂正及び削除</span></h2>
  <p class="no-indent">お客様は、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。</p>
  <p class="no-indent">当社は、お客様から個人情報の訂正等の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく当該個人情報の訂正等を行うものとします。個人情報の訂正等を行った場合、または訂正等を行わない旨の決定をしたときは、遅滞なくこれをお客様に通知します。</p>
</div>

<div class="article">
  <h2><span class="article-num">8.</span><span class="article-title">個人情報の利用停止等</span></h2>
  <p class="no-indent">当社は、個人情報があらかじめ公表された利用目的の範囲を超えて取り扱われているという理由又は偽りその他不正の手段により取得されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止又は消去（以下「利用停止等」といいます。）を求められた場合において、そのご請求に理由があることが判明した場合には、本人からのご請求であることを確認の上で、遅滞なく個人情報の利用停止等を行い、その旨を本人に通知します。但し、個人情報保護法その他の法令により、当社が利用停止等の義務を負わない場合は、この限りではありません。</p>
</div>

<div class="article">
  <h2><span class="article-num">9.</span><span class="article-title">プライバシーポリシーの変更</span></h2>
  <p class="no-indent">本プライバシーポリシーの内容は、予告なく変更することがあります。変更があった場合には、当社のウェブサイトにてお知らせいたします。</p>
</div>

<div class="article">
  <h2><span class="article-num">10.</span><span class="article-title">お問い合わせ</span></h2>
  <p class="no-indent">当社の個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。</p>
  <p class="no-indent">株式会社3S<br>E-mail：kanri@3s-style.com<br>受付時間：平日10:00～17:00</p>
  <p class="no-indent">2023年12月22日制定</p>
</div>

</div>
`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
