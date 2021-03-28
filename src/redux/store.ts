import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import appReducer from './reducer';
import fetchArtworksSaga from './sagas/fetchArtworksSaga';
import sortArtworksSaga from './sagas/sortArtworksSaga';
import filterArtworksSaga from './sagas/filterArtworksSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

sagaMiddleware.run(fetchArtworksSaga);
sagaMiddleware.run(sortArtworksSaga);
sagaMiddleware.run(filterArtworksSaga);