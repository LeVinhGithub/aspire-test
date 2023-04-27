require 'swagger_helper'

RSpec.describe 'JobExperience', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/job_experiences/id' do
    delete 'Destroy job_experiences' do
      tags 'job_experiences'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:job_experience) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_experiences/id' do
    put 'Update  job_experiences' do
      tags 'job_experiences'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_experiences: {
            type: :object,
            properties: {

              company_name: {
                type: :string
              },

              start_date: {
                type: :date
              },

              end_date: {
                type: :date
              },

              applicant_id: {
                type: :integer
              },

              job_title_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'job_experience' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_name' => 'STRING',

            'start_date' => 'DATE',

            'end_date' => 'DATE',

            'applicant_id' => 'INTEGER',

            'job_title_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_experience) }

        let(:params) { { job_experiences: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_experiences' do
    post 'Create job_experiences' do
      tags 'job_experiences'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_experiences: {
            type: :object,
            properties: {

              company_name: {
                type: :string
              },

              start_date: {
                type: :date
              },

              end_date: {
                type: :date
              },

              applicant_id: {
                type: :integer
              },

              job_title_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'job_experience' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'company_name' => 'STRING',

            'start_date' => 'DATE',

            'end_date' => 'DATE',

            'applicant_id' => 'INTEGER',

            'job_title_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_experience) }

        let(:params) { { job_experiences: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_experiences' do
    get 'List job_experiences' do
      tags 'job_experiences'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_experiences: {
            type: :object,
            properties: {

              company_name: {
                type: :string
              },

              start_date: {
                type: :date
              },

              end_date: {
                type: :date
              },

              applicant_id: {
                type: :integer
              },

              job_title_id: {
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

          'job_experiences' => 'ARRAY'

        }

        let(:resource) { create(:job_experience) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
