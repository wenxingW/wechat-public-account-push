/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0563a72d12bc2d9b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c87577e52e4a860453d61c9bb2665a1d',

  PROVINCE: '江西',
  CITY: '南昌',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝讥（手动仙女符号）',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_Fw6UY0PEa9NLXf7gcHhWRkSPU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'NRDj2-8cu7VQ4fnjzyuKe85GRfMgQrPgLAoElKd1Hyc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝讥阴历', year: '2000', date: '03-26',
        },
         {
          type: '节日', name: '我们的相恋纪念日', year: '2023', date: '04-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝讥阳历', year: '2000', date: '04-30',
        },
       
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-25' },
        // 相识的天数
        { keyword: 'marry_day', date: '2022-11-07' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oL_Fw6UY0PEa9NLXf7gcHhWRkSPU',
    }
  ],

}

module.exports = USER_CONFIG

