import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const FETCH_POST = 'fetch_post';
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

export function fetchPost(id) {
	const request = axios.get(`${ROOR_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request,
	};
}
