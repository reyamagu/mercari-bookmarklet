/**
 * Bookmarklet
 * @memo   priceの￥マークは\に変換されてしまうので、毎回直接直す
 */
void((function(undefined) {
  var d = document,
      dtlLists = d.querySelectorAll("body > div > main > div.l-content > section > div.item-main-content.clearfix > table > tbody > tr"),
      subDesc = {},
      node = d.createElement("textarea"),
      result = {
        'title' : d.querySelector("body > div > main > div.l-content > section > h2").innerText,
        'price' : d.querySelector("body > div > main > div.l-content > section > div.item-price-box.text-center > span.item-price").innerText.replace(/\\\ /g,"").replace(/\,/g,""),
        'body'  : d.querySelector("body > div > main > div.l-content > section > div.item-description").innerText
      },
      jsonRes,
      subDescJson;

  for (var i = 0; i < dtlLists.length; i++) {
    var key = dtlLists[i].querySelector("th").innerText,
        val = dtlLists[i].querySelector("td").innerText;

    // 特定のカテゴリは全共通なので弾く
    if (key !== "出品者" && key !== "配送元地域" && key !== "発送日の目安") {
        subDesc[key] = val;
    }

    // 親カテゴリだけコードを持っておく
    if (key === "カテゴリー") {
      result['categoryId'] = dtlLists[i].querySelector("td a").getAttribute('href').replace(/https\:\/\/www\.mercari\.com\/jp\/category\//g,"").replace(/\//g,"");
    }
  }

  subDescJson = JSON.stringify(subDesc);

  result['detail'] = subDescJson;

  jsonRes = JSON.stringify(result);

  node.className = "forclipboard";
  node.value = jsonRes;
  d.body.appendChild(node).select();
  d.execCommand("copy");
})());

/**
 * OneLiner
 * http://dean.edwards.name/packer/
 */
javascript:void((function(undefined){var d=document,dtlLists=d.querySelectorAll("body > div > main > div.l-content > section > div.item-main-content.clearfix > table > tbody > tr"),subDesc={},node=d.createElement("textarea"),result={'title':d.querySelector("body > div > main > div.l-content > section > h2").innerText,'price':d.querySelector("body > div > main > div.l-content > section > div.item-price-box.text-center > span.item-price").innerText.replace(/\\\ /g,"").replace(/\,/g,""),'body':d.querySelector("body > div > main > div.l-content > section > div.item-description").innerText},jsonRes,subDescJson;for(var i=0;i<dtlLists.length;i++){var key=dtlLists[i].querySelector("th").innerText,val=dtlLists[i].querySelector("td").innerText;if(key!=="出品者"&&key!=="配送元地域"&&key!=="発送日の目安"){subDesc[key]=val}if(key==="カテゴリー"){result['categoryId']=dtlLists[i].querySelector("td a").getAttribute('href').replace(/https\:\/\/www\.mercari\.com\/jp\/category\//g,"").replace(/\//g,"")}}subDescJson=JSON.stringify(subDesc);result['detail']=subDescJson;jsonRes=JSON.stringify(result);node.className="forclipboard";node.value=jsonRes;d.body.appendChild(node).select();d.execCommand("copy")})());
