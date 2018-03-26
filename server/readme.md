# 博客后台服务
提供博客后台服务支持

### 用户模块
1. 登陆
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
2. 注册
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
3. 检查用户合法性
    ```
    options: {
      url: api/user/checkUserName,
      method: 'get',
      params: {
        userName: String
      }
    }
    ```
4. 修改用户信息
    ```
    Todo
    ```
5. 删除用户信息(注销用户)
    ```
    Todo
    ```
6. ~~退出登录~~

### 博客模块
1. 获取博客列表  
    ```
    options: {
      url: api/blog/list,
      method: 'get',
      params: {
        pageIndex: Number,
        pageSize: Number,
        startDate: Date,
        endDate: Date,
        keyword: String
      }
    }
    ```
2. 获取单个文章内容
    ```
    options: {
      url:api/blog/detail,
      method: 'post',
      data: {
        businessId: Id
      },
      result: {
        createTime: Date,

      }
    }
    ```
3. 发布文章
4. 修改文章
5. 删除文章

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