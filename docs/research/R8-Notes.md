**Author:** Level Lawrence
**Assignment:** 3.2 Research 3 - Innovation
**Date:** April 26, 2025

# 3.2 Research - Innovation

_(Project: FleetCare Pro App)_

## 🔍 SWOT Analysis (Maintenance Management App)

**Strengths**

- Centralizes maintenance records, schedules, and tasks in one platform
- Improves efficiency by tracking service history, upcoming work, and downtime
- Can reduce costs by preventing major breakdowns through proactive maintenance

**Weaknesses**

- Requires good user adoption — tech-resistant clients may find it "extra work"
- Integration challenges with older asset tracking systems such as handwritten logs, spreadsheets

**Opportunities**

- Expand features into predictive maintenance using IoT sensor data (future phase)
- Offer mobile-first solutions for on-site technicians
- Build API integrations with parts suppliers or fleet management software

**Threats**

- High competition from established CMMS (Computerized Maintenance Management Systems) like Fiix, UpKeep, and Trapeze
- Security concerns around sensitive equipment, facility, and client data

---

## 🛡 OWASP Top 10 Security Risks

**Risk Chosen: A5 - Security Misconfiguration**

> If servers, databases, or storage are misconfigured, they could expose sensitive maintenance data (like building layouts or maintenance schedules).

**Mitigation Strategy:**

- Regularly audit cloud server configurations (AWS/GCP/Azure)
- Enforce HTTPS, use security headers (via middleware like Helmet.js)
- Set strict permissions on maintenance records based on user roles

---

**Risk Chosen: A2 - Cryptographic Failures**

> Maintenance records could contain client-sensitive information — encryption at rest and in transit is critical.

**Mitigation Strategy:**

- Use HTTPS for all communications
- Encrypt database fields containing personal or sensitive facility data
- Rotate API keys and credentials regularly

---

## 🔐 Code Scanning Tools

**Tool: GitHub CodeQL**

- Scans for vulnerabilities in the codebase before merging PRs

**Alternative Tool: Snyk**

- Monitors third-party libraries like if Express or Mongoose have a new CVE reported.
- Easy GitHub Action setup for auto-scanning `package.json` dependencies

**How It Fits:**

- Add both CodeQL and Snyk scans to the repo CI/CD pipelines
- Ensure that vulnerabilities are caught before deployment
- Integrate code scanning badges into the GitHub README to show commitment to security

---

## 💡 Creativity & Innovation (EFF)

**Topic: User Control of Software**

> EFF advocates for the right to repair, modify, and control the tools users own.

**Relevance to Maintenance Management App:**

- Allowing companies to export their full maintenance history in open formats (like CSV or JSON) empowers them to control their own data
- Open API access would allow clients to innovate by building their own custom reporting dashboards
- Promotes trust and transparency — important when dealing with large equipment maintenance contracts
