# frozen_string_literal: true

require 'swagger_helper'

describe 'Verify reset password request API' do
  path '/api/testung2s_verify_reset_password_requests' do
    post 'Verify reset password request' do
      tags 'Verify reset password request'
      consumes 'application/json'

      parameter name: :owner_fields, in: :body, schema: {
        type: :object,
        properties: {
          reset_token: { type: :string, example: 'dummy_reset_token' },
          password: { type: :string, example: 'F8Gxnl9KxJG595E8mA==' },
          password_confirmation: { type: :string, example: 'JTKRd78VTQJH4MN8JA==' }
        }
      }

      response '200', 'request sent' do
        let(:testung2) do
          Testung2.find_by(email: 'testung2@jitera.com') || create(:testung2, email: 'testung2@jitera.com')
        end
        let(:token) { testung2.generate_reset_password_token }

        examples 'application/json' => {
          success: true
        }

        let(:owner_fields) do
          {
            reset_token: token,
            password: 'quYekGwmLnHjou0VWA==',
            password_confirmation: '+cDGmk3S5TiL4Xu8yw=='
          }
        end

        run_test! do |response|
          expect(response.status).to be(200)
        end
      end
    end
  end
end
