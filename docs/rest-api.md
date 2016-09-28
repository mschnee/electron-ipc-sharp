REST Api
========

A WebWorker (or multiple web workers) 

```  
__Javascript Client__
```ts
namespace Service {
    namespace Test {
        interface TestSimpleRequestMessage {
            foo: number, // = 1
            bar: string // = 2
        }
        interface TestSimpleResponse {
            userID: number;
            userName: string;
        }
        function getVoid(d: TestSimpleRequestMessage): Promise<TestSimpleResponse> {
            return client.get<TestSimpleResponse>(`/service/test/getSimple/${d.foo}/${d.bar}`)
        }
    }
}

namespace Client {
    endpoint = 'https://your.endpoint/api'
    function get<ResponseType>(action) {
        return new Promise((resolve, reject) => {
            if (method === Http.Get) {
                fetch(`${this.endpoint}${action}`).then(resolve).catch(reject);
            }
        });
    }
}
```