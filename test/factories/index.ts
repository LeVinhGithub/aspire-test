
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';


export function companyUserFactory(rest = {}) {
  return {
                            company_id: faker.datatype.number({}),
              full_name: faker.datatype.string(255),
              position: faker.datatype.string(255),
                          email: faker.internet.email(),
                                                                                            role: sample(["admin","standard"]),
              phone_number: faker.datatype.string(255),
                                  ...rest,
  };
}
export function applicantFactory(rest = {}) {
  return {
                            full_name: faker.datatype.string(255),
              furigana: faker.datatype.string(255),
              phone_number: faker.datatype.string(255),
                    location_id: faker.datatype.number({}),
              address: faker.datatype.string(255),
              income_range_id: faker.datatype.number({}),
              availability: sample(["immediate","within_3_months","within_6_months","within_1_year","if_I_find_a_good_company","not_thinking_about_it_now"]),
                    description: faker.datatype.string(255),
              management_experience_id: faker.datatype.number({}),
                    email: faker.internet.email(),
                                                                                            gender: sample(["male","female","other"]),
                                      is_onboarded: sample([true, false]),
              notes: faker.datatype.string(255),
              current_company_name: faker.datatype.string(255),
              current_company_department: faker.datatype.string(255),
              current_company_position: faker.datatype.string(255),
              confirmation_email_resent_count: faker.datatype.number({"min":0,"max":3}),
              number_of_companies: faker.datatype.number({"min":0,"max":99}),
              is_suspended: sample([true, false]),
              desired_info: faker.datatype.string(255),
              management_experience_years: sample(["years_0","years_1","years_2","years_3","years_4","years_5","years_6","years_7","years_8","years_9","years_10","years_10_more"]),
          ...rest,
  };
}
export function companyFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
                    location: faker.datatype.string(255),
              launched_year: faker.datatype.string(255),
              business_details: faker.datatype.string(255),
              number_of_employees: faker.datatype.number({"min":1,"max":2147483646}),
              industry_id: faker.datatype.number({}),
              mission: faker.datatype.string(255),
              vision: faker.datatype.string(255),
              value: faker.datatype.string(255),
                    representative_profile: faker.datatype.string(255),
              listing_classification: sample(["first_section_tokyo_stock","second_section_tokyo_stock","jasdaq_standart","jasdaq_growth","mothers","unlisted"]),
              representative_name: faker.datatype.string(255),
              slug: faker.datatype.string(255),
                    capital: faker.datatype.string(255),
              ipo: sample([true, false]),
              business_id: faker.datatype.string(255),
              name_furigana: faker.datatype.string(255),
          ...rest,
  };
}
export function languageFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function applicantLanguageFactory(rest = {}) {
  return {
                            proficiency: sample(["Basic","Intermediate","Advanced","Native"]),
              language_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
              other_language: faker.datatype.string(255),
          ...rest,
  };
}
export function jobGroupFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function jobTitleFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
              job_group_id: faker.datatype.number({}),
          ...rest,
  };
}
export function locationFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
              is_prefecture: sample([true, false]),
          ...rest,
  };
}
export function incomeRangeFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function jobOpeningFactory(rest = {}) {
  return {
                            department: faker.datatype.string(255),
              position: faker.datatype.string(255),
              occupation_type_id: faker.datatype.number({}),
              location_id: faker.datatype.number({}),
              income_range_id: faker.datatype.number({}),
              job_description: faker.datatype.string(255),
              is_remote_available: sample([true, false]),
              employment_status_id: faker.datatype.number({}),
              company_id: faker.datatype.number({}),
              trial_period: faker.datatype.string(255),
              working_hours: faker.datatype.string(255),
              avg_overtime_hours: faker.datatype.string(255),
              trial_period_conditions: faker.datatype.string(255),
              workplace: faker.datatype.string(255),
              qualification: faker.datatype.string(255),
              benefits: faker.datatype.string(255),
              vacation: faker.datatype.string(255),
              bonus: faker.datatype.string(255),
              promotion: faker.datatype.string(255),
              appeal_point: faker.datatype.string(255),
              passive_smoking_countermeasure_id: faker.datatype.number({}),
              career_direction_id: faker.datatype.number({}),
              job_title_id: faker.datatype.number({}),
              future_career_path: faker.datatype.string(255),
              trending_keywords: faker.datatype.string(255),
              business_trip_availability: sample([true, false]),
              transfers: sample([true, false]),
                          slug: faker.datatype.string(255),
                    is_recommended: sample([true, false]),
              status: sample(["available","expired"]),
              pv: faker.datatype.number({"min":-2147483647,"max":2147483646}),
          ...rest,
  };
}
export function applicantSchoolFactory(rest = {}) {
  return {
                                  name: faker.datatype.string(255),
              degree: faker.datatype.string(255),
              major: faker.datatype.string(255),
              school_type_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
          ...rest,
  };
}
export function industryFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
              industry_group_id: faker.datatype.number({}),
          ...rest,
  };
}
export function schoolTypeFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function managementExperienceFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function occupationTypeFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function employmentStatusFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function careerDirectionGroupFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function careerDirectionFactory(rest = {}) {
  return {
                            career_direction_group_id: faker.datatype.number({}),
              name: faker.datatype.string(255),
          ...rest,
  };
}
export function passiveSmokingCountermeasureFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function jobApplicationFactory(rest = {}) {
  return {
                            applicant_id: faker.datatype.number({}),
              job_opening_id: faker.datatype.number({}),
              status: sample(["interview_adjustment","primary_interview","secondary_interview","final_interview","unofficial_offer","joining_the_company","rejected","declined","not_entered"]),
              approached_by_scout: sample([true, false]),
              user_name_disclosed: sample([true, false]),
          ...rest,
  };
}
export function jobOpeningFavoriteFactory(rest = {}) {
  return {
                            job_opening_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
          ...rest,
  };
}
export function messageFactory(rest = {}) {
  return {
                            applicant_id: faker.datatype.number({}),
              text: faker.datatype.string(255),
                    reply_to_message_id: faker.datatype.number({"min":1,"max":2147483646}),
              company_id: faker.datatype.number({}),
              is_from_applicant: sample([true, false]),
              is_read: sample([true, false]),
          ...rest,
  };
}
export function applicantIndustryFactory(rest = {}) {
  return {
                            industry_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
          ...rest,
  };
}
export function jobOpeningValuedCompetencyFactory(rest = {}) {
  return {
                            job_opening_id: faker.datatype.number({}),
              valued_competency_id: faker.datatype.number({}),
          ...rest,
  };
}
export function valuedCompetencyFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function jobExperienceFactory(rest = {}) {
  return {
                            company_name: faker.datatype.string(255),
                          applicant_id: faker.datatype.number({}),
              job_title_id: faker.datatype.number({}),
          ...rest,
  };
}
export function skillFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
              applicant_id: faker.datatype.number({}),
              skill_type: sample(["skill","qualification"]),
          ...rest,
  };
}
export function restrictionFactory(rest = {}) {
  return {
                            company_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
              reason: sample(["Other","HarrasingVandalism","SelectionUnmatched"]),
          ...rest,
  };
}
export function companyEmployeeFactory(rest = {}) {
  return {
                            company_id: faker.datatype.number({}),
              full_name: faker.datatype.string(255),
              profile: faker.datatype.string(255),
                    is_high_rank_employee: sample([true, false]),
          ...rest,
  };
}
export function recruitmentNoteFactory(rest = {}) {
  return {
                            applicant_id: faker.datatype.number({}),
              company_id: faker.datatype.number({}),
              note: faker.datatype.string(255),
          ...rest,
  };
}
export function industryGroupFactory(rest = {}) {
  return {
                            name: faker.datatype.string(255),
          ...rest,
  };
}
export function scoutTemplateFactory(rest = {}) {
  return {
                            title: faker.datatype.string(255),
              template_text: faker.datatype.string(255),
              company_id: faker.datatype.number({}),
          ...rest,
  };
}
export function targetListFactory(rest = {}) {
  return {
                            title: faker.datatype.string(255),
              company_id: faker.datatype.number({}),
          ...rest,
  };
}
export function targetListApplicantFactory(rest = {}) {
  return {
                            target_list_id: faker.datatype.number({}),
              applicant_id: faker.datatype.number({}),
          ...rest,
  };
}
