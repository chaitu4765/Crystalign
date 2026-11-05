(() => {
  'use strict';
  const canvas = document.getElementById('alignmentCanvas');
  const range = document.getElementById('alignmentRange');
  const poster = document.getElementById('alignmentPoster');
  const stage = document.getElementById('alignmentStage');
  const hint = document.getElementById('alignmentHint');
  const status = document.getElementById('alignmentStatus');
  if (!canvas || !range || !poster || !stage || !hint || !status) return;
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) {
    hint.textContent = 'Preview image';
    stage.setAttribute('aria-busy', 'false');
    return;
  }

  const lastFrame = 60;
  const frames = new Array(lastFrame + 1);
  let requestedFrame = 0;
  let scheduledFrame = 0;
  let displayedFrame = -1;
  let loadedCount = 0;
  const pathFor = index => `assets/alignment/frame-${String(index).padStart(3, '0')}.webp`;

  function draw(index) {
    if (!frames[index] || displayedFrame === index) return;
    context.drawImage(frames[index], 0, 0, canvas.width, canvas.height);
    canvas.hidden = false;
    poster.hidden = true;
    displayedFrame = index;
  }

  function renderRequested() {
    scheduledFrame = 0;
    draw(requestedFrame);
  }

  function selectFrame() {
    requestedFrame = Math.min(lastFrame, Math.max(0, Number(range.value)));
    const percent = Math.round(requestedFrame / lastFrame * 100);
    range.style.setProperty('--progress', `${percent}%`);
    range.setAttribute('aria-valuetext', requestedFrame === 0
      ? 'Crowded teeth, start of the illustration'
      : requestedFrame === lastFrame
        ? 'Aligned teeth, end of the illustration'
        : `Teeth moving toward alignment, ${percent} percent through the illustration`);
    // Coalesce fast pointer events; each paint always uses the newest position.
    if (!scheduledFrame) scheduledFrame = requestAnimationFrame(renderRequested);
  }
  range.addEventListener('input', selectFrame);

  async function loadFrame(index) {
    const image = new Image();
    image.decoding = 'async';
    image.src = pathFor(index);
    await image.decode();
    frames[index] = image;
    loadedCount += 1;
    if (index === 0) draw(0);
    hint.textContent = `Loading preview · ${Math.round(loadedCount / (lastFrame + 1) * 100)}%`;
  }

  async function prepareFrames() {
    try {
      await loadFrame(0);
      // Bound simultaneous downloads and decoding to avoid stalling mobile devices.
      let next = 1;
      const worker = async () => {
        while (next <= lastFrame) {
          const index = next++;
          await loadFrame(index);
        }
      };
      const results = await Promise.allSettled(Array.from({ length: 5 }, worker));
      const failure = results.find(result => result.status === 'rejected');
      if (failure) throw failure.reason;
      range.disabled = false;
      hint.textContent = 'Drag to align';
      status.textContent = 'Smile preview ready. Drag the slider or use the arrow keys to explore alignment.';
    } catch (error) {
      hint.textContent = 'Preview unavailable. Please refresh.';
      status.textContent = 'The alignment animation could not load. Please refresh the page to try again.';
      range.disabled = true;
      console.warn('Crystalign alignment frames could not be loaded.', error);
    } finally {
      stage.setAttribute('aria-busy', 'false');
    }
  }
  prepareFrames();
})();
