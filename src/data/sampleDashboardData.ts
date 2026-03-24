export const facility = {
  name: "San Jose Logistics Yard",
  company: "WestPeak Transport",
  consultantOrg: "Havers Environmental",
  facilityType: "Regional trucking depot",
  spccTier: "Tier II Qualified Facility",
  lastPlanReview: "Sep 14, 2025",
  nextReviewDue: "Sep 14, 2030",
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
  nextCriticalDeadline: "Mar 25",
  nextCriticalItem: "AST-02 Fuel Storage Tank visual inspection",
};

export const evidenceReadiness = {
  inspectionRecordsComplete: 96,
  signatureCoverage: 100,
  photoEvidenceCoverage: 88,
  trainingAcknowledgmentsCurrent: 75,
};

export const assets = [
  { id: "AST-01", name: "Diesel Tank A", type: "Aboveground Tank", capacity: "500 gal", oilType: "Diesel", containment: "Berm A", lastInspection: "Mar 15", status: "Compliant", zone: "North Yard", material: "Steel", installDate: "2018", evidenceComplete: 100 },
  { id: "AST-02", name: "Fuel Storage Tank", type: "Aboveground Tank", capacity: "1,200 gal", oilType: "Diesel", containment: "Berm B", lastInspection: "Mar 10", status: "Due Soon", zone: "North Yard", material: "Steel", installDate: "2016", evidenceComplete: 85 },
  { id: "GEN-01", name: "Generator Tank", type: "Generator Day Tank", capacity: "275 gal", oilType: "Diesel", containment: "Integrated", lastInspection: "Mar 18", status: "Compliant", zone: "Generator Pad", material: "Steel", installDate: "2020", evidenceComplete: 100 },
  { id: "HYD-01", name: "Hydraulic Reservoir", type: "Reservoir", capacity: "180 gal", oilType: "Hydraulic Oil", containment: "Contained", lastInspection: "Mar 22", status: "Compliant", zone: "Maintenance Bay", material: "Steel", installDate: "2019", evidenceComplete: 100 },
  { id: "DRM-03", name: "Bulk Oil Drum Area", type: "Drum Storage", capacity: "330 gal", oilType: "Lubricant", containment: "Spill Pallet", lastInspection: "Mar 20", status: "Review", zone: "Maintenance Bay", material: "N/A", installDate: "N/A", evidenceComplete: 90 },
  { id: "TRF-01", name: "Loading Transfer Area", type: "Transfer Area", capacity: "N/A", oilType: "Mixed", containment: "Trench + Sump", lastInspection: "Mar 09", status: "Monitoring", zone: "Transfer Lane", material: "N/A", installDate: "N/A", evidenceComplete: 95 },
];

export const assetDetails: Record<string, { containmentNotes: string; nextInspection: string; inspector: string; linkedActions?: string[]; overfillProtection?: string; nextTestRequirement?: string }> = {
  "AST-01": { containmentNotes: "Berm A in good condition. Annual integrity check due Q4. Overfill protection verified.", nextInspection: "Apr 15", inspector: "A. Ramirez", linkedActions: [], overfillProtection: "High-level alarm", nextTestRequirement: "Annual leak test" },
  "AST-02": { containmentNotes: "Minor crack noted at Berm B. CA-014 logged. Containment condition requires repair.", nextInspection: "Mar 25", inspector: "J. Patel", linkedActions: ["CA-014"], overfillProtection: "Float switch", nextTestRequirement: "Integrity check post-repair" },
  "GEN-01": { containmentNotes: "Integrated containment. No issues. Overfill protection operational.", nextInspection: "Mar 25", inspector: "M. Chen", linkedActions: [], overfillProtection: "Integrated", nextTestRequirement: "Quarterly visual" },
  "HYD-01": { containmentNotes: "Contained reservoir. Weekly visual. Secondary containment adequate.", nextInspection: "Apr 22", inspector: "A. Ramirez", linkedActions: [], overfillProtection: "N/A", nextTestRequirement: "Monthly visual" },
  "DRM-03": { containmentNotes: "Spill pallet capacity adequate. Labeling verified. Transfer area checks current.", nextInspection: "Apr 20", inspector: "J. Patel", linkedActions: [], overfillProtection: "N/A", nextTestRequirement: "Monthly area check" },
  "TRF-01": { containmentNotes: "Trench and sump operational. Transfer hose signage updated Mar 4. Overfill protection at loading rack verified.", nextInspection: "Apr 09", inspector: "A. Ramirez", linkedActions: [], overfillProtection: "Loading arm cutoff", nextTestRequirement: "Monthly transfer area check" },
};

export const inspections = [
  { id: "INSP-2381", asset: "AST-01 Diesel Tank A", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "A. Ramirez", date: "Mar 15", result: "Pass", verified: "Verified" },
  { id: "INSP-2386", asset: "GEN-01 Generator Tank", procedure: "Weekly Check", frequency: "Weekly", completedBy: "M. Chen", date: "Mar 18", result: "Pass", verified: "Verified" },
  { id: "INSP-2392", asset: "HYD-01 Hydraulic Reservoir", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "A. Ramirez", date: "Mar 22", result: "Pass", verified: "Verified" },
  { id: "INSP-2394", asset: "TRF-01 Loading Transfer Area", procedure: "Transfer Area Check", frequency: "Monthly", completedBy: "J. Patel", date: "Mar 23", result: "Attention", verified: "Pending Review" },
  { id: "INSP-2389", asset: "AST-02 Fuel Storage Tank", procedure: "Monthly Visual", frequency: "Monthly", completedBy: "J. Patel", date: "Mar 21", result: "Fail", verified: "Verified", linkedAction: "CA-014" },
];

