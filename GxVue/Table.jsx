/// <reference path="../Lib/Jquery/jquery-3.0.0.min.js" />
/// <reference path="../Script/Gx.Base.js" />
/// <reference path="../Lib/Vue/vue2.5.16.js" />
/// <reference path="../Lib/Bootstrap/Table/bootstrap-table.js" />

(function (win) {
    var getColumnSetting = function () {
        return {
            checkbox: false,//复选框
            field: "",
            title: "",
            titleTooltip: "",
            halign: "center",
            align: "center",
            width: 200,
            visible: true,
            formatter: function (value, row, index) { return value; },
        };
    };

    var optionObj = {};
    optionObj.data = function () {
        return {
            _setting: {}
        };
    };
    optionObj.mounted = function () {
        $(this.$refs.table).bootstrapTable(this._setting);
    };
    optionObj.updated = function () {
        this.baseCall("load", this.data);
    };
    optionObj.render = function (h) {
        var tableSetting = Gx.base.createObject(this._props);

        tableSetting.columns = [];
        this.columns.map(function (item) {
            tableSetting.columns.push(Gx.base.mergeParam(getColumnSetting(), item));
        });
        this._setting = tableSetting;
        return (
            <table ref="table"></table>
        );
    };
    optionObj.methods = {
        baseCall: function (method, parameter) {
            return $(this.$refs.table).bootstrapTable(method, parameter);
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
            if (!this.uniqueId) {
                console.warn("请先设置uniqueId属性");
                return;
            }
            this.baseCall("removeByUniqueId", id);
        },
        getRowByUniqueId: function (id) {
            if (!this.uniqueId) {
                console.warn("请先设置uniqueId属性");
                return;
            }
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
    };
    optionObj.props = {
        //主键列，用于定位和删除
        uniqueId: {
            "default": undefined
        },
        //定义表格的高度
        height: {
            "default": undefined
        },
        //数据为undefined时显示字符串
        undefinedText: {
            "default": "-"
        },
        //隔行变色效果
        striped: {
            "default": true
        },
        //列设置
        columns: {
            "default": function () {
                return [];
            }
        },
        //数据
        data: {
            "default": function () {
                return [];
            }
        },
        //分页
        pagination: {
            "default": true
        },
        //循环分页
        paginationLoop: {
            "default": false
        },
        //只显示总数据数，而不显示分页按钮
        onlyInfoPagination: {
            "default": false
        },
        //可选值为 'client' 或者 'server'
        sidePagination: {
            "default": "client"
        },
        //页码
        pageNumber: {
            "default": 1
        },
        //每页数据条数
        pageSize: {
            "default": 10
        },
        //每页数据条数下拉
        pageList: {
            "default": function () {
                return [10, 50, 100];
            }
        },
        //判断显示分页信息和 card 视图
        smartDisplay: {
            "default": false
        },
        //搜索框
        search: {
            "default": false
        },
        //内容列下拉框
        showColumns: {
            "default": false
        },
        //显示分页按钮
        showPaginationSwitch: {
            "default": false
        },
        //最小隐藏列的数量
        minimumCountColumns: {
            "default": 2
        },
        //点击行时，自动选择 rediobox 和 checkbox
        clickToSelect: {
            "default": true
        },
        //单选
        singleSelect: {
            "default": false
        },
        //toolbar位置，jq选择器
        toolbar: {
            "default": undefined
        },
        //buttonsToolbar位置，jq选择器
        buttonsToolbar: {
            "default": undefined
        },
        //单击行
        onClickRow: function (row, $el) { },
        //双击行
        onDblClickRow: function (row, $el) { },
    };


    var Default = Vue.extend(Gx.base.mergeParam(Gx.ui.getDefaultObj(), optionObj));
    Gx.ui.coms.Table = Default;
    Gx.ui.createTable = function () {
        return Gx.ui.createInstance(Default, Gx.param.getSerializeParam(arguments));
    };
})(window)