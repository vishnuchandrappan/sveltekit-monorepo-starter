<script lang="ts">
	import EsLintLogo from 'virtual:icons/logos/eslint';
	import PrettierLogo from 'virtual:icons/logos/prettier';
	import SvelteLogo from 'virtual:icons/logos/svelte-icon';
	import TailwindLogo from 'virtual:icons/logos/tailwindcss-icon';
	import TypeScriptLogo from 'virtual:icons/logos/typescript-icon';
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-gradient-to-r from-indigo-500 to-blue-950"
>
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
		</div>
		<div class="self-center rounded-xl border-2 p-4">
			<ul class="list-inside list-disc">
				<li>lint-staged + husky</li>
				<li>unplugin icons</li>
			</ul>
		</div>
	</div>
</div>
