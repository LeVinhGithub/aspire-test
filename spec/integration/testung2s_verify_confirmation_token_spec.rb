# frozen_string_literal: true

require 'swagger_helper'

describe 'Verify Confirmation API' do
  path '/api/testung2s_verify_confirmation_token' do
    post 'Verify confirmation token' do
      tags 'Verify confirmation token'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {
          confirmation_token: { type: :string, example: 'Hq/uTtQL9aca52AkOQ==' }
        }
      }

      response '200', 'request sent' do
        examples 'application/json' => {
          success: true
        }
        let(:testung2) { create(:testung2, email: 'testung2@jitera.com') }
        before do
          testung2.send_confirmation_instructions
        end

        let(:token) { testung2.confirmation_token }
        let(:params) do
          {
            confirmation_token: token
          }
        end

        run_test! do |response|
          expect(response.status).to be(200)
        end
      end
    end
  end
end
