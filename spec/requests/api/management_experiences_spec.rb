require 'swagger_helper'

RSpec.describe 'ManagementExperience', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/management_experiences' do
    get 'List management_experiences' do
      tags 'management_experiences'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          management_experiences: {
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

          'management_experiences' => 'ARRAY'

        }

        let(:resource) { create(:management_experience) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
