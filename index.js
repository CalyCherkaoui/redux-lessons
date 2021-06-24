const BUY_CAKE = 'BUY_CAKE'

// action creator

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

// reducer(prvious sate, action) => new sate
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}
