require 'swagger_helper'

RSpec.describe 'SchoolType', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/school_types' do
    get 'List school_types' do
      tags 'school_types'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          school_types: {
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

          'school_types' => 'ARRAY'

        }

        let(:resource) { create(:school_type) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
