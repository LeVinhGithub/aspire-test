require 'swagger_helper'

RSpec.describe 'JobGroup', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/job_groups' do
    get 'List job_groups' do
      tags 'job_groups'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          job_groups: {
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

          'job_groups' => 'ARRAY'

        }

        let(:resource) { create(:job_group) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
