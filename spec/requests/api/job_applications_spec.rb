require 'swagger_helper'

RSpec.describe 'JobApplication', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/job_applications/id' do
    delete 'Destroy job_applications' do
      tags 'job_applications'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:job_application) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_applications/id' do
    put 'Update  job_applications' do
      tags 'job_applications'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_applications: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              job_opening_id: {
                type: :integer
              },

              status: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'job_application' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'status' => 'ENUM'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_application) }

        let(:params) { { job_applications: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
  path '/api/job_applications/id' do
    get 'Show job_applications' do
      tags 'job_applications'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'show' do
        examples 'application/json' => {

          'job_application' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'status' => 'ENUM'

          }

        }

        let(:resource) { create(:job_application) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_applications' do
    post 'Create job_applications' do
      tags 'job_applications'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_applications: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              job_opening_id: {
                type: :integer
              },

              status: {
                type: :enum
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'job_application' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'job_opening_id' => 'INTEGER',

            'status' => 'ENUM'

          },

          'error_object' => {}

        }

        let(:resource) { build(:job_application) }

        let(:params) { { job_applications: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/job_applications' do
    get 'List job_applications' do
      tags 'job_applications'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_applications: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              job_opening_id: {
                type: :integer
              },

              status: {
                type: :enum
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

          'job_applications' => 'ARRAY'

        }

        let(:resource) { create(:job_application) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
