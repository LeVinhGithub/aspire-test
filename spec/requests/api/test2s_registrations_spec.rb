require 'swagger_helper'

RSpec.describe 'api/test2s_registrations', type: :request do
  before do
    create(:test2)
  end

  # jitera-hook-for-rswag-example

  path '/api/test2s_registrations' do
    post 'Create test2s' do
      tags 'authentication'
      consumes 'application/json'
      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          test2: {
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

              user_id: {
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

        let(:resource) { build(:test2) }

        let(:params) { { test2: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
