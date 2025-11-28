<template>
    <div>
        <textarea
            v-model="inputValue"
            placeholder="exec sp_executesql ..."
        ></textarea>
        <br />
        <textarea readonly :value="outputValue"></textarea>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const inputValue = ref("");

const regex =
    /^\s*(exec )?sp_executesql (N)?'(?<statement>[^]*)',(N)?'(?<declarations>[^']*)',(?<setters>.*)$/i;

const outputValue = computed(() => {
    var matches = regex.exec(inputValue.value);
    console.log(matches);
    if (matches == null) return "failed";
    var result = "";

    result += "DECLARE " + matches["groups"]!.declarations;
    result += "\n";
    result += "\n";

    result += matches["groups"]!.setters
        .split(",")
        .map((x) => "SET " + x)
        .join("\n");

    result += "\n";
    result += "\n";
    result += matches["groups"]!["statement"].replace(/''/gi, "'");

    return result;
});
</script>
