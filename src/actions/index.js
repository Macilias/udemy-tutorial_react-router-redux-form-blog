import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
const ROOR_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=Maciek';

export function fetchPosts() {
	const request = axios.get(`${ROOR_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request,
	};
}

export function createPost(values, callback) {
	// the counter part calling the callback added in onSubmit
	const request = axios.post(`${ROOR_URL}/posts${API_KEY}`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request,
	};
}
