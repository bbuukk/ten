# Event loop in JS

Event loop in node.js is a mechanizm that provides us possibility to write async code.
I has 6 phases and 2 quees.

Event loop is semi-infinite, it means it runs as long as there are pending callbacks.
We can shutdown event loop in nodes js calling process.exit(), it will exit neglecting all pending callbacks

## Phases are:

- Pending callbacks | callback waiting for the execution
- Idle, prepare | node.js housekeeping phase
- Poll | file IO events, network I/O events, etc.
- Timer | [setTimeout(), setInterval()]
- Check | [setImmediate()]
- Close | winds down a given event loop iteration

## Also, there are two queues:

- Microtask [queueMicrotask(), then(), catch(), finally()]
- Next tick [process.nextTick()]

Microtask or next tick taks runs after any callback done in phase of node.js event loop
Callbacks from Next q runs before microtasks

## So event loop in node.js looks like this:

```

while (taskAreWaiting()) {
queue = getNextQueue();

    while(queue.hasTasks()) {
        tasks = queue.pop();
        execute(task);

        while(nextTickQueue.hasTasks()) {
            doNextTickTask()
        }
        while(microTaskQueue.hasTasks()) {
            doMicroTask()
        }
    }
}

```

# Browser event loop

Browser can have one or more task queues, but on avarage it is much like node.js one, maybe a bit more difficult.
N.B.! The queues can be executed in any order, it depends on the browser.

In browser we have also animation callback queue.
It will run all the callbacks in q before rerendering the page using render pipeline,
but there is a small diff comparing to the microtask q,
as if we add more task to animation q while executing ones present,
they will be executed on next render, not on the current one

## So event loop in avarage browser looks like this:

```

while(true) {
    queue = getNextQueue();
    task = queue.pop();
    execute(task);

    while(microTaskQueue.hasTasks()) {
        doMicroTask()
    }

    if (isRepaintTime()){ //every 16 milisec
        animationTasks = animationQueue.copyTasks();
        for(tasks in animationTasks) {
            doAnimationTask();
        }

        repaint();
    }
}

```

# Web Workers event loop

So there is q for communication between browser and worker and one more q for promises.
That’s all.

# Useful links

There are two cool talks on youtube about eventloop and one article about node.js event loop particulary

- [event loop going deeper](https://youtu.be/u1kqx6AenYw?si=0rn8O7tdOzzSH_zu)
- [event loop intro ](https://youtu.be/8aGhZQkoFbQ?si=7NBK_QYiWXVHiTbx)
- [all about node.js event loop article](https://blog.logrocket.com/complete-guide-node-js-event-loop/#close-callbacks)
