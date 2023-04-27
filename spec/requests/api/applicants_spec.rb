require 'swagger_helper'

RSpec.describe 'Applicant', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/applicants/id' do
    delete 'Destroy applicants' do
      tags 'applicants'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:applicant) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicants/id' do
    put 'Update  applicants' do
      tags 'applicants'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicants: {
            type: :object,
            properties: {

              full_name: {
                type: :string
              },

              furigana: {
                type: :text
              },

              phone_number: {
                type: :string
              },

              dob: {
                type: :date
              },

              overseas_territory_id: {
                type: :integer
              },

              address: {
                type: :string
              },

              income_range_id: {
                type: :integer
              },

              availability: {
                type: :enum
              },

              resume_file: {
                type: :file
              },

              description: {
                type: :text
              },

              management_experience_id: {
                type: :integer
              },

              email: {
                type: :string
              },

              gender: {
                type: :enum
              },

              is_onboarded: {
                type: :boolean
              },

              notes: {
                type: :string
              },

              current_company_name: {
                type: :string
              },

              current_company_department: {
                type: :string
              },

              current_company_position: {
                type: :string
              },

              confirmation_email_resent_count: {
                type: :integer
              },

              number_of_companies: {
                type: :integer
              },

              is_suspended: {
                type: :boolean
              },

              desired_info: {
                type: :text
              },

              management_experience_years: {
                type: :enum
              }

            }
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'applicant' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'full_name' => 'STRING',

            'furigana' => 'STRING',

            'phone_number' => 'STRING',

            'birthdate' => 'DATE',

            'applicant_languages' => 'ARRAY',

            'address' => 'STRING',

            'income_range_id' => 'INTEGER',

            'availability' => 'ENUM',

            'applicant_schools' => 'ARRAY',

            'resume_file' => 'FILE',

            'description' => 'STRING',

            'management_experience_id' => 'INTEGER',

            'description' => 'STRING',

            'applicant_industries' => 'ARRAY',

            'messages' => 'ARRAY',

            'location_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'email' => 'STRING',

            'furigana' => 'STRING',

            'gender' => 'ENUM',

            'address' => 'STRING',

            'resume_file' => 'FILE',

            'job_experiences' => 'ARRAY',

            'restrictions' => 'ARRAY'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant) }

        let(:params) { { applicants: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/applicants/id' do
    get 'Show applicants' do
      tags 'applicants'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'applicant' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'full_name' => 'STRING',

            'furigana' => 'STRING',

            'phone_number' => 'STRING',

            'birthdate' => 'DATE',

            'applicant_languages' => 'ARRAY',

            'address' => 'STRING',

            'income_range_id' => 'INTEGER',

            'availability' => 'ENUM',

            'applicant_schools' => 'ARRAY',

            'resume_file' => 'FILE',

            'description' => 'STRING',

            'management_experience_id' => 'INTEGER',

            'description' => 'STRING',

            'applicant_industries' => 'ARRAY',

            'messages' => 'ARRAY',

            'location_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'email' => 'STRING',

            'furigana' => 'STRING',

            'gender' => 'ENUM',

            'address' => 'STRING',

            'resume_file' => 'FILE',

            'job_experiences' => 'ARRAY',

            'restrictions' => 'ARRAY',

            'target_lists' => 'ARRAY'

          }

        }

        let(:resource) { create(:applicant) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicants' do
    post 'Create applicants' do
      tags 'applicants'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicants: {
            type: :object,
            properties: {

              full_name: {
                type: :string
              },

              furigana: {
                type: :text
              },

              phone_number: {
                type: :string
              },

              dob: {
                type: :date
              },

              overseas_territory_id: {
                type: :integer
              },

              address: {
                type: :string
              },

              income_range_id: {
                type: :integer
              },

              availability: {
                type: :enum
              },

              resume_file: {
                type: :file
              },

              description: {
                type: :text
              },

              management_experience_id: {
                type: :integer
              },

              email: {
                type: :string
              },

              gender: {
                type: :enum
              },

              is_onboarded: {
                type: :boolean
              },

              notes: {
                type: :string
              },

              current_company_name: {
                type: :string
              },

              current_company_department: {
                type: :string
              },

              current_company_position: {
                type: :string
              },

              confirmation_email_resent_count: {
                type: :integer
              },

              number_of_companies: {
                type: :integer
              },

              is_suspended: {
                type: :boolean
              },

              desired_info: {
                type: :text
              },

              management_experience_years: {
                type: :enum
              }

            }
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'applicant' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'full_name' => 'STRING',

            'furigana' => 'STRING',

            'phone_number' => 'STRING',

            'birthdate' => 'DATE',

            'applicant_languages' => 'ARRAY',

            'address' => 'STRING',

            'income_range_id' => 'INTEGER',

            'availability' => 'ENUM',

            'applicant_schools' => 'ARRAY',

            'resume_file' => 'FILE',

            'description' => 'STRING',

            'management_experience_id' => 'INTEGER',

            'description' => 'STRING',

            'applicant_industries' => 'ARRAY',

            'messages' => 'ARRAY',

            'location_id' => 'INTEGER',

            'job_applications' => 'ARRAY',

            'job_opening_favorites' => 'ARRAY',

            'email' => 'STRING',

            'furigana' => 'STRING',

            'gender' => 'ENUM',

            'address' => 'STRING',

            'resume_file' => 'FILE',

            'job_experiences' => 'ARRAY',

            'restrictions' => 'ARRAY'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant) }

        let(:params) { { applicants: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicants' do
    get 'List applicants' do
      tags 'applicants'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicants: {
            type: :object,
            properties: {

              full_name: {
                type: :string
              },

              furigana: {
                type: :text
              },

              phone_number: {
                type: :string
              },

              dob: {
                type: :date
              },

              overseas_territory_id: {
                type: :integer
              },

              address: {
                type: :string
              },

              income_range_id: {
                type: :integer
              },

              availability: {
                type: :enum
              },

              resume_file: {
                type: :string
              },

              description: {
                type: :text
              },

              management_experience_id: {
                type: :integer
              },

              email: {
                type: :string
              },

              gender: {
                type: :enum
              },

              is_onboarded: {
                type: :boolean
              },

              notes: {
                type: :string
              },

              current_company_name: {
                type: :string
              },

              current_company_department: {
                type: :string
              },

              current_company_position: {
                type: :string
              },

              confirmation_email_resent_count: {
                type: :integer
              },

              number_of_companies: {
                type: :integer
              },

              is_suspended: {
                type: :boolean
              },

              desired_info: {
                type: :text
              },

              management_experience_years: {
                type: :enum
              }

            }
          },

          pagination_page: {
            type: :page_number
          },

          pagination_limit: {
            type: :page_size
          },

          restrictions: {
            type: :object,
            properties: {

              company_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'applicants' => 'ARRAY'

        }

        let(:resource) { create(:applicant) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
