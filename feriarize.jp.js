var jp;
(function (jp) {
    var feriarize;
    (function (feriarize) {
        var ts;
        (function (ts) {
            class HeadAnimation {
                constructor() {
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
                        for (var i = 0; i < len; i++) {
                            var targetElement = this.targets[i].element;
                            content.removeChild(targetElement);
                        }
                        this.targets = [];
                        index = 0;
                        return index;
                    };
                    var content = document.getElementById('head_animation');
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
                        actObj.x = 1000 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getW() * 0.5;
                        actObj.y = 500 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getH() * 0.5;
                        actObj.z = 500 * ns.MathBit.randomInt(-10, 10) * 0.1 - target.getH() * 0.5;
                        //actObj.a = ns.MathBit.randomInt(1, 100) * 0.1;
                        actObj.w = target.getW() * ns.MathBit.randomInt(0, 20) * 0.1;
                        actObj.h = actObj.w;
                        actObj.rx = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / window.innerWidth * 10;
                        actObj.ry = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / window.innerHeight * 10;
                        actObj.rz = 360 * ns.MathBit.randomInt(-10, 10) * 0.1 * 100 / 1000 * 10;
                        actObj = ns.act.ActionTween.Act(target, ns.MathBit.randomInt(8, 10) * 0.01, ns.act.ActionMethod.adsorb);
                        actObj.a = ns.MathBit.randomInt(1, 10) * 0.1;
                        actObj = ns.act.ActionTween.Act(target, ns.MathBit.randomInt(8, 10) * 0.01, ns.act.ActionMethod.adsorb);
                        actObj.x = 0;
                        actObj.y = 0;
                        actObj.z = 0;
                        actObj.w = target.getW();
                        actObj.h = target.getH();
                        actObj.ry = 3600;
                        actObj.rx = 3600;
                        actObj.rz = 3600;
                        actObj.a = 1;
                    }
                    for (var i = 0; i < 50; i++) {
                        var element = spanList[i];
                        var rect = element.getBoundingClientRect();
                        element.style.backgroundPosition = -(rect.left - pRect.left).toString() + 'px ' + (-(rect.top - pRect.top)).toString() + 'px';
                    }
                    this.action = new ns.ActionObj(this.onAction);
                    this.action.setTickIndex(1);
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