<script lang="ts">
  import type { SelectedTabStore } from "../contracts/tab.types";
  import { getContext } from "svelte";

  export let contextId: number;
  export let id: string;

  const selectedTab = getContext<SelectedTabStore>(contextId);
</script>

{#if id === $selectedTab}
  <div>
    <slot />
  </div>
{/if}
