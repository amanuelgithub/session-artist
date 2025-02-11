1. create a database schema
2. user module
3. auth module

## how does google authentication with oauth2 works

```

1. user - hit auth end point in my server ('auth/google/login')
2. then google generates an oauth2 url (i.e. auth/google/callback) and returns the user detail associate with the gmail account
3. There there are 2 scenarios that could happen:
    3.1. the user already exists in my database:
        - in this case I'll redirect the user to the login page of the web application
        - when redirecting I will also attach an http only cookie in the response header
    3.2. the user does not exists in my database:
        - then i will store the detail information of the user
        - generate an access and refresh token and send an http only cookie for the refresh token


```
