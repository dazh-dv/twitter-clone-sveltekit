<script lang="ts">
	import AuthButton from '$lib/components/auth-button.svelte';
	import ComposePost from '$lib/components/compose-post.svelte';
	import PostCard from '$lib/components/post-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Twitter clone with sveltekit</title>
</svelte:head>

<section class="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
	<ComposePost user_avatar={data.session.user.user_metadata.avatar_url} />
	{#each data.posts as post}
		<PostCard
			created_at={post.created_at}
			user_name={post.users.user_name}
			name={post.users.name}
			avatar_url={post.users.avatar_url}
			content={post.content}
		/>
	{/each}
	<div class="w-full flex items-center justify-center pt-6">
		<AuthButton />
	</div>
</section>
