require 'swagger_helper'

RSpec.describe 'IncomeRange', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/income_ranges' do
    get 'List income_ranges' do
      tags 'income_ranges'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          income_ranges: {
            type: :object,
            properties: {

              name: {
                type: :string
              },

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

          'income_ranges' => 'ARRAY'

        }

        let(:resource) { create(:income_range) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
