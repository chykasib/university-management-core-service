export type IAcademicSemesterFilterRequest = {
  searchTerm?: string;
};

export type IAcademicSemesterCreatedEvent = {
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
  id: string;
};
