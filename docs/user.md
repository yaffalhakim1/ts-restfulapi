# USER API SPEC

## Register User

Endpoint: POST /api/users

Request Body:

```json
{
  "username": "user1",
  "password": "password1",
  "name": "Yafi"
}
```

Response Body (success):

```json
{
  "data": {
    "username": "user1",
    "name": "Yafi"
  }
}
```

Response Body (failed):

```json
{
  "errors": "Username already exists"
}
```

## Login User

Endpoint: POST /api/users

Request Body:

```json
{
  "username": "user1",
  "password": "password1"
}
```

Response Body (success):

```json
{
  "data": {
    "username": "user1",
    "name": "Yafi",
    "token": "token123"
  }
}
```

Response Body (failed):

```json
{
  "errors": "Username or pass wrong"
}
```

## Get User

Endpoint: GET /api/users/current

Request Header:

- X-API-TOKEN : token

Response Body (success):

```json
{
  "data": {
    "username": "user1",
    "name": "Yafi",
    "token": "token123"
  }
}
```

Response Body (failed):

```json
{
  "errors": "Username or pass wrong"
}
```

## Update User

Endpoint: PATCH /api/users/current

Request Header:

- X-API-TOKEN : token

Request Body:

```json
{
  "password": "password1",
  "name": "Yafi"
}
```

Response Body (success):

```json
{
  "data": {
    "username": "user1",
    "name": "Yafi"
  }
}
```

Response Body (failed):

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint: DELETE /api/users/current

Request Header:

- X-API-TOKEN : token

Response Body (success):

```json
{
  "data": "Success deleting user"
}
```

Response Body (failed):

```json
{
  "errors": "Unauthorized"
}
```
