require 'swagger_helper'

RSpec.describe 'OccupationType', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/occupation_types' do
    get 'List occupation_types' do
      tags 'occupation_types'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          occupation_types: {
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

          'occupation_types' => 'ARRAY'

        }

        let(:resource) { create(:occupation_type) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
