<template>
  <h1>Caminandes: Llamigos</h1>
  <p>
    From
    <a href="https://studio.blender.org/films" target="_blank">Blender Studio</a>. CC-BY
  </p>

  <div>
    <video
        ref="video"
        poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
        src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
        @mousemove="handleMove"
        @touchmove.prevent="handleMove"
        @mousedown="handleMousedown"
        @mouseup="handleMouseup"
        @timeupdate="updateTime"
        @durationchange="updateDuration"
        @play="updatePaused(false)"
        @pause="updatePaused(true)"
    >
      <track kind="captions" />
    </video>

    <div class="controls" :style="{ opacity: duration && showControls ? 1 : 0 }">
      <progress :value="time / duration || 0" />

      <div class="info">
        <span class="time">{{ format(time) }}</span>
        <span>click anywhere to {{ paused ? 'play' : 'pause' }} / drag to seek</span>
        <span class="time">{{ format(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const time = ref(0);
const duration = ref(0);
const paused = ref(true);
const showControls = ref(true);

let showControlsTimeout;
let lastMouseDown;

const video = ref(null);

function handleMove(e) {
  clearTimeout(showControlsTimeout);
  showControlsTimeout = setTimeout(() => (showControls.value = false), 2500);
  showControls.value = true;

  if (!duration.value) return;
  if (e.type !== 'touchmove' && !(e.buttons & 1)) return;

  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  const { left, right } = video.value.getBoundingClientRect();
  time.value = (duration.value * (clientX - left)) / (right - left);
  video.value.currentTime = time.value;
}

function handleMousedown() {
  lastMouseDown = new Date();
}

function handleMouseup(e) {
  if (new Date() - lastMouseDown < 300) {
    if (paused.value) video.value.play();
    else video.value.pause();
  }
}

function updateTime() {
  time.value = video.value.currentTime;
}

function updateDuration() {
  duration.value = video.value.duration;
}

function updatePaused(isPaused) {
  paused.value = isPaused;
}

function format(seconds) {
  if (isNaN(seconds)) return '...';

  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) seconds = '0' + seconds;

  return `${minutes}:${seconds}`;
}
</script>

<style>
div {
  position: relative;
}

.controls {
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 1s;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

span {
  padding: 0.2em 0.5em;
  color: white;
  text-shadow: 0 0 8px black;
  font-size: 1.4em;
  opacity: 0.7;
}

.time {
  width: 3em;
}

.time:last-child {
  text-align: right;
}

progress {
  display: block;
  width: 100%;
  height: 10px;
  -webkit-appearance: none;
  appearance: none;
}

progress::-webkit-progress-bar {
  background-color: rgba(0, 0, 0, 0.2);
}

progress::-webkit-progress-value {
  background-color: rgba(255, 255, 255, 0.6);
}

video {
  width: 100%;
}
</style>
