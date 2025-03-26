export const endpoints = {
  debtors: "monitoring/patients/debtor/",
  all: "monitoring/patients/all/",
  treated: "/monitoring/patients/treated/",
  treatment: "/monitoring/patients/under-treatment/",
  statistic: "/monitoring/patients/statistics/",
  patientByid: (id) => `/monitoring/patients/${id}/`,
};
