const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'

// action creator --------------------------------------

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

// initial state

const initialState = {
  numOfCakes: 10
}

// reducer(prvious sate, action) => new sate --------------
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state, // make copy of state obj and then only update numOfCake property
      numOfCakes: state.numOfCakes - 1
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

// 5. to unsubscribe we use return in subscribe method
unsbscribe()

// ---------------- run : node index ---------------