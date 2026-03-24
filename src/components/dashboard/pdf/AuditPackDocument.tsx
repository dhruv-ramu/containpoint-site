import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import {
  facility,
  assets,
  inspections,
  correctiveActions,
  trainingRecords,
  spccPlan,
  evidenceReadiness,
} from "@/data/sampleDashboardData";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#171717",
  },
  coverPage: {
    padding: 48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  coverTitle: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#171717",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  coverSubtitle: {
    fontSize: 14,
    color: "#5E6873",
    marginBottom: 48,
  },
  coverBlock: {
    marginBottom: 16,
    textAlign: "center",
  },
  coverLabel: {
    fontSize: 9,
    color: "#5E6873",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  coverValue: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#171717",
  },
  coverStatus: {
    marginTop: 32,
    padding: 12,
    backgroundColor: "#4A7C5915",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#4A7C5930",
  },
  coverStatusText: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#4A7C59",
  },
  coverDate: {
    marginTop: 48,
    fontSize: 10,
    color: "#5E6873",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#171717",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#5F7C99",
  },
  subsectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#171717",
    marginTop: 20,
    marginBottom: 10,
  },
  table: {
    marginTop: 12,
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#CED6DD",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F2F5F7",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#CED6DD",
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: "#5E6873",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  col1: { width: "12%" },
  col2: { width: "22%" },
  col3: { width: "15%" },
  col4: { width: "12%" },
  col5: { width: "12%" },
  col6: { width: "12%" },
  col7: { width: "15%" },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    gap: 12,
  },
  summaryCard: {
    width: "48%",
    padding: 12,
    backgroundColor: "#F2F5F7",
    borderRadius: 4,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 9,
    color: "#5E6873",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#171717",
  },
  amendmentItem: {
    flexDirection: "row",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E7ECEF",
  },
  amendmentVersion: {
    width: 50,
    fontFamily: "Helvetica-Bold",
    color: "#5F7C99",
  },
  amendmentContent: {
    flex: 1,
  },
  amendmentDesc: {
    marginBottom: 2,
  },
  amendmentDate: {
    fontSize: 9,
    color: "#5E6873",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: "#5E6873",
  },
  statement: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#F2F5F7",
    borderRadius: 4,
    fontStyle: "italic",
    color: "#5E6873",
    lineHeight: 1.5,
  },
});

