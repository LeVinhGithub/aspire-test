require 'swagger_helper'

RSpec.describe 'ValuedCompetency', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/valued_competencies' do
    get 'List valued_competencies' do
      tags 'valued_competencies'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          valued_competencies: {
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

          'valued_competencies' => 'ARRAY'

        }

        let(:resource) { create(:valued_competency) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
