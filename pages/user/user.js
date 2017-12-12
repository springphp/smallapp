// pages/user/user.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: true
  },
  signin: function () {
    wx.navigateTo({
      url: '../user/user'
    })
  },
  signup: function () {
    wx.navigateTo({
      url: '../user/signup'
    })
  },
  onPageScroll: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  
  formSubmit: function (e) {
    console.log(e);
    if(e.detail.value.username == '') {
      wx.showToast({
        title: '用户名不能不能为空!',
        icon: 'loading',
        duration: 1000
      })
    } else if (e.detail.value.password == ''){
      wx.showToast({
        title: '密码不能不能为空!',
        icon: 'loading',
        duration: 1000
      })
    }else{
      wx.request({
        url: 'https://nisjcmgf.qcloud.la',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: { username: e.detail.value.username, password: e.detail.value.password },
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: res.data.info,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '登录失败！',//这里打印出登录成功
              icon: 'success',
              duration: 1000
            })
          }
        }
      })
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})