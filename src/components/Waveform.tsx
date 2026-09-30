const BARS = 36;

/** Fixed pseudo-random heights, so the strip looks the same on every render. */
const HEIGHTS: number[] = (() => {
  let seed = 7;
  return Array.from({ length: BARS }, () => {
    seed = (seed * 9301 + 49297) % 233280;
    return 20 + Math.round((seed / 233280) * 80);
  });
})();

export function Waveform({ progress }: { progress: number }) {
  const on = Math.round(progress * BARS);
  return (
    <div className="wave" aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <i key={i} className={i < on ? "on" : undefined} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}
