require 'swagger_helper'

RSpec.describe 'ApplicantIndustry', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/applicant_industries/id' do
    delete 'Destroy applicant_industries' do
      tags 'applicant_industries'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:applicant_industry) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_industries/id' do
    put 'Update  applicant_industries' do
      tags 'applicant_industries'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_industries: {
            type: :object,
            properties: {

              industry_id: {
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

          'applicant_industry' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'industry_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_industry) }

        let(:params) { { applicant_industries: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_industries' do
    post 'Create applicant_industries' do
      tags 'applicant_industries'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_industries: {
            type: :object,
            properties: {

              industry_id: {
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

          'applicant_industry' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'industry_id' => 'INTEGER',

            'applicant_id' => 'INTEGER'

          },

          'error_object' => {}

        }

        let(:resource) { build(:applicant_industry) }

        let(:params) { { applicant_industries: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/applicant_industries' do
    get 'List applicant_industries' do
      tags 'applicant_industries'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          applicant_industries: {
            type: :object,
            properties: {

              industry_id: {
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

          'applicant_industries' => 'ARRAY'

        }

        let(:resource) { create(:applicant_industry) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
