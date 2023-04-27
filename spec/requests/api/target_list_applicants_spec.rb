require 'swagger_helper'

RSpec.describe 'TargetListApplicant', type: :request do
  # jitera-hook-for-rswag-example
  path '/api/target_list_applicants/id' do
    delete 'Destroy target_list_applicants' do
      tags 'target_list_applicants'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {}
      }
      response '200', 'delete' do
        examples 'application/json' => {}

        let(:resource) { create(:target_list_applicant) }
        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/target_list_applicants' do
    post 'Create target_list_applicants' do
      tags 'target_list_applicants'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          target_list_applicants: {
            type: :object,
            properties: {

              target_list_id: {
                type: :integer
              },

              applicant_id: {
                type: :integer
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'target_list_applicant' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'target_list_id' => 'INTEGER',

            'target_list' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'title' => 'STRING',

              'company_id' => 'INTEGER'

            },

            'applicant_id' => 'INTEGER',

            'applicant' => {

              'id' => 'INTEGER',

              'created_at' => 'DATETIME',

              'updated_at' => 'DATETIME',

              'full_name' => 'STRING',

              'furigana' => 'STRING',

              'phone_number' => 'STRING',

              'birthdate' => 'DATE',

              'location_id' => 'INTEGER',

              'address' => 'STRING',

              'income_range_id' => 'INTEGER',

              'availability' => 'ENUM',

              'resume_file' => 'FILE',

              'description' => 'STRING',

              'management_experience_id' => 'INTEGER',

              'email' => 'STRING',

              'gender' => 'ENUM',

              'is_onboarded' => 'BOOLEAN',

              'notes' => 'STRING',

              'current_company_name' => 'STRING',

              'current_company_department' => 'STRING',

              'current_company_position' => 'STRING',

              'confirmation_email_resent_count' => 'INTEGER',

              'number_of_companies' => 'INTEGER',

              'is_suspended' => 'BOOLEAN'

            }

          },

          'error_object' => {}

        }

        let(:resource) { build(:target_list_applicant) }

        let(:params) { { target_list_applicants: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
