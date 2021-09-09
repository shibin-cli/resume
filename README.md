## 一份优雅简约的简历
- 优化构建，页面秒开无闪烁
- 自适应屏幕兼容移动端
- Github Action自动部署部署到Gihub Pages，可在线浏览
- 自动生成 PDF，全自动化流程

## 使用
1. fork本项目后再clone到本地修改
2. 进入项目目录执行`npm i`安装依赖
3. 执行`npm run serve`开始开发，根据你的情况修改`src/index.html`里的内容
4. 将项目上传到gihub上，在 Settings -> Pages 打开 Gihub Pages，分支选择`gh-pages`
5. 修改完后push到master分支，Github Action 会自动部署到 Gihub Pages，之后每次修改后提交到master分支也会自动部署
