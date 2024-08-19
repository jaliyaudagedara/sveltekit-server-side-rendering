<script>
  export let data;

</script>

<h1>Items</h1>
<div>
  {#if data.items.length > 0}
    {#each data.items as item}
      <form method="POST">
        <div key={item.id} class="border-b py-2">
          <div class="flex justify-between">
            <div class="text-lg font-semibold">#{item.id} - {item.title}</div>
            <div class="text-gray-600">${item.price}</div>
            <input hidden name="id" value={item.id} />
          </div>
        </div>
      </form>
    {/each}
  {:else}
    <p>No items found.</p>
  {/if}
</div>