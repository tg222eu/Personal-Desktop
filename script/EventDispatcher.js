//https://www.awwwards.com/build-a-simple-javascript-app-the-mvc-way.html

export class EventDispatcher{

  constructor(sender){
    this._sender = sender;
    this._listeners = [];
  }

  function attach(listener){
    this._listeners.push(listener);
  }

  function notify(args){
    for(var i = 0; i < this._listeners.length; i++){
      this._listeners[i](this._sender, args);
    }
  }

}
