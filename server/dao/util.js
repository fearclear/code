/**
 * @namespace 插件
 * @description 统一处理插件
 * @name util
 * @author fearclear
 * @export { handleResult }
 */
/**
 * @author fearclear
 * @param {resolve} resolve
 * @param {reject} reject
 * @param {err} err
 * @param {doc} doc
 */
function handleResult(resolve, reject, err, doc) {
  if(err) {
    reject(err)
  }else {
    resolve(doc)
  }
}
process.on('unhandledRejection', function(error) {
  console.error(error, 'error') // [Error: unhandledrejection]
})
module.exports = {
  handleResult
}
