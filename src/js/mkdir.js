/**
 * Bookmarklet
 * @memo   price�Ρ�ޡ�����\���Ѵ�����Ƥ��ޤ��Τǡ����ľ��ľ��
 */
void((function(undefined) {
  var d = document,
      node = d.createElement("textarea"),
      title = d.querySelector("body > div > main > div.l-content > section > h2").innerText,
      command = "mkdir \"" + title + "\"";
      
  node.value = command;
  d.body.appendChild(node).select();
  d.execCommand("copy");
})());

/**
 * OneLiner
 * http://dean.edwards.name/packer/
 */
