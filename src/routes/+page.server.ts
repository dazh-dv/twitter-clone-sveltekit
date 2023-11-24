import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PostType } from '$lib/types/extens-supabase';
import { invalidateAll } from '$app/navigation';

export const load: PageServerLoad = async ({ locals: { supabase }, parent }) => {
	const data = await supabase
		.from('post')
		.select('*, users(name, user_name, avatar_url)')
		.order('created_at', { ascending: false });

	const { session } = await parent();

	if (!session) {
		// the user is not signed in
		throw redirect(303, '/login');
	}

	const posts: PostType[] = data.data;

	return {
		session,
		posts
	};
};

export const actions = {
	create_post: async ({ request, locals: { getSession, supabase } }) => {
		const fomrData = await request.formData();
		const content = fomrData.get('content');

		if (content === null || content === '') return;
		const session = await getSession();

		if (session.user === null) {
			invalidateAll();
			return;
		}

		await new Promise((resolve) => setTimeout(resolve, 1000));

		await supabase.from('post').insert({ content, user_id: session.user.id });
	}
} satisfies Actions;
