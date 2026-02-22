export default function CaseStudyLoading() {
  return (
    <div style={{ position: "relative", zIndex: 1, background: "var(--bg)" }}>
      {/* CaseStudyHero skeleton */}
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 48px 80px",
          gap: 24,
        }}
      >
        {/* Subtitle */}
        <div className="skeleton-bone" style={{ width: 160, height: 14 }} />
        {/* Title */}
        <div className="skeleton-bone" style={{ width: 500, maxWidth: "80%", height: 80 }} />
        {/* Tagline */}
        <div className="skeleton-bone" style={{ width: 400, maxWidth: "60%", height: 24 }} />
        {/* Video */}
        <div
          className="skeleton-bone"
          style={{ width: "100%", maxWidth: 1060, aspectRatio: "16/9", borderRadius: 12, marginTop: 24 }}
        />
      </div>

      {/* CaseStudyDescription skeleton */}
      <main>
        <div style={{ padding: "60px 48px", maxWidth: 900, margin: "0 auto" }}>
          <div className="skeleton-bone" style={{ width: "90%", height: 20, marginBottom: 16 }} />
          <div className="skeleton-bone" style={{ width: "100%", height: 20, marginBottom: 16 }} />
          <div className="skeleton-bone" style={{ width: "70%", height: 20 }} />
        </div>

        {/* CaseStudyApproach skeleton — 40/60 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "40% 1fr", gap: 64, padding: "60px 48px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="skeleton-bone" style={{ width: 200, height: 28 }} />
            <div className="skeleton-bone" style={{ width: "100%", height: 17 }} />
            <div className="skeleton-bone" style={{ width: "90%", height: 17 }} />
            <div className="skeleton-bone" style={{ width: "80%", height: 17 }} />
          </div>
          <div className="skeleton-bone" style={{ width: "100%", aspectRatio: "16/9", borderRadius: 12 }} />
        </div>

        {/* CaseStudyResults skeleton — 3-col */}
        <div style={{ padding: "60px 48px" }}>
          <div className="skeleton-bone" style={{ width: 180, height: 28, marginBottom: 40 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                <div className="skeleton-bone" style={{ width: 140, height: 56 }} />
                <div className="skeleton-bone" style={{ width: "80%", height: 17 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery placeholder */}
        <div style={{ padding: "40px 48px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="skeleton-bone"
                style={{ width: "100%", aspectRatio: "4/3", borderRadius: 12 }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
