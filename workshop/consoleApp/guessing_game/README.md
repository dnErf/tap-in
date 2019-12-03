## the guessing game
> from https://doc.rust-lang.org/book/

the reference is originally written in rust then re-written in (node) js & dotnet core c#

## comparison and take aways

### rust
- strict and can handle error out of the box if failed to parse int
- out of the box ordering comparison
- rand dependecy
- first console app on the rust and it stagger me that developement rust folder takes a whooping 10 MB compare to dotnet core and js which takes only less than 500 kb .. yeah its KB

### c#
- string and there is a way to handle error if failed to parse using `TryParse`
- needed to implement ordering comparison to be able to use the `int.CompareTo`
- Random library out of the box
- build was small

### node js
- out of the box `readline` of node js is kinda meh and hard to use that is why i think console app on node requires other library like `yargv` and `prompts`. this app uses `prompt`
- light weight solution with `prompt` out of the box style for the console and uses less dependecy
- asynchronous approach that is why `readline` is a meh, its hard to tame

