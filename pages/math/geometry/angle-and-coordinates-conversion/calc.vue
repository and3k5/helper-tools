<template>
    <div>
        <div>
            <strong>pos1</strong>
            <div>
                <label>x: <input type="number" v-model="pos1.x" /></label>
            </div>
            <div>
                <label>y: <input type="number" v-model="pos1.y" /></label>
            </div>
        </div>
        <div>
            <strong>pos2</strong>
            <div>
                <label>x: <input type="number" v-model="pos2.x" /></label>
            </div>
            <div>
                <label>y: <input type="number" v-model="pos2.y" /></label>
            </div>
        </div>
        <div>
            <strong>angle</strong>
            <div>
                <label
                    >distance: <input type="number" v-model="distance"
                /></label>
            </div>
            <div>
                <label>rad: <input type="number" :value="angleRad" /></label>
            </div>
            <div>
                <label
                    >rad:
                    <input type="number" :value="angleRad * (180 / Math.PI)"
                /></label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const angleRad = ref(0);
const distance = ref(0);
const pos1 = ref({
    x: 0,
    y: 0,
});
const pos2 = ref({
    x: 0,
    y: 0,
});
watch(
    () => ({ pos1: pos1.value, pos2: pos2.value }),
    (newValue) => {
        console.log("upd");
        calculateAngle(newValue.pos1, newValue.pos2);
    },
    {
        immediate: true,
        deep: true,
    }
);
function calculateAngle(
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
) {
    var x1 = pos1.x;
    var y1 = pos1.y;
    var x2 = pos2.x;
    var y2 = pos2.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var rad = Math.atan2(deltaY, deltaX); // In radians
    angleRad.value = rad;

    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);
    distance.value = c;
}
</script>
