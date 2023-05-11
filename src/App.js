
import { combineReducers,createStore } from 'redux';
import './App.css';
import { MyRoutes } from './MyRoutes';
import itemReducer from './reducer/itemReducer';
import cartReducer from './reducer/cartReducer';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const mypersistConfig = {
    key: 'root',
    storage,
  }
  const myrootReducer= combineReducers({
    itemStore : itemReducer,
    cartStore : cartReducer
  })
  const myPersistedReducer = persistReducer(mypersistConfig, myrootReducer)
  const myStore = createStore(myPersistedReducer)
  let myPersistor = persistStore(myStore)
  return (
   <> 
   <Provider store ={myStore}>
   <PersistGate loading={null} persistor={myPersistor}>
  <MyRoutes/>
  </PersistGate>
</Provider>
   </>
  );
}

export default App;
