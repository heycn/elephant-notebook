# 前后端接口文档规范

约定接口一般包括以下数据

1. 当前接口的路径是什么？ 如 `/auth/register`
2. 当前接口提交数据的类型是什么? 如
   - `GET` 获取数据
   - `POST` 提交或者创建
   - `PATCH` 修改数据，部分修改
   - `DELETE` 删除数据
   - `PUT` 修改数据，整体替换原有数据
3. 参数类型/格式，比如是 json 格式，还是 `application/x-www-form-urlencoded`的数据
4. 参数字段，及限制条件
5. 返回成功的数据格式
6. 返回失败的数据格式

下面我们和后端做以下接口约定

### 认证相关

#### `POST /auth/register`

功能: 用户注册

提交参数

- 参数类型:`Content-Type: application/x-www-form-urlencoded;charset=utf-8`
- 参数字段
  - `username` : 用户名, 长度1到15个字符，只能是字母数字下划线中文
  - `password` : 密码, 长度6到16个任意字符

返回数据

- 失败
  - 状态码 400
  - 返回格式 `{msg: '错误原因'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "msg": "注册成功",
  "data": {
    "id": 1,
    "username": "hunger",
    "updatedAt": "2017-12-27T07:40:09.697Z",
    "createdAt": "2017-12-27T07:40:09.697Z"
  }
}
```

#### `GET /auth`

功能: 判断用户是否登录

提交参数: 无

返回数据

- 已经登录的情况

```javascript
{
  "isLogin": true,
  "data": {
    "id": 1,
    "username": "hunger",
    "updatedAt": "2017-12-27T07:40:09.697Z",
    "createdAt": "2017-12-27T07:40:09.697Z"
  }
}
```

- 没有登录的情况

```javascript
{
  "isLogin": false
}
```

#### `GET /auth/logout`

功能: 注销登录

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式 `{msg: '当前用户尚未登录'}`
- 成功
  - 状态码 200
  - 返回格式 `{msg: '注销成功'}`

#### `POST /auth/login`

功能: 用户登录

提交参数

- 参数类型:`Content-Type: application/x-www-form-urlencoded;charset=utf-8`
- 参数字段
  - `username` : 用户名, 长度1到15个字符，只能是字母数字下划线中文
  - `password` : 密码, 长度6到16个任意字符

返回数据

- 失败
  - 状态码 400
  - 返回格式 `{msg: '用户不存在'}`或者 `{msg: '密码不正确'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "msg": "登录成功",
  "data": {
    "id": 1,
    "username": "hunger",
    "createdAt": "2017-12-27T07:40:09.697Z",
    "updatedAt": "2017-12-27T07:40:09.697Z"
  }
}
```

### 笔记本

笔记本接口的所有操作都需要用户处于登录状态，如果未登录，则

- 状态码 400
- 返回数据 `{msg: '登录后才能操作'})`

#### `GET /notebooks`

功能: 获取笔记本列表

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式 `{msg: '登录后才能操作'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "data": [
    { 
      "id": 1,                 //笔记本 notebookId
      "title": "饥人谷",        //笔记本标题
      "userId": 1,             //笔记本所属用户 userId
      "createdAt": "2017-12-27T08:22:56.792Z",   //创建时间
      "updatedAt": "2017-12-27T08:22:56.792Z",   //更新时间
      "noteCounts": 0          //当前笔记本下的笔记数
    },
    {
      "id": 2,
      "title": "学前端",
      "userId": 1,
      "createdAt": "2017-12-27T08:24:03.728Z",
      "updatedAt": "2017-12-27T08:24:03.728Z",
      "noteCounts": 0
    }
  ]
}
```

#### `POST /notebooks`

功能: 创建笔记本

提交参数

- 参数类型:`Content-Type: application/x-www-form-urlencoded; charset=utf-8`
- 参数字段
  - `title` : 笔记本标题, 笔记本标题不能为空，且不超过30个字符

返回数据

- 失败
  - 状态码 400
  - 返回格式 `{msg: '登录后才能操作'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "msg": "创建笔记本成功",
  "data": {
    "id": 1,               //笔记本 notebookId
    "title": "饥人谷",      //笔记本标题
    "userId": 1,           //笔记本所属用户 userId
    "updatedAt": "2017-12-27T08:22:56.792Z",
    "createdAt": "2017-12-27T08:22:56.792Z"
  }
}
```

#### `PATCH /notebooks/:notebookId`

功能: 修改笔记本

范例: `/notebooks:/1`

提交参数

- 参数类型:`Content-Type: application/x-www-form-urlencoded; charset=utf-8`
- 参数字段
  - `title` : 笔记本标题, 笔记本标题不能为空，且不超过30个字符

返回数据

- 失败
  - 状态码 400
  - 返回格式 `{"msg": "登录后才能操作"}`或者 `{"msg": "笔记本不存在"}`
- 成功
  - 状态码 200
  - 返回格式 `{ "msg": "修改成功" }`

#### `DELETE /notebooks/:notebookId`

功能: 删除笔记本，只有笔记本为空或者回收站中没有属于当前笔记本的笔记时才能成功删除。

