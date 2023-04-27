
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { JobGroup } from "entities/job_groups";
import { JobOpening } from "entities/job_openings";
import { JobExperience } from "entities/job_experiences";

@Entity('job_titles')
export class JobTitle  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar"})
    name:string 
  
    @Column({ nullable: false, type: "integer"})
    job_group_id:number 
  
    @ManyToOne(() => JobGroup, (job_group) => job_group.job_titles, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_group_id' } )
    job_group:JobGroup 
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.job_title, { cascade: true })
@JoinColumn( { name: 'job_title_id' } )
    job_openings:JobOpening[] 
  
    @OneToMany(() => JobExperience, (job_experience) => job_experience.job_title, { cascade: true })
@JoinColumn( { name: 'job_title_id' } )
    job_experiences:JobExperience[] 
    }
