require 'swagger_helper'

RSpec.describe 'IndustryGroup', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/industry_groups' do
    get 'List industry_groups' do
      tags 'industry_groups'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          industry_groups: {
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

          'industry_groups' => 'ARRAY'

        }

        let(:resource) { create(:industry_group) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
