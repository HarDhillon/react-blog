import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get('/posts');
  
    dispatch({ type: 'FETCH_POSTS', payload: response.data  })
    };
  };