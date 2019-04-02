function AD(wareki) {
    var ad;
    if(wareki.indexOf("令和") === 0) {
      wareki = wareki.replace("令和", "");
      wareki = wareki.replace("年", "");
      ad = Number(wareki) + 2018;
      return ad + "年";
    }
    if(wareki.indexOf("平成") === 0) {
      wareki = wareki.replace("平成", "");
      wareki = wareki.replace("年", "");
      ad = Number(wareki) + 1988;
      return ad + "年";
    }
    if(wareki.indexOf("昭和") === 0) {
      wareki = wareki.replace("昭和", "");
      wareki = wareki.replace("年", "");
      ad = Number(wareki) + 1925;
      return ad + "年";
    }
    return "エラー";
  }