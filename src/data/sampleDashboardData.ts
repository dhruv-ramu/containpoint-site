import {
  fmtShort,
  fmtShortWithYear,
  daysAgo,
  daysFromNow,
  monthsAgo,
  monthsFromNow,
  last6MonthsTrend,
} from "@/lib/dateHelpers";

// ─── Dates relative to today (computed once at module load) ───
const d = (n: number) => (n >= 0 ? daysFromNow(n) : daysAgo(-n));

export const facility = {
  name: "San Jose Logistics Yard",
  company: "WestPeak Transport",
  consultantOrg: "Havers Environmental",
  facilityType: "Regional trucking depot",
  spccTier: "Tier II Qualified Facility",
  lastPlanReview: fmtShortWithYear(monthsAgo(6)),
  nextReviewDue: fmtShortWithYear(monthsFromNow(54)),
  auditReadiness: "Audit-ready",
  totalAssets: 12,
  openCorrectiveActions: 1,
  inspectionsDueNext14Days: 2,
  trainingRenewalsDue30Days: 1,
  lastUpdated: "12 min ago",
  complianceScore: 92,
  assetsInGoodStanding: 11,
  inspectionsCompletedThisMonth: 12,
  inspectionsRequiredThisMonth: 14,
  nextCriticalDeadline: fmtShort(d(2)),
  nextCriticalItem: "AST-02 Fuel Storage Tank visual inspection",
};

export const evidenceReadiness = {
  inspectionRecordsComplete: 96,
  signatureCoverage: 100,
  photoEvidenceCoverage: 88,
  trainingAcknowledgmentsCurrent: 75,
};

export const assets = [
  { id: "AST-01", name: "Diesel Tank A", type: "Aboveground Tank", capacity: "500 gal", oilType: "Diesel", containment: "Berm A", lastInspection: fmtShort(d(-8)), status: "Compliant", zone: "North Yard", material: "Steel", installDate: "2018", evidenceComplete: 100 },
  { id: "AST-02", name: "Fuel Storage Tank", type: "Aboveground Tank", capacity: "1,200 gal", oilType: "Diesel", containment: "Berm B", lastInspection: fmtShort(d(-13)), status: "Due Soon", zone: "North Yard", material: "Steel", installDate: "2016", evidenceComplete: 85 },
  { id: "GEN-01", name: "Generator Tank", type: "Generator Day Tank", capacity: "275 gal", oilType: "Diesel", containment: "Integrated", lastInspection: fmtShort(d(-5)), status: "Compliant", zone: "Generator Pad", material: "Steel", installDate: "2020", evidenceComplete: 100 },
  { id: "HYD-01", name: "Hydraulic Reservoir", type: "Reservoir", capacity: "180 gal", oilType: "Hydraulic Oil", containment: "Contained", lastInspection: fmtShort(d(-1)), status: "Compliant", zone: "Maintenance Bay", material: "Steel", installDate: "2019", evidenceComplete: 100 },
  { id: "DRM-03", name: "Bulk Oil Drum Area", type: "Drum Storage", capacity: "330 gal", oilType: "Lubricant", containment: "Spill Pallet", lastInspection: fmtShort(d(-3)), status: "Review", zone: "Maintenance Bay", material: "N/A", installDate: "N/A", evidenceComplete: 90 },
  { id: "TRF-01", name: "Loading Transfer Area", type: "Transfer Area", capacity: "N/A", oilType: "Mixed", containment: "Trench + Sump", lastInspection: fmtShort(d(-14)), status: "Monitoring", zone: "Transfer Lane", material: "N/A", installDate: "N/A", evidenceComplete: 95 },
];

const today = new Date();
const dueIn3 = daysFromNow(3);
const dueIn3Fmt = fmtShort(dueIn3);
const created2Ago = fmtShort(d(-2));

