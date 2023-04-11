require 'swagger_helper'

RSpec.describe 'api/testung2s_registrations', type: :request do
  before do
    create(:testung2)
  end

  # jitera-hook-for-rswag-example

  path '/api/testung2s_registrations' do
    post 'Create testung2s' do
      tags 'authentication'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          testung2: {
            type: :object,
            properties: {
              password: {
                type: :string,
                example: 'string'
              },

              password_confirmation: {
                type: :string,
                example: 'string'
              },

              testing1_id: {
                type: :foreign_key,
                example: 'foreign_key'
              },

              email: {
                type: :string,
                example: 'string'
              }

            }
          }
        }
      }
      response '200', 'auth_registration' do
        examples 'application/json' => {
          'id' => 'string'

        }

        let(:resource) { build(:testung2) }

        let(:params) { { testung2: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
