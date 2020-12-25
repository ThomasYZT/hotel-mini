export default {
  pages: [
    'pages/search/index',
    'pages/order/index',
    'pages/mine/index',
  ],
  subPackages: [
    {
      "root": "packages/hotelDetail",
      "name": "hotelDetail",
      "pages": ["index"]
    },
    {
      "root": "packages/searchList",
      "name": "searchList",
      "pages": ["index"]
    },
    {
      "root": "packages/payment",
      "name": "payment",
      "pages": ["index"]
    },
  ],
  preloadRule: {
    "pages/search/index": {
      "network": "all",
      "packages": ["searchList"]
    },
    "packages/searchList/index": {
      "network": "all",
      "packages": ["hotelDetail", "payment"]
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#666",
    "selectedColor": "#333",
    "list": [
      {
        "pagePath": "pages/search/index",
        "text": "首页",
        "iconPath": "./assets/img/icon/tab_icon_home_default_v2.png",
        "selectedIconPath": "./assets/img/icon/tab_icon_home_active_v2.png"
      },
      {
        "pagePath": "pages/order/index",
        "text": "松鼠",
        "iconPath": "./assets/img/icon/tab_icon_follow_default_v2.png",
        "selectedIconPath": "./assets/img/icon/tab_icon_follow_active_v2.png"
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "./assets/img/icon/tab_icon_mine_default_v2.png",
        "selectedIconPath": "./assets/img/icon/tab_icon_mine_active_v2.png"
      }
    ]
  },
}
