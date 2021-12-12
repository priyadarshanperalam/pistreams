import axios from 'axios';
import Env from '../Env';

const KEY = Env.vars().YOUTUBE_KEY;

export default axios.create({
	baseURL: 'https:www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});
