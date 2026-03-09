import type { QuoteFormData } from "@/lib/schemas"
import { BUSINESS, SITE_URL } from "@/lib/constants"

export function QuoteConfirmationEmail({ data }: { data: QuoteFormData }) {
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
                          {BUSINESS.name}
                        </h1>
                        <p
                          style={{
                            margin: "4px 0 0",
                            fontSize: "14px",
                            opacity: 0.9,
                          }}
                        >
                          Quote Request Received
                        </p>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: "32px" }}>
                        <p
                          style={{
                            margin: "0 0 16px",
                            fontSize: "15px",
                            color: "#374151",
                          }}
                        >
                          Hi {data.name},
                        </p>

                        <p
                          style={{
                            margin: "0 0 16px",
                            fontSize: "15px",
                            color: "#374151",
                            lineHeight: "1.6",
                          }}
                        >
                          Thanks for reaching out to {BUSINESS.name}! We&apos;ve
                          received your quote request and will get back to you
                          within <strong>24 hours</strong> with a detailed,
                          no-obligation quote.
                        </p>

                        <p
                          style={{
                            margin: "0 0 24px",
                            fontSize: "15px",
                            color: "#374151",
                            lineHeight: "1.6",
                          }}
                        >
                          If you need something urgent, don&apos;t hesitate to
                          give us a call.
                        </p>

                        {/* Contact Info */}
                        <table
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            backgroundColor: "#f9fafb",
                            borderRadius: "8px",
                            padding: "20px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "20px" }}>
                                <p
                                  style={{
                                    margin: "0 0 12px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: "#111827",
                                  }}
                                >
                                  Our Contact Details
                                </p>
                                <p
                                  style={{
                                    margin: "0 0 6px",
                                    fontSize: "14px",
                                    color: "#374151",
                                  }}
                                >
                                  Phone:{" "}
                                  <a
                                    href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                                    style={{ color: "#2d6a4f" }}
                                  >
                                    {BUSINESS.phone}
                                  </a>
                                </p>
                                <p
                                  style={{
                                    margin: "0 0 6px",
                                    fontSize: "14px",
                                    color: "#374151",
                                  }}
                                >
                                  Email:{" "}
                                  <a
                                    href={`mailto:${BUSINESS.email}`}
                                    style={{ color: "#2d6a4f" }}
                                  >
                                    {BUSINESS.email}
                                  </a>
                                </p>
                                <p
                                  style={{
                                    margin: "0",
                                    fontSize: "14px",
                                    color: "#374151",
                                  }}
                                >
                                  Hours: {BUSINESS.hours}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p
                          style={{
                            margin: "24px 0 0",
                            fontSize: "15px",
                            color: "#374151",
                          }}
                        >
                          Thanks again,
                          <br />
                          The {BUSINESS.name} Team
                        </p>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td
                        style={{
                          padding: "16px 32px",
                          borderTop: "1px solid #e5e7eb",
                          textAlign: "center" as const,
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            color: "#9ca3af",
                          }}
                        >
                          {BUSINESS.name} &middot; {BUSINESS.address}
                          <br />
                          <a
                            href={SITE_URL}
                            style={{ color: "#9ca3af" }}
                          >
                            {SITE_URL.replace("https://", "")}
                          </a>
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
