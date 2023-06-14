# Messenger link opener

A JavaScript snippet to listen to new messages on Messenger and automatically
open links.

## Set up

Paste [the script](./script.js) in the browser console.

It will be active only in the active window for the currently active conversation.
If you switch the conversation, you need to re-execute the script.

You can call `window.cleanupObserver()` to stop the script.
