

(function (win) {
    var optionObj = {};
    var setting = [
        { field: "_tableSetting", value: {} },
        //主键列，用于定位和删除
        { field: "uniqueId", value: undefined },
        //定义表格的高度
        { field: "height", value: undefined },
        //数据为undefined时显示字符串
        { field: "undefinedText", value: "-" },
        //隔行变色效果
        { field: "striped", value: true },
        //列设置
        { field: "columns", value: [] },
        //数据
        { field: "data", value: [] },
        //分页
        { field: "pagination", value: true },
        //循环分页
        { field: "paginationLoop", value: false },
        //只显示总数据数，而不显示分页按钮
        { field: "onlyInfoPagination", value: false },
        //可选值为 'client' 或者 'server'
        { field: "sidePagination", value: "client" },
        //页码
        { field: "pageNumber", value: 1 },
        //每页数据条数
        { field: "pageSize", value: 10 },
        //每页数据条数下拉
        {
            field: "pageList", value: [10, 50, 100],
            setCheckFun: function (val) {
                if (!Gx.base.isArray(val)) {
                    throw new Error("pageList必须为数组！");
                }
                return true;
            }
        },
        //判断显示分页信息和 card 视图
        { field: "smartDisplay", value: false },
        //搜索框
        { field: "search", value: false },
        //内容列下拉框
        { field: "showColumns", value: false },
        //显示分页按钮
        { field: "showPaginationSwitch", value: false },
        //最小隐藏列的数量
        { field: "minimumCountColumns", value: 2 },
        //点击行时，自动选择 rediobox 和 checkbox
        { field: "clickToSelect", value: true },
        //单选
        { field: "singleSelect", value: false },
        //封装的toolbar
        { field: "toolbar", value: [] },
        //buttonsToolbar位置，jq选择器
        //{ field: "buttonsToolbar", value: undefined },
        //单击行
        { field: "onClickRow", value: function (row, $el) { } },
        //双击行
        { field: "onDblClickRow", value: function (row, $el) { } },
        //高度
        { field: "height", value: undefined },
        //页面改变事件
        { field: "onPageChange", value: function (number, size) { } }
    ];
    var checkUniqueId = function () {
        if (!this.uniqueId) {
            throw new Error("请先设置uniqueId属性");
        }
        return true;
    };
    optionObj.watch = {
        data: {
            handler: function (newVal, oldVal) {
                this.baseCall("load", newVal);
            },
            immediate: true
        }
    };
    optionObj.render = function (h) {
        var that = this;
        //toobar的id
        var toolbarId = "toolbar_" + Gx.base.getGuid(8, 16);
        var tableSetting = Gx.base.createObject(this._data);
        tableSetting.columns = [];
        this.columns.map(function (item) {
            var newColSetting = Gx.base.mergeParam({
                checkbox: false,//复选框
                field: "",
                title: "",
                titleTooltip: "",
                halign: "center",
                align: "center",
                width: 200,
                visible: true,
                formatter: function (value, row, index) { return value; },
            }, item);
            if (!item.checkbox) {
                newColSetting.formatter = function (value, row, index) {
                    if (!value) { value = that.undefinedText; }
                    if (item.formatter) {
                        return item.formatter(value, row, index);
                    } else {
                        return value;
                    }
                };
            }
            tableSetting.columns.push(newColSetting);
        });
        tableSetting.toolbar = "#" + toolbarId;
        tableSetting.onPageChange = this.baseOnPageChange;
        this._tableSetting = tableSetting;
        var props = {
            options: {
                data: this.toolbar
            }
        };
        return (
            <div
                style={{
                    display: this.display ? "" : "none"
                }}
            >
                <gx-toolbar
                    id={toolbarId}
                    ref="toolbar"
                    {...{ props }}
                ></gx-toolbar>
                <table ref="table"></table>
            </div>
        );
    };
    optionObj.updated = function () {
        this.refreshOptions();
    };
    optionObj.mounted = function () {
        $(this.$refs.table).bootstrapTable(this._tableSetting);
    };
    optionObj.methods = {
        loadData: function (data) {
            if (!Gx.base.isArray(data)) {
                console.warn("绑定数据不是数组！");
                return;
            }
            this.data = data;
        },
        baseCall: function (method, parameter) {
            if (!this.$refs.table) return;
            return $(this.$refs.table).bootstrapTable(method, parameter);
        },
        refreshOptions: function () {
            var setting = Gx.base.createObject(this._tableSetting);
            var delList = ["data"];
            delList.map(function (item) {
                delete setting[item];
            });
            return this.baseCall("refreshOptions", setting);
        },
        getOptions: function () {
            return this.baseCall("getOptions");
        },
        getSelections: function () {
            return this.baseCall("getSelections");
        },
        getData: function (useCurrentPage) {
            return this.baseCall("getData", useCurrentPage);
        },
        remove: function (field, values) {
            this.baseCall("remove", {
                //字段
                field: field,
                //单个值或数组
                values: values
            });
        },
        removeByUniqueId: function (id) {
            if (!checkUniqueId.call(this)) { return; }
            this.baseCall("removeByUniqueId", id);
        },
        getRowByUniqueId: function (id) {
            if (!checkUniqueId.call(this)) { return; }
            return this.baseCall("getRowByUniqueId", id);
        },
        selectPage: function (page) {
            this.baseCall("selectPage", page);
        },
        prevPage: function () {
            this.baseCall("prevPage");
        },
        nextPage: function () {
            this.baseCall("nextPage");
        },
        baseOnPageChange: function (number, size) {
            //修改数据传入数据
            this.pageSize = size;

            this.onPageChange(number, size);
        }
    };

    var Default = Vue.extend(Gx.ui.getResultObj(optionObj, setting));
    Gx.ui.coms.Table = Default;
    Gx.ui.createTable = function (options) {
        var vueCom = this.createInstance(Default, options);
        return this.convertTable(vueCom);
    };
    Gx.ui.convertTable = function (vueCom) {

        var obj = this.vmProxy({
            get root() {
                return vueCom;
            },
        }, setting);

        //公开方法
        obj = this.vmProxy(obj, [
            { field: "loadData" },
            { field: "baseCall" },
            { field: "refreshOptions" },
            { field: "getOptions" },
            { field: "getSelections" },
            { field: "getData" },
            { field: "remove" },
            { field: "removeByUniqueId" },
            { field: "getRowByUniqueId" },
            { field: "selectPage" },
            { field: "prevPage" },
            { field: "nextPage" },
        ]);

        Gx.base.addGetSetFun(obj, "toolbar", function () {
            return obj.root.$refs.toolbar.root;
        }, null);
        return obj;
    };

})(window)