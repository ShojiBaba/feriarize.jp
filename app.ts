/// <reference path="../jp.ninesense.typescript/jp.ninesense.ts.common/jp.ninesense.ts.common.d.ts" />
/// <reference path="scripts/headanimation.ts" />



var ns = jp.ninesense.ts;
var fs = jp.feriarize.ts;

ns.http.init('', (param: { [key: string]: string }) => {
    new fs.HeadAnimation();
});
