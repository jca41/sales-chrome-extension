<script lang="ts">
  import TabContent from "./components/tab-content.svelte";
  import Tabs from "./components/tabs.svelte";
  import { PAGES } from "./config/pages";
</script>

<h1>Peacock Sales Dev Tools</h1>
<Tabs sessionKey="NAV_TAB" headings={PAGES} let:contextId>
  {#each PAGES as page (page.id)}
    <TabContent id={page.id} {contextId}>
      <svelte:component this={page.component} />
    </TabContent>
  {/each}
</Tabs>

<style>
  h1 {
    background: black;
    color: white;
    font-size: 20px;
    margin: 0 -20px;
    padding: 10px 20px;
  }
</style>
