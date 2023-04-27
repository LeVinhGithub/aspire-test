require 'swagger_helper'

RSpec.describe 'PassiveSmokingCountermeasure', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/passive_smoking_countermeasures' do
    get 'List passive_smoking_countermeasures' do
      tags 'passive_smoking_countermeasures'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          passive_smoking_countermeasures: {
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

          'passive_smoking_countermeasures' => 'ARRAY'

        }

        let(:resource) { create(:passive_smoking_countermeasure) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
