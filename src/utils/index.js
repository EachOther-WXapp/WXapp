function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}


export function link (url,obj) {
  if(!url) return
  url = `/pages/${url}/main`

  if(obj){
    let params='';
    Object.keys(obj).forEach(t=>{
      params += `&${t}=${obj[t]}`
    })
    url += `?${params.slice(1)}`
  }
  wx.navigateTo({ url });
}


export function http(method='GET', api, data) {
  let url = require('@/config/').default.url + api;
  let token = wx.getStorageSync('token') || require('@/state/store').default.state.token;
 return new Promise((resole,reject)=>{

   wx.request({
      method,
      url,
      data,
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': 'Bearer '+token
      },
      success: function(res) {
        if(res.data.msg === 'OK' && res.data.code === 200){
          // console.log('当前接口地址为'+api)
          // console.log(res.data.data)
          resole(res.data.data)
        }else{
          reject(res.data)
        }
      }
    })
  })
}


export function upload(method='GET', api, filePath) {

  let url = require('@/config/').default.url + api;
  let token = wx.getStorageSync('token') || require('@/state/store').default.state.token;

  return new Promise((resole,reject)=>{

    wx.uploadFile({
      url,
      filePath,
      name: 'file',
      header: {
        'Authorization': 'Bearer '+token
      },
      success: function(res){
        var data = res.data
        //do something
      }
    })

  })
}
