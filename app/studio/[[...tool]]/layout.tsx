export const metadata = {
  title: 'Serente CMS Studio',
  description: 'Content Management for Serente Electronics',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Studio renders full-screen within the root layout
  // The NextStudio component handles its own styling
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#101112',
      }}
    >
      {children}
    </div>
  )
}
