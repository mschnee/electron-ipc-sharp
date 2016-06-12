# electron-ipc-sharp
A little experiment: Get a C# app to launch and communicate with Electron using node-ipc

## Why?
Because I'm curious.  JavaScript has gotten a lot faster, but it's still a single-threaded sandbox.  Native Node Modules are really complicated to write, so instead let's flip that paradigm upsidedown: Have Electron and the UI child process be dedicated to UI and UI only, let a core native application handle all the heavy lifting.

A Native app- even a Managed App like with C#- gives us a ton of things we can't easily do in ES2015: access hardware resources, access resources **safely**, proper threading and deferred tasks, large file access and handling, native GPU access...

There shouldn't be any reason not to use a different language for the Core, e.g. C++ or Rust, or even Java.  Future Experiment: make different back-ends for examples?

## design thoughts
- C# Core (which I'll just call `Core` from now on) should run as a single instance with a global mutex.
- Core will start up some kind of IPC
- Core will launch the Electron app
- Electron: UI things.  The render process will connect to Core
- Do it in TypeScript or else things will get out of hand.
- What does this all do?  I guess I could use it to manage/play music or something.

## Building
The Solution File is really only there for the C# Core app at the moment, and it's dotnet core clr so you should be able to `cd Core` and `dotnet restore && dotnet build` as normal.

Build the C# app
```
cs Core && dotnet restore && dotnet build
```
Build all the Typescript
```
cd Electron && npm install && npm run build
```

## Running it
No idea mate.

### Opinions
- Use TypeScript.  I've seen the light, and it is `refactoring some typo I've made in several places somewhere across thousands of files in this project`
- Don't use `gulp`.  It's great and all but I've run into far too many problems recently with some gulp plugin being far too out of date- just write some typescript to do what you need and move on.
- stick to cross-platform dotnet core clr for as long as possible.  
 - Have Windows/Linux/MacOS implementations where necessary
 - Prefer runtime platform checking to compile-time `#if` guarding if at all possible.
