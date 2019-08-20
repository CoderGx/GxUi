//置顶，所有的方法集成在Gx下
import './BaseHelper/Top.js';
//配置文件
import './BaseHelper/Config.js';
//方法参数
import './BaseHelper/Param.js';
//转换帮助类
import './BaseHelper/Base.js';
//转换帮助类
import './BaseHelper/Convert.js';
//转换帮助类
import './BaseHelper/Url.js';
//转换帮助类
import './BaseHelper/DateTime.js';
//数学方法帮助类
import './BaseHelper/Math.js';
//
(function () {
    //#region 初始化方法
    Gx.url._init();
    Gx.param._init();
    //#endregion
})();