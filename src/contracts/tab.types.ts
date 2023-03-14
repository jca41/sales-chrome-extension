import type { Writable } from "svelte/store";

export type SelectedTabStore = Writable<string>;

export type TabHeading = { id: string; title: string };
