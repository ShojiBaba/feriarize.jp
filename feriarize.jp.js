var jp;
(function (jp) {
    var feriarize;
    (function (feriarize) {
        var ts;
        (function (ts) {
            class HeadAnimation {
                constructor() {
                    this.onResize = (ev = null) => {
                        var style = window.getComputedStyle(this.animationContent);
                        var w = parseInt(style.width);
                        var winW = window.innerWidth;
                        if (winW < w) {
                            /* ユークリッドの互除法 */
                            var r = w % winW;
                            while (r != 0) {
                                w = winW;
                                winW = r;
                                r = w % winW;
                            }
                            var scale = parseInt(style.width) / winW;
                        }
                    };
                    this.onAction = (index, option) => {
                        var len = this.targets.length;
                        var exit = true;
                        for (var i = 0; i < len; i++) {
                            var target = this.targets[i];
                            if (!ns.act.ActionTween.Chash(target, 1))
                                continue;
                            if (!ns.act.ActionTween.GoOneFrame(target)) {
                                exit = false;
                            }
                            else if (ns.act.ActionTween.GoNextAction(target)) {
                                exit = false;
                            }
                        }
                        if (!exit)
                            return index;
                        var content = document.getElementById('head_animation');
                        content.classList.add('stopped');
                        /*
                        for (var i = 0; i < len; i++) {
                            var targetElement = this.targets[i].element;
                            content.removeChild(targetElement);
                        }
                        this.targets = [];
                        */
                        index = 0;
                        return index;
                    };
                    var content = document.getElementById('head_animation');
                    this.animationContent = content;
                    var pRect = content.getBoundingClientRect();
                    var spanList = [];
                    this.targets = [];
                    for (var i = 0; i < 50; i++) {
                        var element = document.createElement('span');
                        element.style.opacity = '0';
                        content.appendChild(element);
                        spanList.push(element);
                        var target = new ns.act.ActionElement(element);
                        target.perspective = 1000;
                        this.targets.push(target);
                        var actObj = ns.act.ActionTween.Act(target, ns.MathBit.randomInt(6, 10) * 0.1, ns.act.ActionMethod.snap);
                        actObj.x.value = 1000 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getW() * 0.5;
                        actObj.y.value = 500 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getH() * 0.5;
                        actObj.z.value = 500 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getH() * 0.5;
                        //actObj.a = ns.MathBit.randomInt(1, 100) * 0.1;
                        actObj.w.value = target.getW() * ns.MathBit.randomInt(0, 20) * 0.1;
                        actObj.h.value = actObj.w.value;
                        actObj.rx.value = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / window.innerWidth * 10;
                        actObj.ry.value = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / window.innerHeight * 10;
                        actObj.rz.value = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / 1000 * 10;
                        actObj = ns.act.ActionTween.Act(target, ns.MathBit.randomInt(8, 10) * 0.01, ns.act.ActionMethod.adsorb);
                        actObj.x.value = 0;
                        actObj.y.value = 0;
                        actObj.z.value = 0;
                        actObj.w.value = target.getW();
                        actObj.h.value = target.getH();
                        actObj.ry.value = 360;
                        actObj.rx.value = 360;
                        actObj.rz.value = 360;
                        actObj.a.value = 1;
                        actObj.rx.max = 90;
                        actObj.ry.max = 90;
                        actObj.rz.max = 90;
                        actObj.x.min = 1;
                        actObj.y.min = 1;
                        actObj.z.min = 1;
                        actObj.a.min = 0.1;
                    }
                    for (var i = 0; i < 50; i++) {
                        var element = spanList[i];
                        var rect = element.getBoundingClientRect();
                        element.style.backgroundPosition = -(rect.left - pRect.left).toString() + 'px ' + (-(rect.top - pRect.top)).toString() + 'px';
                    }
                    this.action = new ns.ActionObj(this.onAction);
                    this.action.setTickIndex(1);
                    this.onResize();
                    window.addEventListener("resize", this.onResize);
                }
            }
            ts.HeadAnimation = HeadAnimation;
        })(ts = feriarize.ts || (feriarize.ts = {}));
    })(feriarize = jp.feriarize || (jp.feriarize = {}));
})(jp || (jp = {}));
/// <reference path="../jp.ninesense.typescript/jp.ninesense.ts.common/jp.ninesense.ts.common.d.ts" />
/// <reference path="scripts/headanimation.ts" />
var ns = jp.ninesense.ts;
var fs = jp.feriarize.ts;
ns.http.init('', (param) => {
    new fs.HeadAnimation();
});
//# sourceMappingURL=feriarize.jp.js.map