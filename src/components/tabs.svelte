<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { SelectedTabStore } from "../contracts/tab.types";
  import { getAppManager } from "../lib/app-manager";
  import { setSessionItem, type SessionKey } from "../lib/session";

  export let sessionKey: SessionKey = null;
  export let headings: { id: string; title: string }[] = [];

  const appManager = getAppManager();

  const selectedTab = writable<string>(
    appManager.session?.[sessionKey] || headings[0]?.id
  );

  const contextId = Math.random();

  setContext<SelectedTabStore>(contextId, selectedTab);

  async function onSelectedTab(key: string) {
    selectedTab.set(key);
    await setSessionItem(sessionKey, key);
  }
</script>

<div class="tab-bar">
  {#each headings as heading (heading.id)}
    <button
      class="tab-button"
      class:tab-button--selected={heading.id === $selectedTab}
      on:click={() => onSelectedTab(heading.id)}>{heading.title}</button
    >
  {/each}
</div>

<div>
  <slot {contextId} />
</div>

<div />

<style>
  button.tab-button {
    flex: 1 0 auto;
    border: none;
    background: white;
    color: black;
    border-bottom: 5px solid white;
    border-radius: 0;
    margin: 0;
  }

  button.tab-button--selected {
    border-bottom: 5px solid rgb(252, 204, 18);
  }

  .tab-bar {
    margin: 20px 0;
    display: flex;
    justify-content: stretch;
    border-bottom: 1px solid rgb(164, 165, 167);
  }
</style>
