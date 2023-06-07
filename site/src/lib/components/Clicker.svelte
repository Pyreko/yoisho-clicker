<script lang="ts">
    import { localCount, globalCount } from "$lib/store";
</script>

<div>
    <div>
        <p>Global yoishos: {$globalCount.toLocaleString()}</p>
    </div>
    <div>
        <p>Yoishos: {$localCount.toLocaleString()}</p>
    </div>

</div>

<style lang="scss">
</style>