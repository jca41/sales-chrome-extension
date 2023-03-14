<script lang="ts">
  import { BOOKMARKS } from "../config/bookmarks";
  import {
    DEFAULT_TERRITORIES,
    ENVIRONMENTS,
    ENVIRONMENTS_LIST,
    TERRITORIES,
    type Proposition,
    type Territory,
  } from "../constants";
  import { getAppManager } from "../lib/app-manager";

  const propositions = Object.keys(BOOKMARKS) as Proposition[];

  const appManager = getAppManager();

  let proposition = appManager.proposition || propositions[0];
  let territory = appManager.territory || DEFAULT_TERRITORIES[proposition];
  let environment = appManager.environment || ENVIRONMENTS["STABLE_INT"];

  $: bookmarkConfig = BOOKMARKS[proposition];
  $: territories = Object.values(TERRITORIES[proposition]) as Territory[];
  $: territory = DEFAULT_TERRITORIES[proposition];
</script>

<select bind:value={proposition}>
  {#each propositions as proposition}
    <option value={proposition}>{BOOKMARKS[proposition].title}</option>
  {/each}
</select>
<select bind:value={territory} disabled={!bookmarkConfig.hasTerritory}>
  {#each territories as _territory}
    <option>{_territory}</option>
  {/each}
</select>

<select bind:value={environment}>
  {#each ENVIRONMENTS_LIST as _env}
    <option>{_env}</option>
  {/each}
</select>
<div class="bookmarks-container">
  {#each bookmarkConfig.bookmarks as bookmark}
    <h2>{bookmark.heading}</h2>
    <div class="button-container">
      {#each bookmark.entries as entry}
        <button>{entry.title}</button>
      {/each}
    </div>
  {/each}
</div>

<style>
  select:not(:last-of-type) {
    margin-bottom: 5px;
  }

  .bookmarks-container {
    margin-top: 10px;
  }

  .button-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 10px 0;
  }
</style>