export const assetDetails: Record<string, { containmentNotes: string; nextInspection: string; inspector: string; linkedActions?: string[]; overfillProtection?: string; nextTestRequirement?: string }> = {
  "AST-01": { containmentNotes: "Berm A in good condition. Annual integrity check due Q4. Overfill protection verified.", nextInspection: fmtShort(d(23)), inspector: "A. Ramirez", linkedActions: [], overfillProtection: "High-level alarm", nextTestRequirement: "Annual leak test" },
  "AST-02": { containmentNotes: "Minor crack noted at Berm B. CA-014 logged. Containment condition requires repair.", nextInspection: fmtShort(d(2)), inspector: "J. Patel", linkedActions: ["CA-014"], overfillProtection: "Float switch", nextTestRequirement: "Integrity check post-repair" },
  "GEN-01": { containmentNotes: "Integrated containment. No issues. Overfill protection operational.", nextInspection: fmtShort(d(2)), inspector: "M. Chen", linkedActions: [], overfillProtection: "Integrated", nextTestRequirement: "Quarterly visual" },
  "HYD-01": { containmentNotes: "Contained reservoir. Weekly visual. Secondary containment adequate.", nextInspection: fmtShort(d(30)), inspector: "A. Ramirez", linkedActions: [], overfillProtection: "N/A", nextTestRequirement: "Monthly visual" },
  "DRM-03": { containmentNotes: "Spill pallet capacity adequate. Labeling verified. Transfer area checks current.", nextInspection: fmtShort(d(28)), inspector: "J. Patel", linkedActions: [], overfillProtection: "N/A", nextTestRequirement: "Monthly area check" },
  "TRF-01": { containmentNotes: `Trench and sump operational. Transfer hose signage updated ${fmtShort(d(-19))}. Overfill protection at loading rack verified.`, nextInspection: fmtShort(d(17)), inspector: "A. Ramirez", linkedActions: [], overfillProtection: "Loading arm cutoff", nextTestRequirement: "Monthly transfer area check" },
};

export const inspections = [
  { id: "INSP-2381", asset: "AST-01 Diesel Tank A", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "A. Ramirez", date: fmtShort(d(-8)), result: "Pass", verified: "Verified" },
  { id: "INSP-2386", asset: "GEN-01 Generator Tank", procedure: "Weekly Check", frequency: "Weekly", completedBy: "M. Chen", date: fmtShort(d(-5)), result: "Pass", verified: "Verified" },
  { id: "INSP-2392", asset: "HYD-01 Hydraulic Reservoir", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "A. Ramirez", date: fmtShort(d(-1)), result: "Pass", verified: "Verified" },
  { id: "INSP-2394", asset: "TRF-01 Loading Transfer Area", procedure: "Transfer Area Check", frequency: "Monthly", completedBy: "J. Patel", date: fmtShort(d(0)), result: "Attention", verified: "Pending Review" },
  { id: "INSP-2389", asset: "AST-02 Fuel Storage Tank", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "J. Patel", date: fmtShort(d(-2)), result: "Fail", verified: "Verified", linkedAction: "CA-014" },
];

export const upcomingInspections = [
  { date: fmtShort(d(2)), asset: "AST-02 Fuel Storage Tank" },
  { date: fmtShort(d(4)), asset: "Containment Berm B" },
  { date: fmtShort(d(10)), asset: "Annual briefing checklist" },
];

const ca014DueDate = dueIn3Fmt;
const ca014DaysRemaining = Math.max(0, Math.ceil((dueIn3.getTime() - today.getTime()) / 86400000));

export const correctiveActions = [
  { id: "CA-014", title: "Secondary containment crack at Berm B", severity: "Medium", linkedAsset: "AST-02", owner: "J. Patel", dueDate: ca014DueDate, status: "In Progress", evidence: "1 photo uploaded", createdDate: created2Ago, sourceInspection: "INSP-2389", daysRemaining: ca014DaysRemaining, verificationPending: true },
  { id: "CA-012", title: "Missing drum label replaced", severity: "Low", linkedAsset: "DRM-03", owner: "M. Chen", dueDate: fmtShort(d(-15)), status: "Closed", evidence: "Verified", createdDate: fmtShort(d(-17)), sourceInspection: "INSP-2375", verificationPending: false },
  { id: "CA-011", title: "Transfer hose signage updated", severity: "Low", linkedAsset: "TRF-01", owner: "A. Ramirez", dueDate: fmtShort(d(-19)), status: "Closed", evidence: "Verified", createdDate: fmtShort(d(-21)), sourceInspection: "INSP-2368", verificationPending: false },
];

export const ca014Timeline = [
  { date: fmtShort(d(-2)), event: "Issue logged during Berm B inspection" },
  { date: fmtShort(d(-1)), event: "Assigned to J. Patel" },
  { date: fmtShort(d(0)), event: "Repair scheduled" },
  { date: fmtShort(d(1)), event: "Photo evidence uploaded" },
  { date: fmtShort(d(2)), event: "Awaiting supervisor verification" },
];

export const trainingRecords = [
  { employee: "J. Patel", role: "Yard Supervisor", trainingType: "Annual SPCC Briefing", lastCompleted: fmtShortWithYear(monthsAgo(11)), nextDue: fmtShortWithYear(monthsFromNow(1)), status: "Due Soon" },
  { employee: "A. Ramirez", role: "Maintenance Tech", trainingType: "Oil Handling Procedures", lastCompleted: fmtShortWithYear(monthsAgo(2)), nextDue: fmtShortWithYear(monthsFromNow(10)), status: "Current" },
  { employee: "M. Chen", role: "Operations Lead", trainingType: "Discharge Response", lastCompleted: fmtShortWithYear(monthsAgo(1)), nextDue: fmtShortWithYear(monthsFromNow(11)), status: "Current" },
  { employee: "R. Singh", role: "Inspector", trainingType: "Inspection Procedures", lastCompleted: fmtShortWithYear(monthsAgo(4)), nextDue: fmtShortWithYear(monthsFromNow(8)), status: "Current" },
];

