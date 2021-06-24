const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// action creator --------------------------------------

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: 'action of buying ice cream'
  }
}

// split initial state
const initialCakeState = {
  numOfCakes: 10
}

const initialIcecreamState = {
  numOfIcecreams: 20
}

// implemnt two reducers reducer(prvious sate, action) => new sate --------------
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state, // make copy of state obj and then only update numOfCake property
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

const IcecreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIcecreams: state.numOfIcecreams - 1
    }

    default: return state
  }
}

// Implementing the App Store ----------------------------
const createStore = redux.createStore

// 1. holds app's state
const store = createStore(reducer)

// 2. access to state via getState method
console.log('initial state', store.getState())

// 3. Allow app to subscribe to changes in the store
// store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// 4. dispatch method to update the state 3 times
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// 5. to unsubscribe we use return in subscribe method
unsubscribe()

// ---------------- run : node index ---------------