import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const ROOR_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=Maciek';

export function fetchPosts() {
	const request = axios.get(`${ROOR_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request,
	};
}
