//index.js

Page({
  data: {
    msgData: [],
    inputVal: ''
  },
  addMsg(){
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    this.setData({
      msgData: list,
      inputVal: ''
    });
  },
  changeInputVal(e){
    this.setData({
      inputVal: e.detail.value
    });
  },
  delMsg(ev){
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n, 1);

    this.setData({
      msgData: list
    });
  }
})