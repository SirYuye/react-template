import { Effect, Reducer, Subscription, useRouteMatch } from 'umi';

export const match = () => {
  const match = useRouteMatch()
  return match;
};

export interface IndexModelState {
  name: string;
  age: number;
  six: string;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: 'hayho',
    age: 20,
    six: 'man'
  },
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      state.name = action.payload
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {

      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          // dispatch({
          //   type: 'query',
          // })
        }
      });
    }
  }
};

export default IndexModel;