export const upcomingInspections = [
  { date: "Mar 25", asset: "AST-02 Fuel Storage Tank" },
  { date: "Mar 27", asset: "Containment Berm B" },
  { date: "Apr 02", asset: "Annual briefing checklist" },
];

export const correctiveActions = [
  { id: "CA-014", title: "Secondary containment crack at Berm B", severity: "Medium", linkedAsset: "AST-02", owner: "J. Patel", dueDate: "Mar 26", status: "In Progress", evidence: "1 photo uploaded", createdDate: "Mar 21", sourceInspection: "INSP-2389", daysRemaining: 3, verificationPending: true },
  { id: "CA-012", title: "Missing drum label replaced", severity: "Low", linkedAsset: "DRM-03", owner: "M. Chen", dueDate: "Mar 08", status: "Closed", evidence: "Verified", createdDate: "Mar 06", sourceInspection: "INSP-2375", verificationPending: false },
  { id: "CA-011", title: "Transfer hose signage updated", severity: "Low", linkedAsset: "TRF-01", owner: "A. Ramirez", dueDate: "Mar 04", status: "Closed", evidence: "Verified", createdDate: "Mar 02", sourceInspection: "INSP-2368", verificationPending: false },
];

export const ca014Timeline = [
  { date: "Mar 21", event: "Issue logged during Berm B inspection" },
  { date: "Mar 22", event: "Assigned to J. Patel" },
  { date: "Mar 23", event: "Repair scheduled" },
  { date: "Mar 24", event: "Photo evidence uploaded" },
  { date: "Mar 25", event: "Awaiting supervisor verification" },
];

export const trainingRecords = [
  { employee: "J. Patel", role: "Yard Supervisor", trainingType: "Annual SPCC Briefing", lastCompleted: "Apr 03, 2025", nextDue: "Apr 02, 2026", status: "Due Soon" },
  { employee: "A. Ramirez", role: "Maintenance Tech", trainingType: "Oil Handling Procedures", lastCompleted: "Jan 12, 2026", nextDue: "Jan 12, 2027", status: "Current" },
  { employee: "M. Chen", role: "Operations Lead", trainingType: "Discharge Response", lastCompleted: "Feb 06, 2026", nextDue: "Feb 06, 2027", status: "Current" },
  { employee: "R. Singh", role: "Inspector", trainingType: "Inspection Procedures", lastCompleted: "Nov 15, 2025", nextDue: "Nov 15, 2026", status: "Current" },
];

export const spccPlan = {
  version: "v3.2",
  classification: "Tier II Qualified Facility",
  certifiedBy: "D. Alvarez",
  lastAmendment: "Oct 02, 2025",
  last5YearReview: "Sep 14, 2025",
  nextReviewDue: "Sep 14, 2030",
  amendments: [
    { version: "v3.2", description: "Added Generator Tank containment notes", date: "Oct 02, 2025" },
    { version: "v3.1", description: "Updated AST-02 capacity and transfer-area procedure", date: "Jun 18, 2025" },
    { version: "v3.0", description: "Five-year review completed", date: "Sep 14, 2025" },
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
  { name: "San Jose Logistics Yard", status: "Audit-ready", openActions: 1, inspectionsDue: 2, trainingDue: 1, evidenceComplete: 92, nextDue: "Mar 25" },
  { name: "Fresno Fleet Depot", status: "Review needed", openActions: 3, inspectionsDue: 4, trainingDue: 0, evidenceComplete: 78, nextDue: "Mar 24" },
  { name: "Stockton Equipment Yard", status: "Audit-ready", openActions: 0, inspectionsDue: 1, trainingDue: 0, evidenceComplete: 98, nextDue: "Mar 29" },
  { name: "Salinas Cold Storage", status: "Training due", openActions: 0, inspectionsDue: 2, trainingDue: 2, evidenceComplete: 88, nextDue: "Apr 02" },
];

export const consultantSummary = {
  org: "Havers Environmental",
  sitesManaged: 8,
  sitesWithOpenActions: 3,
  sitesWithInspectionsDueThisWeek: 4,
  sitesAuditReady: 6,
};

export const recentActivity = [
  { date: "Mar 22", time: "14:32", event: "Hydraulic reservoir monthly inspection completed by A. Ramirez", type: "inspection" },
  { date: "Mar 21", time: "09:15", event: "Secondary containment crack logged as corrective action CA-014", type: "action" },
  { date: "Mar 20", time: "16:45", event: "Training acknowledgment uploaded for J. Patel", type: "training" },
  { date: "Mar 18", time: "11:02", event: "Generator tank weekly inspection signed by supervisor", type: "inspection" },
  { date: "Mar 17", time: "10:30", event: "SPCC plan amendment v3.2 reviewed", type: "plan" },
  { date: "Mar 15", time: "08:22", event: "Diesel Tank A monthly visual inspection passed", type: "inspection" },
  { date: "Mar 14", time: "15:10", event: "CA-012 closed — drum label replaced", type: "action" },
  { date: "Mar 12", time: "13:00", event: "Quarterly containment integrity check completed", type: "inspection" },
];

export const upcomingDeadlines = [
  { date: "Mar 25", item: "Aboveground storage visual inspection due" },
  { date: "Mar 27", item: "Secondary containment check due" },
  { date: "Apr 02", item: "Annual briefing due" },
  { date: "Apr 04", item: "Contractor record upload due" },
];

export const inspectionTrendData = [
  { month: "Oct", scheduled: 14, completed: 13 },
  { month: "Nov", scheduled: 14, completed: 14 },
  { month: "Dec", scheduled: 14, completed: 12 },
  { month: "Jan", scheduled: 14, completed: 14 },
  { month: "Feb", scheduled: 14, completed: 13 },
  { month: "Mar", scheduled: 14, completed: 12 },
];

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
