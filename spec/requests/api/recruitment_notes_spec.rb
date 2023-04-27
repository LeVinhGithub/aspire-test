require 'swagger_helper'

RSpec.describe 'RecruitmentNote', type: :request do
  # jitera-hook-for-rswag-example

  path '/api/recruitment_notes/id' do
    put 'Update  recruitment_notes' do
      tags 'recruitment_notes'
      consumes 'application/json'

      parameter name: id, in: :path, type: :string, description: 'Url Params'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          recruitment_notes: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              note: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'update' do
        examples 'application/json' => {

          'recruitment_note' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'note' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:recruitment_note) }

        let(:params) { { recruitment_notes: resource.attributes.to_hash } }

        let(:id) { resource.id }
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/recruitment_notes' do
    post 'Create recruitment_notes' do
      tags 'recruitment_notes'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          recruitment_notes: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              note: {
                type: :string
              }

            }
          }

        }
      }
      response '200', 'create' do
        examples 'application/json' => {

          'recruitment_note' => {

            'id' => 'INTEGER',

            'created_at' => 'DATETIME',

            'updated_at' => 'DATETIME',

            'applicant_id' => 'INTEGER',

            'company_id' => 'INTEGER',

            'note' => 'STRING'

          },

          'error_object' => {}

        }

        let(:resource) { build(:recruitment_note) }

        let(:params) { { recruitment_notes: resource.attributes.to_hash } }

        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end

  path '/api/recruitment_notes' do
    get 'List recruitment_notes' do
      tags 'recruitment_notes'
      consumes 'application/json'

      parameter name: :params, in: :body, schema: {
        type: :object,
        properties: {

          recruitment_notes: {
            type: :object,
            properties: {

              applicant_id: {
                type: :integer
              },

              company_id: {
                type: :integer
              },

              note: {
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

          'recruitment_notes' => 'ARRAY'

        }

        let(:resource) { create(:recruitment_note) }
        let(:params) {}
        run_test! do |response|
          expect(response.status).to eq(200)
        end
      end
    end
  end
end
