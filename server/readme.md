# Salim API
This API only accept requests and return JSON.

You can see the http status codes used at [restfulapi.net](https://restfulapi.net/http-status-codes/) and you also need to check the responses to understand why your request could fail.

Send the body as a JSON.

# User
### Routers
- LIST: `/user/`
- CREATE: `/user/register`
- UPDATE: `/user/update/{{uniq_id}}`
- DELETE: `/user/delete/{{uniq_id}}`
- GET User: `/user/{{uniq_id}}`

### Fields
All fields are required
- Name: String
- Mobile: String, only numbers, no spaces, min. 10 and max. 13 characters
- City: String
- Country: String, max length 2

### Roles
- To LIST and DELETE you need a master authorization `header.masterauth`.
- Do not accept duplicated mobile number.
- Only accept valid `ID`.

# Budget
- LIST: `/budget/`
- CREATE: `/budget/register`
- UPDATE: `/budget/update/{{uniq_id}}`
- DELETE: `/budget/delete/{{uniq_id}}`
- GET Budget: `/budget/{{uniq_id}}`

### Fields
All fields are required
- Title: String
- Budget: Number, positive
- Status: String, valid values `[active, inactive]` (only to update)

### Roles
- Send the user_id (`headers.authorization`) to do any action.
- Do not accept duplicated budget name (capital letter doesn't make difference).
- Only accept valid ID

### Filters
```
/budget/?year=2020&month=3
```

If you do not use parameters to filter by date the API will return filtered by the current year and the current month. 

**DO NOT** add 0 at months from 1-9.

**YOU CAN** set only one parameter like `/budget/?month=5` and the API will return budgets filtered by May of **current year**.


# Transaction
- LIST: /transaction/
- CREATE: /transaction/register
- UPDATE: /transaction/update/{{uniq_id}}
- DELETE: /transaction/delete/{{uniq_id}}
- GET Transaction: /transaction/{{uniq_id}}

### Fields
All fields are required
- Type: String, valid values `[expense, income]`
- Title: String
- Value: Number, positive
- Date: YYYY-MM-DD
- Status: String, valid values `[to pay, paid]`
- Budget ID: Number, integer, positive

### Roles
- Send the user_id (`headers.authorization`) to do any action.
- Do not accept duplicated budget name (capital letter doesn't make difference).
- The API validates the user_id and budget_id.

### Filters
```
/transaction/?year=2020&month=3
```

If you do not use parameters to filter by date the API will return filtered by the current year and the current month. 

**DO NOT** add 0 at months from 1-9.

**YOU CAN** set only one parameter like `/transaction/?month=5` and the API will return budgets filtered by May of **current year**.

### Return on header
- X-Current-Total-Incomes-To-Pay
- X-Current-Total-Incomes-Paid
- X-Current-Total-Expenses-To-Pay
- X-Current-Total-Expenses-Paid
- X-Last-Total-Incomes
- X-Last-Total-Expenses

Last Total = The total of the month before of your current filter
