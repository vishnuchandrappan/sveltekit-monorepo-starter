<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="flex h-full flex-col items-stretch justify-center">
	<h1 class="text-center text-4xl font-semibold">Signup</h1>
	<form class="mt-3 flex flex-col gap-8 px-8 text-2xl text-black" method="post" use:enhance>
		{#if form?.dup}
			<p class="my-2 text-red-600" in:fly={{ y: 20 }}>Email already registered!</p>
		{/if}
		{#if form?.missing}
			<p class="my-2 text-red-600" in:fly={{ y: 20 }}>Please fill all fields!</p>
		{/if}
		<div class="flex flex-col gap-2">
			<label for="email"> Email </label>
			<input
				id="email"
				name="email"
				type="email"
				value={form?.email ?? ''}
				class="rounded border p-4"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="password"> Password </label>
			<input id="password" name="password" type="password" class="rounded border p-4" />
		</div>
		<input
			type="submit"
			value="Create account"
			class="cursor-pointer rounded border border-gray-500 py-4"
		/>
		<div class="mt-2 text-base font-medium">
			Already have an account?
			<a href="/auth/login" class="text-primary-700 underline"> Login here </a>
		</div>
	</form>
</div>