const lastReview = monthsAgo(6);
const next5Yr = new Date(lastReview);
next5Yr.setFullYear(next5Yr.getFullYear() + 5);

export const spccPlan = {
  version: "v3.2",
  classification: "Tier II Qualified Facility",
  certifiedBy: "D. Alvarez",
  lastAmendment: fmtShortWithYear(monthsAgo(5)),
  last5YearReview: fmtShortWithYear(monthsAgo(6)),
  nextReviewDue: fmtShortWithYear(next5Yr),
  amendments: [
    { version: "v3.2", description: "Added Generator Tank containment notes", date: fmtShortWithYear(monthsAgo(5)) },
    { version: "v3.1", description: "Updated AST-02 capacity and transfer-area procedure", date: fmtShortWithYear(monthsAgo(9)) },
    { version: "v3.0", description: "Five-year review completed", date: fmtShortWithYear(monthsAgo(6)) },
  ],
};

export const auditPackSections = [
  "Facility SPCC Plan Summary",
  "Asset Inventory",
  "Inspection Logs (last 12 months)",
  "Corrective Action Records",
  "Training Acknowledgments",
  "Plan Amendment History",
  "Signatures / Verification",
];

export const consultantSites = [
  { name: "San Jose Logistics Yard", status: "Audit-ready", openActions: 1, inspectionsDue: 2, trainingDue: 1, evidenceComplete: 92, nextDue: fmtShort(d(2)) },
  { name: "Fresno Fleet Depot", status: "Review needed", openActions: 3, inspectionsDue: 4, trainingDue: 0, evidenceComplete: 78, nextDue: fmtShort(d(1)) },
  { name: "Stockton Equipment Yard", status: "Audit-ready", openActions: 0, inspectionsDue: 1, trainingDue: 0, evidenceComplete: 98, nextDue: fmtShort(d(6)) },
  { name: "Salinas Cold Storage", status: "Training due", openActions: 0, inspectionsDue: 2, trainingDue: 2, evidenceComplete: 88, nextDue: fmtShort(d(10)) },
];

export const consultantSummary = {
  org: "Havers Environmental",
  sitesManaged: 8,
  sitesWithOpenActions: 3,
  sitesWithInspectionsDueThisWeek: 4,
  sitesAuditReady: 6,
};

export const recentActivity = [
  { date: fmtShort(d(-1)), time: "14:32", event: "Hydraulic reservoir monthly inspection completed by A. Ramirez", type: "inspection" },
  { date: fmtShort(d(-2)), time: "09:15", event: "Secondary containment crack logged as corrective action CA-014", type: "action" },
  { date: fmtShort(d(-3)), time: "16:45", event: "Training acknowledgment uploaded for J. Patel", type: "training" },
  { date: fmtShort(d(-5)), time: "11:02", event: "Generator tank weekly inspection signed by supervisor", type: "inspection" },
  { date: fmtShort(d(-6)), time: "10:30", event: "SPCC plan amendment v3.2 reviewed", type: "plan" },
  { date: fmtShort(d(-8)), time: "08:22", event: "Diesel Tank A monthly visual inspection passed", type: "inspection" },
  { date: fmtShort(d(-9)), time: "15:10", event: "CA-012 closed — drum label replaced", type: "action" },
  { date: fmtShort(d(-11)), time: "13:00", event: "Quarterly containment integrity check completed", type: "inspection" },
];

export const upcomingDeadlines = [
  { date: fmtShort(d(2)), item: "Aboveground storage visual inspection due" },
  { date: fmtShort(d(4)), item: "Secondary containment check due" },
  { date: fmtShort(d(10)), item: "Annual briefing due" },
  { date: fmtShort(d(12)), item: "Contractor record upload due" },
];

export const inspectionTrendData = last6MonthsTrend();

export const findingsByAreaData = [
  { area: "Secondary Containment", count: 1 },
  { area: "AST Integrity", count: 0 },
  { area: "Transfer Areas", count: 0 },
  { area: "Training", count: 0 },
  { area: "Documentation", count: 0 },
];

export const assetStatusData = [
  { name: "Compliant", value: 8 },
  { name: "Due Soon", value: 1 },
  { name: "Needs Review", value: 1 },
  { name: "Issue Open", value: 2 },
];
