
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { JobTitle } from "entities/job_titles";

@Entity('job_groups')
export class JobGroup  {
  
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
  
    @OneToMany(() => JobTitle, (job_title) => job_title.job_group, { cascade: true })
@JoinColumn( { name: 'job_group_id' } )
    job_titles:JobTitle[] 
    }