export function AuditPackDocument() {
  const generatedDate = "March 23, 2026";

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.coverPage}>
          <Text style={styles.coverTitle}>Audit Pack</Text>
          <Text style={styles.coverSubtitle}>SPCC Compliance Documentation</Text>

          <View style={styles.coverBlock}>
            <Text style={styles.coverLabel}>Facility</Text>
            <Text style={styles.coverValue}>{facility.name}</Text>
          </View>
          <View style={styles.coverBlock}>
            <Text style={styles.coverLabel}>Organization</Text>
            <Text style={styles.coverValue}>{facility.company}</Text>
          </View>
          <View style={styles.coverBlock}>
            <Text style={styles.coverLabel}>Consultant</Text>
            <Text style={styles.coverValue}>{facility.consultantOrg}</Text>
          </View>
          <View style={styles.coverBlock}>
            <Text style={styles.coverLabel}>Classification</Text>
            <Text style={styles.coverValue}>{facility.spccTier}</Text>
          </View>

          <View style={styles.coverStatus}>
            <Text style={styles.coverStatusText}>✓ Audit-ready</Text>
          </View>

          <Text style={styles.coverDate}>Generated {generatedDate}</Text>
        </View>
      </Page>

      {/* Executive Summary */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Executive Summary</Text>

        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Compliance Score</Text>
            <Text style={styles.summaryValue}>{facility.complianceScore}%</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Inspections Completed (This Month)</Text>
            <Text style={styles.summaryValue}>{facility.inspectionsCompletedThisMonth} / {facility.inspectionsRequiredThisMonth}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Open Corrective Actions</Text>
            <Text style={styles.summaryValue}>{facility.openCorrectiveActions}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Training Renewals Due</Text>
            <Text style={styles.summaryValue}>{facility.trainingRenewalsDue30Days}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Plan Status</Text>
            <Text style={styles.summaryValue}>Current</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Evidence Completeness</Text>
            <Text style={styles.summaryValue}>Inspection records: {evidenceReadiness.inspectionRecordsComplete}% · Signatures: {evidenceReadiness.signatureCoverage}%</Text>
          </View>
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* Asset Inventory */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Asset Inventory</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.col1}>ID</Text>
            <Text style={styles.col2}>Name</Text>
            <Text style={styles.col3}>Type</Text>
            <Text style={styles.col4}>Capacity</Text>
            <Text style={styles.col5}>Oil Type</Text>
            <Text style={styles.col6}>Last Insp.</Text>
            <Text style={styles.col7}>Status</Text>
          </View>
          {assets.map((a) => (
            <View key={a.id} style={styles.tableRow}>
              <Text style={styles.col1}>{a.id}</Text>
              <Text style={styles.col2}>{a.name}</Text>
              <Text style={styles.col3}>{a.type}</Text>
              <Text style={styles.col4}>{a.capacity}</Text>
              <Text style={styles.col5}>{a.oilType}</Text>
              <Text style={styles.col6}>{a.lastInspection}</Text>
              <Text style={styles.col7}>{a.status}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* Inspection Records */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Inspection Records</Text>
        <Text style={styles.subsectionTitle}>Last 12 months — Sample entries</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.col1}>ID</Text>
            <Text style={styles.col2}>Asset</Text>
            <Text style={styles.col3}>Procedure</Text>
            <Text style={styles.col4}>Completed By</Text>
            <Text style={styles.col5}>Date</Text>
            <Text style={styles.col6}>Result</Text>
          </View>
          {inspections.map((i) => (
            <View key={i.id} style={styles.tableRow}>
              <Text style={styles.col1}>{i.id}</Text>
              <Text style={styles.col2}>{i.asset}</Text>
              <Text style={styles.col3}>{i.procedure}</Text>
              <Text style={styles.col4}>{i.completedBy}</Text>
              <Text style={styles.col5}>{i.date}</Text>
              <Text style={styles.col6}>{i.result}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* Corrective Actions */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Corrective Action Records</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.col1}>ID</Text>
            <Text style={styles.col2}>Title</Text>
            <Text style={styles.col3}>Severity</Text>
            <Text style={styles.col4}>Asset</Text>
            <Text style={styles.col5}>Owner</Text>
            <Text style={styles.col6}>Due</Text>
            <Text style={styles.col7}>Status</Text>
          </View>
          {correctiveActions.map((a) => (
            <View key={a.id} style={styles.tableRow}>
              <Text style={styles.col1}>{a.id}</Text>
              <Text style={styles.col2}>{a.title}</Text>
              <Text style={styles.col3}>{a.severity}</Text>
              <Text style={styles.col4}>{a.linkedAsset}</Text>
              <Text style={styles.col5}>{a.owner}</Text>
              <Text style={styles.col6}>{a.dueDate}</Text>
              <Text style={styles.col7}>{a.status}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* Training Records */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Training Acknowledgments</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.col2}>Employee</Text>
            <Text style={styles.col3}>Role</Text>
            <Text style={styles.col2}>Training Type</Text>
            <Text style={styles.col3}>Last Completed</Text>
            <Text style={styles.col2}>Next Due</Text>
            <Text style={styles.col2}>Status</Text>
          </View>
          {trainingRecords.map((r) => (
            <View key={r.employee} style={styles.tableRow}>
              <Text style={styles.col2}>{r.employee}</Text>
              <Text style={styles.col3}>{r.role}</Text>
              <Text style={styles.col2}>{r.trainingType}</Text>
              <Text style={styles.col3}>{r.lastCompleted}</Text>
              <Text style={styles.col2}>{r.nextDue}</Text>
              <Text style={styles.col2}>{r.status}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* SPCC Plan Summary */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>SPCC Plan Summary</Text>

        <View style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Plan Version</Text>
            <Text style={styles.summaryValue}>{spccPlan.version}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Classification</Text>
            <Text style={styles.summaryValue}>{spccPlan.classification}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Self-Certified By</Text>
            <Text style={styles.summaryValue}>{spccPlan.certifiedBy}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Last 5-Year Review</Text>
            <Text style={styles.summaryValue}>{spccPlan.last5YearReview}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Next Review Due</Text>
            <Text style={styles.summaryValue}>{spccPlan.nextReviewDue}</Text>
          </View>
        </View>

        <Text style={styles.subsectionTitle}>Amendment History</Text>
        {spccPlan.amendments.map((a) => (
          <View key={a.version} style={styles.amendmentItem}>
            <Text style={styles.amendmentVersion}>{a.version}</Text>
            <View style={styles.amendmentContent}>
              <Text style={styles.amendmentDesc}>{a.description}</Text>
              <Text style={styles.amendmentDate}>{a.date}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>

      {/* Audit Readiness Statement */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Audit Readiness Statement</Text>

        <View style={styles.statement}>
          This audit pack was compiled from current facility records in the ContainPoint compliance management system. It reflects the operational state as of {generatedDate} and is intended to support inspector review and audit preparation. All inspection records, corrective actions, training acknowledgments, and plan amendments are maintained in the system of record. One open corrective action (CA-014) is in progress; closure documentation will be appended upon verification.
        </View>

        <View style={[styles.coverStatus, { marginTop: 32 }]}>
          <Text style={styles.coverStatusText}>Ready for Inspector Review</Text>
        </View>

        <Text style={styles.footer}>ContainPoint Audit Pack · {facility.name} · {generatedDate}</Text>
      </Page>
    </Document>
  );
}

export async function generateAuditPackPdf(): Promise<Blob> {
  return pdf(<AuditPackDocument />).toBlob();
}

export function downloadAuditPackPdf(): Promise<void> {
  return generateAuditPackPdf().then((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ContainPoint-AuditPack-${facility.name.replace(/\s+/g, "-")}-${new Date().toISOString().slice(0, 10)}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  });
}
