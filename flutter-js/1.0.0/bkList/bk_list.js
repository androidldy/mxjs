'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const async = dart_sdk.async;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const packages__flutter__src__widgets__widget_span$46dart = require('packages/flutter/src/widgets/widget_span.dart');
const framework = packages__flutter__src__widgets__widget_span$46dart.src__widgets__framework;
const gesture_detector = packages__flutter__src__widgets__widget_span$46dart.src__widgets__gesture_detector;
const navigator = packages__flutter__src__widgets__widget_span$46dart.src__widgets__navigator;
const text = packages__flutter__src__widgets__widget_span$46dart.src__widgets__text;
const image = packages__flutter__src__widgets__widget_span$46dart.src__widgets__image;
const packages__flutter__src__material__icon_button$46dart = require('packages/flutter/src/material/icon_button.dart');
const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
const app_bar = packages__flutter__src__material__icon_button$46dart.src__material__app_bar;
const list_tile = packages__flutter__src__material__icon_button$46dart.src__material__list_tile;
const packages__flutter__src__widgets__icon$46dart = require('packages/flutter/src/widgets/icon.dart');
const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
const packages__flutter__src__material__icons$46dart = require('packages/flutter/src/material/icons.dart');
const icons = packages__flutter__src__material__icons$46dart.src__material__icons;
const packages__flutter__src__widgets__scroll_view$46dart = require('packages/flutter/src/widgets/scroll_view.dart');
const scroll_view = packages__flutter__src__widgets__scroll_view$46dart.src__widgets__scroll_view;
const packages__flutter__src__material__page$46dart = require('packages/flutter/src/material/page.dart');
const page = packages__flutter__src__material__page$46dart.src__material__page;
const packages__flutter_module__goods_detail__goods_detail_page$46dart = require('goods_detail/goods_detail_page.dart');
const goods_detail_page = packages__flutter_module__goods_detail__goods_detail_page$46dart.goods_detail__goods_detail_page;
var bk_list = Object.create(dart.library);
var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
var BuildContextToGoodsDetailPage = () => (BuildContextToGoodsDetailPage = dart.constFn(dart.fnType(goods_detail_page.GoodsDetailPage, [framework.BuildContext])))();
var VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
var BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
const CT = Object.create(null);
var L0 = "package:flutter_module/bkList/bk_list.dart";
bk_list.BKListPage = class BKListPage extends framework.StatefulWidget {
  createState() {
    return new bk_list.BKListPageState.new();
  }
};
(bk_list.BKListPage.new = function() {
  bk_list.BKListPage.__proto__.new.call(this);
  ;
}).prototype = bk_list.BKListPage.prototype;
dart.addTypeTests(bk_list.BKListPage);
dart.addTypeCaches(bk_list.BKListPage);
dart.setMethodSignature(bk_list.BKListPage, () => ({
  __proto__: dart.getMethods(bk_list.BKListPage.__proto__),
  createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
}));
dart.setLibraryUri(bk_list.BKListPage, L0);
bk_list.BKListPageState = class BKListPageState extends framework.State$(bk_list.BKListPage) {
  build(context) {
    return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => navigator.Navigator.of(context).pop(), VoidTobool()), child: new icon.Icon.new(icons.Icons.arrow_back_ios)}), title: new text.Text.new("爆款排行")}), body: new scroll_view.ListView.builder({itemCount: 30, itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({onTap: dart.fn(() => navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new goods_detail_page.GoodsDetailPage.new(), BuildContextToGoodsDetailPage())})), VoidToFuture()), leading: new image.Image.network("https://pic.feizl.com/upload/allimg/170614/0913162K0-3.jpg"), title: new text.Text.new("title-" + dart.str(index)), subtitle: new text.Text.new("subtitle-" + dart.str(index))}), BuildContextAndintToListTile())})});
  }
};
(bk_list.BKListPageState.new = function() {
  bk_list.BKListPageState.__proto__.new.call(this);
  ;
}).prototype = bk_list.BKListPageState.prototype;
dart.addTypeTests(bk_list.BKListPageState);
dart.addTypeCaches(bk_list.BKListPageState);
dart.setMethodSignature(bk_list.BKListPageState, () => ({
  __proto__: dart.getMethods(bk_list.BKListPageState.__proto__),
  build: dart.fnType(framework.Widget, [framework.BuildContext])
}));
dart.setLibraryUri(bk_list.BKListPageState, L0);
// Exports:
exports.bkList__bk_list = bk_list;

//# sourceMappingURL=bk_list.dart.lib.js.map
