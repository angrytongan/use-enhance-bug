# use:enhance resets form data between repeated submits

Submitting the same form content when using `use:enhance` results in form fields
being cleared between submits.

## To reproduce

1. Install

```
npm install
npm run dev
```

2. Browse to `http://localhost:5173`
3. Enter `hello` in first field, `world` in second field.
4. Press `Submit`.
5. `hello world` is printed underneath the form. First field contains `hello`,
   second field contains `world`. Server prints:

    ```js
    { first: 'hello', last: 'world' }
    ```

6. Press `Submit`.
7. `hello world` is printed underneath the form. Fields are now empty. Server
   prints:

    ```js
    { first: 'hello', last: 'world' }
    ```

8. Press `Submit`.
9. Nothing printed underneath form. Fields are empty. Server prints:
    ```js
    { first: 'hello', last: 'world' }
    ```

## Expectation

Fields should never lose their content.

## Use case

-   Chat form with room and message field: the room may not change, but the
    message does. We want to keep the room between form submits.
