/** Arc's section marker: a gold crown, a number, then the label. */
export function Marker({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="marker">
      <span className="crown" aria-hidden>
        ♔
      </span>
      <span>{n}</span>
      <span>{children}</span>
    </p>
  );
}
