/**
 * Bookmarklet
 * @memo   price�Ρ�ޡ�����\���Ѵ�����Ƥ��ޤ��Τǡ����ľ��ľ��
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

    // ����Υ��ƥ���������̤ʤΤ��Ƥ�
    if (key !== "���ʼ�" && key !== "�������ϰ�" && key !== "ȯ�������ܰ�") {
        subDesc[key] = val;
    }

    // �ƥ��ƥ�����������ɤ���äƤ���
    if (key === "���ƥ��꡼") {
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
javascript:void((function(undefined){var d=document,dtlLists=d.querySelectorAll("body > div > main > div.l-content > section > div.item-main-content.clearfix > table > tbody > tr"),subDesc={},node=d.createElement("textarea"),result={'title':d.querySelector("body > div > main > div.l-content > section > h2").innerText,'price':d.querySelector("body > div > main > div.l-content > section > div.item-price-box.text-center > span.item-price").innerText.replace(/\\\ /g,"").replace(/\,/g,""),'body':d.querySelector("body > div > main > div.l-content > section > div.item-description").innerText},jsonRes,subDescJson;for(var i=0;i<dtlLists.length;i++){var key=dtlLists[i].querySelector("th").innerText,val=dtlLists[i].querySelector("td").innerText;if(key!=="���ʼ�"&&key!=="�������ϰ�"&&key!=="ȯ�������ܰ�"){subDesc[key]=val}if(key==="���ƥ��꡼"){result['categoryId']=dtlLists[i].querySelector("td a").getAttribute('href').replace(/https\:\/\/www\.mercari\.com\/jp\/category\//g,"").replace(/\//g,"")}}subDescJson=JSON.stringify(subDesc);result['detail']=subDescJson;jsonRes=JSON.stringify(result);node.className="forclipboard";node.value=jsonRes;d.body.appendChild(node).select();d.execCommand("copy")})());
