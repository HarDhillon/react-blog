import jsonplaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data  })
    };
  };

  export const fetchUser = (id) => (dispatch) =>{
    _fetchUser(id, dispatch);
  }

  // we move the memoize function out of the action, because the action was creating a new instance of the function inside of it everytime. (so memoize was not remembering.)
  const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    
    dispatch({type:'FETCH_USER', payload: response.data})
  })