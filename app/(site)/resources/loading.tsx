export default function ResourcesLoading() {
  return (
    <div style={{ position: "relative", zIndex: 1, background: "var(--bg)" }}>
      <main style={{ padding: "0 48px", display: "flex", flexDirection: "column" }}>
        {/* Hero skeleton */}
        <div style={{ paddingTop: 160, marginBottom: 60 }}>
          <div className="skeleton-bone" style={{ width: 120, height: 14, marginBottom: 16 }} />
          <div className="skeleton-bone" style={{ width: 360, height: 36, marginBottom: 16 }} />
          <div className="skeleton-bone" style={{ width: 460, height: 17 }} />
        </div>

        {/* Featured skeleton — 2 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          {[0, 1].map((i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.06)" }}>
              <div className="skeleton-bone" style={{ width: "100%", aspectRatio: "16/9", borderRadius: 0 }} />
              <div style={{ padding: 24 }}>
                <div className="skeleton-bone" style={{ width: 70, height: 22, borderRadius: 100, marginBottom: 12 }} />
                <div className="skeleton-bone" style={{ width: "80%", height: 24, marginBottom: 8 }} />
                <div className="skeleton-bone" style={{ width: "60%", height: 15 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Category filter pills skeleton */}
        <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
          {[80, 100, 70, 90].map((w, i) => (
            <div key={i} className="skeleton-bone" style={{ width: w, height: 36, borderRadius: 100 }} />
          ))}
        </div>

        {/* BlogGrid skeleton — 6 cards, 3-col */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 80 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.06)" }}>
              <div className="skeleton-bone" style={{ width: "100%", aspectRatio: "16/9", borderRadius: 0 }} />
              <div style={{ padding: 20, display: "flex", flexDirection: "column" as const, gap: 8 }}>
                <div className="skeleton-bone" style={{ width: 70, height: 22, borderRadius: 100 }} />
                <div className="skeleton-bone" style={{ width: "90%", height: 17 }} />
                <div className="skeleton-bone" style={{ width: "70%", height: 17 }} />
                <div className="skeleton-bone" style={{ width: "85%", height: 15 }} />
                <div className="skeleton-bone" style={{ width: "60%", height: 15 }} />
                <div className="skeleton-bone" style={{ width: 120, height: 13, marginTop: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
