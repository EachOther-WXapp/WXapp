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

