require 'swagger_helper'

RSpec.describe 'CareerDirectionGroup', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/career_direction_groups' do
    get 'List career_direction_groups' do
      tags 'career_direction_groups'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          career_direction_groups: {
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
          },

          career_directions: {
            type: :object,
            properties: {

              career_direction_group_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'filter' do
        examples 'application/json' => {

          'total_pages' => 'INTEGER',

          'career_direction_groups' => 'ARRAY'

        }

        let(:resource) { create(:career_direction_group) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
