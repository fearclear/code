博客后台服务
===

项目介绍
---
---
提供博客后台服务支持

目录
---
---
1. [用户模块](#user)
   - [登陆](#signIn)
   - [注册](#signUp)
   - [检查用户合法性](#checkUserName)
   - [修改用户信息](#updateUserInfo)
   - [删除用户](#deleteUser)
2. [博客模块](#blog)
   - [获取博客列表](#blog_list)
   - [获取单个文章内容](#blog_detail)
   - [发布文章](#blog_publish)
   - [修改文章](#blog_update)
   - [删除文章](#blog_delete)

模块分类
---
---
<h3 id="user">用户模块</h3>

1. <span id="signIn">登陆</span>
    ```
    options: {
      url: api/user/signIn,
      method: 'post',
      data: {
        userName: String,
        password: md5(md5(md5(String)))
      },
      result: {
         userId: doc.userId,
              userName: doc.userName,
              registerDate: doc.registerDate,
              email: doc.email
      }
    }
    ```
2. <span id="signUp">注册</span>
    ```
    options: {
      url: api/user/signUp,
      method: 'post',
      data: {
        userName: String,
        email: String,
        password: md5(md5(md5(String))),
        passwordConfirm: password
      }
    }
    ```
3. <span id="checkUserName">检查用户合法性</span>
    ```
    options: {
      url: api/user/checkUserName,
      method: 'get',
      data: {
        userName: String
      }
    }
    ```
4. <span id="updateUserInfo">修改用户信息</span>
    ```
    Todo
    ```
5. <span id="deleteUser">删除用户信息(注销用户)</span>
    ```
    Todo
    ```
6. ~~退出登录~~

<h3 id="blog">博客模块</h3>

1. <span id="blog_list">获取博客列表</span>  
    ```
    options: {
      url: api/blog/list,
      method: 'get',
      data: {
        pageIndex: Number,
        pageSize: Number,
        startDate: Date,
        endDate: Date,
        keyword: String
      }
    }
    ```
2. <span id="blog_detail">获取单个文章内容</span>
    ```
    options: {
      url:api/blog/article,
      method: 'get',
      data: {
        businessId: Id
      },
      result: {
        createTime: Date,

      }
    }
    ```
3. <span id="blog_publish">发布文章</span>
    ```
    options: {
      url:api/blog/article,
      method: 'post',
      data: {},
      result: {}
    }
    ```
4. <span id="blog_update">修改文章</span>
    ```
    options: {
      url:api/blog/article,
      method: 'put',
      data: {},
      result: {}
    }
    ```
5. <span id="blog_delete">删除文章</span>
    ```
    options: {
      url:api/blog/article,
      method: 'delete',
      data: {},
      result: {}
    }
    ```

### 评论模块
1. 获取评论列表
2. 发表评论
3. 顶/踩评论
4. 删除评论

### 走马灯模块
- 待定

### 搜索模块
1. 搜索文章内关键词
2. 搜索栏目

### 