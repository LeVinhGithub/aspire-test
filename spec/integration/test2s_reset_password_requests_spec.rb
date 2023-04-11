# frozen_string_literal: true

require 'swagger_helper'

describe 'Reset password request API' do
  path '/api/test2s_reset_password_requests' do
    post 'Reset password request' do
      tags 'Reset password request'
      consumes 'application/json'

      parameter name: :owner_fields, in: :body, schema: {
        type: :object,
        properties: {
          email: { type: :string, example: 'test2@jitera.com' }
        }
      }

      response '204', 'request sent' do
        before { Test2.find_by(email: 'test2@jitera.com') || create(:test2, email: 'test2@jitera.com') }

        examples 'application/json' => {
        }

        let(:owner_fields) do
          {
            email: 'test2@jitera.com'
          }
        end

        run_test! do |response|
          expect(response.status).to be(204)
        end
      end
    end
  end
end
