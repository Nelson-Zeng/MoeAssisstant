const app = getApp()

Page({
  data: {},
  onLoad() {
    this.initNovelList()

    // wx.downloadFile({
    //   url: 'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%9C%80%E6%B1%82.txt?sign=843e28c680eb35cb65ec1a7685368852&t=1578321749', //仅为示例，并非真实的资源
    //   success: res => {
    //     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //     if (res.statusCode === 200) {
    //       const fs = wx.getFileSystemManager()

    //       fs.readFile({
    //         filePath: res.tempFilePath,
    //         // encoding: 'utf-8',
    //         success: data => {
    //           console.log(data.data)
    //           app.util.Utf8ArrayToStr(new Uint8Array(data.data))
    //         }
    //       })
    //     }
    //   }
    // })
  },
  async initNovelList() {
    const novelXML = await app.request.get('https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/test/')
    console.log(novelXML)
  }
})