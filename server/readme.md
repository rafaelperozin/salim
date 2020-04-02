# Salim API
This API only accept requests and return JSON.

You can see the http status codes used at [restfulapi.net](https://restfulapi.net/http-status-codes/) and you also need to check the responses to understand why your request could fail.

# Users
- LIST: /api/user/
- CREATE: /api/user/register
- UPDATE: /api/user/update/{{uniq_id}}
- DELETE: /api/user/delete/{{uniq_id}}
- GET USER: /api/user/{{uniq_id}}

### Fields
All fileds are required
- Name: String
- Mobile: String, only numbers, no spaces, min. 10 and max. 13 characters
- City: String
- Country: String

### Roles
- To LIST, GET and DELETE you need a master authorization.