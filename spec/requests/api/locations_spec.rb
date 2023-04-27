require 'swagger_helper'

RSpec.describe 'Location', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/locations' do
    get 'List locations' do
      tags 'locations'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          locations: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

              is_prefecture: {
                type: :boolean
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

          'locations' => 'ARRAY'

        }

        let(:resource) { create(:location) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
