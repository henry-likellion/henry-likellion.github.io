if (typeof __ADGEAR !== 'object') {
  __ADGEAR = {};
}

if (typeof __ADGEAR.loaderframes !== 'object') {
  __ADGEAR.loaderframes = {};
}

if (typeof __ADGEAR.load3padCB !== 'function') {
  __ADGEAR.load3padCB = function(frame, slot, site_id, format_id, width, height, position, url) {
    if (slot in __ADGEAR.loaderframes)
      return;

    var is_ssl = true;
    var code = [];
    code.push("<!DOCTYPE html>");
    code.push("<html><body>");
    code.push("<div id='adgear_load3p_slot_" + slot + "'></div>");
    code.push("<script type='text/javascript'>__AG = { spots: [ { format: '" + format_id + "'" +
              ", target: 'adgear_load3p_slot_" + slot + "'");
    if ((position != null) && (typeof position == "string") && (position !== ""))
      code.push(", position: '" + position + "'");
    code.push("} ] };");
    if ((url != null) && (typeof url == "string") && (url !== ""))
      code.push("__AG.url = '" + url + "';");
    if (is_ssl)
      code.push("__ADGEAR_SSL = true;");
    code.push("</script>");
    code.push("<script type='text/javascript' async='true' src='https://cdn.adgrx.com/sites/" + site_id + "/tag.js'></script>");
    code.push("</body></html>");
    code = code.join("");

    __ADGEAR.loaderframes[slot] = true;
    var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument;
    if (null != doc) {
      doc.open("text/html", "replace");
      doc.write(code);
      doc.close();
    }
  }
}

if (typeof __ADGEAR.load3pad !== 'function') {
  __ADGEAR.load3pad = function(site_id, format_id, width, height, position, url) {
    var slot = String(Math.floor(Math.random() * 1000000000));
    var iframe = "adgear_loader_iframe_" + slot;
    var cb = ['__ADGEAR.load3padCB'];

    cb.push('(');
    cb.push('this');
    cb.push(',"' + slot + '"');
    cb.push(',"' + String(site_id) + '"');
    cb.push(',"' + String(format_id) + '"');
    cb.push(',"' + String(width) + '"');
    cb.push(',"' + String(height) + '"');

    cb.push(',"');
    if ((position != null) && (typeof position == "string") && (position !== ""))
      cb.push(position);
    cb.push('"');

    cb.push(',"');
    if ((url != null) && (typeof url == "string") && (url !== ""))
      cb.push(url);
    cb.push('"');

    cb.push(');');
    cb = cb.join("");

    document.writeln("<iframe id='" + iframe + "' name='" + iframe + "' width='" + String(width) +
                     "' height='" + String(height) + "' vspace='0' hspace='0' allowtransparency='true' " +
                     "scrolling='no' marginwidth='0' marginheight='0' frameborder='0' " +
                     "style='border:0' src='about:blank' onload='" + cb + "'></iframe>");
  }
}

__ADGEAR.load3pad("54a1a9f04a4643b4aa4642fe9b49e54b", "2", "300", "250", "", "");
