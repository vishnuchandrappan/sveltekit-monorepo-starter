import { env } from '$env/dynamic/private';
import { JWT_TOKEN_COOKIE_NAME } from '$lib/auth';
import { prisma } from '$lib/db';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { enhance } from '@zenstackhq/runtime';
import jwt from 'jsonwebtoken';

const shouldRedirectPath = (path?: string | null): path is string =>
	Boolean(path && path.startsWith('/(secure)'));

const auth = (async ({ event, resolve }) => {
	const token = event.cookies.get(JWT_TOKEN_COOKIE_NAME);
	if (token) {
		try {
			const decoded = jwt.verify(token, env.JWT_SECRET);
			const user = await prisma.user.findUnique({
				where: { id: decoded.sub as string }
			});
			if (user) {
				event.locals.user = user;
			} else {
				console.warn('User not found:', decoded.sub);
				event.cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
			}
		} catch {
			event.cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
		}
	} else {
		if (shouldRedirectPath(event.route.id)) {
			return new Response(undefined, {
				status: 307,
				headers: {
					Location: '/auth/login'
				}
			});
		}
	}

	// create an enhanced PrismaClient that recognizes access policies
	event.locals.db = enhance(prisma, {
		user: event.locals.user ? { id: event.locals.user.id } : undefined
	});

	return resolve(event);
}) satisfies Handle;

export const handle = sequence(auth);
