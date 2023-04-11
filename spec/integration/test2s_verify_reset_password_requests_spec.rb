# frozen_string_literal: true

require 'swagger_helper'

describe 'Verify reset password request API' do
  path '/api/test2s_verify_reset_password_requests' do
    post 'Verify reset password request' do
      tags 'Verify reset password request'
      consumes 'application/json'

      parameter name: :owner_fields, in: :body, schema: {
        type: :object,
        properties: {
          reset_token: { type: :string, example: 'dummy_reset_token' },
          password: { type: :string, example: 'xqqz0voxFP5rdkMiDw==' },
          password_confirmation: { type: :string, example: 'gh4n3gGWF1IupOnkvQ==' }
        }
      }

      response '200', 'request sent' do
        let(:test2) { Test2.find_by(email: 'test2@jitera.com') || create(:test2, email: 'test2@jitera.com') }
        let(:token) { test2.generate_reset_password_token }

        examples 'application/json' => {
          success: true
        }

        let(:owner_fields) do
          {
            reset_token: token,
            password: 'oad/zzRtkunB53cdyQ==',
            password_confirmation: 'setQHaZOiZAc4ELCSw=='
          }
        end

        run_test! do |response|
          expect(response.status).to be(200)
        end
      end
    end
  end
end
