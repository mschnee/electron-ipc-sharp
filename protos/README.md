# Clients and APIs

I want an API that kind of looks like this:
```ts
// Services.ts // import for all REST services
import {
    LoginService,
    TestService,
} from './generated/index.ts';

const clientOptions: ClientOptions = {
    type: ClientType.Rest,
    address: '127.0.0.1:40500'
};

const client = new Client(clientOptions);

export namespace RestServices {
    // begin autogenerated
    export test = new TestService(client);
    export login = new LoginService(client); 
    // end autogenerated
}

// file 2
Services.test.numericTest(1).then(res => console.log(res)); //should return the number 1
```
