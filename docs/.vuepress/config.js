module.exports = {
  base: '/vue-dialog-x/homepage/',
  title: 'Hello VueDialogX',
  description: '好用的iOS风格弹窗组件',
  head: [
    ['script', {
      src: 'https://unpkg.com/vue@2.6.10/dist/vue.js'
    }],
    ['script', {
      src: 'https://unpkg.com/vue-dialog-x/dist/vue-dialog-x.window.js'
    }]
  ],
  dest: '/vue-dialog-x/homepage/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-145663310-1'
    }]
  ],
  themeConfig: {
    repo: 'a62527776a/vue-dialog-x',
    repoLabel: 'Github',
    sidebarDepth: 2,
    sidebar: [
      '/',
      '/getting-started',
      ['/basic', '基础使用'],
      ['/alert', 'Alert'],
      ['/confirm', 'Confirm'],
      ['/prompt', 'Prompt'],
      ['/actions', 'Actions'],
      ['/dialog', 'Dialog']
    ]
  }
}