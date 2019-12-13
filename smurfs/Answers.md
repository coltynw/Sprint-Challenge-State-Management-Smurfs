1. What problem does the context API help solve?
Context API is a good way to manage your state in a small scale application by passing variables without prop drilling. It's easier and faster to impliment than redux. However, if you go deeper than one layer deep, you should switch to redux

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions, pretty similar to event listeners in regular js. They run functions (dispatching state data) when a user action is detected. 
Reducers, they're a one stop shop for all of your switch cases. They take in functions (that are conventionally in all caps) from the actions index, and run a new function to update the state based on the data was dispatched.
Store, this is an object that is the state of the application. I like to think it "stores" the state. It is updated via functions implimented in the reducer, with new state data from the action functions. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
The Application state is the state of the entire project, while the component state is really just the state of an individual part of it. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk makes the code asynchornous, its middleware that lets your actions return as functions instead of just actions. It can filder the dispatch of these functions and delay them.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really like Redux. I found the redux flow very easy to understand, although it is more moving parts, I think it's weirdly easier to manage. Anytime I have a problem I know what is supposed to me talking to what, and I can use logs to find out if its on the recieving end of one file or the outgoing end of another. It's just more organized, on top of that, it's infinite scalability means theres rarely a reason not to use it. So I figured if I just use it all the time, if it's a big or small application, not matter how many layers there are, I don't have to get used to anything different. 
