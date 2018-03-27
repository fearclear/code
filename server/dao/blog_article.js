
/**
 * @namespace 博客文章模块
 * @description 博客文章的增删改查
 * @name fc_blog_article
 * @author fearclear <fearcleari@gmail.com>
 * @export { addArticle, getArticle, updateArticle, deleteArticle, articleList }
 */
const { handleResult } = require('./util')
const { mongoose } = require('./connection')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const articleSchema = new Schema({
  userId: {type: ObjectId, ref: 'user_info'},
  userName: String,
  createTime: {type: Date, default: Date.now()},
  lastModified: Date,
  title: String,
  content: String,
  classify: String
})
const ArticleDoc = mongoose.model('blog_article', articleSchema)

// 新建文章
function addArticle(data) {
  let articleInfo = new ArticleDoc(data)
  return new Promise((resolve, reject) => {
    articleInfo.save(handleResult.bind(this, resolve, reject))
  })
}

// 删除文章
function deleteArticle(data) {
  return new Promise((resolve, reject) => {
    ArticleDoc.findByIdAndRemove(data.businessId, handleResult.bind(this, resolve, reject))
  })
}

// 修改文章
function updateArticle(data) {
  return new Promise((resolve, reject) => {
    ArticleDoc.findByIdAndUpdate(data.businessId, handleResult.bind(this, resolve, reject))
  })
}

// 获取文章
function getArticle(data) {
  return new Promise((resolve, reject) => {
    ArticleDoc.findById(data.businessId, handleResult.bind(this, resolve, reject))
  })
}

// 文章列表
function articleList(data) {
  let params = data || {}
  params.pageIndex = data.pageIndex || 1
  params.pageSize = data.pageSize || 10
  return new Promise((resolve, reject) => {
    ArticleDoc.find(params, handleResult.bind(this, resolve, reject))
  })
}

module.exports = {
  addArticle,
  deleteArticle,
  updateArticle,
  getArticle,
  articleList
}
