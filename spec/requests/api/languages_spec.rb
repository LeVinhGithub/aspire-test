require 'swagger_helper'

RSpec.describe 'Language', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/languages' do
    get 'List languages' do
      tags 'languages'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          languages: {
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

          'languages' => 'ARRAY'

        }

        let(:resource) { create(:language) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
