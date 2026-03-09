import type { ContactFormData } from "@/lib/schemas"

export function ContactNotificationEmail({ data }: { data: ContactFormData }) {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#2d6a4f",
          padding: "24px 32px",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <h1 style={{ color: "#ffffff", fontSize: "20px", margin: 0 }}>
          New Contact Form Message
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "32px",
          border: "1px solid #e5e7eb",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  color: "#6b7280",
                  fontSize: "14px",
                  width: "100px",
                }}
              >
                Name
              </td>
              <td style={{ padding: "8px 0", fontSize: "14px" }}>
                {data.name}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Email
              </td>
              <td style={{ padding: "8px 0", fontSize: "14px" }}>
                <a href={`mailto:${data.email}`} style={{ color: "#2d6a4f" }}>
                  {data.email}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />
        <h2 style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 8px" }}>
          Message
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
          {data.message}
        </p>
        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>
          Reply directly to this email to respond to {data.name}.
        </p>
      </div>
    </div>
  )
}
