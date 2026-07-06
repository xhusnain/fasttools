// No pages are noindexed. Every tool/page is indexable (index, follow).
//
// Previously this list noindexed ~34 finance/calculator/converter pages judged
// "dead / 0 clicks" — but those 0 clicks were caused by the un-redirected
// /tools/* restructure (the pages were 404ing), not by low value. De-indexing
// them on top of the 404s deepened the traffic loss, so the list was cleared.
// Add a path here only to deliberately noindex a specific page.
export const noindexPaths: string[] = []
