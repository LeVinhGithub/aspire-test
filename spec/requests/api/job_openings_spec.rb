require 'swagger_helper'

RSpec.describe 'JobOpening', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/job_openings/id' do
    delete 'Destroy job_openings' do
      tags 'job_openings'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {

          'job_opening' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'department' => 'STRING',

            'position' => 'STRING',

            'occupation_type_id' => 'INTEGER',

            'location_id' => 'INTEGER',

            'income_range_id' => 'INTEGER',

            'job_description' => 'TEXT',

            'is_remote_available' => 'BOOLEAN',

            'employment_status_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'trial_period' => 'STRING',

            'working_hours' => 'STRING',

            'avg_overtime_hours' => 'STRING',

            'trial_period_conditions' => 'TEXT',

            'workplace' => 'STRING',

            'qualification' => 'TEXT',

            'benefits' => 'TEXT',

            'vacation' => 'TEXT',

            'bonus' => 'TEXT',

            'promotion' => 'TEXT',

            'appeal_point' => 'TEXT',

            'passive_smoking_countermeasure_id' => 'INTEGER',

            'career_direction_id' => 'INTEGER',

            'job_title_id' => 'INTEGER',

            'future_career_path' => 'STRING',

            'trending_keywords' => 'STRING',

            'business_trip_availability' => 'BOOLEAN',

            'transfers' => 'BOOLEAN',

            'publication_start_date' => 'DATE',

            'publication_end_date' => 'DATE',

            'slug' => 'STRING',

            'image' => 'FILE',

            'is_recommended' => 'BOOLEAN',

            'status' => 'ENUM',

            'pv' => 'INTEGER',

            'job_title' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'name' => 'STRING'

            },

            'job_title' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'job_group_id' => 'INTEGER'

            }

          }

        }

        let(:resource) { create(:job_opening) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_openings/id' do
    put 'Update  job_openings' do
      tags 'job_openings'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_openings: {
            type: :object,
            properties: {

              department: {
                type: :string
              },

              position: {
                type: :string
              },

              occupation_type_id: {
                type: :integer
              },

              overseas_territory_id: {
                type: :integer
              },

              income_range_id: {
                type: :integer
              },

              job_description: {
                type: :text
              },

              is_remote_available: {
                type: :boolean
              },

              employment_status_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              trial_period: {
                type: :string
              },

              working_hours: {
                type: :string
              },

              avg_overtime_hours: {
                type: :string
              },

              trial_period_conditions: {
                type: :text
              },

              workplace: {
                type: :string
              },

              qualification: {
                type: :text
              },

              benefits: {
                type: :text
              },

              vacation: {
                type: :text
              },

              bonus: {
                type: :string
              },

              vacation: {
                type: :string
              },

              vacation: {
                type: :string
              },

              bonuses: {
                type: :text
              },

              promotion: {
                type: :text
              },

              appeal_point: {
                type: :string
              },

              passive_smoking_countermeasure_id: {
                type: :integer
              },

              career_direction_id: {
                type: :integer
              },

              job_title_id: {
                type: :integer
              },

              career_path: {
                type: :string
              },

              trending_keywords: {
                type: :string
              },

              business_trip_availability: {
                type: :boolean
              },

              transfers: {
                type: :boolean
              },

              publication_start_date: {
                type: :date
              },

              publication_end_date: {
                type: :date
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              status: {
                type: :enum
              },

              pv: {
                type: :integer
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'job_opening' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'deployment' => 'STRING',

            'position' => 'STRING',

            'occupation_type_id' => 'INTEGER',

            'location_id' => 'INTEGER',

            'income_range_id' => 'INTEGER',

            'job_description' => 'TEXT',

            'is_remote_available' => 'BOOLEAN',

            'employment_status_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'trial_period' => 'STRING',

            'working_hours' => 'STRING',

            'avg_overtime_hours' => 'STRING',

            'trial_period_conditions' => 'TEXT',

            'trial_period_conditions' => 'TEXT',

            'workplace' => 'STRING',

            'qualification' => 'TEXT',

            'benefits' => 'TEXT',

            'bonus' => 'TEXT',

            'vacation' => 'TEXT',

            'bonus' => 'TEXT',

            'promotion' => 'TEXT',

            'appeal_point' => 'TEXT',

            'passive_smoking_countermeasure_id' => 'INTEGER',

            'career_direction_id' => 'INTEGER',

            'job_title_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'vacation' => 'TEXT',

            'appeal_point' => 'TEXT',

            'job_opening_id' => 'INTEGER',

            'job_opening_valued_competencies' => 'ARRAY',

            'future_career_path' => 'STRING',

            'trending_keywords' => 'STRING',

            'business_trip_availability' => 'BOOLEAN',

            'transfers' => 'BOOLEAN',

            'publication_start_date' => 'DATE',

            'publication_end_date' => 'DATE',

            'slug' => 'STRING',

            'image' => 'FILE',

            'status' => 'ENUM',

            'pv' => 'INTEGER',

            'job_title' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'job_group_id' => 'INTEGER'

            },

            'job_title' => {

              'id' => 'INTEGER',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'job_group_id' => 'INTEGER'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_opening) }

        let(:params) { { job_openings: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/job_openings/id' do
    get 'Show job_openings' do
      tags 'job_openings'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'job_opening' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'deployment' => 'STRING',

            'position' => 'STRING',

            'occupation_type_id' => 'INTEGER',

            'location_id' => 'INTEGER',

            'income_range_id' => 'INTEGER',

            'job_description' => 'TEXT',

            'is_remote_available' => 'BOOLEAN',

            'employment_status_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'trial_period' => 'STRING',

            'working_hours' => 'STRING',

            'avg_overtime_hours' => 'STRING',

            'trial_period_conditions' => 'TEXT',

            'trial_period_conditions' => 'TEXT',

            'workplace' => 'STRING',

            'qualification' => 'TEXT',

            'benefits' => 'TEXT',

            'bonus' => 'TEXT',

            'vacation' => 'TEXT',

            'bonus' => 'TEXT',

            'promotion' => 'TEXT',

            'appeal_point' => 'TEXT',

            'passive_smoking_countermeasure_id' => 'INTEGER',

            'career_direction_id' => 'INTEGER',

            'job_title_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'vacation' => 'TEXT',

            'appeal_point' => 'TEXT',

            'job_opening_id' => 'INTEGER',

            'job_opening_valued_competencies' => 'ARRAY',

            'future_career_path' => 'STRING',

            'trending_keywords' => 'STRING',

            'business_trip_availability' => 'BOOLEAN',

            'transfers' => 'BOOLEAN',

            'publication_start_date' => 'DATE',

            'publication_end_date' => 'DATE',

            'slug' => 'STRING',

            'image' => 'FILE',

            'company' => {},

            'status' => 'ENUM',

            'pv' => 'INTEGER',

            'job_title' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'job_group_id' => 'INTEGER'

            }

          }

        }

        let(:resource) { create(:job_opening) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_openings' do
    post 'Create job_openings' do
      tags 'job_openings'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_openings: {
            type: :object,
            properties: {

              department: {
                type: :string
              },

              position: {
                type: :string
              },

              occupation_type_id: {
                type: :integer
              },

              overseas_territory_id: {
                type: :integer
              },

              income_range_id: {
                type: :integer
              },

              job_description: {
                type: :text
              },

              is_remote_available: {
                type: :boolean
              },

              employment_status_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              trial_period: {
                type: :string
              },

              working_hours: {
                type: :string
              },

              avg_overtime_hours: {
                type: :string
              },

              trial_period_conditions: {
                type: :text
              },

              workplace: {
                type: :string
              },

              qualification: {
                type: :text
              },

              benefits: {
                type: :text
              },

              vacation: {
                type: :text
              },

              bonus: {
                type: :string
              },

              vacation: {
                type: :string
              },

              vacation: {
                type: :string
              },

              bonuses: {
                type: :text
              },

              promotion: {
                type: :text
              },

              appeal_point: {
                type: :string
              },

              passive_smoking_countermeasure_id: {
                type: :integer
              },

              career_direction_id: {
                type: :integer
              },

              job_title_id: {
                type: :integer
              },

              career_path: {
                type: :string
              },

              trending_keywords: {
                type: :string
              },

              business_trip_availability: {
                type: :boolean
              },

              transfers: {
                type: :boolean
              },

              publication_start_date: {
                type: :date
              },

              publication_end_date: {
                type: :date
              },

              slug: {
                type: :string
              },

              image: {
                type: :file
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              is_recommended: {
                type: :boolean
              },

              status: {
                type: :enum
              },

              status: {
                type: :enum
              },

              status: {
                type: :enum
              },

              pv: {
                type: :integer
              },

              status: {
                type: :enum
              },

              pv: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'job_opening' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'deployment' => 'STRING',

            'position' => 'STRING',

            'occupation_type_id' => 'INTEGER',

            'location_id' => 'INTEGER',

            'income_range_id' => 'INTEGER',

            'job_description' => 'TEXT',

            'is_remote_available' => 'BOOLEAN',

            'employment_status_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'trial_period' => 'STRING',

            'working_hours' => 'STRING',

            'avg_overtime_hours' => 'STRING',

            'trial_period_conditions' => 'TEXT',

            'trial_period_conditions' => 'TEXT',

            'workplace' => 'STRING',

            'qualification' => 'TEXT',

            'benefits' => 'TEXT',

            'bonus' => 'TEXT',

            'vacation' => 'TEXT',

            'bonus' => 'TEXT',

            'promotion' => 'TEXT',

            'appeal_point' => 'TEXT',

            'passive_smoking_countermeasure_id' => 'INTEGER',

            'career_direction_id' => 'INTEGER',

            'job_title_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'vacation' => 'TEXT',

            'appeal_point' => 'TEXT',

            'job_opening_id' => 'INTEGER',

            'job_opening_valued_competencies' => 'ARRAY',

            'future_career_path' => 'STRING',

            'trending_keywords' => 'STRING',

            'business_trip_availability' => 'BOOLEAN',

            'transfers' => 'BOOLEAN',

            'publication_start_date' => 'DATE',

            'publication_end_date' => 'DATE',

            'slug' => 'STRING',

            'image' => 'FILE',

            'status' => 'ENUM',

            'pv' => 'INTEGER',

            'job_title' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'name' => 'STRING',

              'name' => 'STRING',

              'job_group_id' => 'INTEGER',

              'job_group_id' => 'INTEGER'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_opening) }

        let(:params) { { job_openings: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_openings' do
    get 'List job_openings' do
      tags 'job_openings'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_openings: {
            type: :object,
            properties: {

              department: {
                type: :string
              },

              position: {
                type: :string
              },

              occupation_type_id: {
                type: :integer
              },

              overseas_territory_id: {
                type: :integer
              },

              income_range_id: {
                type: :integer
              },

              job_description: {
                type: :text
              },

              is_remote_available: {
                type: :boolean
              },

              employment_status_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              trial_period: {
                type: :string
              },

              working_hours: {
                type: :string
              },

              avg_overtime_hours: {
                type: :string
              },

              trial_period_conditions: {
                type: :text
              },

              workplace: {
                type: :string
              },

              qualification: {
                type: :text
              },

              benefits: {
                type: :text
              },

              vacation: {
                type: :text
              },

              vacation: {
                type: :string
              },

              bonus: {
                type: :string
              },

              vacation: {
                type: :string
              },

              bonuses: {
                type: :text
              },

              promotion: {
                type: :text
              },

              appeal_point: {
                type: :string
              },

              passive_smoking_countermeasure_id: {
                type: :integer
              },

              career_direction_id: {
                type: :integer
              },

              job_title_id: {
                type: :integer
              },

              career_path: {
                type: :string
              },

              trending_keywords: {
                type: :string
              },

              business_trip_availability: {
                type: :boolean
              },

              transfers: {
                type: :boolean
              },

              publication_start_date: {
                type: :date
              },

              publication_end_date: {
                type: :date
              },

              slug: {
                type: :string
              },

              is_recommended: {
                type: :boolean
              },

              status: {
                type: :enum
              },

              pv: {
                type: :integer
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'job_openings' => 'ARRAY'

        }

        let(:resource) { create(:job_opening) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
