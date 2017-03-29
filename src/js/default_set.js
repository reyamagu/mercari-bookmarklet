/**
 * Bookmarklet
 * @param  {[type]} (function(undefined [description]
 * @return {[type]}                     [description]
 */
void((function(undefined) {
  var d = document;
  /* Á´¶¦ÄÌ·Ï */
  // ÇÛÁ÷ÎÁÉéÃ´
  d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(1) > div > select").value = 2;
  // ÇÛÁ÷ÆüÄø
  d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(3) > div > select").value = 1;
  // ÇÛÁ÷¸µ ¿ÀÆàÀî
  d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(2) > div > select").value = 14;
})());

/**
 * OneLiner
 * http://dean.edwards.name/packer/
 */
javascript:void((function(undefined){var d=document;d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(1) > div > select").value=2;d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(3) > div > select").value=1;d.querySelector("#sell-container > div > div > form > div:nth-child(4) > div > div:nth-child(2) > div > select").value=14})());
