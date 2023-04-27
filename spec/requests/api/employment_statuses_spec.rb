require 'swagger_helper'

RSpec.describe 'EmploymentStatus', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/employment_statuses' do
    get 'List employment_statuses' do
      tags 'employment_statuses'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          employment_statuses: {
            type: :object,
            properties: {

              name: {
                type: :string
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

          'employment_statuses' => 'ARRAY'

        }

        let(:resource) { create(:employment_status) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
