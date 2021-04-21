let rerenderEntireTree = () =>{
  console.log('state changed')
}

 let state = {
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

   sideBar:{

   }
 }

export const addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    likes: 0,
    id: 5,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const addMessage = () => {
  let newMessage = {
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state)
}

export const subscribe = (observer) =>{
  rerenderEntireTree = observer; //паттерн //publisher-subscriber //addEventListener
}

 export default state