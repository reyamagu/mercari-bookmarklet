/**
 * Bookmarklet
 * @memo   priceの￥マークは\に変換されてしまうので、毎回直接直す
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
