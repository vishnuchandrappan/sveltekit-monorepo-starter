import { JWT_TOKEN_COOKIE_NAME } from '$lib/auth';

export const load = ({ locals: { user } }) => {
	return { user };
};

export const actions = {
	default: ({ cookies }) => {
		cookies.delete(JWT_TOKEN_COOKIE_NAME, {
			path: '/'
		});

		return {
			status: 303,
			headers: {
				location: '/'
			}
		};
	}
};
