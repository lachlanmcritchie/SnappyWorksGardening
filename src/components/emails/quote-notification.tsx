import type { QuoteFormData } from "@/lib/schemas"
import { BUSINESS } from "@/lib/constants"

export function QuoteNotificationEmail({ data }: { data: QuoteFormData }) {
  const serviceName =
    data.service.charAt(0).toUpperCase() +
    data.service.slice(1).replace(/-/g, " ")

  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f4f4f5",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: "#f4f4f5", padding: "32px 16px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  width="600"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {/* Header */}
                  <tbody>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#2d6a4f",
                          padding: "24px 32px",
                          color: "#ffffff",
                        }}
                      >
                        <h1
                          style={{
                            margin: 0,
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          New Quote Request
                        </h1>
                        <p
                          style={{
                            margin: "4px 0 0",
                            fontSize: "14px",
                            opacity: 0.9,
                          }}
                        >
                          {BUSINESS.name}
                        </p>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: "32px" }}>
                        <p
                          style={{
                            margin: "0 0 24px",
                            fontSize: "15px",
                            color: "#374151",
                          }}
                        >
                          A new quote request has been submitted via the website.
                        </p>

                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  width: "120px",
                                  verticalAlign: "top",
                                }}
                              >
                                Name
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "15px",
                                  color: "#111827",
                                  fontWeight: "600",
                                }}
                              >
                                {data.name}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  verticalAlign: "top",
                                }}
                              >
                                Phone
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "15px",
                                  color: "#111827",
                                }}
                              >
                                <a
                                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                                  style={{ color: "#2d6a4f" }}
                                >
                                  {data.phone}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  verticalAlign: "top",
                                }}
                              >
                                Email
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "15px",
                                  color: "#111827",
                                }}
                              >
                                <a
                                  href={`mailto:${data.email}`}
                                  style={{ color: "#2d6a4f" }}
                                >
                                  {data.email}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  verticalAlign: "top",
                                }}
                              >
                                Suburb
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "15px",
                                  color: "#111827",
                                }}
                              >
                                {data.suburb}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  verticalAlign: "top",
                                }}
                              >
                                Service
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  borderBottom: "1px solid #e5e7eb",
                                  fontSize: "15px",
                                  color: "#111827",
                                }}
                              >
                                {serviceName}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "12px 0",
                                  fontSize: "13px",
                                  color: "#6b7280",
                                  verticalAlign: "top",
                                }}
                              >
                                Message
                              </td>
                              <td
                                style={{
                                  padding: "12px 0",
                                  fontSize: "15px",
                                  color: "#111827",
                                  whiteSpace: "pre-wrap",
                                }}
                              >
                                {data.message}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p
                          style={{
                            margin: "24px 0 0",
                            padding: "16px",
                            backgroundColor: "#f0fdf4",
                            borderRadius: "6px",
                            fontSize: "13px",
                            color: "#166534",
                          }}
                        >
                          Reply directly to this email to respond to the
                          customer at {data.email}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  )
}
