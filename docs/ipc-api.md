IPC Api
=======

All of the individual parts of the application communicate asynchronously, so the low-level transports should all 
follow a basic pattern.  At a low level, essentially, all the parts are communicating over a socket: that is, each
component is itself listening to a socket as well as writing to a socket.

## Verbs
For simplicity, all things will use HTTP Request Verbs and all autogenarated things will by named by them.
```proto
service TestService {
    rpc Simple () returns (TestGetResponse);
    rpc UpdateSimple (TestPostData) returns (TestPostResponse);
    rpc SimpleEvent (voidMessage) returns (TestEventData) {
        option event_emitter = true;
    };
}
```
Becomes
```ts
Services.Test.getSimple(): Promise<TestGetResponse>;
Services.Test.postUpdateSimple(TestPostData): Promise<TestPostResponse>;
Services.Test.on(Events.SimpleEvent, callback);
```


## Low level
For the purposes of all the APIs, the lowest level serialized object is essentially an object with an identifier, a unique request ID, and 
a payload:
```json
{
    id: '/test/getVoid',
    requestId: '00000-0000-0000-00000-0000', // uuid for reasons?
    data: SerializedObject...
}
```

This lets the low-level utility map to a specific promise.  Remember that when we "make a request" on a websocket, what
we're actually doing is writing to it.  The websocket doesn't do anything else, it's just a transport.  We have to also
be reading from it.  So when we make a request to an endpoint, we give it a unique request ID which is later sent back 
to us, that way we know which promise to resolve.

# Protos
The proto files describe the services and the data contacts.  We won't actually use the protocol buffer format (yet)
unless we need to- all the protojs libraries have an incredible amount of overhead, wheras JSON encoding/decoding from
string data is much easier.  Ptotobuf is great for native-to-native over just about any transport, but is terrible
in the Ui layer.

## Event Listeners
Events are special.  From the perspective of the client, it's very much like a response received (with an ID) that 
the client didn't actually request.  The generated library should have function stubs, e.g.
```ts
namespace Service {
    namespace Test {
        const ee = new EventEmitter();
        function listen(id, handler) {
            ee.on(id, handler);
        }
        function unlisten(id, handler) {
            ee.off(id, handler);
        }
        // generated
        function eventSimpleTest(data) {
            ee.emit('/test/simpleTest', data);
        }
    }
}
```