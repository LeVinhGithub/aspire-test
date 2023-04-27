
import { BeforeInsert, BeforeUpdate, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import * as bcrypt from "bcryptjs";
import { StorageFile } from "entities/storage_files";
import { Location } from "entities/locations";
import { IncomeRange } from "entities/income_ranges";
import { ManagementExperience } from "entities/management_experiences";
import { ApplicantIndustry } from "entities/applicant_industries";
import { ApplicantSchool } from "entities/applicant_schools";
import { ApplicantLanguage } from "entities/applicant_languages";
import { Message } from "entities/messages";
import { JobApplication } from "entities/job_applications";
import { JobExperience } from "entities/job_experiences";
import { Skill } from "entities/skills";
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { Restriction } from "entities/restrictions";
import { RecruitmentNote } from "entities/recruitment_notes";
import { TargetListApplicant } from "entities/target_list_applicants";

enum AvailabilityEnum {
    IMMEDIATE = "immediate",
    WITHIN_3_MONTHS = "within_3_months",
    WITHIN_6_MONTHS = "within_6_months",
    WITHIN_1_YEAR = "within_1_year",
    IF_I_FIND_A_GOOD_COMPANY = "if_I_find_a_good_company",
    NOT_THINKING_ABOUT_IT_NOW = "not_thinking_about_it_now"
}

enum GenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

enum ManagementExperienceYearEnum {
    YEARS_0 = "years_0",
    YEARS_1 = "years_1",
    YEARS_2 = "years_2",
    YEARS_3 = "years_3",
    YEARS_4 = "years_4",
    YEARS_5 = "years_5",
    YEARS_6 = "years_6",
    YEARS_7 = "years_7",
    YEARS_8 = "years_8",
    YEARS_9 = "years_9",
    YEARS_10 = "years_10",
    YEARS_10_MORE = "years_10_more"
}

@Entity('applicants')
export class Applicant  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: true, type: "varchar", default: ""})
    full_name:string  = ""
  
    @Column({ nullable: true, type: "varchar", default: ""})
    furigana:string  = ""
  
    @Column({ nullable: true, type: "varchar", default: ""})
    phone_number:string  = ""
  
    @Column({ nullable: true, type: "date"})
    birthdate:Date 
  
    @Column({ nullable: true, type: "integer"})
    location_id:number 
  
    @Column({ nullable: true, type: "varchar", default: ""})
    address:string  = ""
  
    @Column({ nullable: false, type: "integer"})
    income_range_id:number 
  
    @Column({ nullable: true, type: "enum", enum: ["immediate","within_3_months","within_6_months","within_1_year","if_I_find_a_good_company","not_thinking_about_it_now"], default: "immediate"})
    availability:`${AvailabilityEnum}`  = "immediate"
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    resume_file:StorageFile 
  
    @Column({ nullable: true, type: "varchar", default: ""})
    description:string  = ""
  
    @Column({ nullable: false, type: "integer"})
    management_experience_id:number 
  
    @Column({ nullable: false, type: "varchar", default: ""})
    encrypted_password:string  = ""
  
    @Column({ nullable: false, type: "varchar", unique: true})
    email:string 
  
    @Column({ nullable: true, type: "varchar", unique: true})
    reset_password_token:string 
  
    @Column({ nullable: true, type: "timestamp"})
    reset_password_sent_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
    remember_created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
    current_sign_in_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
    last_sign_in_at:Date 
  
    @Column({ nullable: true, type: "varchar"})
    current_sign_in_ip:string 
  
    @Column({ nullable: true, type: "varchar"})
    last_sign_in_ip:string 
  
    @Column({ nullable: false, type: "integer", default: 0})
    sign_in_count:number  = 0
  
    @Column({ nullable: true, type: "varchar"})
    password:string 
  
    @Column({ nullable: true, type: "varchar"})
    password_confirmation:string 
  
    @Column({ nullable: true, type: "timestamp"})
    locked_at:Date 
  
    @Column({ nullable: false, type: "integer", default: 0})
    failed_attempts:number  = 0
  
    @Column({ nullable: true, type: "varchar", unique: true})
    unlock_token:string 
  
    @Column({ nullable: true, type: "enum", enum: ["male","female","other"], default: "male"})
    gender:`${GenderEnum}`  = "male"
  
    @Column({ nullable: true, type: "varchar", unique: true})
    confirmation_token:string 
  
    @Column({ nullable: true, type: "varchar", unique: true})
    unconfirmed_email:string 
  
    @Column({ nullable: true, type: "timestamp"})
    confirmed_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
    confirmation_sent_at:Date 
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_onboarded:boolean  = false
  
    @Column({ nullable: true, type: "varchar"})
    notes:string 
  
    @Column({ nullable: true, type: "varchar"})
    current_company_name:string 
  
    @Column({ nullable: true, type: "varchar"})
    current_company_department:string 
  
    @Column({ nullable: true, type: "varchar"})
    current_company_position:string 
  
    @Column({ nullable: true, type: "integer", default: 0})
    confirmation_email_resent_count:number  = 0
  
    @Column({ nullable: true, type: "integer"})
    number_of_companies:number 
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_suspended:boolean  = false
  
    @Column({ nullable: true, type: "text", default: ""})
    desired_info:string  = ""
  
    @Column({ nullable: true, type: "enum", enum: ["years_0","years_1","years_2","years_3","years_4","years_5","years_6","years_7","years_8","years_9","years_10","years_10_more"], default: "years_0"})
    management_experience_years:`${ManagementExperienceYearEnum}`  = "years_0"
  
    @ManyToOne(() => Location, (location) => location.applicants, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'location_id' } )
    location:Location 
  
    @ManyToOne(() => IncomeRange, (income_range) => income_range.applicants, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'income_range_id' } )
    income_range:IncomeRange 
  
    @ManyToOne(() => ManagementExperience, (management_experience) => management_experience.applicants, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'management_experience_id' } )
    management_experience:ManagementExperience 
  
    @OneToMany(() => ApplicantIndustry, (applicant_industry) => applicant_industry.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    applicant_industries:ApplicantIndustry[] 
  
    @OneToMany(() => ApplicantSchool, (applicant_school) => applicant_school.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    applicant_schools:ApplicantSchool[] 
  
    @OneToMany(() => ApplicantLanguage, (applicant_language) => applicant_language.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    applicant_languages:ApplicantLanguage[] 
  
    @OneToMany(() => Message, (message) => message.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    messages:Message[] 
  
    @OneToMany(() => JobApplication, (job_application) => job_application.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    job_applications:JobApplication[] 
  
    @OneToMany(() => JobExperience, (job_experience) => job_experience.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    job_experiences:JobExperience[] 
  
    @OneToMany(() => Skill, (skill) => skill.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    skills:Skill[] 
  
    @OneToMany(() => JobOpeningFavorite, (job_opening_favorite) => job_opening_favorite.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    job_opening_favorites:JobOpeningFavorite[] 
  
    @OneToMany(() => Restriction, (restriction) => restriction.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    restrictions:Restriction[] 
  
    @OneToMany(() => RecruitmentNote, (recruitment_note) => recruitment_note.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    recruitment_notes:RecruitmentNote[] 
  
    @OneToMany(() => TargetListApplicant, (target_list_applicant) => target_list_applicant.applicant, { cascade: true })
@JoinColumn( { name: 'applicant_id' } )
    target_list_applicants:TargetListApplicant[] 
    
  @BeforeInsert()  
  @BeforeUpdate()
  encryptPassword() {    
    if (this.password) {
      this.encrypted_password = bcrypt.hashSync(this.password, 10);
      this.password = null
      this.password_confirmation = null
    }
  }
  }

export { AvailabilityEnum, GenderEnum, ManagementExperienceYearEnum }
