let store = {
  _state: {
    profilePage:{
     posts: [
       {id: 1, message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount: "10" },
       {id: 2, message: "Только что что?", likesCount: "15" },
       {id: 3, message: "Гранату, ясное дело." },
     ],
     newPostText: '2ch.so',
    },
 
    dialogsPage:{
      messages:[
       { message: "Братишка" },
       { message: "Я тебе покушать принес" },
       { message: "Угощайся" },
     ],
      dialogs: [
       { id: 1, name: "cth", avatar: "https://clck.ru/U4EGN"},
       { id: 2, name: "shbmnk" },
       { id: 3, name: "fv" },
     ],
     newMessageText: 'sup, /b/',
    },
  },

  getState(){
    return this._state;
  },

  _callSubscriber() {
    console.log('state changed')
  },

  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likes: 0,
      id: 5,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  addMessage() {
    let newMessage = {
      message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer; //паттерн //publisher-subscriber //addEventListener
  }
}
 
export default store