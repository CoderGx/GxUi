

(function (win) {
    var optionObj = {};
    var setting = [
        { field: "data", value: [] },
        { field: "selectIndex", value: 0 }
    ];

    optionObj.render = function (h) {
        var that = this;
        if (!this.display) {
            return;
        }
        this.data.map(function (item, index) {
            if (index == that.selectIndex) {
                item.el.classList.add("active", "in");
            } else {
                item.el.classList.remove("active", "in");
            }
        });

        return (
            <div
                ref="tabs"
            >
                <ul
                    class="nav nav-tabs"
                >
                    {this.data.map(function (item, index) {
                        return (
                            <li
                                class={[
                                    index == that.selectIndex ? "active" : null,
                                    item.disabled ? "disabled" : null
                                ]}
                            >
                                <a
                                    class={[
                                        item.disabled ? "disabled" : null
                                    ]}
                                    href={item.disabled ? null : "#" + item.id}
                                    data-toggle={item.disabled ? null : "tab"}
                                    onClick={function () {
                                        that._baseClick(item, index);
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div
                    ref="content"
                    class="tab-content"
                >
                </div>
            </div>
        );
    };
    optionObj.updated = function () {
        this._baseRender();
    };
    optionObj.mounted = function () {
        this._baseRender();
    };
    optionObj.methods = {
        _baseClick: function (item, index) {
            var isChange = this.selectIndex != index;
            if (item.disabled) {
                return;
            }
            this.selectIndex = index;
            if (isChange && item.click) {
                item.click();
            }
        },
        _baseRender: function () {
            var that = this;
            if (!this.display || !that.$refs.content) {
                return;
            }
            this.data.map(function (item, index) {
                if (index == that.selectIndex) {
                    item.el.classList.add("active", "in");
                } else {
                    item.el.classList.remove("active", "in");
                }
                that.$refs.content.append(item.el);
            });
        }
    };

    var Default = Vue.extend(Gx.ui.getResultObj(optionObj, setting));
    Gx.ui.coms.Tabs = Default;
    Gx.ui.createTabs = function (options) {
        options.data.map(function (item) {
            item["el"] = document.getElementById(item.id);
            item.el.classList.add("tab-pane", "fade");
            item.el.remove();
        });
        var vueCom = this.createInstance(Default, options);
        return this.convertTabs(vueCom);
    };
    Gx.ui.convertTabs = function (vueCom) {
        return this.vmProxy({
            get root() {
                return vueCom;
            },
        }, setting);
    };
})(window);