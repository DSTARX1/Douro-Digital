export default function BlogPostLoading() {
  return (
    <main style={{ padding: "0 48px", display: "flex", flexDirection: "column" }}>
      {/* BlogPostHero skeleton */}
      <div style={{ paddingTop: 140, marginBottom: 48, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Back link */}
        <div className="skeleton-bone" style={{ width: 120, height: 15, marginBottom: 8 }} />
        {/* Badge */}
        <div className="skeleton-bone" style={{ width: 80, height: 24, borderRadius: 100 }} />
        {/* Title */}
        <div className="skeleton-bone" style={{ width: "55%", maxWidth: 720, height: 40 }} />
        <div className="skeleton-bone" style={{ width: "35%", maxWidth: 460, height: 40 }} />
        {/* Meta row */}
        <div style={{ display: "flex", gap: 8 }}>
          <div className="skeleton-bone" style={{ width: 100, height: 14 }} />
          <div className="skeleton-bone" style={{ width: 80, height: 14 }} />
        </div>
        {/* Hero image */}
        <div className="skeleton-bone" style={{ width: "100%", aspectRatio: "21/9", borderRadius: 16, marginTop: 8 }} />
      </div>

      {/* BlogPostBody skeleton */}
      <div style={{ maxWidth: 720, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
        <div className="skeleton-bone" style={{ width: "90%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "100%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "75%", height: 17 }} />
        <div style={{ height: 8 }} />
        <div className="skeleton-bone" style={{ width: "45%", height: 24 }} />
        <div className="skeleton-bone" style={{ width: "95%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "100%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "80%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "60%", height: 17 }} />
        <div style={{ height: 8 }} />
        <div className="skeleton-bone" style={{ width: "100%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "88%", height: 17 }} />
        <div className="skeleton-bone" style={{ width: "70%", height: 17 }} />
      </div>

      {/* Related posts skeleton — 3 cards */}
      <div style={{ marginTop: 80, marginBottom: 80 }}>
        <div className="skeleton-bone" style={{ width: 180, height: 24, marginBottom: 32 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.06)" }}>
              <div className="skeleton-bone" style={{ width: "100%", aspectRatio: "16/9", borderRadius: 0 }} />
              <div style={{ padding: 20, display: "flex", flexDirection: "column" as const, gap: 8 }}>
                <div className="skeleton-bone" style={{ width: 70, height: 22, borderRadius: 100 }} />
                <div className="skeleton-bone" style={{ width: "85%", height: 17 }} />
                <div className="skeleton-bone" style={{ width: "65%", height: 17 }} />
                <div className="skeleton-bone" style={{ width: 120, height: 13, marginTop: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
