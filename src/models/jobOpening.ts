

export enum StatusEnum {
    AVAILABLE = "available",
    EXPIRED = "expired"
}

export type JobOpeningModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      department: string;
      position: string;
      occupation_type_id: number;
      location_id: number;
      income_range_id: number;
      job_description: string;
      is_remote_available: boolean;
      employment_status_id: number;
      company_id: number;
      trial_period: string;
      working_hours: string;
      avg_overtime_hours: string;
      trial_period_conditions: string;
      workplace: string;
      qualification: string;
      benefits: string;
      vacation: string;
      bonus: string;
      promotion: string;
      appeal_point: string;
      passive_smoking_countermeasure_id: number;
      career_direction_id: number;
      job_title_id: number;
      future_career_path: string;
      trending_keywords: string;
      business_trip_availability: boolean;
      transfers: boolean;
      publication_start_date: Date;
      publication_end_date: Date;
      slug: string;
      image: any;
      is_recommended: boolean;
      status: `${StatusEnum}`;
      pv: number;
  
}