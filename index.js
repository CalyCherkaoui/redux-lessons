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

