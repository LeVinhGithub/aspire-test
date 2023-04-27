require 'swagger_helper'

RSpec.describe 'ApplicantSchool', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/applicant_schools/id' do
    delete 'Destroy applicant_schools' do
      tags 'applicant_schools'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:applicant_school) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_schools/id' do
    put 'Update  applicant_schools' do
      tags 'applicant_schools'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_schools: {
            type: :object,
            properties: {

              graduation_date: {
                type: :date
              },

              name: {
                type: :string
              },

              degree: {
                type: :string
              },

              major: {
                type: :string
              },

              school_type_id: {
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

          'applicant_school' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'graduation_date' => 'DATE',

            'name' => 'STRING',

            'degree' => 'STRING',

            'major' => 'STRING',

            'school_type_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_school) }

        let(:params) { { applicant_schools: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_schools' do
    post 'Create applicant_schools' do
      tags 'applicant_schools'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_schools: {
            type: :object,
            properties: {

              graduation_date: {
                type: :date
              },

              name: {
                type: :string
              },

              degree: {
                type: :string
              },

              major: {
                type: :string
              },

              school_type_id: {
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

          'applicant_school' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'graduation_date' => 'DATE',

            'name' => 'STRING',

            'degree' => 'STRING',

            'major' => 'STRING',

            'school_type_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_school) }

        let(:params) { { applicant_schools: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_schools' do
    get 'List applicant_schools' do
      tags 'applicant_schools'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_schools: {
            type: :object,
            properties: {

              graduation_date: {
                type: :date
              },

              name: {
                type: :string
              },

              degree: {
                type: :string
              },

              major: {
                type: :string
              },

              school_type_id: {
                type: :integer
              },

              applicant_id: {
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

          'applicant_schools' => 'ARRAY'

        }

        let(:resource) { create(:applicant_school) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
