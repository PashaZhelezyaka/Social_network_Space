export type StateType = {
    dialogPage: DialogPageType
    postPage: PostPageType
}
export type PostDataType = {
    id: number
    message: string
    likesCount: string
}
export type MessageDataType = {
    message: string
}
export type DialogNamesType = {
    id: number
    name: string
}
export type DialogPageType = {
    dialogNames: Array<DialogNamesType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type PostPageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: (_state: StateType) => void) => void
    addPostText: () => void
    updateNewPostText: (newPostText: string)=> void
    addMessageText: ()=> void
    updateNewMessageText: (newMessageText: string)=> void
    getState: ()=>StateType
}

let store: StoreType = {
    _state: {
        dialogPage: {
            dialogNames: [
                {id: 1, name: "Korolyov"},
                {id: 2, name: "Belka & Strelka"},
                {id: 3, name: "Yuri"},
                {id: 4, name: "Iloha"},
                {id: 5, name: "Mars"},
                {id: 6, name: "Neznaika"},
            ]
            ,
            messageData: [
                {message: "go to space, i created"},
                {message: "we will definitely be back?"},
                {message: "how are you descendants?"},
                {message: "Yura, we have lost everything"},
                {message: "I'm just a chocolate bar"},
                {message: "I do not know anything"},
            ],
            newMessageText: "it's time to answer"
        },

        postPage: {
            postData: [
                {id: 1, message: "Hallo", likesCount: "like 15"},
                {id: 2, message: "Yo space", likesCount: "like 20"},
                {id: 3, message: "You are infinity?", likesCount: "like 15"},
                {id: 4, message: "Sky limit", likesCount: "like 15"},
                {id: 5, message: "Sky limit", likesCount: "like 15"},
                {id: 6, message: "Sky limit", likesCount: "like 15"},
            ],
            newPostText: "I am super"
        },

    },
    _callSubscriber() {
        console.log("State change")
    },
    subscribe(observer: (_state: StateType) => void) {
        this._callSubscriber = observer
    },

    addPostText() {
        debugger
        const newPost: PostDataType = {
            id: 7,
            message: this._state.postPage.newPostText,
            likesCount: "like 0"
        }
        this._state.postPage.postData.push(newPost)
        this.updateNewPostText('')
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText: string) {
               this._state.postPage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    addMessageText() {
        const newMessage: MessageDataType = {
            message: this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.messageData.push(newMessage)
        this.updateNewMessageText('')
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessageText: string) {
        this._state.dialogPage.newMessageText = newMessageText
        this._callSubscriber(this._state)
    },
    getState () {
        return this._state
    }
}

    export default store;