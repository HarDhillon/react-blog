import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // return array of user id's that are unique
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => dispatch(fetchUser(id)))
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data  })
    };
  };

  export const fetchUser = (id) => async dispatch =>{
    const response = await jsonplaceholder.get(`/users/${id}`);
    
    dispatch({type:'FETCH_USER', payload: response.data})
  };
  

  // we move the memoize function out of the action, because the action was creating a new instance of the function inside of it everytime. (so memoize was not remembering.)

  // const _fetchUser = _.memoize(async (id, dispatch) => {
  //   const response = await jsonplaceholder.get(`/users/${id}`);
    
  //   dispatch({type:'FETCH_USER', payload: response.data})
  // })