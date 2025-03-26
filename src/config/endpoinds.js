export const endpoints = {
  all: "monitoring/patients/all/",
  debtors: "monitoring/patients/debtor/",
  treated: "/monitoring/patients/treated/",
  treatment: "/monitoring/patients/under-treatment/",
  statistic: "/monitoring/patients/statistics/",
  patientByid: (id) => `/monitoring/patients/${id}/`,
};
