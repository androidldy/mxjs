'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const packages__flutter__src__widgets__widget_span$46dart = require('packages/flutter/src/widgets/widget_span.dart');
const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
const gesture_detector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__gesture_detector;
const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
const basic = packages__flutter__src__widgets__widget_span$46dart.src__widgets__basic;
const packages__flutter__src__material__icon_button$46dart = require('packages/flutter/src/material/icon_button.dart');
const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
const packages__flutter__src__widgets__icon$46dart = require('packages/flutter/src/widgets/icon.dart');
const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
const packages__flutter__src__material__icons$46dart = require('packages/flutter/src/material/icons.dart');
const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
var goods_detail_page = Object.create(dart.library);
var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
const CT = Object.create(null);
var L0 = "package:flutter_module/goods_detail/goods_detail_page.dart";
goods_detail_page.GoodsDetailPage = class GoodsDetailPage extends framework.StatefulWidget {
  createState() {
    return new goods_detail_page.GoodsDetailPageState.new();
  }
};
(goods_detail_page.GoodsDetailPage.new = function() {
  goods_detail_page.GoodsDetailPage.__proto__.new.call(this);
  ;
}).prototype = goods_detail_page.GoodsDetailPage.prototype;
dart.addTypeTests(goods_detail_page.GoodsDetailPage);
dart.addTypeCaches(goods_detail_page.GoodsDetailPage);
dart.setMethodSignature(goods_detail_page.GoodsDetailPage, () => ({
  __proto__: dart.getMethods(goods_detail_page.GoodsDetailPage.__proto__),
  createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
}));
dart.setLibraryUri(goods_detail_page.GoodsDetailPage, L0);
goods_detail_page.GoodsDetailPageState = class GoodsDetailPageState extends framework.State$(goods_detail_page.GoodsDetailPage) {
  build(context) {
    return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.pop(core.Object, context), VoidTobool()), child: new icon.Icon.new(icons.Icons.arrow_back_ios)}), title: new text.Text.new("商品详情-1.0.1")}), body: new basic.Center.new({child: new text.Text.new("商品详情-1")})});
  }
};
(goods_detail_page.GoodsDetailPageState.new = function() {
  goods_detail_page.GoodsDetailPageState.__proto__.new.call(this);
  ;
}).prototype = goods_detail_page.GoodsDetailPageState.prototype;
dart.addTypeTests(goods_detail_page.GoodsDetailPageState);
dart.addTypeCaches(goods_detail_page.GoodsDetailPageState);
dart.setMethodSignature(goods_detail_page.GoodsDetailPageState, () => ({
  __proto__: dart.getMethods(goods_detail_page.GoodsDetailPageState.__proto__),
  build: dart.fnType(framework.Widget, [framework.BuildContext])
}));
dart.setLibraryUri(goods_detail_page.GoodsDetailPageState, L0);
// Exports:
exports.goods_detail__goods_detail_page = goods_detail_page;

//# sourceMappingURL=goods_detail_page.dart.lib.js.map
