//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    MXJSLog,
    runApp,
    MXJSFlutterApp
} = require("js_flutter_framework.js");


//从MXJSFlutterApp继承自己的App类
class MyApp extends MXJSFlutterApp {

    ///子类重写,当Flutter通过
    ///MXJSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {

        switch (widgetName) {
            case "GoodsDetailPage": {
                let homeWidget = require("./goods_detail/goods_detail_page.dart.lib.js");
                let widget = new homeWidget.goods_detail__goods_detail_page.GoodsDetailPage.new();
                return widget;
            }
            case "BKListPage": {
                let homeWidget = require("./bkList/bk_list.js");
                let widget = new homeWidget.bkList__bk_list.BKListPage.new();
//                let flutter_demo = require("./bkList/mxjsbuilder_demo.js");
//                let widget = new flutter_demo.main.MyHomePage.new({ title: "Flutter Demo Home Page" });
                return widget;
            }
        }


    }
}


function main(releaseMode) {

    if(releaseMode === "release"){
        MXJSLog.setLogLev(MXJSLog.LogLevError);
    }

    MXJSLog.log("main() start up ");

    let app = new MyApp;
    runApp(app);

}



