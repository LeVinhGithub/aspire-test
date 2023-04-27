
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";

enum SkillTypeEnum {
    SKILL = "skill",
    QUALIFICATION = "qualification"
}

@Entity('skills')
export class Skill  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    name:string 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @Column({ nullable: true, type: "enum", enum: ["skill","qualification"], default: "skill"})
    skill_type:`${SkillTypeEnum}`  = "skill"
  
    @ManyToOne(() => Applicant, (applicant) => applicant.skills, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }

export { SkillTypeEnum }