提交参数：无

返回数据

- 失败
  - 状态码 400
  - 返回格式范例
    - `{"msg": "登录后才能操作"}`
    - `{"msg": "笔记本不存在"}`
    - `{"msg": "笔记本不为空或者回收站中还有属于当前笔记本的笔记"}`
- 成功
  - 状态码 200
  - 返回格式 `{ "msg": "删除成功" }`

### 笔记

笔记本接口的所有操作都需要用户处于登录状态，如果未登录，则

- 状态码 400
- 返回数据 `{msg: '登录后才能操作'})`

#### `POST /notes/to/:notebookId'`

功能: 创建笔记到 notebookId 为 :notebookId 的笔记本

提交参数

- 参数类型:`Content-Type: application/x-www-form-urlencoded; charset=utf-8`
- 参数字段
  - `title` : 笔记标题, 不能超过30个字符
  - `content` : 笔记内容, 不能超过8000个字符

返回数据

- 失败
  - 状态码 400
  - 返回格式
    - `{msg: '登录后才能操作'}`
    - `{msg: '笔记标题不能不超过30个字符'}`
    - `{msg: '笔记内容不能不超过8000个字符'}`
    - `{msg: '参数错误，笔记本不存在'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "msg": "创建笔记成功",
  "data": {
    "isDelete": false,    //是否放入回收站
    "id": 3,              //笔记 noteId
    "title": "来饥人谷",   //笔记标题
    "content": "学 Vue",  //笔记内容
    "userId": 1,          //所属用户 userId
    "updatedAt": "2017-12-27T08:43:59.749Z",
    "createdAt": "2017-12-27T08:43:59.749Z"
  }
}
```

#### `GET /notes/from/:notebookId`

功能: 从 notebookId 为:notebookId 的笔记本中获取笔记列表

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式 `{msg: '登录后才能操作'}`
- 成功
  - 状态码 200
  - 返回格式

```javascript
{
  "data": [
    {
        "id": 1,                //笔记 noteId
        "title": "饥人谷",
        "content": "学前端",
        "notebookId": 3,        //笔记所属的 notebookId
        "userId": 1,            //笔记所属的 userId
        "isDelete": false,
        "createdAt": "2017-12-27T08:37:13.730Z",
        "updatedAt": "2017-12-27T08:37:13.739Z"
    },
    {
        "id": 2,
        "title": "来饥人谷",
        "content": "学 Vue",
        "notebookId": 3,
        "userId": 1,
        "isDelete": false,
        "createdAt": "2017-12-27T08:43:14.902Z",
        "updatedAt": "2017-12-27T08:43:14.911Z"
    }
  ]
}
```

#### `DELETE /notes/:noteId`

功能: 把笔记id 为 :noteId 的笔记放入回收站

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式
    - `{msg: '登录后才能操作'}`
    - `{msg: '笔记不存在'}`
- 成功
  - 状态码 200
  - 返回格式 `{msg: '已放入回收站'}`

#### `PATCH /notes/:noteId`

功能: 把笔记id 为 :noteId 的笔记放入回收站

提交参数:

- `title` : 笔记标题, 可选参数, 不能超过30个字符
- `content` : 笔记内容, 可选参数, 不能超过8000个字符

返回数据:

- 失败
  - 状态码 400
  - 返回格式
    - `{msg: '登录后才能操作'}`
    - `{msg: '笔记不存在'}`
    - `{msg: '笔记标题不能不超过30个字符'}`
    - `{msg: '笔记内容不能不超过8000个字符'}`
- 成功
  - 状态码 200
  - 返回格式 `{msg: '修改成功'}`

#### `DELETE /notes/:noteId/confirm`

功能: 把笔记id 为 :noteId 的笔记从回收站彻底删除

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式
    - `{msg: '登录后才能操作'}`
    - `{msg: '笔记不存在'}`
- 成功
  - 状态码 200
  - 返回格式 `{msg: '删除成功'}`

#### `PATCH /notes/:noteId/revert`

功能: 把笔记id 为 :noteId 的笔记从回收站恢复到原来的笔记本

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式
    - `{msg: '登录后才能操作'}`
    - `{msg: '笔记不存在'}`
- 成功
  - 状态码 200
  - 返回格式 `{msg: '已从回收站恢复'}`

#### `GET /notes/trash`

功能: 获取回收站笔记列表

提交参数: 无

返回数据:

- 失败
  - 状态码 400
  - 返回格式 `{msg: '登录后才能操作'}`
- 成功
  - 状态码 200
  - 返回格式

```
{
  "data": [
    {
        "id": 2,
        "title": "来饥人谷",
        "content": "学 Vue",
        "notebookId": 3,             //所属的 notebookId
        "userId": 1,                 //所属的 userId
        "isDelete": true,            //为 true 表示在回收站
        "createdAt": "2017-12-27T08:43:14.902Z",
        "updatedAt": "2017-12-27T09:13:08.725Z"
    }
  ]
}
```

约定好接口后，我们自己就能 mock 数据愉快的开发了。
