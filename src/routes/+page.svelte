<script lang="ts">
	import EsLintLogo from 'virtual:icons/logos/eslint';
	import PrettierLogo from 'virtual:icons/logos/prettier';
	import PrismaLogo from 'virtual:icons/logos/prisma';
	import SvelteLogo from 'virtual:icons/logos/svelte-icon';
	import TailwindLogo from 'virtual:icons/logos/tailwindcss-icon';
	import TypeScriptLogo from 'virtual:icons/logos/typescript-icon';

	export let data;
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<h1 class="text-6xl font-bold text-white">Hello, World!</h1>
	<div class="flex flex-col gap-2 text-white">
		<div class="e flex flex-wrap items-center gap-2 rounded-xl border-2 p-4 text-4xl">
			<SvelteLogo />
			<span>+</span>
			<TypeScriptLogo />
			<span>+</span>
			<TailwindLogo />
			<span>+</span>
			<PrettierLogo />
			<span>+</span>
			<EsLintLogo />
			<span>+</span>
			<PrismaLogo />
		</div>
		<div class="self-center rounded-xl border-2 p-4">
			<ul class="list-inside list-disc">
				<li>lint-staged + husky</li>
				<li>unplugin icons</li>
				<li>zenstack</li>
			</ul>
		</div>
	</div>
	{#if data.user}
		<p class="text-white">Welcome, {data.user.email}!</p>
		<form method="post">
			<button class="rounded-lg border-2 px-6 py-2 text-white">Logout</button>
		</form>
	{:else}
		<a href="/auth/login" class="rounded-lg border-2 px-6 py-2 text-white"> Login </a>
	{/if}
</div>
