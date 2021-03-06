
(function (win) {
    var optionObj = {};
    var setting = [
        { field: "fixed", value: "top" },//目前支持 top:顶部 bottom:底部
        { field: "left", value: [] },
        { field: "center", value: [] },
        { field: "right", value: [] },
    ];

    optionObj.render = function (h) {
        if (!this.display) {
            return;
        }
        var toLi = function (menus, isSub) {
            var arrMenu = [];
            menus.map(function (item) {
                if (item.href) {
                    arrMenu.push(<li><a href={item.href}>{item.text}</a></li>);
                    return;
                }
                if (item.hrefs) {
                    arrMenu.push(
                        <li class={isSub ? "dropdown-submenu" : "dropdown"}>
                            <a href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                {item.text}
                                {isSub ? "" : <span class="caret"></span>}
                            </a>
                            <ul class="dropdown-menu">
                                {toLi(item.hrefs, true)}
                            </ul>
                        </li>
                    );
                    return;
                }
                if (item.text) {
                    arrMenu.push(<li class="dropdown-header">{item.text}</li>);
                    return;
                }
                if (item == "-") {
                    arrMenu.push(<li class="divider"></li>);
                    return;
                }
            });
            return arrMenu;
        }
        var conversion = function (arr, float) {
            if (!Gx.base.isArray(arr)) {
                throw new Error("内容不是数组！");
            }
            //数组为空则不生成内容
            if (arr.length == 0) {
                return null;
            }
            return (<ul class={["nav", "navbar-nav", float]}>{toLi(arr)}</ul>);
        }


        return (
            <div
                class={[
                    "navbar",
                    "navbar-default",
                    "navbar-collapse",
                    "navbar-fixed-" + this.fixed,
                ]}
            >
                {conversion(this.left, "navbar-left")}
                {conversion(this.center, "navbar-center")}
                {conversion(this.right, "navbar-right")}
            </div>
        );
    };

    var Default = Vue.extend(Gx.ui.getResultObj(optionObj, setting));
    Gx.ui.coms.Default = Default;
    Gx.ui.createNavbar = function (options) {
        var obj = this.createInstance(Default, options, setting);
        return this.convertNavbar(obj);
    };
    Gx.ui.convertNavbar = function (vueCom) {
        return this.vmProxy({
            get root() {
                return vueCom;
            },
        }, setting);
    };
})(window);